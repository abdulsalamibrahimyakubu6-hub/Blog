"use client";

import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightPanel from "../components/RightPanel";
import Providers from "@/components/Providers";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black text-zinc-100">
      {/* Sidebar – hidden on small screens */}
      <Sidebar />

      {/* Main feed column */}
      <main className="flex-1 max-w-2xl mx-auto p-4">
        <Feed />
      </main>

      {/* Right panel – visible on xl screens */}
      <RightPanel />
      <Providers/>
    </div>
  );
}
