"use client";

import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ApolloProvider } from "@/providers/ApolloProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ApolloProvider>
      {children}

      <Toaster richColors position="top-right" />

      <SpeedInsights />
    </ApolloProvider>
  );
};
