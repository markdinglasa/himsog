export const PasswordGenerateEmail = (
  Name: string = "John Doe",
  Password: string,
) => {
  return `
  <div style="width:auto; text-align: center; background-color: #f9f9f9; padding: 20px; place-items:center;justify-content:center;">
    <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); place-items:center">
      <div style="margin-bottom:1rem">
      <svg width="123" height="32" viewBox="0 0 123 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M43.024 9.2H44.776V26H43.024V9.2ZM32.512 26H30.736V9.2H32.512V26ZM43.192 18.248H32.32V16.688H43.192V18.248ZM49.8994 26V13.4H51.6034V26H49.8994ZM50.7634 10.616C50.4114 10.616 50.1154 10.496 49.8754 10.256C49.6354 10.016 49.5154 9.728 49.5154 9.392C49.5154 9.056 49.6354 8.776 49.8754 8.552C50.1154 8.312 50.4114 8.192 50.7634 8.192C51.1154 8.192 51.4114 8.304 51.6514 8.528C51.8914 8.752 52.0114 9.032 52.0114 9.368C52.0114 9.72 51.8914 10.016 51.6514 10.256C51.4274 10.496 51.1314 10.616 50.7634 10.616ZM72.0888 13.28C73.1128 13.28 74.0008 13.48 74.7528 13.88C75.5208 14.264 76.1128 14.856 76.5288 15.656C76.9608 16.456 77.1768 17.464 77.1768 18.68V26H75.4728V18.848C75.4728 17.52 75.1528 16.52 74.5128 15.848C73.8888 15.16 73.0008 14.816 71.8488 14.816C70.9848 14.816 70.2328 15 69.5928 15.368C68.9688 15.72 68.4808 16.24 68.1288 16.928C67.7928 17.6 67.6248 18.416 67.6248 19.376V26H65.9208V18.848C65.9208 17.52 65.6008 16.52 64.9608 15.848C64.3208 15.16 63.4248 14.816 62.2728 14.816C61.4248 14.816 60.6808 15 60.0408 15.368C59.4008 15.72 58.9048 16.24 58.5528 16.928C58.2168 17.6 58.0488 18.416 58.0488 19.376V26H56.3448V13.4H57.9768V16.808L57.7128 16.208C58.0968 15.296 58.7128 14.584 59.5608 14.072C60.4248 13.544 61.4408 13.28 62.6088 13.28C63.8408 13.28 64.8888 13.592 65.7528 14.216C66.6168 14.824 67.1768 15.744 67.4328 16.976L66.7608 16.712C67.1288 15.688 67.7768 14.864 68.7048 14.24C69.6488 13.6 70.7768 13.28 72.0888 13.28ZM85.1819 26.12C84.1419 26.12 83.1579 25.976 82.2299 25.688C81.3019 25.384 80.5739 25.008 80.0459 24.56L80.8139 23.216C81.3259 23.6 81.9819 23.936 82.7819 24.224C83.5819 24.496 84.4219 24.632 85.3019 24.632C86.5019 24.632 87.3659 24.448 87.8939 24.08C88.4219 23.696 88.6859 23.192 88.6859 22.568C88.6859 22.104 88.5339 21.744 88.2299 21.488C87.9419 21.216 87.5579 21.016 87.0779 20.888C86.5979 20.744 86.0619 20.624 85.4699 20.528C84.8779 20.432 84.2859 20.32 83.6939 20.192C83.1179 20.064 82.5899 19.88 82.1099 19.64C81.6299 19.384 81.2379 19.04 80.9339 18.608C80.6459 18.176 80.5019 17.6 80.5019 16.88C80.5019 16.192 80.6939 15.576 81.0779 15.032C81.4619 14.488 82.0219 14.064 82.7579 13.76C83.5099 13.44 84.4219 13.28 85.4939 13.28C86.3099 13.28 87.1259 13.392 87.9419 13.616C88.7579 13.824 89.4299 14.104 89.9579 14.456L89.2139 15.824C88.6539 15.44 88.0539 15.168 87.4139 15.008C86.7739 14.832 86.1339 14.744 85.4939 14.744C84.3579 14.744 83.5179 14.944 82.9739 15.344C82.4459 15.728 82.1819 16.224 82.1819 16.832C82.1819 17.312 82.3259 17.688 82.6139 17.96C82.9179 18.232 83.3099 18.448 83.7899 18.608C84.2859 18.752 84.8219 18.872 85.3979 18.968C85.9899 19.064 86.5739 19.184 87.1499 19.328C87.7419 19.456 88.2779 19.64 88.7579 19.88C89.2539 20.104 89.6459 20.432 89.9339 20.864C90.2379 21.28 90.3899 21.832 90.3899 22.52C90.3899 23.256 90.1819 23.896 89.7659 24.44C89.3659 24.968 88.7739 25.384 87.9899 25.688C87.2219 25.976 86.2859 26.12 85.1819 26.12ZM98.6526 26.12C97.4366 26.12 96.3406 25.848 95.3646 25.304C94.4046 24.744 93.6446 23.984 93.0846 23.024C92.5246 22.048 92.2446 20.936 92.2446 19.688C92.2446 18.424 92.5246 17.312 93.0846 16.352C93.6446 15.392 94.4046 14.64 95.3646 14.096C96.3246 13.552 97.4206 13.28 98.6526 13.28C99.9006 13.28 101.005 13.552 101.965 14.096C102.941 14.64 103.701 15.392 104.245 16.352C104.805 17.312 105.085 18.424 105.085 19.688C105.085 20.936 104.805 22.048 104.245 23.024C103.701 23.984 102.941 24.744 101.965 25.304C100.989 25.848 99.8846 26.12 98.6526 26.12ZM98.6526 24.608C99.5646 24.608 100.373 24.408 101.077 24.008C101.781 23.592 102.333 23.016 102.733 22.28C103.149 21.528 103.357 20.664 103.357 19.688C103.357 18.696 103.149 17.832 102.733 17.096C102.333 16.36 101.781 15.792 101.077 15.392C100.373 14.976 99.5726 14.768 98.6766 14.768C97.7806 14.768 96.9806 14.976 96.2766 15.392C95.5726 15.792 95.0126 16.36 94.5966 17.096C94.1806 17.832 93.9726 18.696 93.9726 19.688C93.9726 20.664 94.1806 21.528 94.5966 22.28C95.0126 23.016 95.5726 23.592 96.2766 24.008C96.9806 24.408 97.7726 24.608 98.6526 24.608ZM113.94 30.776C112.788 30.776 111.684 30.608 110.628 30.272C109.572 29.936 108.716 29.456 108.06 28.832L108.924 27.536C109.516 28.064 110.244 28.48 111.108 28.784C111.988 29.104 112.916 29.264 113.892 29.264C115.492 29.264 116.668 28.888 117.42 28.136C118.172 27.4 118.548 26.248 118.548 24.68V21.536L118.788 19.376L118.62 17.216V13.4H120.252V24.464C120.252 26.64 119.716 28.232 118.644 29.24C117.588 30.264 116.02 30.776 113.94 30.776ZM113.628 25.52C112.428 25.52 111.348 25.264 110.388 24.752C109.428 24.224 108.668 23.496 108.108 22.568C107.564 21.64 107.292 20.576 107.292 19.376C107.292 18.176 107.564 17.12 108.108 16.208C108.668 15.28 109.428 14.56 110.388 14.048C111.348 13.536 112.428 13.28 113.628 13.28C114.748 13.28 115.756 13.512 116.652 13.976C117.548 14.44 118.26 15.128 118.788 16.04C119.316 16.952 119.58 18.064 119.58 19.376C119.58 20.688 119.316 21.8 118.788 22.712C118.26 23.624 117.548 24.32 116.652 24.8C115.756 25.28 114.748 25.52 113.628 25.52ZM113.796 24.008C114.724 24.008 115.548 23.816 116.268 23.432C116.988 23.032 117.556 22.488 117.972 21.8C118.388 21.096 118.596 20.288 118.596 19.376C118.596 18.464 118.388 17.664 117.972 16.976C117.556 16.288 116.988 15.752 116.268 15.368C115.548 14.968 114.724 14.768 113.796 14.768C112.884 14.768 112.06 14.968 111.324 15.368C110.604 15.752 110.036 16.288 109.62 16.976C109.22 17.664 109.02 18.464 109.02 19.376C109.02 20.288 109.22 21.096 109.62 21.8C110.036 22.488 110.604 23.032 111.324 23.432C112.06 23.816 112.884 24.008 113.796 24.008Z" fill="#10B981"/>
        <rect width="28" height="28" fill="url(#pattern0_326_781)"/>
        <defs>
        <pattern id="pattern0_326_781" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_326_781" transform="scale(0.01)"/>
        </pattern>
        <image id="image0_326_781" width="100" height="100" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
      </div>
      <div style="width:100%;" >
        <p style="font-size: 14px; color: #333333; margin: 0 0 10px; text-align:left;">Dear ${Name},</p>
        <p style="font-size: 14px; color: #333333; margin: 0 0 10px;text-align:left;">This is your auto generated password: ${Password}</p>
        <p style="font-size: 14px; color: #333333; margin: 0 0 20px;text-align:left;">Thank you for registering!.</p>
        <p style="font-size: 14px; color: #333333; margin: 0; text-align: left;">
          Best regards,<br />
          <strong style="color:#2CB578">HIMSOG</strong>
        </p>

        <p style="margin-top:30px;font-size: 12px; color: #666666; text-align:justify;">
        This is an automatically generated email. Please do not reply to this message, as this mailbox is not monitored. If you need assistance, contact us through the following informations below.
        </p>
        <div style="margin-top: 20px; border-top: 1px solid #cccccc; padding-top: 10px; text-align: center;">
          <p style="font-size: 12px; color: #666666; margin: 0;">HIMSOG</p>
          <p style="font-size: 12px; color: #666666; margin: 0;">Sanciangko St., Cebu City, 6000</p>
           <p style="font-size: 12px; color: #666666; margin: 0;">himsoggroup@gmail.com</p>
          <p style="font-size: 12px; color: #666666; margin: 0;">+63 920-514-8696 | +63 948-391-7361 </p>
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
