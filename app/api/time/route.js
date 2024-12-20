export const dynamic = "force-dynamic";
export async function GET(req) {
  return new Response(new Date().toLocaleTimeString());
}
