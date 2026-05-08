export async function POST(req) {
  const { email, password } = await req.json();

  // MOCK DB (replace later with MongoDB/Prisma)
  const users = [
    {
      id: 1,
      email: "doctor@med.com",
      password: "1234",
      role: "doctor",
    },
    {
      id: 2,
      email: "forensic@lab.com",
      password: "1234",
      role: "forensic_officer",
    },
    {
      id: 3,
      email: "admin@site.com",
      password: "1234",
      role: "admin",
    },
  ];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return Response.json({
    token: "secure-token-" + user.id,
    user,
  });
}