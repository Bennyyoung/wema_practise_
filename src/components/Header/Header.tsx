import React, { ReactNode } from "react"
import Button from "components/Button/Button"

interface IHeader {
 logo: any
 title: string
 buttonText: string
}

const Header: React.FC<IHeader> = ({ logo, title, buttonText}) => {

 return (
  <div style={{ backgroundColor: 'inherit', display: 'flex', justifyContent: 'space-between'  }}>
    {logo}
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
     <p>{title}</p>{'  '}
     <Button bgColor="#ffffff" border="#039BF0" padding='0.3rem 1.5rem' textColor="#039BF0">
      {buttonText}
     </Button>
    </div>

  </div>
 )
}

export default Header
