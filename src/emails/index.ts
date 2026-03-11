import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) => {
  await resend.emails.send({
    from: "Bookr <onboarding@resend.dev>",
    to,
    subject,
    html,
  });
};

export * from "./templates/verification.email";
export * from "./templates/password-reset.email";
