import { Input } from "@/components/ui/input";

export default function InputForm(props) {
    return (
        <Input
        className="text-md bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 rounded-none border-[#1f1f1f] border-opacity-75 p-1 text-[#1f1f1f]"
        {...props}
        required
        />
    )
}