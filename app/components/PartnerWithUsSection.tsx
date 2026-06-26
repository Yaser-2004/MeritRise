"use client";

import { useState } from "react";
import { alata } from "@/app/fonts";
import ThankyouModal from "./ThankyouModal";
import axios from "axios";

/* ── Form field primitives ────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
    return (
        <label className="block text-[16px] font-light text-white/80 mb-1.5 tracking-tight">
            {children}
        </label>
    );
}

function Input({
    placeholder,
    type = "text",
    value,
    onChange,
}: {
    placeholder: string;
    type?: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-full px-4 py-3 text-[13px] text-gray-800 placeholder:text-gray-400 bg-white outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
    );
}

/* ── Section ──────────────────────────────────────────────────────────── */
export default function PartnerWithUsSection() {
    const [showThankYou, setShowThankYou] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({
        institution: "",
        contact: "",
        email: "",
        phone: "",
        designation: "",
    });

    const set = (key: keyof typeof form) => (v: string) =>
        setForm((f) => ({ ...f, [key]: v }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !form.institution ||
            !form.contact ||
            !form.email ||
            !form.phone ||
            !form.designation
        ) {
            alert("Please fill all the fields");
            return;
        }

        setIsSubmitting(true);
        try {
            // Calls our own Next.js API route, which proxies to the external
            // partner-with-us endpoint server-side (keeps any API key off the client).
            await axios.post("/api/partner-with-us", form);
            setShowThankYou(true);
            setForm({
                institution: "",
                contact: "",
                email: "",
                phone: "",
                designation: "",
            });
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="partner-with-us" className="bg-white w-full py-12 md:py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2
                    className={`text-4xl md:text-5xl text-center font-light text-gray-900 md:tracking-tight mb-10 md:mb-16 ${alata.className}`}
                >
                    Partner With Us
                </h2>

                {/* Card */}
                <div
                    className="rounded-2xl overflow-hidden flex flex-col lg:flex-row"
                    style={{ background: "#00172D" }}
                >

                    {/* Left: copy */}
                    <div
                        className="flex-1 flex flex-col justify-center md:px-14 px-8 md:py-14 py-16 lg:py-16"
                        style={{
                            borderRight: "1px solid rgba(255,255,255,0.07)",
                        }}
                    >
                        <h3
                            className={`font-light text-white mb-5 ${alata.className} md:text-[35px] text-[28px] z-10`}
                        >
                            Build the Future of{" "}
                            <span className="text-[#0055FF]">Education</span>{" "} With Us
                        </h3>
                        <p className="text-white/80 md:text-[17px] text-[16px] leading-relaxed max-w-md z-10">
                            We collaborate with forward-thinking institutions to deliver
                            rigorous, outcome-driven programs powered by AI, industry
                            alignment, and scalable infrastructure.
                        </p>
                    </div>

                    {/* Right: form */}
                    <form
                        onSubmit={handleSubmit}
                        className="relative flex-1 md:px-14 px-8 md:py-14 py-8 flex flex-col gap-5"
                        style={{ background: "#0f2275" }}
                    >
                        {/* Institution Name */}
                        <div className="z-10">
                            <Label>Institution Name</Label>
                            <Input
                                placeholder="Enter Institution Name"
                                value={form.institution}
                                onChange={set("institution")}
                            />
                        </div>

                        {/* Contact Person Name */}
                        <div className="z-10">
                            <Label>Contact Person Name</Label>
                            <Input
                                placeholder="Enter Contact Person Name"
                                value={form.contact}
                                onChange={set("contact")}
                            />
                        </div>

                        {/* Email + Phone side by side */}
                        <div className="flex gap-4 z-10">
                            <div className="flex-1 min-w-0">
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={form.email}
                                    onChange={set("email")}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <Label>Phone No.</Label>
                                <Input
                                    type="tel"
                                    placeholder="Enter Phone No."
                                    value={form.phone}
                                    onChange={set("phone")}
                                />
                            </div>
                        </div>

                        {/* Designation */}
                        <div className="z-10">
                            <Label>Designation</Label>
                            <Input
                                placeholder="Enter Designation"
                                value={form.designation}
                                onChange={set("designation")}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer hover:scale-105 w-full rounded-full py-3.5 text-[15px] font-semibold text-white tracking-tight transition-all duration-200 hover:brightness-110 active:scale-[0.99] mt-6 z-10 disabled:opacity-60 disabled:hover:scale-100"
                            style={{ background: "#1a56ff" }}
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>

                        <ThankyouModal
                            isOpen={showThankYou}
                            onClose={() => setShowThankYou(false)}
                            userType="institution"
                        />
                    </form>

                </div>
            </div>

            {/* <ThankyouModal
                isOpen={showThankYou}
                onClose={() => setShowThankYou(false)}
                userType="institution"
            /> */}
        </section>
    );
}