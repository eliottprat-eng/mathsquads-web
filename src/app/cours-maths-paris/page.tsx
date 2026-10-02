import type { Metadata } from "next";
import CityPage from "@/components/city/CityPage";
import { parisPage as data } from "@/lib/city-pages";

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  alternates: { canonical: data.path },
  openGraph: { title: data.title, description: data.ogDescription, url: data.path },
  twitter: { title: data.title, description: data.ogDescription },
};

export default function CoursMathsParisPage() {
  return <CityPage data={data} />;
}
