import { ChevronLast } from "lucide-react"
import { LayoutGrid } from "lucide-react"
import { BookMarked } from "lucide-react"

const mainColor = "#f5f5f5"
const secondaryColor = "#383838"

export const sidebarItems = {
    1: {
        group: <div><ChevronLast
        color={mainColor}
        className="cursor-pointer"
        onClick={() => console.log("click")} // animate
        /></div>
    },
    2: {
        group: <div className="space-y-6"><LayoutGrid
        color={mainColor}
        className="cursor-pointer"

        /> <BookMarked
        color={mainColor}
        className="cursor-pointer"
        
        /></div>
    },
    3: {

    }
}

// create groups for top and bottom