import { useEffect, useState } from "react";
import Header from "../../components/header";
import { FaBookOpen, FaLock, FaUserGraduate } from "react-icons/fa";
import { getProfile } from "../../api/userApi";


const StudentHome = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    fetchUserName()
  },[])

  const fetchUserName = async() => {
    const response = await getProfile()
    if(response.success){
      setName(response.data?.user?.name)
    }
  }
  return (
    <div className="min-h-screen bg-[#070B08] text-white">

      <Header />

      <main className="mx-auto max-w-7xl px-8 py-12">

        {/* Welcome */}

        <div className="mb-12">

          <h1 className="text-5xl font-bold">
            Welcome Back{" "} <span className="text-green-600">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Continue your learning journey with Examix.
            Practice your skills, complete assessments,
            and explore secure online examinations.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
              Start Exam
            </button>

            <button className="rounded-xl border border-green-500/30 px-6 py-3 text-green-400 transition hover:bg-green-500/10">
              View Profile
            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-green-500/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaUserGraduate className="mb-4 text-3xl text-green-400" />
            <h3 className="text-xl font-semibold">
              Student Access
            </h3>
            <p className="mt-2 text-gray-400">
              Logged in as Student using role-based authentication.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaLock className="mb-4 text-3xl text-green-400" />
            <h3 className="text-xl font-semibold">
              Secure Login
            </h3>
            <p className="mt-2 text-gray-400">
              JWT authentication protects your account and routes.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaBookOpen className="mb-4 text-3xl text-green-400" />
            <h3 className="text-xl font-semibold">
              Online Exams
            </h3>
            <p className="mt-2 text-gray-400">
              Take online assessments anytime with a simple interface.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
};

export default StudentHome;