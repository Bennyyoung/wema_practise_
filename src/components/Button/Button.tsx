import React, { ReactNode } from "react"

interface IButton {
 children: ReactNode
 bgColor?: string
 border?: string
 padding?: string
 textColor?: string
 style?: {
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  marginRight?: string
 }
 onClick?: (e: React.MouseEventHandler<HTMLButtonElement> | any | undefined) => void
}

const Button: React.FC<IButton> = ({ children, bgColor, border, padding, textColor, style, onClick }) => {

 return (
  <button
   style={{
    backgroundColor: bgColor || '#039BF0',
    border: `1px solid ${border || '#039BF0'}`,
    padding: padding,
    color: textColor || "#fff",
    cursor: 'pointer',
    borderRadius: '8px',
    ...style
   }}
   onClick={onClick}
  >
   {children}
  </button>
 )
}

export default Button