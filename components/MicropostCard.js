"use client";

import { useState } from "react";
import { likePost } from "../utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function MicropostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation(() => likePost(post.id), {
    onSuccess: () => {
      // Optionally refetch posts or update cache
      queryClient.invalidateQueries(["posts"]);
    },
    onError: () => {
      // revert UI state on error
      setLiked(false);
    },
  });

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      mutation.mutate();
    }
  };

  return (
    <article className="bg-zinc-900 rounded-lg p-4 shadow-md">
      <header className="flex items-center space-x-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-zinc-700" />
        <div>
          <h3 className="font-semibold text-primary">{post.author_name || "Anonymous"}</h3>
          <time className="text-xs text-gray-500">{new Date(post.created_at).toLocaleString()}</time>
        </div>
      </header>
      <p className="text-gray-200 mb-3">{post.content}</p>
      <button
        onClick={handleLike}
        className="flex items-center space-x-1 text-red-500 hover:text-red-400"
        disabled={mutation.isLoading}
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
        <span>{post.likes_count || 0}</span>
      </button>
    </article>
  );
}
