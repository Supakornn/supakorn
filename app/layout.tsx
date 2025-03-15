import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Supakornn",
    description: "My portfolio website"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1 max-w-3xl mx-auto px-6 py-12">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
