import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stack from "./components/Stack";

export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Stack />
      <Experience />
      <Footer />
    </>
  );
}
