import { useState } from "react";
import { getProfile } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Button from "./common/button";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { logout } from "../redux/slices/authSlice";
import { removeUser } from "../redux/slices/userSlice";
import { logoutUser } from "../api/userApi";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProfile = async () => {
    const response = await getProfile();
    if (response.data?.user?.role === "STUDENT") {
      navigate("/studentProfile");
    } else {
      navigate("/instructorProfile");
    }
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      if (res.success) {
        dispatch(logout());
        dispatch(removeUser());
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-green-500/10 bg-[#0B0F0D]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold text-green-400 sm:text-2xl">
            Examix
          </h1>
          <p className="hidden text-xs text-gray-500 sm:block">
            Online Examination Platform
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex lg:gap-6">

          <button
            onClick={handleProfile}
            className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm text-green-300 transition hover:bg-green-500/20 lg:px-4"
          >
            <FaUserCircle />
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-300 transition hover:bg-red-500/20 lg:px-4"
          >
            <FaUserCircle />
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/20 bg-green-500/10 text-green-400 transition hover:bg-green-500/20 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          overflow-hidden border-t border-green-500/10 bg-[#0B0F0D] transition-all duration-300 ease-in-out md:hidden
          ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-3 px-4 py-4">
          <Button
            className="w-full justify-start text-left text-gray-300 transition hover:text-green-400"
            text="Home"
          />

          <button
            onClick={handleProfile}
            className="flex w-full items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-2.5 text-green-300 transition hover:bg-green-500/20"
          >
            <FaUserCircle />
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-red-300 transition hover:bg-red-500/20"
          >
            <FaUserCircle />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;