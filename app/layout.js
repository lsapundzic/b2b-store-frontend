import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sotla Laboratory Experts",
  description:
    "Manufacturers, distributors, and sellers of laboratory equipment & lab consummables",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header></header>
        {children}
      </body>
    </html>
  );
}
