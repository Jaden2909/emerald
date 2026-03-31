"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BookingSection() {
    const [otp, setOtp] = useState("");
const [otpSent, setOtpSent] = useState(false);
const [verified, setVerified] = useState(false);
const [otpDetails, setOTPDetails] = useState({ token: "" });
const [showModal, setShowModal] = useState(false);
const [loading, setLoading] = useState(false);
const [authData, setAuthData] = useState({ token: null });

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    checkin: "",
    checkout: "",
    roomType: ""
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!verified) {
    alert("Please verify your mobile number with OTP before booking.");
    return;
  }
  try {
    console.log("Form submitted", form);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_COLLEGE_ERP_API}customer-bookings/Emerald`,
      {
        name: form.name,
        mobile: form.mobile,
        checkin: form.checkin,
        checkout: form.checkout,
        roomType: form.roomType,
        email:"emeraldsuites@mail.com"
      },
      {
        headers: {
          Authorization: `Bearer ${authData?.token}`, // if required
        },
      }
    );

    console.log("Success:", res.data);
  } catch (err: any) {
    console.error("Error:", err.response?.data || err.message);
  }
};
const verifyOtpHandler = async () => {
  setLoading(true);
  console.log("Verifying OTP with details:", {
    name: form.name,
    mobile: form.mobile,
    token: otpDetails?.token,
    otp,
  });
  try {
  const response =   await axios.post(
      `${process.env.NEXT_PUBLIC_COLLEGE_ERP_API}verify-otp-non-member`,
      {
        id: form.name,
        mobileNo: form.mobile,
        token: otpDetails?.token,
        otp,
        branch: "Emerald",
      }
    );
    console.log("OTP Verification Response:", response);
    setAuthData(response?.data);
    setVerified(true);
    setShowModal(false);
    alert("OTP Verified ✅");
  } catch (err) {
    console.error(err);
    alert("Invalid OTP ❌");
  } finally {
    setLoading(false);
  }
};

//"/mobile-verify-otp"
const receiveOTP = async(e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault(); // optional
  
  // your logic
   const response =  await axios.post(`${process.env.NEXT_PUBLIC_COLLEGE_ERP_API}mobile-verify-otp`, {
  mobileNo: form.mobile,
  brand:"Emerald Rooms"
});
console.log(response?.data?.otpResponse);
  if (response?.status === 200) {
    setOtpSent(true);
    setOTPDetails(response?.data?.otpResponse);
       console.log("OTP Details:", response);
    setShowModal(true); // open modal
  //  alert("OTP sent successfully");
  } else {
    alert("Failed to send OTP");
  }
}

  return (
    <section
      id="booking"
      className="py-20 border-t border-white/10 px-6 bg-[#050a08]"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h3 className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">
          Book Your Stay
        </h3>

        <p className="text-white/60 mb-12 max-w-2xl mx-auto italic">
          Experience comfort and elegance at Emerald. Reserve your room effortlessly.
        </p>

        {/* Form */}
        <form
  onSubmit={handleSubmit}
  className="grid md:grid-cols-2 gap-6 text-left"
>
  {/* Name */}
  <input
    type="text"
    name="name"
    placeholder="Full Name"
    value={form.name}
    onChange={handleChange}
    className="bg-transparent border border-white/20 px-4 py-3 text-white focus:border-emerald-500 outline-none rounded-lg"
    required
  />

  {/* Mobile + OTP Button */}
  <div className="flex gap-2">
    <input
      type="tel"
      name="mobile"
      placeholder="Mobile Number"
      value={form.mobile}
      onChange={handleChange}
      className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-white focus:border-emerald-500 outline-none rounded-lg"
      required
    />
    <button
      type="button"
      onClick={receiveOTP}
      className="px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm rounded-lg transition-all duration-300 whitespace-nowrap"
    >
      Get OTP
    </button>
  </div>

  {/* OTP Input (show only after sending OTP if needed) */}
  <input
    type="text"
    name="otp"
    placeholder="Enter OTP"
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
    className="bg-transparent border border-white/20 px-4 py-3 text-white focus:border-emerald-500 outline-none rounded-lg"
  />

  {/* Verify OTP Button */}
  <button
    type="button"
    onClick={verifyOtpHandler}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-all duration-300"
  >
    Verify OTP
  </button>

  {/* Check-in & Check-out in one row */}
  <div className="md:col-span-2 grid grid-cols-2 gap-4">
    <input
      type="date"
      name="checkin"
      value={form.checkin}
      onChange={handleChange}
      className="bg-transparent border border-white/20 px-4 py-3 text-white focus:border-emerald-500 outline-none rounded-lg"
      required
    />

    <input
      type="date"
      name="checkout"
      value={form.checkout}
      onChange={handleChange}
      className="bg-transparent border border-white/20 px-4 py-3 text-white focus:border-emerald-500 outline-none rounded-lg"
      required
    />
  </div>

  {/* Room Type */}
  <select
    name="roomType"
    value={form.roomType}
    onChange={handleChange}
    className="md:col-span-2 bg-transparent border border-white/20 px-4 py-3 text-white focus:border-emerald-500 outline-none rounded-lg"
    required
  >
    <option value="">Select Room Type</option>
    <option>Standard Room</option>
    <option>Deluxe Room</option>
    <option>VIP Suite</option>
    <option>2 BHK Apartment</option>
  </select>

  {/* Submit */}
  <div className="md:col-span-2 text-center mt-6">
    <button
      type="submit"
      className="px-10 py-3 border border-[#c5a059] text-[#c5a059] uppercase tracking-widest text-xs hover:bg-[#c5a059] hover:text-black transition-all duration-500 rounded-lg"
    >
      Book Now
    </button>
  </div>
</form>
      </div>
      {showModal && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-[#0b1410] p-6 rounded-lg w-[90%] max-w-md border border-white/10">

      <h3 className="text-white text-lg mb-4 text-center">
        Enter OTP
      </h3>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full bg-transparent border border-white/20 px-4 py-3 text-white mb-4 outline-none"
      />

      <div className="flex justify-between gap-4">
        <button
          onClick={() => setShowModal(false)}
          className="w-full py-2 border border-white/20 text-white"
        >
          Cancel
        </button>

        <button
          onClick={verifyOtpHandler}
          disabled={loading}
          className="w-full py-2 bg-[#c5a059] text-black font-semibold"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  </div>
)}
    </section>
  );
}