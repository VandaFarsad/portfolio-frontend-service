import "@/app/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Initial Commit - Vanda Farsad",
  description:
    "Personal Portfolio of Vanda Farsad, a passionate software developer specializing in full stack development. Explore my projects, skills, and experience in creating digital solutions.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
