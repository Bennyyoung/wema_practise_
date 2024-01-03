import { useState } from "react"
import AuthStepCard from "components/Card/AuthStepCard/AuthStepCard"
import FormField from "components/FormField/FormField"
import Form from "components/Form/Form"
import Button from "components/Button/Button"
import SignupStepTwo from "../SignupStepTwo/SignupStepTwo"
import { useDispatch } from "react-redux"
import { registerSuccess } from "@/redux/reducers/authSlice"


const SignupStepOne = () => {

 const [step, setStep] = useState(1)
 const [toggleNextStep, setToggleNextStep] = useState(false)

 const dispatch = useDispatch()

 const handleNext = () => {
  setStep(prevState => prevState + 1)
  setToggleNextStep(true)
 }

 const [formData, setFormData] = useState({
  businessName: '',
  businessEmailAddress: '',
  businessPhoneNumber: '',
  businessCategory: '',
  accountNo: '',
  image: '' || null,
  houseNumber: '',
  street: '',
  city: '',
  state: '',
  contactName: '',
  contactPhoneNumber: '',
  contactEmailAddress: '',
  password: '',
  confirmPassword: ''
 })

 const handleSubmit = () => {
  try {
   const result = dispatch(registerSuccess(formData))
   console.log(result)
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
   <div style={{ alignContent: 'center', backgroundColor: '#FFFFFF', width: '522px', margin: '2rem auto', padding: '3rem' }}>
    <Form handleSubmit={() => handleSubmit()}>
     <h2>Welcome to Xpress Rewards</h2>
     <span style={{}}>Complete the form below to get started</span>
     <hr />
     <p style={{ color: '#039BF0' }}>
      {step === 1 ? ('Business Information') : ('Business Address')}
     </p>

     {toggleNextStep === false ? (<div>
      <FormField
       label="Business name"
       name="businessName"
       type="string"
       handleChange={(e) => handleChange(e)}
       value={formData.businessName}
      />

      <FormField
       label="Business Email Address"
       name="businessEmailAddress"
       type="email"
       handleChange={(e) => handleChange(e)}
       value={formData.businessEmailAddress}
      />

      <FormField
       label="Business Phone Number"
       name="businessPhoneNumber"
       type="tel"
       handleChange={(e) => handleChange(e)}
       value={formData.businessPhoneNumber}
      />

      {/* Select dropdown */}
      <FormField
       label="Business Category"
       name="businessCategory"
       type="select"
       optionData={[
        {
         name: 'Health',
         value: 'health',
        },
        {
         name: 'Agriculture',
         value: 'agriculture',
        },
        {
         name: 'Construction',
         value: 'contruction',
        },
       ]}
       handleChange={(e) => handleChange(e)}
       value={formData.businessCategory}
      />

      <FormField
       label="Account No"
       name="accountNo"
       type="string"
       handleChange={(e) => handleChange(e)}
       value={formData.accountNo}
      />

      <FormField
       label="Image (Logo)"
       name="image"
       type="file"
       handleChange={(e) => handleChange(e)}
       value={formData.image}
      />

      <div style={{ display: 'flex', alignItems: 'center' }}>
       <Button onClick={() => handleNext()} style={{ marginRight: '2rem' }} padding="1rem 4rem">
        Next
       </Button>
       <div style={{ color: '#808080' }}>
        Step {step} of 2
       </div>
       <div></div>
      </div>
     </div>) : (
      <SignupStepTwo
       formData={formData}
       setFormData={setFormData}
       handleNext={handleNext}
       step={step}
      />
     )
     }
    </Form>
   </div>
  </AuthStepCard>
 )
}

export default SignupStepOne