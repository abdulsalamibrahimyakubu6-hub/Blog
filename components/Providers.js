"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../contexts/AuthContext";

// Create a QueryClient instance inside the client component so it isn't passed as a prop from a server component
const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AuthProvider>
  );
}
