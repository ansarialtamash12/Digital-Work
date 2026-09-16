import { generateMetadata } from "@/lib/seo-config";
import ContactClient from "./ContactClient";

export const metadata = generateMetadata('contact');

export default function ContactPage() {
  return <ContactClient />;
}

