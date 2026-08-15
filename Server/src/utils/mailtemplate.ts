import transporter from "../config/nodemailerConfig";

export const sendPasswordResetEmail = async ( email: string, otp: string ) => {
  try {
    await transporter.sendMail({
      from: `"Examix" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Your Examix Password Reset OTP",

      text: `
You requested to reset your Examix password.

Your verification code is:

${otp}

This OTP will expire in 5 minutes.

If you did not request a password reset, you can safely ignore this email.

— Examix Team
      `,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 500px;
            margin: 0 auto;
            padding: 30px;
            background: #0B0F0D;
            color: #ffffff;
            border-radius: 12px;
          "
        >

          <h2 style="margin-bottom: 10px;">
            Reset your Examix password
          </h2>

          <p style="color: #9ca3af;">
            You requested to reset your Examix password.
          </p>

          <p>
            Enter the verification code below:
          </p>

          <div
            style="
              margin: 25px 0;
              padding: 15px;
              text-align: center;
              background: #111815;
              border: 1px solid rgba(34, 197, 94, 0.3);
              border-radius: 10px;
            "
          >
            <span
              style="
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 8px;
                color: #22c55e;
              "
            >
              ${otp}
            </span>
          </div>

          <p style="color: #9ca3af;">
            This OTP will expire in <strong>5 minutes</strong>.
          </p>

          <p style="color: #9ca3af;">
            If you did not request a password reset,
            you can safely ignore this email.
          </p>

          <p style="margin-top: 30px;">
            — Examix Team
          </p>

        </div>
      `,
    });

    console.log("Password reset OTP email sent successfully");

  } catch (error) {
    console.error(
      "Failed to send password reset email:",
      error
    );

    throw error;
  }
};