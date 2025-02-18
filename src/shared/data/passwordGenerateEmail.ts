export const PasswordGenerateEmail = (
  Name: string = "John Doe",
  Password: string,
) => {
  return `
  <div style="width:auto; text-align: center; background-color: #f9f9f9; padding: 20px; place-items:center;justify-content:center;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); place-items:center">
      <div style="width:100%;" >
        <p style="font-size: 14px; color: #333333; margin: 0 0 10px; text-align:left;">Dear ${Name},</p>
        <p style="font-size: 14px; color: #333333; margin: 0 0 10px;text-align:left;">This is your auto generated password: ${Password}</p>
        <p style="font-size: 14px; color: #333333; margin: 0 0 20px;text-align:left;">Thank you for registering!.</p>
        <p style="font-size: 14px; color: #333333; margin: 0; text-align: left;">
          Best regards,<br />
          <strong style="color:#14263E">HIMSOG Team</strong>
        </p>

        <p style="margin-top:30px;font-size: 12px; color: #666666; text-align:justify;">
        This is an automatically generated email. Please do not reply to this message, as this mailbox is not monitored. If you need assistance, contact us through the following informations below.
        </p>
        <div style="margin-top: 20px; border-top: 1px solid #cccccc; padding-top: 10px; text-align: center;">
          <p style="font-size: 12px; color: #666666; margin: 0;">HIMSOG</p>
          <p style="font-size: 12px; color: #666666; margin: 0;"> 155A Sanciangko St., Cebu City, 6000</p>
           <p style="font-size: 12px; color: #666666; margin: 0;">himsog.team@gmail.com</p>
          <p style="font-size: 12px; color: #666666; margin: 0;">+63 000-000-0000</p>
        </div>
      </div>
    </div>
    <br>
    <div style="padding-top: 8px; text-align: center; width: 500px;margin:0 auto;">
     <p style="font-size: 9px; color: #666666; margin: 0;text-align:left"> Legal Disclaimer :</p>
      <p style="font-size: 9px; color: #666666; margin: 0; text-align:justify;">
        This email including any attachments transmitted with it may contain legally privileged, confidential, or proprietary information. If you are not the intended recipient or the employee responsible for delivery of this message and its attachments to the intended recipient/s, YOU ARE HEREBY NOTIFIED that any use, distribution, dissemination, or copying of this email or any of the information contained herein is strictly prohibited. If you have received this message in error, please immediately notify the sender and delete this email message from your system.
      </p>
    </div>
  </div>
  `;
};
