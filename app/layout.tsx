import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";



export const metadata: Metadata = {
  title: "APO",
  description: "APO, we believe that parenting is a journey filled with love, challenges, and lifelong learning. Our mission is to empower parents with valuable insights, practical advice, and culturally relevant guidance to raise confident, responsible, and well-rounded children. Parenting comes with unique experiences—from preserving our rich traditions to navigating modern parenting challenges. Our platform is dedicated to providing support and inspiration to parents, guardians, and caregivers by sharing expert tips, personal stories, and research-backed information tailored to the African context. Whether you're a first-time parent or an experienced caregiver, we are here to walk with you on this beautiful journey of raising the next generation with wisdom, love, and strong values.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
      >
         <div className="text-white font-semibold bg-[#dfa261] py-1 flex flex-col justify-center items-center text-[16px]">
                <h1 className="uppercase">africa parenting organization</h1>
                <p className="italic">info@africaparenting.org</p>
              </div>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
