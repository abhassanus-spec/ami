const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const clinicEmail = "info@aesthetik-praxis-essen.de";
    const phoneNumber = "+4917641454381";

    // Email content for clinic
    const emailContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #166534;">Neue Kontaktanfrage</h2>
        <p><strong>Von:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
        <h3 style="color: #166534;">Nachricht:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 12px;">Diese E-Mail wurde automatisch über das Kontaktformular der Website gesendet.</p>
      </div>
    `;

    // SMS message content
    const smsMessage = `Neue Kontaktanfrage von ${name} (${email}). Betreff: ${subject}`;

    // Send email using SendGrid
    const sendGridApiKey = Deno.env.get("SENDGRID_API_KEY");
    
    if (sendGridApiKey) {
      const emailResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${sendGridApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: clinicEmail }],
            },
          ],
          from: { email: "noreply@aesthetik-praxis-essen.de", name: "Aljeroudy Ästhetikpraxis" },
          reply_to: { email: email, name: name },
          subject: `Kontaktanfrage: ${subject}`,
          content: [
            {
              type: "text/html",
              value: emailContent,
            },
          ],
        }),
      });

      if (!emailResponse.ok) {
        console.error("Failed to send email:", await emailResponse.text());
      }
    }

    // Try to send SMS if Twilio is configured
    const twilioAccountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const twilioAuthToken = Deno.env.get("TWILIO_AUTH_TOKEN");
    const twilioPhoneNumber = Deno.env.get("TWILIO_PHONE_NUMBER");

    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber) {
      try {
        const twilioResponse = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
          {
            method: "POST",
            headers: {
              "Authorization": `Basic ${btoa(`${twilioAccountSid}:${twilioAuthToken}`)}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              To: phoneNumber,
              From: twilioPhoneNumber,
              Body: smsMessage,
            }),
          }
        );

        if (!twilioResponse.ok) {
          console.error("Failed to send SMS:", await twilioResponse.text());
        }
      } catch (error) {
        console.error("Error sending SMS:", error);
      }
    }

    // Try to send WhatsApp message if Twilio WhatsApp is configured
    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber) {
      try {
        const whatsappResponse = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
          {
            method: "POST",
            headers: {
              "Authorization": `Basic ${btoa(`${twilioAccountSid}:${twilioAuthToken}`)}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              To: `whatsapp:${phoneNumber}`,
              From: `whatsapp:${twilioPhoneNumber}`,
              Body: smsMessage,
            }),
          }
        );

        if (!whatsappResponse.ok) {
          console.error("Failed to send WhatsApp:", await whatsappResponse.text());
        }
      } catch (error) {
        console.error("Error sending WhatsApp:", error);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Nachricht erfolgreich gesendet" }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});