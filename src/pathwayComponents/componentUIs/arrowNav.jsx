import { ArrowLeft } from "lucide-react";

import { motion } from "framer-motion";

import { arrowHover } from "../customHooks/animations/animationStyles";

export default function ArrowNav(props) {
    return (
        <motion.div
        className="cursor-pointer"
        whileHover={arrowHover}
        >
            <ArrowLeft {...props} color="#1f1f1f" />
        </motion.div>
    )
}