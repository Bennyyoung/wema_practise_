import React, { ReactNode } from "react"
import Arrow from "components/Images/Arrow/Arrow"
import { Link } from "react-router-dom"

interface IAuthIntroCard {
 children?: ReactNode
 bgColor?: string
 signUpStepOne: string
}

const AuthIntroCard: React.FC<IAuthIntroCard> = ({ children, bgColor, signUpStepOne }) => {

 return (
  <div style={{ backgroundColor: bgColor, minHeight: '100vh' }}>
   {children}
   <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '9rem' }}>
    <div></div>
    <Link to={signUpStepOne}>
     <Arrow />
    </Link>
   </div>
  </div>
 )
}

export default AuthIntroCard
