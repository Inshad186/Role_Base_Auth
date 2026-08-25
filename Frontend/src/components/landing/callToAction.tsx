import { useNavigate } from 'react-router-dom'

const CallToAction = () => {
    const navigate = useNavigate()
  return (
    <div>
        <section className="relative z-10 py-24">

        <div className="mx-auto max-w-5xl px-8">

          <div className="rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/5 p-12 text-center">

            <h2 className="text-4xl font-bold text-white">
              Ready to Begin Your Journey?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              Join Examix today and experience a secure online
              examination platform designed for Students and
              Instructors with modern authentication and role-based
              access.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <button
                onClick={() => navigate("/signup")}
                className="rounded-xl bg-green-500 px-8 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                Create Account
              </button>

              <button
                onClick={() => navigate("/login")}
                className="rounded-xl border border-green-500/20 px-8 py-3 text-green-400 transition hover:bg-green-500/10"
              >
                Login
              </button>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default CallToAction
