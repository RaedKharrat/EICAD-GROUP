import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | EICAD Group",
  description:
    "Explore our portfolio of contemporary luxury homes, commercial spaces, and architectural masterpieces crafted by EICAD Group.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
