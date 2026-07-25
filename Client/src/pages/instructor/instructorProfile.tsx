import { FaEnvelope, FaUserCircle, FaChalkboardTeacher } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getProfile } from "../../api/userApi";

interface Profile {
  name: string,
  email: string,
  role: string
}

const InstructorProfile = () => {

  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchProfile()
  },[])

  const fetchProfile = async() => {
    try {
      setLoading(true)

      const response = await getProfile()
      if(response.success){
        setProfile(response.data.user)
      }
    } catch (error) {
      setError("Failed to load profile")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if(loading) return <p>Loading...</p>
  
  if(error) return <p>{error}</p>

  return (
    <div className="min-h-screen bg-[#070B08] flex items-center justify-center px-6">

      {/* Green Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-green-500/10 blur-[150px]" />

      <div className="relative w-full max-w-md rounded-3xl border border-green-500/10 bg-white/5 p-8 backdrop-blur-xl">

        {/* Avatar */}
        <div className="flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-green-500/20 bg-green-500/10">
            <FaUserCircle className="text-7xl text-green-400" />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-white">
            Instructor Profile
          </h1>
        </div>

        {/* Information */}
        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <FaChalkboardTeacher className="text-xl text-green-400" />

            <div>
              <p className="text-sm text-gray-400">Name</p>
              <h3 className="font-medium text-white">
                {profile?.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <FaEnvelope className="text-xl text-green-400" />

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <h3 className="font-medium text-white">
                {profile?.email}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <FaChalkboardTeacher className="text-xl text-green-400" />

            <div>
              <p className="text-sm text-gray-400">Role</p>
              <h3 className="font-medium text-white">
                {profile?.role}
              </h3>
            </div>
          </div>

        </div>

        {/* Button */}
        <button className="mt-8 w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition hover:bg-green-400">
          Edit Profile
        </button>

      </div>
    </div>
  );
};

export default InstructorProfile;