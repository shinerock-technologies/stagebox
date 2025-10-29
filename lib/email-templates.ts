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
  return {
    subject: "Thanks for your interest!",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${data.name}!</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; margin-bottom: 20px;">
              We've received your submission and are excited to learn more about your use case.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="margin-top: 0; color: #667eea;">Your Submission Details:</h3>
              <p style="margin: 10px 0;"><strong>Position:</strong> ${data.position}</p>
              <p style="margin: 10px 0;"><strong>Use Case:</strong></p>
              <p style="margin: 10px 0; padding: 10px; background: #f5f5f5; border-radius: 4px;">${data.useCase}</p>
            </div>
            
            <p style="font-size: 16px; margin: 20px 0;">
              Our team will review your information and get back to you shortly. We typically respond within 24-48 hours.
            </p>
            
            <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px;">
                <strong>💡 In the meantime:</strong> Feel free to explore our resources or reach out if you have any questions.
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
            
            <p style="color: #666; font-size: 14px; text-align: center; margin: 0;">
              If you have any immediate questions, feel free to reply to this email.
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            <p style="margin: 5px 0;">© ${new Date().getFullYear()} All rights reserved.</p>
            <p style="margin: 5px 0;">This email was sent because you submitted a form on our website.</p>
          </div>
        </body>
      </html>
    `,
  };
};
