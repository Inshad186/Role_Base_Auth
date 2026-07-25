import type { ReactNode } from "react";
import authBag from "../../assets/auth_bg.png"

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  imagePosition?: "left" | "right";
}

const ImageSection = () => {
  return (
    <div
      className="relative hidden overflow-hidden border-r border-white/5 lg:flex lg:flex-col lg:justify-between"
      style={{
        backgroundImage: `url(${authBag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black/20 to-green-900/30"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_#22c55e]" />

          <h2 className="text-2xl font-bold tracking-wide text-white">
            Examix
          </h2>
        </div>

        {/* Hero Content */}
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
            Online Examination Platform
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white">
            Learn.
            <br />
            Practice.
            <br />
            Succeed.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-8 text-gray-300">
            Experience secure online examinations, track your learning
            progress, and achieve your academic goals with confidence.
          </p>
        </div>

        {/* Footer */}
        <div>
          <div className="h-px bg-white/20"></div>

          <p className="mt-6 text-sm text-gray-400">
            Secure • Reliable • Anytime, Anywhere
          </p>
        </div>
      </div>
    </div>
  );
};


const AuthLayout = ({ title, subtitle, children, imagePosition = "left" }: AuthLayoutProps) => {
return (
  <div className="min-h-screen bg-[#070B08] lg:grid lg:grid-cols-2">

    {imagePosition === "left" && <ImageSection />}

    {/* FORM SECTION */}
    <div className="flex min-h-screen items-center justify-center bg-[#070B08] px-6 py-12">

      <div className="w-full max-w-md">

        <div className="mb-8 text-center lg:text-left">

          <h1 className="text-4xl font-bold text-white">
            {title}
          </h1>

          <p className="mt-3 text-gray-400">
            {subtitle}
          </p>

        </div>

        {children}

      </div>

    </div>

    {imagePosition === "right" && <ImageSection />}

  </div>
);
};

export default AuthLayout;