"use client";

export default function Sidebar() {
  return (
    <aside className="hidden xl:block w-64 p-4 border-r border-zinc-800">
      <h2 className="text-2xl font-bold text-primary mb-6">Blogger</h2>
      <nav className="space-y-4">
        <a href="/" className="block text-gray-200 hover:text-primary">Home</a>
        <a href="/profile" className="block text-gray-200 hover:text-primary">Profile</a>
        <a href="/explore" className="block text-gray-200 hover:text-primary">Explore</a>
      </nav>
    </aside>
  );
}
