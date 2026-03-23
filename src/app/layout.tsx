import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holy Family Dental Care | Specialist Care in Kuravilangad",
  description: "Experience premium dental care at Holy Family Dental Care, Kuravilangad. Led by Dr. Thara Maria Joseph, we specialize in Prosthodontics, Endodontics, and Implantology.",
  keywords: "Dental Clinic Kuravilangad, Dentist Kottayam, Dr. Thara Maria Joseph, Root Canal Treatment Kerala, Dental Implants Kottayam, Prosthodontics Kuravilangad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/10 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
