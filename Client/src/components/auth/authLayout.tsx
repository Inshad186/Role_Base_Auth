import type { ReactNode } from "react";
import authBag from "../../assets/auth_bg.png";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  imagePosition?: "left" | "right";
}

const ImageSection = () => {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        backgroundImage: `url(${authBag})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-black/25 to-green-900/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-10 lg:p-12">
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
          <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
            Learn.
            <br />
            Practice.
            <br />
            Succeed.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-gray-300 lg:text-lg lg:leading-8">
            Experience secure online examinations, track your learning
            progress, and achieve your academic goals with confidence.
          </p>
        </div>

        {/* Footer */}
        <div>
          <div className="h-px bg-white/20" />
          <p className="mt-5 text-sm text-gray-400">
            Secure • Reliable • Anytime, Anywhere
          </p>
        </div>
      </div>
    </div>
  );
};

const AuthLayout = ({ title, subtitle, children, imagePosition = "left" }: AuthLayoutProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1c261e] via-[#0e3421] to-[#000804] p-4 sm:p-6">
      {/* Main Card */}
      <div className="flex h-full max-h-[900px] w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0F0D] shadow-2xl shadow-black/40">
        {/* Image Panel */}
        {imagePosition === "left" && (
          <div className="hidden h-full w-1/2 md:block">
            <ImageSection />
          </div>
        )}

        {/* Form Panel */}
        <div className="flex h-full w-full flex-col justify-center px-8 py-10 sm:px-12 md:w-1/2 lg:px-14">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                {title}
              </h1>
              <p className="mt-2 text-sm text-gray-400 sm:text-base">
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </div>

        {/* Image Panel (right position) */}
        {imagePosition === "right" && (
          <div className="hidden h-full w-1/2 md:block">
            <ImageSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;