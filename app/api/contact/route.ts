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
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nuevo mensaje de contacto</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0a0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header con gradiente -->
          <tr>
            <td style="background:linear-gradient(135deg,#3b82f6,#a855f7);border-radius:16px 16px 0 0;padding:40px 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.3em;color:rgba(255,255,255,0.7);text-transform:uppercase;">Portafolio</p>
                    <h1 style="margin:0;font-size:28px;font-weight:700;color:#ffffff;line-height:1.2;">scorpion<span style="color:rgba(255,255,255,0.5);">.cyco.tech</span></h1>
                  </td>
                  <td align="right" valign="middle">
                    <div style="width:48px;height:48px;background:rgba(255,255,255,0.15);border-radius:12px;display:inline-flex;align-items:center;justify-content:center;font-size:22px;line-height:48px;text-align:center;">✉</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Barra separadora -->
          <tr>
            <td style="height:2px;background:linear-gradient(90deg,#3b82f6,#a855f7,#ec4899);"></td>
          </tr>

          <!-- Cuerpo principal -->
          <tr>
            <td style="background-color:#111111;border:1px solid rgba(255,255,255,0.08);border-top:none;border-radius:0 0 16px 16px;padding:40px;">

              <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.2em;color:#6b7280;text-transform:uppercase;">Nuevo mensaje recibido</p>
              <h2 style="margin:0 0 32px 0;font-size:22px;font-weight:700;color:#ffffff;">Alguien quiere hablar contigo</h2>

              <!-- Tarjeta Nombre -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background-color:#0a0a0a;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 24px;">
                    <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.15em;color:#6b7280;text-transform:uppercase;">Nombre</p>
                    <p style="margin:0;font-size:17px;font-weight:600;color:#ffffff;">${name}</p>
                  </td>
                </tr>
              </table>

              <!-- Tarjeta Email -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background-color:#0a0a0a;border:1px solid rgba(59,130,246,0.3);border-radius:12px;padding:20px 24px;">
                    <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.15em;color:#6b7280;text-transform:uppercase;">Correo electrónico</p>
                    <a href="mailto:${email}" style="margin:0;font-size:17px;font-weight:600;color:#60a5fa;text-decoration:none;">${email}</a>
                  </td>
                </tr>
              </table>

              <!-- Tarjeta Mensaje -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background-color:#0a0a0a;border:1px solid rgba(168,85,247,0.3);border-radius:12px;padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-size:11px;letter-spacing:0.15em;color:#6b7280;text-transform:uppercase;">Mensaje</p>
                    <p style="margin:0;font-size:15px;color:#d1d5db;line-height:1.7;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Botón responder -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Tu mensaje en scorpion.cyco.tech" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#a855f7);color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 36px;border-radius:10px;letter-spacing:0.02em;">Responder mensaje →</a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.07);margin:0 0 24px 0;" />

              <!-- Footer info -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:16px;background:rgba(59,130,246,0.05);border:1px solid rgba(59,130,246,0.1);border-radius:10px;">
                    <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6;">
                      Este correo fue generado automáticamente desde el formulario de contacto de
                      <a href="https://scorpion.cyco.tech" style="color:#60a5fa;text-decoration:none;">scorpion.cyco.tech</a>.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:24px 0 8px;">
              <p style="margin:0;font-size:12px;color:#374151;">scorpion.cyco.tech · Hecho con Next.js &amp; Hostinger</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
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