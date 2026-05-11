import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | EICAD Group",
  description:
    "Discover the vision, mastery, and architectural philosophy of EICAD Group — where innovation meets timeless craft.",
};

export default function AboutPage() {
  return <AboutClient />;
}
