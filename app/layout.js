import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Project",
    description: "My project",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <header>
            <h1>Header goes here</h1>
        </header>

        <main>{children}</main>

        </body>
        </html>
    );
}
