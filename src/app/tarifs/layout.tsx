import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs cours de maths — dès 20€/h, 1ère heure gratuite",
  description:
    "Tarifs transparents et sans engagement : dès 20€/h en présentiel à Lyon et Lille, 25€/h à Paris, 20€/h en visio partout en France. 1ère heure gratuite.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
