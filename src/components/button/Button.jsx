import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Button = ({ btnType, style, children }) => {
    return (
        <button type={btnType ? btnType : 'button'} className={`${style} btn px-4 py-2 border rounded-full flex items-center gap-2 group duration-300`}>{children} <span className='group-hover:translate-x-2 group-hover:-translate-y-2 duration-300'><MdArrowOutward /></span></button>
    )
}

export default Button