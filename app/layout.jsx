import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roja Hosseini Motlagh",
  description: "JavaScript Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <button className="absolute">🌒</button> */}
        {children}
      </body>
    </html>
  );
}
