import React from 'react'

const Hightlists = () => {
  return (
    <div>
    <section className="relative z-10 py-24">

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="font-semibold tracking-wider text-green-400">
            PROJECT HIGHLIGHTS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Built with Modern Technologies
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Examix demonstrates a secure role-based authentication
            system using the MERN stack with modern UI, protected
            routes, and Docker-ready architecture.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}

          <div className="group rounded-3xl border border-green-500/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/5">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-4xl transition group-hover:bg-green-500/20">
              🔐
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              JWT Authentication
            </h3>

            <p className="text-gray-400 leading-7">
              Secure login using JSON Web Tokens to protect user
              authentication and private routes.
            </p>

          </div>

          {/* Card 2 */}

          <div className="group rounded-3xl border border-green-500/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/5">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-4xl transition group-hover:bg-green-500/20">
              🛡️
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Role Based Access
            </h3>

            <p className="text-gray-400 leading-7">
              Separate dashboards and protected pages for Students
              and Instructors.
            </p>

          </div>

          {/* Card 3 */}

          <div className="group rounded-3xl border border-green-500/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/5">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-4xl transition group-hover:bg-green-500/20">
              ⚛️
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              MERN Stack
            </h3>

            <p className="text-gray-400 leading-7">
              Built using React, TypeScript, Express,
              MongoDB and Tailwind CSS.
            </p>

          </div>

          {/* Card 4 */}

          <div className="group rounded-3xl border border-green-500/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-green-500/5">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-4xl transition group-hover:bg-green-500/20">
              🐳
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Docker Ready
            </h3>

            <p className="text-gray-400 leading-7">
              Designed to be containerized for easy development,
              deployment and scalability.
            </p>

          </div>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Hightlists
