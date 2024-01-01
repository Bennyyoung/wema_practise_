import { useState } from "react"
import AuthStepCard from "@/components/Card/AuthStepCard/AuthStepCard"
import Form from "@/components/Form/Form"
import axios from "axios"
import FormField from "@/components/FormField/FormField"
import { Link, useNavigate } from "react-router-dom"
import Button from "@/components/Button/Button"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store/store"

const Signin = () => {
 const { businessEmailAddress, password } = useSelector((state: RootState) => state.user!)
 const navigate = useNavigate()

 const [formData, setFormData] = useState({
  email: '',
  password: '',
 })

 const handleSubmit = async () => {
  try {
   if (businessEmailAddress === formData.email && password === formData.password) {
    navigate('/dashboard')
   }
  } catch (error) {
   console.error(error)
  }
 }

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData((prevState: any) => ({
   ...prevState,
   [name]: value
  }))
 }

 return (
  <AuthStepCard
   bgColor="#F5F6F8"
  >
   <div style={{ alignContent: 'center', backgroundColor: '#FFFFFF', width: '522px', padding: '3rem' }}>
    <Form handleSubmit={handleSubmit}>
     <h2>Welcome Back!</h2>
     <span style={{}}>Sign in to your Xpress reward partner’s dashboard</span>
     <hr />
     <FormField
      label="Email Address"
      name="emailAddress"
      type="email"
      handleChange={(e) => handleChange(e)}
      value={formData.email}
     />
     <FormField
      label="Password"
      name="password"
      type="password"
      handleChange={(e) => handleChange(e)}
      value={formData.password}
     />
     <div style={{ marginBottom: '2rem' }}>
      Forgot password?
      <Link to="/" style={{ textDecoration: 'none', color: '#039BF0' }}>{' '} Reset it</Link>
     </div>

     <Button padding="1rem 14.98rem">
      Sign in
     </Button>
    </Form>
   </div>
  </AuthStepCard>
 )
}

export default Signin