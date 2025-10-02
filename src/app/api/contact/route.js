import nodemailer from "nodemailer";

export async function POST(req){
  const { name, email, message } = await req.json();
  try{
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || "Info@get1above.com";

    if (host && user && pass){
      const transporter = nodemailer.createTransport({ host, port, auth: { user, pass } });
      await transporter.sendMail({ from: user, to, subject: `Website contact from ${name}`, text: `From: ${name} <${email}>\n\n${message}` });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch(e){
    return new Response(JSON.stringify({ ok: false }), { status: 200 });
  }
}
