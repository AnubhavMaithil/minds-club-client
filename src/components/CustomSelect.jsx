import { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function CustomSelect({ value, onChange, options, placeholder }) {
    const [open, setOpen] = useState(false);

    // Set default value to "all" on mount if empty
    useEffect(() => {
        if (!value) {
            onChange("all");
        }
    }, [value, onChange]);

    const selectedLabel = options.find(opt => opt.value === value)?.label || "";

    return (
        <div className="relative w-full">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center bg-white border border-gray-300 px-4 py-2 rounded-lg text-black font-medium text-base shadow-sm whitespace-nowrap"
            >
                <span className={value ? "" : "text-gray-400"}>
                    {selectedLabel || placeholder}
                </span>
                <IoChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <ul className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg py-2 text-sm max-h-60 overflow-y-auto">
                    {/* Non-selectable placeholder */}
                    <li className="px-4 py-2 text-black font-semibold cursor-default select-none border-b border-gray-200">
                        {placeholder}
                    </li>

                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-black ${value === option.value ? "bg-gray-100 font-semibold" : ""
                                }`}
                            onClick={() => {
                                onChange(option.value);
                                setOpen(false);
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}