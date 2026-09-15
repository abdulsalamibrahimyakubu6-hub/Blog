"use client";

export default function RightPanel() {
  return (
    <aside className="hidden xl:block w-64 p-4 border-l border-zinc-800">
      <h2 className="text-xl font-bold text-primary mb-4">Trending</h2>
      <ul className="space-y-2 text-gray-300">
        <li>#React</li>
        <li>#NextJS</li>
        <li>#TailwindCSS</li>
        <li>#WebDev</li>
      </ul>
    </aside>
  );
}
