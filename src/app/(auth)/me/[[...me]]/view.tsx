"use client";
import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { Loader } from "lucide-react";

const UserProfileView = () => {
  const { theme } = useTheme();
  return (
    <UserProfile
      fallback={
        <div className="w-screen h-screen bg-muted flex items-center justify-center">
          <Loader className="animate-spin" />
        </div>
      }
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
        elements: {
          rootBox: "w-screen h-screen",
          cardBox: "w-full h-full max-w-full rounded-none",
          pageScrollBox: "rounded-none",
        },
        baseTheme: theme === "dark" ? dark : undefined,
      }}
      path="/me"
    />
  );
};

export default UserProfileView;
