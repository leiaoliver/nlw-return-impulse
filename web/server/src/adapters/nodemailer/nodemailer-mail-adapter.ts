import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "58aebf55f6119a",
    pass: "8de04f3c1c05bb"
  }
});

export class NodeMailderAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Léia Oliveira <leiaoliver388@gmail.com>",
      subject,
      html: body
    });
  }
}
