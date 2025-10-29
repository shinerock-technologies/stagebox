// Email template for admin notification
export const getAdminNotificationEmail = (data: {
  name: string;
  email: string;
  position: string;
  useCase: string;
  source?: string;
}) => {
  return {
    subject: `New Lead: ${data.name}`,
    html: `
      <h2>New Lead Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Position:</strong> ${data.position}</p>
      <p><strong>Use Case:</strong></p>
      <p>${data.useCase}</p>
      <p><strong>Source:</strong> ${data.source || "Direct"}</p>
      <hr />
      <p style="color: #666; font-size: 12px;">Submitted at ${new Date().toLocaleString()}</p>
    `,
  };
};

// Email template for user confirmation
export const getUserConfirmationEmail = (data: {
  name: string;
  position: string;
  useCase: string;
}) => {
  // Extract first name from full name
  const firstName = data.name.split(" ")[0];

  return {
    subject: "Welcome to the StageBox Beta Program",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #e2e8f0; max-width: 600px; margin: 0 auto; padding: 0; background-color: #0a0a0a;">
          <!-- Header with Logo -->
          <div style="background-color: rgb(20, 20, 20); padding: 30px 20px; border-bottom: 1px solid #334155;">
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="vertical-align: middle; padding-right: 8px;">
                  <div style="width: 8px; height: 8px; border-radius: 50%; background-color: #22c55e;"></div>
                </td>
                <td style="vertical-align: middle;">
                  <span style="font-size: 24px; font-weight: bold; color: #ffffff; line-height: 1;">StageBox</span>
                </td>
              </tr>
            </table>
          </div>
          
          <!-- Main Content -->
          <div style="background-color: rgb(20, 20, 20); padding: 40px 30px;">
            <h1 style="color: #ffffff; font-size: 28px; margin: 0 0 20px 0; font-weight: 600;">
              Thanks for your interest, ${firstName}!
            </h1>
            
            <p style="font-size: 16px; color: #cbd5e1; margin-bottom: 24px; line-height: 1.6;">
              We've received your beta program application and are excited to learn more about how you plan to use StageBox.
            </p>
            
            <!-- Submission Details Box -->
            <div style="background-color: #1e293b; padding: 24px; border-radius: 8px; margin: 24px 0; border-left: 4px solid #22c55e;">
              <h3 style="margin: 0 0 16px 0; color: #22c55e; font-size: 18px; font-weight: 600;">Your Submission Details</h3>
              <p style="margin: 12px 0; color: #e2e8f0;">
                <strong style="color: #ffffff;">Position:</strong> ${data.position}
              </p>
              <p style="margin: 12px 0 8px 0; color: #ffffff; font-weight: 600;">Use Case:</p>
              <p style="margin: 0; padding: 16px; background-color: rgb(20, 20, 20); border-radius: 6px; color: #cbd5e1; line-height: 1.6;">
                ${data.useCase}
              </p>
            </div>
            
            <!-- What's Next -->
            <div style="background-color: #1e293b; padding: 20px; border-radius: 8px; margin: 24px 0; border: 1px solid #334155;">
              <p style="margin: 0; font-size: 15px; color: #cbd5e1;">
                <strong style="color: #22c55e;">⚡ What's Next:</strong> Our team will review your application and reach out shortly with next steps for the beta program.
              </p>
            </div>
            
            <!-- Why StageBox -->
            <div style="margin: 32px 0;">
              <h3 style="color: #ffffff; font-size: 18px; margin: 0 0 16px 0;">Why StageBox?</h3>
              <p style="color: #94a3b8; font-size: 14px; line-height: 1.6; margin: 0;">
                Professional stage timing that works offline. Sync your timer, cue light, and pedal with zero latency — no cloud, no lag, no dropped connections.
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #334155; margin: 32px 0;">
            
            <p style="color: #64748b; font-size: 14px; text-align: center; margin: 0;">
              Questions? Just reply to this email — we're here to help.
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: rgb(20, 20, 20); padding: 24px 30px; border-top: 1px solid #334155; text-align: center;">
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px;">
              © ${new Date().getFullYear()} StageBox Beta Program | StageBox by ShineRock Technologies LLC
            </p>
            <p style="margin: 0; color: #475569; font-size: 11px;">
              This email was sent because you applied for the StageBox beta program.
            </p>
          </div>
        </body>
      </html>
    `,
  };
};
