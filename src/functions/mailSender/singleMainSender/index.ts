import nodemailer from "nodemailer";
import { ModelResponse } from "../../../types";
import { Error } from "../../../shared";
import { DEFAULT_EMAIL, DEFAULT_EMAIL_PASSWORD } from "../../../config";

const transnporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: DEFAULT_EMAIL as string,
    pass: DEFAULT_EMAIL_PASSWORD as string,
  },
});

export const singleMailSender = (
  To: string = "",
  Subject: string = "",
  Message: string = "",
): ModelResponse => {
  try {
    if (!To || !Subject || !Message) {
      return { data: false, message: "Invalid email parameters" };
    }
    transnporter.sendMail({
      from: DEFAULT_EMAIL,
      to: To,
      subject: Subject,
      html: Message,
    });
    return { data: true, message: "Email sent" };
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("MailSender-Fn [singleMailSender]:", error.message);
    logging.log("----------------------------------------");
    return { data: false, message: error.message || Error.m001 };
  }
};

/*async () => {
  singleMailSender("ryanmarkmj@gmail.com", "test", "test");
};*/
