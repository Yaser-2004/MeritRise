import { NextRequest, NextResponse } from "next/server";

const EXTERNAL_API_URL =
    "https://admin.learningshala.com/data/api/cms/partner-with-us";

// NOTE: store this in your .env.local as PARTNER_API_KEY=... if the
// partner-with-us endpoint also requires a key. If it doesn't, you can
// remove the header below. The join-waitlist endpoint definitely needs one
// (see /api/join-waitlist/route.ts).
const API_KEY = process.env.CMS_FORMS_API_KEY;

interface PartnerRequestBody {
    institution: string;
    contact: string;
    email: string;
    phone: string;
    designation: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: PartnerRequestBody = await req.json();

        // Basic server-side validation — never trust the client alone
        const { institution, contact, email, phone, designation } = body;
        if (!institution || !contact || !email || !phone || !designation) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        // Map our internal field names -> the external API's expected shape
        const payload = {
            institution_name: institution,
            contact_person_name: contact,
            email,
            phone,
            designation,
        };

        const externalRes = await fetch(EXTERNAL_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(API_KEY ? { "X-API-Key": API_KEY } : {}),
            },
            body: JSON.stringify(payload),
        });

        if (!externalRes.ok) {
            const errorText = await externalRes.text();
            console.error("partner-with-us upstream error:", errorText);
            return NextResponse.json(
                { error: "Failed to submit. Please try again." },
                { status: externalRes.status }
            );
        }

        const data = await externalRes.json().catch(() => ({}));
        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error("partner-with-us route error:", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}