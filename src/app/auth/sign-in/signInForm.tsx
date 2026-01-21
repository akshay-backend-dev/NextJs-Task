// "use client";

// import { useState, FormEvent } from "react";
// import { useRouter } from "next/navigation";

// export default function SignInForm() {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   const router = useRouter();

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Invalid email or password");
//         return;
//       }

//       localStorage.setItem("token", data.token);

//       router.push("/sidebar-page");
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong. Try again.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
//       >
//         <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
//           Sign In to Your Account
//         </h2>

//         {error && (
//           <p className="mb-4 text-center text-red-600 font-medium">{error}</p>
//         )}

//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="mb-1 block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@example.com"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#1B5A96] focus:outline-none"
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="mb-1 block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="••••••••"
//             className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#1B5A96] focus:outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full rounded-full bg-[#1B5A96] py-3 font-semibold text-white transition hover:bg-[#154774]"
//         >
//           Sign In
//         </button>

//         <p className="mt-4 text-center text-sm text-gray-500">
//           Don&apos;t have an account?{" "}
//           <span
//             className="cursor-pointer font-medium text-[#1B5A96] hover:underline"
//             onClick={() => router.push("/signup")}
//           >
//             Sign Up
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }









"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("token", data.token);
      router.push("/sidebar-page");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/images/navbar/mainLogo.svg" alt="Logo" width={120} height={60} />
        </div>

        {/* Heading */}
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">
          Welcome Back!
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Sign in with your credentials.
        </p>

        {/* Google Sign-in */}
        <button
          className="mb-4 flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white py-2 text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <Image src="/images/google-icon.svg" alt="Google" width={20} height={20} />
          <span className="ml-2">Sign in with Google</span>
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm text-gray-500">
            <span className="bg-white px-2">Or, sign in with your email</span>
          </div>
        </div>

        {error && <p className="mb-4 text-center text-red-600 font-medium">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#1B5A96] focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-[#1B5A96] focus:outline-none"
            />
            <div className="mt-1 text-right text-sm">
              <span
                className="cursor-pointer text-[#1B5A96] hover:underline"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot Password?
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[#1B5A96] py-3 font-semibold text-white transition hover:bg-[#154774]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <span
            className="cursor-pointer font-medium text-[#1B5A96] hover:underline"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}