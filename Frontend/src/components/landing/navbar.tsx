import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../../redux/store"

const Navbar = () => {

const navigate = useNavigate()
const getToken = useSelector((state: RootState) => state.auth.accessToken)
const userRole = useSelector((state: RootState) => state.user.role)

const homeSubmit = () => {
  const token = getToken
  if(!token){
    navigate("/")
  }
  const role = userRole
  if(role === "STUDENT"){
    navigate("/studentHome")
  }else{
    navigate("/instructorHome")
  }
}
return (
    <div>
      <nav className="relative z-10 border-b border-green-500/10 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

          {/* Logo */}

          <div>
            <h1 className="text-3xl font-bold text-green-400">
              Examix
            </h1>

            <p className="text-xs tracking-wide text-gray-500">
              Online Examination Platform
            </p>
          </div>

          {/* Navigation */}

          <div className="hidden items-center gap-10 md:flex">

            <button 
            className="text-gray-300 transition hover:text-green-400"
            onClick={homeSubmit}>
              Home
            </button>

            <button className="text-gray-300 transition hover:text-green-400">
              Features
            </button>

            <button className="text-gray-300 transition hover:text-green-400">
              About
            </button>

          </div>

          {/* Buttons */}

          {!getToken? 
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="rounded-xl border border-green-500/30 px-5 py-2 transition hover:bg-green-500/10"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="rounded-xl bg-green-500 px-5 py-2 font-semibold text-black transition hover:bg-green-400"
            >
              Sign Up
            </button>
          </div>: ""}

        </div>
      </nav>
    </div>
  )
}

export default Navbar
