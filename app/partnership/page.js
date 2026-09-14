import { generateMetadata } from "@/lib/seo-config";
import PartnershipClient from "./PartnershipClient";

export const metadata = generateMetadata('partnership');

export default function PartnershipPage() {
  return <PartnershipClient />;
}