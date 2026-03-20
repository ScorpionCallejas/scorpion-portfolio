import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Datos incompletos" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Verificar conexión primero
    await transporter.verify();
    console.log("Conexión SMTP verificada");

    await transporter.sendMail({
      from: `"Contacto Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email enviado correctamente");

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando email:", error);
    return new Response(
      JSON.stringify({ 
        error: "Error al enviar mensaje",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500 }
    );
  }
}