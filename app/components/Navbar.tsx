import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#eee" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/dashboard">Dashboard</Link> |{" "}
      <Link href="/login">Login</Link>
    </nav>
  );
}