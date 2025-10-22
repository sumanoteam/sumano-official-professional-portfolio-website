# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable the contact form to send emails to `sumanoteam@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (since we're using Gmail)
4. Connect your Gmail account (`sumanoteam@gmail.com`)
5. Note down the **Service ID** (starts with `service_`)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

### Template Settings:
- **Template Name**: Contact Form Submission
- **Subject**: New Contact Form Submission from {{from_name}}

### Template Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #234E70; border-bottom: 2px solid #1ABC9C; padding-bottom: 10px;">
            New Contact Form Submission
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #234E70; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Phone:</strong> {{phone}}</p>
            <p><strong>Country:</strong> {{country}}</p>
            <p><strong>Company:</strong> {{company}}</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #234E70; margin-top: 0;">Project Details</h3>
            <p><strong>Subject:</strong> {{subject}}</p>
            <p><strong>Budget:</strong> {{budget}}</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #234E70; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This message was sent from the Sumano Tech Solution contact form.</p>
            <p>Reply directly to: {{from_email}}</p>
        </div>
    </div>
</body>
</html>
```

4. Save the template and note down the **Template ID** (starts with `template_`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Configure Environment Variables

1. Copy `env.example` to `.env`:
   ```bash
   cp env.example .env
   ```

2. Update `.env` with your EmailJS credentials:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=service_your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=template_your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Step 6: Test the Setup

1. Restart your development server:
   ```bash
   npm start
   ```

2. Go to the contact page and submit a test form
3. Check your Gmail inbox for the email

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration missing" error**
   - Check that all environment variables are set correctly
   - Restart the development server after updating `.env`

2. **"Failed to send message via EmailJS" error**
   - Verify the Service ID, Template ID, and Public Key are correct
   - Check that the Gmail service is properly connected in EmailJS dashboard

3. **Emails not received**
   - Check spam folder
   - Verify the Gmail account is correct
   - Check EmailJS dashboard for error logs

### EmailJS Limits (Free Plan):
- 200 emails per month
- 2 email services
- 2 email templates

## Alternative: Formspree Setup

If you prefer Formspree over EmailJS:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Get the form endpoint URL
5. Add to `.env`:
   ```env
   REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

The contact form will automatically try Formspree if EmailJS fails.

