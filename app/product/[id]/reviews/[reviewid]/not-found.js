"use client";
import { usePathname } from "next/navigation";

export default function NotFoundPage() {
  const pathName = usePathname();
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p>the Review Page you are looking for does not exist.</p>
    </div>
  );
}
