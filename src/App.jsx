import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Root from "./root"
import StartPage from "./pathwayComponents/startPage"
import LogIn from "./pathwayComponents/logIn"
import Choice from "./pathwayComponents/choice"
import CreateAccount from "./pathwayComponents/createAccount"
import HomePage from "./pathwayComponents/homePage"

import { useSelector } from "react-redux"

export default function App() {
  const isLoading = useSelector(state => state.userData.states.isLoading)

  return (
      <>
        <Router>
          <Routes>
              <Route path="/" element={<Root isLoading={isLoading} />}>
                <Route path="/" element={<StartPage/>} />
                <Route path="/homepage" element={<HomePage/>} />
                <Route path="/log-in" element={<LogIn/>} />
                <Route path="/choice" element={<Choice/>} />
                <Route path="/create" element={<CreateAccount/>} />
              </Route>
          </Routes>
        </Router>
      </>
  )
}