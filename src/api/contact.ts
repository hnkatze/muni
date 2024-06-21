import nodemailer from "nodemailer";

export default async function handlerMail(
  conta: ContactData
): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log(conta.name, conta.email, conta.message, conta.subject);

  const mailOptions = {
    from: conta.email,
    to: process.env.EMAIL_RECEIVER,
    subject: conta.subject,
    text: `
      Nombre: ${conta.name}
      Email: ${conta.email}
      Mensaje: ${conta.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
