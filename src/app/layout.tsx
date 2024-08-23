import type { Metadata } from "next";
import "./globals.css";
import Background from "@/assets/background";

export const metadata: Metadata = {
  title: "Mario Correa | Portfolio",
  description: "Developer, designer, and creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#121212] relative">
        <Background />
        {children}
        <ScrollIndicator />
      </body>
    </html>
  );
}

function ScrollIndicator() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-10 animate-fade-in">
      <svg
        className="w-full h-full"
        viewBox="0 0 24 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="22"
          height="38"
          rx="11"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          className="animate-scroll-dot"
          cx="12"
          cy="8"
          r="3"
          fill="white"
        />
      </svg>
      <span className="sr-only">Scroll down</span>
    </div>
  );
}