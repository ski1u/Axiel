import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { buttonHover } from "../customHooks/animations/animationStyles";

export default function OutlineButton(props) {
    return (
        <Button 
        {...props}
        variant="outline" 
        className={"bg-[#f5f5f5] border-[#1f1f1f] border-opacity-35 font-medium hover:bg-gray-200 " + (props.className ? props.className : "")}>
            {props.children}
        </Button>
    )
}