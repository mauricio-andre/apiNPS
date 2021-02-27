import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';

class MailServices {

  private client: Transporter;

  constructor() {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      }
    });

    this.client = transporter;
  }

  async execute(to: string, subject: string, variables: object, path: string) {
    const template = fs.readFileSync(path, 'utf8');
    const mailTemplateParse = handlebars.compile(template);
    const html = mailTemplateParse(variables);

    await this.client.sendMail({
      to,
      subject,
      html,
      from: "NPS <noreplay@nps.com.br>",
    });
  }
}

export default new MailServices();
