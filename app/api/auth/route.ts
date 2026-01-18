// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const body = await req.json();

//   if (body.email === "admin@test.com") {
//     return NextResponse.json({ success: true, token: "fake-jwt" });
//   }

//   return NextResponse.json(
//     { success: false },
//     { status: 401 }
//   );
// }