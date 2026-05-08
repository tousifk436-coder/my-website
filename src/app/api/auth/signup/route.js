// app/api/auth/signup/route.js

export async function POST(req) {
  const { name, email, password, role } = await req.json();

  // basic validation
  if (!name || !email || !password) {
    return Response.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // MOCK DB (replace with real DB later)
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role: role || "patient", // default role
  };

  return Response.json({
    message: "User registered successfully",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  });
}