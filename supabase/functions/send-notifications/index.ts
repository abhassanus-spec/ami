import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    const { data: { booking, type } } = await req.json();

    // Send email notification
    const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('SENDGRID_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: booking.email }],
        }],
        from: { email: 'noreply@aesthetik-praxis-essen.de' },
        subject: `Booking ${type === 'confirmation' ? 'Confirmed' : 'Updated'}`,
        content: [{
          type: 'text/html',
          value: `Your booking for ${booking.service_id} on ${booking.booking_date} at ${booking.booking_time} has been ${type === 'confirmation' ? 'confirmed' : 'updated'}.`,
        }],
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email notification');
    }

    // Send SMS notification using Twilio
    const twilioResponse = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${Deno.env.get('TWILIO_ACCOUNT_SID')}/Messages.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${Deno.env.get('TWILIO_ACCOUNT_SID')}:${Deno.env.get('TWILIO_AUTH_TOKEN')}`)}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: booking.phone,
        From: Deno.env.get('TWILIO_PHONE_NUMBER') ?? '',
        Body: `Your booking for ${booking.service_id} on ${booking.booking_date} at ${booking.booking_time} has been ${type === 'confirmation' ? 'confirmed' : 'updated'}.`,
      }),
    });

    if (!twilioResponse.ok) {
      throw new Error('Failed to send SMS notification');
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