import { CheckCircle2, X } from "lucide-react";
import { alata } from "@/app/fonts";

interface ThankyouModalProps {
    isOpen: boolean;
    onClose: () => void;
    userType?: "institution" | "student";
}

export default function ThankyouModal({
    isOpen,
    onClose,
    userType,
}: ThankyouModalProps) {
    if (!isOpen) return null;

    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#00172D]/95 backdrop-blur-sm p-6">

            <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white/70 hover:text-white transition cursor-pointer"
            >
                <X size={22} />
            </button>

            <div className="max-w-lg text-center">

                <div className="flex justify-center mb-6">
                    <CheckCircle2
                        size={72}
                        className="text-[#0055FF]"
                        strokeWidth={1.8}
                    />
                </div>

                <h3
                    className={`${alata.className} text-3xl md:text-4xl text-white mb-4`}
                >
                    Thank You!
                </h3>

                <p className="text-white/80 text-lg leading-relaxed">
                    {userType === "institution"
                        ? "We've received your partnership request. Our team will review your details and get in touch with you shortly."
                        : "You've successfully joined the waitlist. We'll keep you updated with the latest opportunities and program launches."}
                </p>

                <button
                    onClick={onClose}
                    className="
                        mt-8
                        px-8
                        py-3
                        rounded-full
                        bg-[#0055FF]
                        text-white
                        font-medium
                        hover:bg-[#0047D9]
                        transition
                        cursor-pointer
                    "
                >
                    Close
                </button>

            </div>
        </div>
    );
}