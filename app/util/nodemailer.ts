import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

const FROM_EMAIL = process.env.FROM_EMAIL || "";
const TO_EMAIL = process.env.TO_EMAIL || "";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.porkbun.com",
  port: 465,
  secure: true,
  auth: {
    user: FROM_EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

type Props = {
  emailBody: string;
  emailSubject: string;
};

export function sendEmail({ emailBody, emailSubject }: Props) {
  const options: MailOptions = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: emailSubject,
    cc: FROM_EMAIL,
    html: emailBody,
    text: emailBody,
  };

  return new Promise<number>((res, rej) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.error(err);
        return rej(err);
      }
      res(200);
    });
  });
}
