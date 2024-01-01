import React, { ReactNode } from "react"
import LogoBlue from "components/Images/Logo/LogoBlue/LogoBlue"
import Header from "components/Header/Header"

interface IAuthStepCard {
  children: ReactNode
  bgColor: string
}

const AuthStepCard: React.FC<IAuthStepCard> = ({ children, bgColor, }) => {

  return (
    <div style={{backgroundColor: bgColor, padding: '3rem 6rem',}}>
      <Header
        logo={<LogoBlue />}
        title="Already have an account?"
        buttonText="Sign in"
      />
      <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <div>

          {children}
        </div>
      </div>

    </div>
  )
}

export default AuthStepCard
