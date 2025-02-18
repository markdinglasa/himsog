export const PasswordGenerateEmail = (Password: string) => {
  return `
  <div style="width:auto; text-align: center; background-color: #f9f9f9; padding: 20px; place-items:center;justify-content:center;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); place-items:center">
      <img src="https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/474456044_1140404574103378_8144413350256722937_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGYBXuG71pwmBg8cisDl8iBru36JeiHVrSu7fol6IdWtOan6clTqJTLU-TJ0GbUnwTg_3mpRrip9ql9lgmSCMNE&_nc_ohc=YmkUm7nIg44Q7kNvgFFiEcZ&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=AoX9t6BN3sUylhiwPmcfxEO&oh=00_AYDzvrv9ORgEME-bAwrOY49gVhNXaFY6U-RibhDMPRX5-Q&oe=679676A0" alt="Innosoft Logo" style="max-width: 80%; height: auto; margin-bottom: 20px;" />
      <div style="width:100%;" >
        <p style="font-size: 14px; color: #333333; margin: 0 0 10px; text-align:left;">Dear Customer,</p>
        <p style="font-size: 14px; color: #333333; margin: 0 0 10px;text-align:left;">This is your auto generated password: ${Password}</p>
        <p style="font-size: 14px; color: #333333; margin: 0 0 20px;text-align:left;">Thank you for registering!.</p>
        <p style="font-size: 14px; color: #333333; margin: 0; text-align: left;">
          Best regards,<br />
          <strong style="color:#14263E">Cebu Innosoft Solution Services, Inc.</strong>
        </p>

        <p style="margin-top:30px;font-size: 12px; color: #666666; text-align:justify;">
        This is an automatically generated email. Please do not reply to this message, as this mailbox is not monitored. If you need assistance, contact us through the following informations below.
        </p>
        <div style="margin-top: 20px; border-top: 1px solid #cccccc; padding-top: 10px; text-align: center;">
          <p style="font-size: 12px; color: #666666; margin: 0;">Cebu Innosoft Solution Services, Inc.</p>
          <p style="font-size: 12px; color: #666666; margin: 0;">Nutech JIY Tower, Katipunan St., Cebu City, 6000</p>
           <p style="font-size: 12px; color: #666666; margin: 0;">innosoft.inquiry@gmail.com</p>
          <p style="font-size: 12px; color: #666666; margin: 0;">+63 927-864-5960</p>
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
