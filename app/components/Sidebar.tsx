import Link from "next/link";

export default function Sidebar() {
  return (
    <aside style={{ width: 200 }}>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/users">Users</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </aside>
  );
}