import AuthIntroCard from "components/Card/AuthIntroCard/AuthIntroCard.tsx"

const DashboardIntro = () => {

 return (
  <AuthIntroCard
   bgColor="#039BF0"
   signUpStepOne={'/signUp'}
  >
   <div>
    <h5>Screen</h5>
    <h1>DASHBOARD</h1>

    <p>
    Partner’s Reward Dashboard
    </p>
   </div>
  </AuthIntroCard>
 )

}

export default DashboardIntro