import { useNavigate } from "react-router-dom"
import examImage from "../../assets/exam_hero.png"

const HeroSection = () => {

const navigate = useNavigate()
  return (
    <div>
        <section className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p className="mb-5 text-lg font-semibold text-green-400">
            Welcome to Examix
          </p>

          <h1 className="text-5xl font-bold leading-tight lg:text-6xl">

            Secure

            <span className="text-green-400">
              {" "}Online Examination
            </span>

            <br />

            Platform

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

            Examix is a secure online examination platform
            designed for Students and Instructors.

            Experience role-based authentication,
            protected routes, and a modern learning
            environment built with the MERN stack.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button
              onClick={() => navigate("/signup")}
              className="rounded-xl bg-green-500 px-8 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              className="rounded-xl border border-green-500/20 px-8 py-3 text-green-400 transition hover:bg-green-500/10"
            >
              Login
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-green-500/20 blur-[80px]" />

            {/* Image */}

            <img
              src={examImage}
              alt="Exam Illustration"
              className="relative z-10 w-full max-w-md drop-shadow-[0_0_35px_rgba(34,197,94,0.35)]"
            />

          </div>

        </div>

      </section>
    </div>
  )
}

export default HeroSection
