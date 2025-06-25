import { IoSearchOutline } from "react-icons/io5";

export default function CustomInput({ value, onChange, placeholder = "Search...", icon }) {
    return (
        <div className="w-full bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-black focus-within:ring-2 focus-within:ring-gray-400">
            {icon && <span className="text-gray-500 text-lg">{icon}</span>}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full text-sm outline-none placeholder:text-gray-400"
            />
        </div>
    );
}