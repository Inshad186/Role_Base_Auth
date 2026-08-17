import React from 'react'

const Features = () => {
  return (
    <div>
      <section className="relative z-10 bg-[#0A100C]/60 py-24">
        <div className="mx-auto max-w-7xl px-8">

          <div className="mb-16 text-center">

            <p className="text-green-400 font-semibold">
              WHY EXAMIX
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Everything You Need for Secure Online Exams
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Built with modern technologies to provide a secure,
              fast and user-friendly examination experience for
              both Students and Instructors.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}

            <div className="rounded-3xl border border-green-500/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/10">

              <div className="mb-5 text-5xl">
                🔐
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Secure Login
              </h3>

              <p className="text-gray-400">
                JWT authentication keeps your account protected
                with secure access.
              </p>

            </div>

            {/* Card 2 */}

            <div className="rounded-3xl border border-green-500/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/10">

              <div className="mb-5 text-5xl">
                👨‍🎓
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Role Based Access
              </h3>

              <p className="text-gray-400">
                Separate dashboards for Students and
                Instructors with protected routes.
              </p>

            </div>

            {/* Card 3 */}

            <div className="rounded-3xl border border-green-500/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/10">

              <div className="mb-5 text-5xl">
                📝
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Online Exams
              </h3>

              <p className="text-gray-400">
                Conduct examinations securely with
                a clean and responsive interface.
              </p>

            </div>

            {/* Card 4 */}

            <div className="rounded-3xl border border-green-500/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white/10">

              <div className="mb-5 text-5xl">
                ⚡
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                Fast Performance
              </h3>

              <p className="text-gray-400">
                Built using React, Express,
                MongoDB and TypeScript.
              </p>

            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Features
