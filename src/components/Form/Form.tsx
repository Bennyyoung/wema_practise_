import React from "react"

interface IForm {
 children: React.ReactNode
 handleSubmit: () => void
}

const Form: React.FC<IForm> = ({ children, handleSubmit }) => {

 return (
  <form onSubmit={() => handleSubmit()}>
   {children}
  </form>
 )
}

export default Form