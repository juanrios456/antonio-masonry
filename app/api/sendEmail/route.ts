import { EmailTemplate, EmailInfo } from '../../../email/example';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, details, project, phone }:EmailInfo = await request.json();

  try {
    await resend.sendEmail({
      from: 'Website <email@capitalstonellc.com>' || '',
      to: ['antoniomasonry123@gmail.com'],
      subject: 'New contact form submission',
      react: EmailTemplate({ name, email, details, project, phone })
    });
    return NextResponse.json({
      status: 'Ok'
    }, {
      status: 200
    })
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({
      error: 'Internal server error.'
    }, {
      status: 500
    })
  }
}