import { generateMetadata } from "@/lib/seo-config";
import CommunityClient from "./CommunityClient";

export const metadata = generateMetadata('community');

export default function CommunityPage() {
  return <CommunityClient />;
}
