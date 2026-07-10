export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'your-actual-email@gmail.com', // ⚠️ Enter your actual Gmail address here
        subject: `New Portfolio Message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } else {
      const errorData = await response.json();
      return res.status(500).json({ error: errorData.message || 'Failed to send email' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

