"use client";
import { CheckCircle2, X } from "lucide-react";
import { instrumentSerif } from "../layout";

type UserType = "student" | "institution";

interface ThankYouModalProps {
    isOpen: boolean;
    onClose: () => void;
    userType: UserType;
}

const content: Record<
    UserType,
    { heading: string; highlight: string; message: string; subMessage: string }
> = {
    student: {
        heading: "You're on the List,",
        highlight: "Future Achiever!",
        message:
            "Thanks for joining the MeritRise.ai waitlist. We're building something built for minds like yours — elite outcomes, zero barriers.",
        subMessage:
            "Keep an eye on your inbox — early access invites go out on a first-come basis.",
    },
    institution: {
        heading: "Thank You for Partnering with",
        highlight: "MeritRise.ai",
        message:
            "Your institution's registration has been received. Our partnerships team will reach out shortly to discuss how we can bring Tier-1 outcomes to your students.",
        subMessage:
            "We typically respond within 2-3 business days with next steps.",
    },
};

export default function ThankYouModal({
    isOpen,
    onClose,
    userType,
}: ThankYouModalProps) {
    if (!isOpen) return null;

    const { heading, highlight, message, subMessage } = content[userType];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal card */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-xl rounded-3xl p-10 sm:p-12 text-center"
                style={{
                    background: "linear-gradient(135deg, #0B0B3D 0%, #0A0A2E 100%)",
                    border: "1px solid rgba(99, 102, 241, 0.25)",
                    boxShadow: "0 0 80px rgba(67, 56, 202, 0.35)",
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="cursor-pointer absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X size={22} />
                </button>

                {/* Success icon */}
                <div className="flex justify-center mb-6">
                    <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{
                            background:
                                "linear-gradient(135deg, #1E1FD1 0%, #4F8CFF 100%)",
                            boxShadow: "0 8px 24px rgba(60, 90, 255, 0.4)",
                        }}
                    >
                        <CheckCircle2 size={32} className="text-white" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-medium text-white leading-snug">
                    {heading}{" "}
                    <span
                        className={`italic font-serif text-4xl text-[#0055ee] ${instrumentSerif.className}`}
                    >
                        {highlight}
                    </span>
                </h2>

                {/* Message */}
                <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md mx-auto">
                    {message}
                </p>

                <p className="mt-3 text-xs text-white/45 leading-relaxed max-w-sm mx-auto">
                    {subMessage}
                </p>

                {/* Close action button */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={onClose}
                        className="cursor-pointer rounded-full px-12 py-3 text-white font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        style={{
                            background:
                                "linear-gradient(90deg, #1E1FD1 0%, #4F8CFF 100%)",
                            boxShadow: "0 8px 24px rgba(60, 90, 255, 0.4)",
                        }}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}