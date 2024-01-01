import React from 'react'
import SignupIntro from 'pages/Signup/SignupIntro/SignupIntro'
import SigninIntro from 'pages/Signin/SigninIntro/SigninIntro'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignupStepOne from 'pages/Signup/SignupStepOne/SignupStepOne'
import Signin from '@/pages/Signin/Signin/Signin'
import DashboardIntro from '@/pages/Dashboard/DashboardIntro/DashboardIntro'
import DashboardScreen from '@/pages/Dashboard/DashboardScreen/DashboardScreen'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store/store'

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.isAuthenticated)

  return (
    <>
      <Router>
        <Routes>

          {
            isAuthenticated ? (
              <>
                <Navigate to="/" />
                <Route path="/signinIntro" element={<SigninIntro />} />
                <Route path="/signin" element={<Signin />} />

                <Route path="/dashboardIntro" element={<DashboardIntro />} />
                <Route path="/dashboardScreen" element={<DashboardScreen />} />

              </>
            ) : (
              <>
                <Route path="/" element={<SignupIntro />} />
                <Route path="/signUp" element={<SignupStepOne />} />
              </>
            )
          }
        </Routes>
      </Router>



    </>
  )
}

export default App
