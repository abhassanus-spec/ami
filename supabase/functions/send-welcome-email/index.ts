import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email, voucherCode, language } = await req.json();

    const subjects = {
      de: '10€ Willkommensgutschein für Ihre erste Behandlung',
      en: '€10 Welcome Voucher for Your First Treatment',
      ar: 'قسيمة ترحيب بقيمة 10 يورو لعلاجك الأول',
      tr: 'İlk Tedaviniz için 10€ Hoş Geldiniz Kuponu',
    };

    const messages = {
      de: `Vielen Dank für Ihr Interesse an Aljeroudy Aesthetics! Hier ist Ihr 10€ Gutscheincode: ${voucherCode}`,
      en: `Thank you for your interest in Aljeroudy Aesthetics! Here's your €10 voucher code: ${voucherCode}`,
      ar: `شكراً لاهتمامك بمركز الجرودي للتجميل! إليك رمز قسيمة الخصم بقيمة 10 يورو: ${voucherCode}`,
      tr: `Aljeroudy Estetik'e gösterdiğiniz ilgi için teşekkür ederiz! 10€ indirim kodunuz: ${voucherCode}`,
    };

    // Send email using SendGrid
    const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email }],
        }],
        from: { email: 'noreply@aesthetik-praxis-essen.de' },
        subject: subjects[language] || subjects.de,
        content: [{
          type: 'text/html',
          value: messages[language] || messages.de,
        }],
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send welcome email');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});