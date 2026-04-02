import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Intial Commit - Vanda Farsad",
  description: "Personal Portfolio of Vanda Farsad, a passionate software developer specializing in full-stack development. Explore my projects, skills, and experience in creating digital solutions.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="de" className="scroll-smooth">
      <head>
      </head>
      <body>
          <main>{children}</main>
      </body>
    </html>
  );
}
