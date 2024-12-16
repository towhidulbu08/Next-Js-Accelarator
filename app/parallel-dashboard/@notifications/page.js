import wait from "@/lib/wait";
import Link from "next/link";

export default async function NotificationsPage() {
  await wait(3000);
  return (
    <div className="text-xl p-4 row-span-2 border border-gray-200 rounded h-[745px] flex items-center justify-center">
      <span>ALL NOTIFICATIONS </span>{" "}
      <div className="ml-2">
        <Link href="/parallel-dashboard/seen" className="text-blue-400">
          {" "}
          SEEN
        </Link>
      </div>
    </div>
  );
}
