import transporter from "../config/nodemailerConfig";

export const sendPasswordResetEmail = async (
  email: string,
  resetUrl: string
) => {
  try {
    await transporter.sendMail({
      from: `"Examix" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Reset your Examix password",

      text: `
You requested to reset your Examix password.

Click the link below to reset your password:

${resetUrl}

This link will expire in 15 minutes.

If you did not request a password reset, you can safely ignore this email.
      `,

      html: `
        <h2>Reset your Examix password</h2>

        <p>You requested to reset your Examix password.</p>

        <p>Click the button below to create a new password:</p>

        <a
          href="${resetUrl}"
          style="
            display:inline-block;
            padding:12px 20px;
            background:#22c55e;
            color:#000;
            text-decoration:none;
            border-radius:8px;
            font-weight:bold;
          "
        >
          Reset Password
        </a>

        <p>This link will expire in 15 minutes.</p>

        <p>
          If you did not request a password reset,
          you can safely ignore this email.
        </p>

        <p>— Examix Team</p>
      `,
    });

    console.log("Password reset email sent successfully");
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    throw error;
  }
};