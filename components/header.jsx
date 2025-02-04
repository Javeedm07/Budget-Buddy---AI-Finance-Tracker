import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard, IndianRupee } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import { darkTheme } from "@/app/(auth)/styles/styles";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex items-center">
            <IndianRupee
              size={28}
              className="text-blue-400 group-hover:rotate-12 transition-transform duration-300"
            />
            <h1
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hidden md:block
                         hover:from-blue-300 hover:to-blue-500 transition-all duration-300
                         relative after:content-[''] after:absolute after:bottom-0 after:left-0 
                         after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-400 
                         after:to-blue-600 after:scale-x-0 hover:after:scale-x-100 
                         after:transition-transform after:duration-300 after:origin-left"
            >
              Budget Buddy
            </h1>
          </div>
        </Link>

        {/* Navigation Links - Different for signed in/out users */}
        <div className="hidden md:flex items-center space-x-8">
          <SignedOut appearance={darkTheme}>
            <Link
              href="/#features"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              href="/#steps"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Working
            </Link>
            <Link
              href="/#testimonials"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Testimonials
            </Link>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn appearance={darkTheme}>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
              >
                <LayoutDashboard size={18} className="mr-2" />
                <span className="inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300
                          hover:shadow-lg hover:shadow-blue-600/20"
              >
                <PenBox size={18} className="mr-2" />
                <span className="inline">Add</span>
                <span className="hidden md:inline"> Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut appearance={darkTheme}>
            <SignInButton forceRedirectUrl="/dashboard" appearance={darkTheme}>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-blue-400 
                          transition-all duration-300"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn appearance={darkTheme}>
            <UserButton
              appearance={{
                darkTheme,
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
