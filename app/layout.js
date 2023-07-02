import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Sotla Laboratory Experts",
    description: "Manufacturers, distributors and sellers of high quality laboratory equipment and consumables",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <header>
            <h1>Header goes here</h1>
        </header>
        {children}
        </body>
        </html>
    );
}
