import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden mx-auto px-10 py-4 flex flex-col items-center bg-white dark:bg-slate-800 text-black dark:text-white">
      <div className="flex space-x-4 mt-8 items-center">
        <a href="https://github.com/VandaFarsad" target="_blank" rel="noopener noreferrer">
          <span className={"h-7 w-7 icon-[mdi--github]"}></span>
        </a>
        <a href="https://www.linkedin.com/in/vanda-farsad-4b98321a5/" target="_blank" rel="noopener noreferrer">
          <span className={"h-7 w-7 icon-[mdi--linkedin]"}></span>
        </a>
        <a href="https://www.xing.com/profile/Vanda_Farsad" target="_blank" rel="noopener noreferrer">
          <span className={"h-7 w-7 icon-[mdi--xing]"}></span>
        </a>
        <a href="mailto:contact@initial-commit.com">
          <span className={"h-7 w-7 icon-[mdi--email]"}></span>
        </a>
      </div>

      <div className="py-4 text-center">
        <small>
          Copyright &copy; Vanda Farsad |{" "}
          <Link className="hover:underline" href="/impressum" target="_blank" rel="noopener noreferrer">
            Impressum & Datenschutz
          </Link>
        </small>
      </div>
    </footer>
  );
};
export default Footer;
