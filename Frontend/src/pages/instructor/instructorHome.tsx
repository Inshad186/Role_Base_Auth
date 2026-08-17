import { useEffect, useState } from "react";
import Header from "../../components/header";
import { FaChalkboardTeacher, FaClipboardList, FaUserShield } from "react-icons/fa";
import { getProfile } from "../../api/userApi";

const InstructorHome = () => {
  const[name, setName] = useState("")
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
        {/* Welcome Section */}
        <div className="mb-12">
        <h1 className="text-5xl font-bold">
          Welcome Back{" "}
          <span className="inline-flex items-center gap-2 text-green-400">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
        </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Manage examinations, monitor students, and create assessments
            securely with Examix.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
              Create Exam
            </button>

            <button className="rounded-xl border border-green-500/30 px-6 py-3 text-green-400 transition hover:bg-green-500/10">
              View Profile
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-green-500/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaChalkboardTeacher className="mb-4 text-3xl text-green-400" />

            <h3 className="text-xl font-semibold">
              Instructor Access
            </h3>

            <p className="mt-2 text-gray-400">
              Logged in securely as an Instructor using role-based
              authentication.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaClipboardList className="mb-4 text-3xl text-green-400" />

            <h3 className="text-xl font-semibold">
              Exam Management
            </h3>

            <p className="mt-2 text-gray-400">
              Create, update, and organize online examinations for students.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/10 bg-white/5 p-6 backdrop-blur-lg">
            <FaUserShield className="mb-4 text-3xl text-green-400" />

            <h3 className="text-xl font-semibold">
              Secure Platform
            </h3>

            <p className="mt-2 text-gray-400">
              Protected routes and JWT authentication keep instructor data safe.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorHome;