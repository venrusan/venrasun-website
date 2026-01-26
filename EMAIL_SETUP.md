# Email Setup Guide - VenRaSun

This guide explains how to configure email sending functionality for the contact form using EmailJS.

## Overview

The website uses **EmailJS** to send contact form emails directly from the browser. This is a simple, cost-effective solution that doesn't require a backend server.

## Quick Setup Steps

### 1. Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a **FREE** account
3. Verify your email

### 2. Create an Email Service

1. Log in to EmailJS dashboard
2. Go to **Email Services** (left sidebar)
3. Click **Add Service**
4. Choose **Gmail** (or your preferred email provider)
5. Follow the authentication steps
6. **Save the Service ID** (format: `service_xxxxxxxxxxxxxx`)

### 3. Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Fill in the details:

**Template Name:** `contact_form` (or any name)

**Template Content:**
```
From: {{from_name}} <{{from_email}}>
To: contact@venrasun.com
Subject: New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Click **Test It** to verify it works
5. **Save the Template ID** (format: `template_xxxxxxxxxxxxxx`)

### 4. Get Your Public Key

1. Go to **Account** (top right)
2. Under **Public Key**, copy your key (format: `xxxxxxxxxxxxxxxxxxxx`)

### 5. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Replace with your actual values!**

### 6. Test the Form

1. Start the dev server: `npm run dev` or `bun run dev`
2. Navigate to homepage
3. Scroll to "Contact Us" section
4. Fill the form and click "Send Message"
5. Check your email for the submission

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Email not sending | Check if all 3 environment variables are set correctly |
| Getting 401 error | Public Key is likely wrong - verify in EmailJS Account page |
| Template issues | Use exact variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}` |
| Need to restart | After changing `.env`, restart the dev server |

## Features Implemented

✅ **Real-time validation** - Name, email, message fields validated  
✅ **Error messages** - Shows which field has an issue  
✅ **Loading state** - Button shows "Sending..." during submission  
✅ **Success notification** - Toast message confirms email sent  
✅ **Form reset** - Fields clear after successful submission  
✅ **Contact info** - Email and social links in footer

## Contact Information

- **Email:** contact@venrasun.com
- **LinkedIn:** https://www.linkedin.com/company/educonnecthub/?viewAsMember=true
- **Instagram:** https://www.instagram.com/venrasun_/

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- Common issues: Check browser console (F12) for error messages
- Still stuck? Contact support@emailjs.com
