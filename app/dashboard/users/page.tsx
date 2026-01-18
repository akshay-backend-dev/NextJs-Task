// async function getUsers() {
//   const res = await fetch("http://localhost:3000/api/users");
//   return res.json();
// }

// export default async function UsersPage() {
//   const users = await getUsers();

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map((u: any) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }