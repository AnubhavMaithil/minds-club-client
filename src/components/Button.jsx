import React from 'react'

const Button = ({ title, onClick, className }) => {
    return (
        <button className={`bg-[#FFFE81] text-black text-base py-2 px-5 rounded-full ${className}`} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button