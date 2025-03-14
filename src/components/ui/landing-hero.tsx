"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-600">
          <TypewriterComponent
            options={{
              strings: [
                "Conversation",
                "Photo Generation.",
                "video Generation",
                "Code Generation.",
                "Image Generation"
              ],
              autoStart: true,
              loop: true,
            }}
          />
       
        </div>
      
      </div>
    </div>
  );
};
