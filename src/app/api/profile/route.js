// app/api/profile/route.js

export async function GET(req) {
  try {
    // get token from headers
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "No token provided" }),
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    // MOCK decode (replace later with JWT verify)
    const userId = token?.split("-")[2];

    if (!userId) {
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401 }
      );
    }

    // mock user (replace with DB later)
    const user = {
      id: userId,
      name: "Test User",
      role: "admin",
    };

    return new Response(
      JSON.stringify({ user }),
      { status: 200 }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Server error", details: error.message }),
      { status: 500 }
    );
  }
}