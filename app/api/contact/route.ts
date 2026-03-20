import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, intent, context } = await request.json();

    if (!name || !email || !context) {
      return NextResponse.json(
        { error: "Name and context are required" },
        { status: 400 }
      );
    }

    // TODO: Replace with your preferred email service
    // Option A: Web3Forms (free) — add your access key
    // Option B: Resend API
    // Option C: Forward to email via any SMTP service
    //
    // For now, log the submission and return success.
    // In production, integrate with Web3Forms like this:
    //
    // const res = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     access_key: process.env.WEB3FORMS_KEY,
    //     name,
    //     intent,
    //     message: context,
    //     subject: `[Divings] ${intent} from ${name}`,
    //   }),
    // });

    console.log("Contact form submission:", { name, email, intent, context });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
