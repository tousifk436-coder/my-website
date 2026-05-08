export async function GET() {
  return Response.json({
    cases: [
      {
        id: 1,
        title: "Unknown Substance Report",
        severity: "high",
        status: "under investigation",
      },
    ],
  });
}