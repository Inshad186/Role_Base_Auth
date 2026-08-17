import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { otpRegex } from "../../utils/regex.utils";
import { forgotPassword, verifyOtp } from "../../api/userApi";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email");

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60)

    useEffect(() => {
    if (resendTimer === 0) {
        return;
    }
    const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
    }, [resendTimer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (otpRegex.test(value)) {
      setOtp(value);
    }
  };

  const handleSubmit = async ( e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    if (!email) {
      toast.error("Email is missing");
      return;
    }
    try {
      setLoading(true);

      const response = await verifyOtp(email, otp)

      if(!response.success){
        toast.error("Verfication failed")
      }

      if(response.success){
        const resetToken = response.data?.resetToken
        toast.success("OTP verified successfully")
        navigate(`/resetPassword/${resetToken}`)
      }
    } catch (error) {
      toast.error("Invalid or expired OTP");
    } finally {
      setLoading(false);
    }
  };

    const handleResendOtp = async () => {
    if (!email) {
        toast.error("Email is missing");
        return;
    }
    try {
        setLoading(true)

        const response = await forgotPassword(email);

        if (response.success) {
            toast.success("New OTP sent to your email");
            setResendTimer(60)
        } else {
            toast.error("Unable to resend OTP");
        }
    } catch (error) {
        toast.error("Something went wrong");
    } finally {
        setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070B08] px-4">

      <div
        className=" w-full max-w-md rounded-2xl border border-green-500/20 bg-green-500/5 p-8 shadow-2xl shadow-green-500/5 
        backdrop-blur-xl">

        {/* Header */}
        <div className="mb-8 text-center">

          <div
            className=" mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30
             bg-green-500/10 text-2xl">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-white">
            Verify OTP
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Enter the 6-digit verification code sent
            to your email address.
          </p>

          {email && (
            <p className="mt-2 break-all text-sm font-medium text-green-400">
              {email}
            </p>
          )}

        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label
              htmlFor="otp"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Verification Code
            </label>

            <input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={otp}
              onChange={handleChange}
              placeholder="Enter 6-digit OTP"
              className=" w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-center text-2xl font-semibold 
              tracking-[0.5em] text-white outline-none placeholder:text-sm placeholder:tracking-normal placeholder:text-gray-600 
              transition-all focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20" />
          </div>

          <button
            type="submit"
            disabled={loading || otp.length !== 6}
            className=" w-full rounded-xl bg-green-500 py-3 font-semibold text-black transition-all duration-300
             hover:scale-[1.02] hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/40 disabled:cursor-not-allowed 
             disabled:opacity-50 disabled:hover:scale-100 ">
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

        </form>


        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Didn't receive the code?
          </p>

        {resendTimer > 0 ? (
        <p className="mt-2 text-sm text-gray-500">
            Resend OTP in{" "}
            <span className="font-medium text-green-400">
            {resendTimer}s
            </span>
        </p>
        ) : (
        <button
            type="button"
            disabled={loading}
            onClick={handleResendOtp}
            className=" mt-2 text-sm font-medium text-green-400 transition hover:text-green-300 disabled:cursor-not-allowed 
            disabled:opacity-50 ">
            {loading ? "Sending..." : "Resend OTP"}
        </button>
        )}

        </div>

        <button
          type="button"
          onClick={() => navigate("/forgotPassword")}
          className=" mt-6 w-full text-center text-sm text-gray-500 transition hover:text-gray-300">
          ← Change email
        </button>

      </div>

    </div>
  );
};

export default VerifyOtp;