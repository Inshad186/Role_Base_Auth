import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import ClientHome from "./pages/client/clientHome"
import FreelancerHome from "./pages/freelancer/freelancerHome"
import ProtectedRoute from "./routes/protectedRoute"
import ClientProfile from "./pages/client/clientProfile"
import FreelancerProfile from "./pages/freelancer/freelancerProfile"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/clientHome" element={<ProtectedRoute><ClientHome/></ProtectedRoute>}/>
      <Route path="/freelancerHome" element={<ProtectedRoute><FreelancerHome/></ProtectedRoute>}/>
      <Route path="/clientProfile" element={<ProtectedRoute><ClientProfile/></ProtectedRoute>}/>
      <Route path="/freelancerProfile" element={<ProtectedRoute><FreelancerProfile/></ProtectedRoute>}/>
    </Routes>
  )
}

export default App
