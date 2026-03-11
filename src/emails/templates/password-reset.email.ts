export const passwordResetEmail = (name: string, token: string) => ({
  subject: "Reset your Bookr password",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset your password</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
  </style>
</head>
<body style="margin:0;padding:0;background-color:#0f0f0f;font-family:'DM Sans',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f0f0f;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#e8ff47;border-radius:10px;padding:8px 20px;">
                    <span style="font-family:'DM Serif Display',serif;font-size:22px;color:#0f0f0f;letter-spacing:-0.5px;">bookr</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#1a1a1a;border-radius:16px;overflow:hidden;">

              <!-- Top accent bar — red for urgency/security -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(90deg,#ff4747,#ff8547);height:4px;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>

              <!-- Content -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:48px 48px 40px;">

                    <!-- Icon -->
                    <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                      <tr>
                        <td style="background-color:#1f1f1f;border:1px solid #2a2a2a;border-radius:12px;padding:16px;width:48px;height:48px;text-align:center;">
                          <span style="font-size:28px;">🔑</span>
                        </td>
                      </tr>
                    </table>

                    <!-- Heading -->
                    <p style="margin:0 0 8px;font-family:'DM Serif Display',serif;font-size:28px;color:#ffffff;line-height:1.2;">
                      Reset your password
                    </p>
                    <p style="margin:0 0 28px;font-size:16px;color:#888888;line-height:1.6;">
                      Hey ${name}, we received a request to reset your Bookr password. Click below to choose a new one.
                    </p>

                    <!-- Divider -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                      <tr>
                        <td style="border-top:1px solid #2a2a2a;font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                    </table>

                    <!-- CTA Button -->
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="border-radius:10px;background:linear-gradient(90deg,#ff4747,#ff8547);">
                          <a href="${process.env.CLIENT_URL}/reset-password?token=${token}"
                             style="display:inline-block;padding:14px 32px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:-0.2px;">
                            Reset my password →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Expiry warning -->
                    <table cellpadding="0" cellspacing="0" style="margin-top:28px;width:100%;">
                      <tr>
                        <td style="background-color:#1f1f1f;border:1px solid #2a2a2a;border-radius:10px;padding:14px 18px;">
                          <p style="margin:0;font-size:13px;color:#888888;line-height:1.5;">
                            ⚠️ &nbsp;This link expires in <span style="color:#ff6b6b;font-weight:600;">15 minutes</span>. If you didn't request a password reset, please secure your account immediately.
                          </p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:32px;">
              <p style="margin:0;font-size:12px;color:#3a3a3a;">
                © ${new Date().getFullYear()} Bookr · All rights reserved
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
});
