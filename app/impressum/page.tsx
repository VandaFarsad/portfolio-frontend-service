import { Metadata } from "next";
import Impressum from "../components/Impressum";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz - Initial Commit",
  description: "Impressum und Datenschutzerklärung der Portfolio-Website von Dr. Vanda Farsad.",
};

export default function ImpressumPage() {
  return <Impressum />;
}
