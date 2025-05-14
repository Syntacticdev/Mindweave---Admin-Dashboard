import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { cookies } from "next/headers"
import Header from "@/components/Dashboard/Header";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mindweave",
  description: "Mindweave E-commerce Admin Dashboard With Analytics",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"


  return (
    <html lang="en">

      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <main className="w-full relative bg-slate-50 ">
            <SidebarTrigger className="absolute left-[-5px] top-[16px] " />
            <Header />
            {children}
            <Toaster />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
