import { generateMetadata } from "@/lib/seo-config";
import AboutClient from "./AboutClient";

export const metadata = generateMetadata('about');

export default function AboutPage() {
  return <AboutClient />;
}