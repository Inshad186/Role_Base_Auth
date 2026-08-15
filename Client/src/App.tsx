import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"
import StudentHome from "./pages/student/studentHome"
import InstructorHome from "./pages/instructor/instructorHome"
import ProtectedRoute from "./routes/protectedRoute"
import StudentProfile from "./pages/student/studentProfile"
import InstructorProfile from "./pages/instructor/instructorProfile"
import LandingPage from "./pages/landingPage"
import { useEffect } from "react"
import Api from "./services/axios"
import { endpointUrl } from "./constants/endpointUrl"
import { useDispatch } from "react-redux"
import { setAccessToken, logout } from "./redux/slices/authSlice"
import { removeUser, setUser } from "./redux/slices/userSlice"
import ForgotPassword from "./pages/auth/forgotPassword"
import ResetPassword from "./pages/auth/resetPassword"

const App = () => {

  const dispatch = useDispatch()

    useEffect(() => {
    const restoreSession = async () => {
      try {
        const response = await Api.post(endpointUrl.REFRESH);

        dispatch(setAccessToken(response.data.accessToken));
        dispatch(setUser(response.data.user));
      } catch {
        dispatch(logout());
        dispatch(removeUser());
      }
    };

    restoreSession();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/studentHome" element={<ProtectedRoute><StudentHome/></ProtectedRoute>}/>
      <Route path="/instructorHome" element={<ProtectedRoute><InstructorHome/></ProtectedRoute>}/>
      <Route path="/studentProfile" element={<ProtectedRoute><StudentProfile/></ProtectedRoute>}/>
      <Route path="/instructorProfile" element={<ProtectedRoute><InstructorProfile/></ProtectedRoute>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/resetPassword/:resetToken" element={<ResetPassword/>}/>
    </Routes>
  )
}

export default App
