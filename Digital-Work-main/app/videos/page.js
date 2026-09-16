import { generateMetadata } from "@/lib/seo-config";
import VideosClient from "./VideosClient";

export const metadata = generateMetadata('videos');

export default function VideosPage() {
  return <VideosClient />;
}
