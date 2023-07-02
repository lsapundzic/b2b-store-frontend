import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import routes from "./routes/routes";

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
        <header>
          <Navbar routes={routes}></Navbar>
        </header>
        {children}
      </body>
    </html>
  );
}
