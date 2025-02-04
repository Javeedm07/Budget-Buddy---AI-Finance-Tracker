"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center bg-gray-950 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 animate-pulse" />

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Page Not Found</h2>

          <p className="text-gray-400 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link href="/">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300
                        hover:shadow-lg hover:shadow-blue-600/20 flex items-center gap-2"
            >
              <Home size={18} />
              Return Home
            </Button>
          </Link>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-blue-400 
                      transition-all duration-300 flex items-center gap-2"
          >
            <MoveLeft size={18} />
            Go Back
          </Button>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-150" />
    </div>
  );
}
