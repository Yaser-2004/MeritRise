import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_API_URL =
    "https://admin.learningshala.com/data/api/cms/join-waitlist";

// Store this in your .env.local — never commit it, never send it to the client.
// JOIN_WAITLIST_API_KEY=ls_ext_forms_a8f3c2e91b4d7e6f0a2c5b8d1e4f7a0
const API_KEY = process.env.CMS_FORMS_API_KEY;

interface WaitlistRequestBody {
    fullName: string;
    email: string;
    phone: string;
    program: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: WaitlistRequestBody = await req.json();

        const { fullName, email, phone, program } = body;
        if (!fullName || !email || !phone || !program) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        if (!API_KEY) {
            console.error("JOIN_WAITLIST_API_KEY is not set in environment.");
            return NextResponse.json(
                { error: "Server misconfiguration. Please contact support." },
                { status: 500 }
            );
        }

        // Map our internal field names -> the external API's expected shape
        const payload = {
            full_name: fullName,
            email,
            phone,
            certification_program: program,
        };

        const externalRes = await fetch(EXTERNAL_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": API_KEY,
            },
            body: JSON.stringify(payload),
        });

        if (!externalRes.ok) {
            const errorText = await externalRes.text();
            console.error("join-waitlist upstream error:", errorText);
            return NextResponse.json(
                { error: "Failed to submit. Please try again." },
                { status: externalRes.status }
            );
        }

        const data = await externalRes.json().catch(() => ({}));
        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error("join-waitlist route error:", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}