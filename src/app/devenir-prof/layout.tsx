import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devenir prof de maths — rejoins l'équipe",
  description:
    "Étudiant en Grande École ? Rejoins MathSquads et donne des cours particuliers de maths rémunérés, en présentiel à Lyon, Lille, Paris ou en visio.",
  alternates: { canonical: "/devenir-prof" },
};

export default function DevenirProfLayout({ children }: { children: React.ReactNode }) {
  return children;
}
