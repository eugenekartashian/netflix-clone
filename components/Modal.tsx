import React from "react";
import { ModalProps } from "@/types/modal";

// interface ModalProps {
//     isVisible: boolean;
// }

const Modal: React.FC<ModalProps> = ({ 
    isVisible 
}) => {
    if ( !isVisible ) return null;
    return (
        <p className="pt-3 tracking-normal">
                The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank" className="text-[#0080ff] hover:underline ">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" className="text-[#0080ff] hover:underline">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
        </p>
    )
}

export default Modal;