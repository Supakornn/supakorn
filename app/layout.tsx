import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Navigation } from "@/components/navigation";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Supakornn",
    description: "My portfolio website"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={spaceGrotesk.className}>
                <Navigation />
                <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>
            </body>
        </html>
    );
}
