"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../utils/api";
import MicropostCard from "./MicropostCard";

export default function Feed() {
  const { data, isPending, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000
  });

  if (isPending) return <div className="text-center py-4">Loading...</div>;
  
  // Optional: Handle error states gracefully
  if (error) return <div className="text-center py-4 text-red-500">Error loading posts.</div>;

  return (
    <div className="space-y-4">
      {/* Fallback to an empty array if data is undefined */}
      {(data ?? []).length > 0 ? (
        data.map((post) => (
          <MicropostCard key={post.id} post={post} />
        ))
      ) : (
        <div className="text-center py-4 text-gray-400">No posts yet.</div>
      )}
    </div>
  );
}

