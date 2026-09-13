import type { ReactNode } from "react";
import authBag from "../../assets/auth_bg.png";
import LanguageMenu from "../languageMenu";

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
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/15 via-black/25 to-green-900/40" />

      <div className="relative z-10 flex h-full flex-col justify-between p-10 lg:p-12">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_#22c55e]" />
          <h2 className="text-2xl font-bold tracking-wide text-white">Examix</h2>
        </div>

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
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1c261e] via-[#0e3421] to-[#000804] p-2 sm:p-6">
      <div className="relative flex h-full max-h-[900px] w-full max-w-6xl overflow-hidden rounded-[20px] border border-white/10 bg-[#0B0F0D] shadow-2xl shadow-black/40 sm:rounded-[28px]">

        {/* Language switcher — pinned, fixed size, never competes for space */}
        <div className="absolute z-20" style={{ right: "clamp(10px, 3vw, 20px)", top: "clamp(10px, 3vh, 20px)" }}>
          <LanguageMenu />
        </div>

        {imagePosition === "left" && (
          <div className="hidden h-full w-1/2 md:block">
            <ImageSection />
          </div>
        )}

        {/* Form Panel — no scroll; spacing/text scale down on short viewports */}
        <div
          className="flex h-full w-full min-w-0 flex-col justify-center md:w-1/2"
          style={{
            paddingLeft: "clamp(16px, 4vw, 56px)",
            paddingRight: "clamp(16px, 4vw, 56px)",
            paddingTop: "clamp(12px, 4vh, 40px)",
            paddingBottom: "clamp(12px, 4vh, 40px)",
          }}
        >
          <div className="mx-auto w-full min-w-0 max-w-md">
            <div style={{ marginBottom: "clamp(12px, 3vh, 32px)" }}>
              <h1
                className="break-words font-bold text-white"
                style={{ fontSize: "clamp(1.25rem, 4vh, 1.875rem)", lineHeight: 1.25 }}
              >
                {title}
              </h1>
              <p
                className="mt-1 break-words text-gray-400"
                style={{ fontSize: "clamp(0.75rem, 2vh, 1rem)" }}
              >
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </div>

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