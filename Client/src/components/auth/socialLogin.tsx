import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <button
      type="button"
      className=" mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-3
     text-white transition hover:bg-white/10 ">
      <FcGoogle size={22} />

      Continue with Google
    </button>
  );
};

export default SocialLogin;