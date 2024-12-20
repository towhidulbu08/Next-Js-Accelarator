import { cookies, headers } from "next/headers";

export async function GET(req) {
  // const reqHeaders = new Headers(req.headers);
  const headerList = headers();
  // console.log(reqHeaders.get("Authorization"));
  cookies().set("page", "2");
  console.log(cookies().get("page"));

  return new Response("Profile API", {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}
