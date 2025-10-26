import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, locale, url } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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
      text: `New Newsletter Subscription - Milton Global`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📧 Milton Global - New Newsletter Subscription'
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Email:*\n${email}`
            },
            {
              type: 'mrkdwn',
              text: `*Language:*\n${locale ? locale.toUpperCase() : 'Not specified'}`
            },
            {
              type: 'mrkdwn',
              text: `*Source URL:*\n${url || 'Not specified'}`
            },
            {
              type: 'mrkdwn',
              text: `*Subscription Date:*\n${new Date().toLocaleString()}`
            }
          ]
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `🎉 Someone just subscribed to the Milton Global newsletter!`
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

    // Here you could also save to a database or email service
    // For now, we'll just log it
    console.log('Newsletter subscription:', { email, locale, url });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
