import wait from "@/lib/wait";

export default async function AssignmentsPage() {
  await wait(2000);
  return (
    <div className="text-xl p-4 border border-black-200 rounded h-[360px] flex items-center justify-center">
      ASSIGNMENTS
    </div>
  );
}
