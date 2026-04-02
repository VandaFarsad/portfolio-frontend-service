import { Metadata } from "next";
import { Inter, Shadows_Into_Light } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-shadows",
});

export const metadata: Metadata = {
  title: "Intial Commit - Vanda Farsad",
  description: "Personal Portfolio of Vanda Farsad, a passionate software developer specializing in full-stack development. Explore my projects, skills, and experience in creating digital solutions.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="de" className="scroll-smooth">
      <head>
      </head>
      <body
        className={`${inter.className} ${shadowsIntoLight.variable} flex min-h-screen flex-col bg-zinc-50 text-gray-800`}
      >
          <main className="grow">{children}</main>
      </body>
    </html>
  );
}
