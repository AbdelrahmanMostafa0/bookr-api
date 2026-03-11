export const verificationEmail = (name: string, token: string) => ({
  subject: "Verify your Bookr account",
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify your email</title>
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

              <!-- Top accent bar -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#e8ff47;height:4px;font-size:0;line-height:0;">&nbsp;</td>
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
                          <span style="font-size:28px;">✉️</span>
                        </td>
                      </tr>
                    </table>

                    <!-- Heading -->
                    <p style="margin:0 0 8px;font-family:'DM Serif Display',serif;font-size:28px;color:#ffffff;line-height:1.2;">
                      Confirm your email
                    </p>
                    <p style="margin:0 0 28px;font-size:16px;color:#888888;line-height:1.6;">
                      Hey ${name}, you're almost in. Just one click to activate your Bookr account.
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
                        <td style="border-radius:10px;background-color:#e8ff47;">
                          <a href="${process.env.CLIENT_URL}/verify-email?token=${token}"
                             style="display:inline-block;padding:14px 32px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:600;color:#0f0f0f;text-decoration:none;letter-spacing:-0.2px;">
                            Verify my email →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Expiry note -->
                    <p style="margin:24px 0 0;font-size:13px;color:#555555;line-height:1.5;">
                      This link expires in <span style="color:#888888;">24 hours</span>. If you didn't create a Bookr account, you can safely ignore this email.
                    </p>

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
