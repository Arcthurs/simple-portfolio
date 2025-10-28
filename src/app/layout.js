import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Portfolio Saya",
  description: "Website portfolio sederhana dengan Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link> |{" "}
            <Link href="/about">About</Link> |{" "}
            <Link href="/projects">Projects</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} Dibuat dengan ❤️ oleh Saya</p>
        </footer>
      </body>
    </html>
  );
}

