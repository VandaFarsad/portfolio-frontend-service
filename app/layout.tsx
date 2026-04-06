import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Initial Commit - Vanda Farsad",
  description:
    "Personal Portfolio of Vanda Farsad, a passionate software developer specializing in full-stack development. Explore my projects, skills, and experience in creating digital solutions.",
};

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
