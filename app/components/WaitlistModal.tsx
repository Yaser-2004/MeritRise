"use client";
import { useState } from "react";
import { X } from "lucide-react";
import ThankyouModal from "./ThankyouModal";
import { instrumentSerif } from "../layout";
import axios from "axios";

type UserType = "student" | "institution";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
    /** Pass which flow this modal is for — controls thank-you message + form fields */
    userType: UserType;
}

// Form shape is a superset of both flows. We only read the fields
// relevant to whichever userType is active.
interface FormState {
    fullName: string; // used as Institution Name when userType === "institution"
    email: string;
    phone: string;
    program: string; // used as "Type of Institution" when userType === "institution"
    designation: string; // institution-only field
}

const EMPTY_FORM: FormState = {
    fullName: "",
    email: "",
    phone: "",
    program: "",
    designation: "",
};

export default function WaitlistModal({
    isOpen,
    onClose,
    userType,
}: WaitlistModalProps) {
    const [formData, setFormData] = useState<FormState>(EMPTY_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);

    const isInstitution = userType === "institution";

    // Whole flow is invisible only when parent closed it AND we're not mid-thank-you
    if (!isOpen && !showThankYou) return null;

    // Form should be visible only while parent says open AND we haven't moved to thank-you yet
    const showForm = isOpen && !showThankYou;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (isInstitution) {
                // Institution flow -> /api/partner-with-us
                // Note: this modal's "Full Name" field doubles as Institution Name,
                // and "Type of Institution" doubles as the `program` field, for
                // institutions. Designation is its own dedicated field below.
                await axios.post("/api/partner-with-us", {
                    institution: formData.fullName,
                    contact: formData.fullName, // no separate contact-person field in this modal;
                    // if you want a distinct contact person name, add a field for it.
                    email: formData.email,
                    phone: formData.phone,
                    designation: formData.designation,
                });
            } else {
                // Student flow -> /api/join-waitlist
                await axios.post("/api/join-waitlist", {
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    program: formData.program,
                });
            }

            setShowThankYou(true);
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* ── Form Modal ── */}
            {showForm && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-3xl rounded-3xl p-10 sm:p-12"
                        style={{
                            background: "linear-gradient(135deg, #0B0B3D 0%, #0A0A2E 100%)",
                            border: "1px solid rgba(99, 102, 241, 0.25)",
                            boxShadow: "0 0 80px rgba(67, 56, 202, 0.35)",
                        }}
                    >
                        <button
                            onClick={onClose}
                            className="cursor-pointer absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X size={22} />
                        </button>

                        <h2 className="text-2xl sm:text-3xl font-medium text-white text-center leading-snug">
                            {isInstitution
                                ? "Register Your Institution with"
                                : "Be Among the First to Experience"}{" "}
                            <span
                                className={`${instrumentSerif.className} italic font-serif text-[#0055ee] text-4xl`}
                            >
                                MeritRise.ai
                            </span>
                        </h2>

                        <p className="mt-3 text-center md:text-base text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                            {isInstitution
                                ? "Partner with us to bring India's next-generation learning ecosystem to your students."
                                : "Join the waitlist to get early access to India's next-generation learning ecosystem built for elite outcomes."}
                        </p>

                        <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm text-white/80 mb-2">
                                        {isInstitution ? "Institution Name" : "Full Name"}
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder={
                                            isInstitution
                                                ? "Enter Institution Name"
                                                : "Enter Your Full Name"
                                        }
                                        required
                                        className="w-full rounded-full bg-white text-gray-800 placeholder:text-gray-400 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-white/80 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Your Email"
                                        required
                                        className="w-full rounded-full bg-white text-gray-800 placeholder:text-gray-400 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-white/80 mb-2">
                                        Phone No.
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter Your Phone No."
                                        required
                                        className="w-full rounded-full bg-white text-gray-800 placeholder:text-gray-400 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-white/80 mb-2">
                                        {isInstitution
                                            ? "Type of Institution"
                                            : "Choose Your Online Degree/Certification Program"}
                                    </label>
                                    <select
                                        name="program"
                                        value={formData.program}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-full bg-white text-gray-800 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition-shadow appearance-none cursor-pointer"
                                        style={{ color: formData.program ? "#1f2937" : "#9ca3af" }}
                                    >
                                        <option value="" disabled>
                                            {isInstitution ? "Choose Institution Type" : "Choose Interest Area"}
                                        </option>
                                        {isInstitution ? (
                                            <>
                                                <option value="university">University</option>
                                                <option value="college">College</option>
                                                <option value="training-center">Training Center</option>
                                                <option value="other">Other</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="bba">BBA</option>
                                                <option value="bca">BCA</option>
                                                <option value="bsc">BSc/BS</option>
                                                <option value="mtech">MTech</option>
                                                <option value="certification">Certification</option>
                                                <option value="pg-diploma">PG Diploma</option>
                                                <option value="other">Others</option>
                                            </>
                                        )}
                                    </select>
                                </div>

                                {/* Designation — institution flow only, required by the partner-with-us API */}
                                {isInstitution && (
                                    <div className="sm:col-span-2">
                                        <label className="block text-sm text-white/80 mb-2">
                                            Designation
                                        </label>
                                        <input
                                            type="text"
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleChange}
                                            placeholder="Enter Your Designation"
                                            required
                                            className="w-full rounded-full bg-white text-gray-800 placeholder:text-gray-400 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="cursor-pointer rounded-full px-12 py-3 text-white font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                                    style={{
                                        background: "linear-gradient(90deg, #1E1FD1 0%, #4F8CFF 100%)",
                                        boxShadow: "0 8px 24px rgba(60, 90, 255, 0.4)",
                                    }}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ── Thank You Modal ── */}
            <ThankyouModal
                isOpen={showThankYou}
                onClose={() => {
                    setShowThankYou(false); // reset local state
                    setFormData(EMPTY_FORM); // clear form for next open
                    onClose(); // tell parent the whole flow is done
                }}
                userType={userType}
            />
        </>
    );
}