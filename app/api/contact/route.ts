import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message, locale, url } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare Slack message
    const slackMessage = {
      text: `New Contact Form Submission - Milton Global`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📧 Milton Global - New Contact Form Submission'
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Name:*\n${name}`
            },
            {
              type: 'mrkdwn',
              text: `*Email:*\n${email}`
            },
            {
              type: 'mrkdwn',
              text: `*Company:*\n${company || 'Not provided'}`
            },
            {
              type: 'mrkdwn',
              text: `*Subject:*\n${subject}`
            }
          ]
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n${message}`
          }
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Submitted at: ${new Date().toLocaleString()}`
            }
          ]
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Language:*\n${locale ? locale.toUpperCase() : 'Not specified'}`
            },
            {
              type: 'mrkdwn',
              text: `*Source URL:*\n${url || 'Not specified'}`
            }
          ]
        }
      ]
    };

    // Send to Slack webhook
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (slackWebhookUrl) {
      try {
        const slackResponse = await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(slackMessage),
        });

        if (!slackResponse.ok) {
          console.error('Slack webhook failed:', await slackResponse.text());
        }
      } catch (slackError) {
        console.error('Error sending to Slack:', slackError);
        // Don't fail the request if Slack fails
      }
    } else {
      console.warn('SLACK_WEBHOOK_URL not configured');
    }

    // Also send email notification (optional)
    const emailData = {
      to: 'info@miltonglobal.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `
    };

    // You can integrate with your email service here (SendGrid, Resend, etc.)
    // For now, we'll just log it
    console.log('Email notification data:', emailData);

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
