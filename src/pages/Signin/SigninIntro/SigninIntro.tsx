import LogoWhite from "@/components/Images/Logo/LogoWhite/LogoWhite"
import AuthIntroCard from "components/Card/AuthIntroCard/AuthIntroCard.tsx"

const Login = () => {

 return (
  <AuthIntroCard
   bgColor="#039BF0"
   signUpStepOne={'/signIn'}
  >
   <div style={{ color: 'white', padding: '4rem  7rem', marginBottom: '3rem'  }}>
    <LogoWhite />

    <p style={{ fontSize: '40px' }}>Screen:</p>
    <h1>SIGN IN</h1>

    <p>
     Users should be able to login with the email address
     and password used during registration
    </p>
   </div>
  </AuthIntroCard>
 )

}

export default Login