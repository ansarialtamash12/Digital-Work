import { generateMetadata } from "@/lib/seo-config";
import ExpertsClient from "./ExpertsClient";

export const metadata = generateMetadata('experts');

export default function ExpertsPage() {
  return <ExpertsClient />;
}

