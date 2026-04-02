import photo from "@/public/assets/me.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full p-4 sm:p-10 lg:p-40 font-sans bg-slate-500 dark:bg-slate-600 text-black dark:text-white flex flex-col justify-center items-center"
    >
      <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600 dark:border-pink-400">About</p>
      <div className="w-full pt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 pb-6 items-stretch">
        <div className="flex">
          <Image
            className="rounded-2xl shadow-2xl shadow-slate-300 dark:shadow-slate-700 max-w-xs mx-auto sm:max-w-sm lg:mr-4 object-cover self-stretch"
            src={photo}
            alt="portrait"
          />
        </div>
        <article className="max-w-xs mx-auto sm:max-w-sm lg:max-w-xl lg:ml-4 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl shadow-slate-300 dark:shadow-slate-700 flex flex-col">
          <h2 className="mb-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Hey!</h2>
          <p className="text-sm lg:text-base xl:text-lg  lg:max-h-18 flex-grow text-gray-900 dark:text-gray-100">
            Ich bin Vanda und bringe Python-Kenntnisse sowie Erfahrung in DevOps und Frontend-Technologien mit. Gerne
            unterstütze ich dich bei der Konzeption, Entwicklung und Optimierung deiner Webapplikationen.
            <br />
            <br />
            Lass uns gemeinsam deine Ideen umsetzen und effiziente Lösungen schaffen. Ich freue mich auf eine spannende
            Zusammenarbeit mit dir.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
