export async function onRequestPost(context) {
  try {
    const request = context.request;
    const env = context.env;
    const data = await request.json();

    const { name, email, company, details } = data;

    const resendApiKey = env.RESEND_API_KEY;
    const fromEmail = env.FROM_EMAIL || 'noreply@logicautomation.com'; // fallback if needed
    const toEmail = env.TO_EMAIL || 'contact@logicautomation.com'; // fallback if needed

    if (!resendApiKey) {
      return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        reply_to: email,
        to: toEmail,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Details:</strong><br/>${details.replace(/\n/g, '<br/>')}</p>
        `
      })
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return new Response(JSON.stringify({ error: "Failed to send email", details: errorText }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
