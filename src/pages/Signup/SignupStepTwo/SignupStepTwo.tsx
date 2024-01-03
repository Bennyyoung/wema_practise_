import FormField from "components/FormField/FormField"
import Button from "components/Button/Button"

interface ISignupStepTwo {
 formData: any
 setFormData: any
 handleNext: () => void
 step: number
}

const SignupStepTwo: React.FC<ISignupStepTwo> = ({ formData, setFormData, step }) => {

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormData((prevState: any) => ({
   ...prevState,
   [name]: value
  }))
 }

 return (
  <>
   <div style={{ display: 'flex' }}>
    <FormField
     label="House Number"
     name="houseNumber"
     type="string"
     handleChange={(e) => handleChange(e)}
     value={formData.houseNumber}
    />
    <FormField
     label="Street"
     name="street"
     type="string"
     handleChange={(e) => handleChange(e)}
     value={formData.street}
    />
   </div>

   <div style={{ display: 'flex' }}>
    <FormField
     label="City"
     name="city"
     type="string"
     handleChange={(e) => handleChange(e)}
     value={formData.city}
    />
    <FormField
     label="State"
     name="state"
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
     value={formData.street}
    />
   </div>

   <p style={{ color: '#039BF0' }}>Contact Person Information</p>

   <FormField
    label="Contact Name"
    name="contact"
    type="string"
    handleChange={(e) => handleChange(e)}
    value={formData.contactName}
   />
   <FormField
    label="Contact Phone Number"
    name="contactPhoneNumber"
    type="string"
    handleChange={(e) => handleChange(e)}
    value={formData.contactPhoneNumber}
   />
   <FormField
    label="Contact Email Address"
    name="contactEmailAddress"
    type="string"
    handleChange={(e) => handleChange(e)}
    value={formData.contactEmailAddress}
   />

   <p style={{ color: '#039BF0' }}>Password</p>

   <FormField
    label="Password"
    name="password"
    type="password"
    handleChange={(e) => handleChange(e)}
    value={formData.password}
   />
   <FormField
    label="Confirm Password"
    name="confirmPassword"
    type="password"
    handleChange={(e) => handleChange(e)}
    value={formData.confirmPassword}
   />

   <div style={{ display: 'flex', alignItems: 'center' }}>
    <Button style={{ marginRight: '2rem' }} padding="1rem 4rem">
     Submit
    </Button>
    <div style={{ color: '#808080' }}>
     Step {step} of 2
    </div>
    <div></div>
   </div>
  </>
 )
}

export default SignupStepTwo