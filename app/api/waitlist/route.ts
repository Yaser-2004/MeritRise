import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userType } = body;

        // ── Normalize fields across both form shapes ──
        // Student form sends: fullName, email, phone, program
        // Institution form sends: institution, contact, email, phone, designation
        const isInstitution = userType === "institution";

        const name = isInstitution
            ? body.contact            // contact person's name
            : body.fullName;

        const orgOrProgram = isInstitution
            ? body.institution        // institution name
            : body.program;           // degree/program chosen

        const email = body.email;
        const phone = body.phone;
        const designation = body.designation; // only present for institutions

        // Basic validation — works for both shapes now
        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // ── Email sent TO YOU, notifying of a new signup ──
        await transporter.sendMail({
            from: `"MeritRise Waitlist" <${process.env.SMTP_USER}>`,
            to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
            subject: `New ${isInstitution ? "Institution" : "Student"} Waitlist Signup`,
            html: `
                <h2>New Waitlist Submission</h2>
                <p><strong>Type:</strong> ${userType}</p>
                <p><strong>${isInstitution ? "Contact Person" : "Full Name"}:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>${isInstitution ? "Institution Name" : "Program"}:</strong> ${orgOrProgram || "-"}</p>
                ${isInstitution ? `<p><strong>Designation:</strong> ${designation || "-"}</p>` : ""}
            `,
        });

        // ── Confirmation email sent TO the user ──
        await transporter.sendMail({
            from: `"MeritRise.ai" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "You're on the MeritRise.ai Waitlist!",
            html: `
                <h2>Thanks for joining, ${name}!</h2>
                <p>We've received your ${isInstitution ? "institution registration" : "waitlist signup"}.
                We'll be in touch soon with next steps.</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Waitlist submission error:", error);
        return NextResponse.json(
            { error: "Failed to process submission" },
            { status: 500 }
        );
    }
}