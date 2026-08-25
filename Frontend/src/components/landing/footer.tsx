
const Footer = () => {
  return (
    <div>
        <footer className="border-t border-green-500/10 bg-[#050806]">

        <div className="mx-auto max-w-7xl px-8 py-14">

          <div className="grid gap-12 md:grid-cols-3">

            {/* Brand */}

            <div>

              <h2 className="text-3xl font-bold text-green-400">
                Examix
              </h2>

              <p className="mt-5 text-gray-400 leading-7">
                A secure online examination platform built using
                React, TypeScript, Express, MongoDB and JWT
                Authentication.
              </p>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="mb-5 text-xl font-semibold text-white">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-400">

                <li>
                  <button className="transition hover:text-green-400">
                    Home
                  </button>
                </li>

                <li>
                  <button className="transition hover:text-green-400">
                    Features
                  </button>
                </li>

                <li>
                  <button className="transition hover:text-green-400">
                    About
                  </button>
                </li>

              </ul>

            </div>

            {/* Technologies */}

            <div>

              <h3 className="mb-5 text-xl font-semibold text-white">
                Built With
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "React",
                  "TypeScript",
                  "Express",
                  "MongoDB",
                  "JWT",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-14 border-t border-green-500/10 pt-8 text-center">

            <p className="text-gray-500">
              © {new Date().getFullYear()} Examix. Built for learning
              Role-Based Authentication & Docker using the MERN Stack.
            </p>

          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer
