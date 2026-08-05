import { getProfile } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Button from "./common/button";
import { useDispatch } from "react-redux";
import type{ AppDispatch } from "../redux/store";
import { logout } from "../redux/slices/authSlice";
import { removeUser } from "../redux/slices/userSlice";
import { logoutUser } from "../api/userApi";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()


  const handleProfile = async () => {
    const response = await getProfile();
    if (response.data?.user?.role === "STUDENT") {
      navigate("/studentProfile");
    } else {
      navigate("/instructorProfile");
    }
  };

  const handleLogout = async() => {
    try {
      const res = await logoutUser()
      if(res.success){
        dispatch(logout())
        dispatch(removeUser())

        navigate("/login", {replace: true})
      }
    } catch (error) {
      console.log(error)
      throw new Error
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-green-500/10 bg-[#0B0F0D]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-green-400">
            Examix
          </h1>
          <p className="text-xs text-gray-500">
            Online Examination Platform
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <Button 
          className="text-gray-300 hover:text-green-400 transition"
          text="Home"
          />

          <button
            onClick={handleProfile}
            className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2 text-green-300 transition hover:bg-green-500/20">
            <FaUserCircle />
            Profile
          </button>

          <button 
          className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-red-300 transition hover:bg-red-500/20"
          onClick={handleLogout}>
            <FaUserCircle />
            Logout
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;