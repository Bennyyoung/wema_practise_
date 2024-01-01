import AuthIntroCard from "components/Card/AuthIntroCard/AuthIntroCard.tsx"
import LogoWhite from "components/Images/Logo/LogoWhite/LogoWhite.tsx"

const SignupIntro = () => {

 return (
  <AuthIntroCard
   bgColor="#039BF0"
   signUpStepOne={'/signUp'}
  >
   <div style={{ color: 'white', padding: '4rem  7rem', marginBottom: '3rem' }}>
    <LogoWhite />

    <p style={{ fontSize: '40px' }}>Screen:</p>
    <h1>SIGN UP</h1>

    <p>To onboard users successfully, they need to provide the following information</p>
    <ul>
     <li>Their Business Information</li>
     <li>Their Business Address</li>
     <li>Contact Person Information</li>
     <li>Create their Password</li>
    </ul>
   </div>
  </AuthIntroCard>
 )

}

export default SignupIntro