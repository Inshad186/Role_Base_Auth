import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"
import StudentHome from "./pages/student/studentHome"
import InstructorHome from "./pages/instructor/instructorHome"
import ProtectedRoute from "./routes/protectedRoute"
import StudentProfile from "./pages/student/studentProfile"
import InstructorProfile from "./pages/instructor/instructorProfile"
import LandingPage from "./pages/landingPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/studentHome" element={<ProtectedRoute><StudentHome/></ProtectedRoute>}/>
      <Route path="/instructorHome" element={<ProtectedRoute><InstructorHome/></ProtectedRoute>}/>
      <Route path="/studentProfile" element={<ProtectedRoute><StudentProfile/></ProtectedRoute>}/>
      <Route path="/instructorProfile" element={<ProtectedRoute><InstructorProfile/></ProtectedRoute>}/>
    </Routes>
  )
}

export default App
