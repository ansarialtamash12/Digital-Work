import { generateMetadata } from "@/lib/seo-config";
import AcademyClient from "./AcademyClient";

export const metadata = generateMetadata('academy');

export default function AcademyPage() {
  return <AcademyClient />;
}