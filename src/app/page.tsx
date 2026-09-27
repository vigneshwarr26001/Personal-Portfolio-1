import { About } from "@/components/organisms/About";
import { Certifications } from "@/components/organisms/Certifications";
import { Contact } from "@/components/organisms/Contact";
import { Education } from "@/components/organisms/Education";
import { Experience } from "@/components/organisms/Experience";
import { Footer } from "@/components/organisms/Footer";
import { Hero } from "@/components/organisms/Hero";
import { Navbar } from "@/components/organisms/Navbar";
import { Projects } from "@/components/organisms/Projects";
import { Skills } from "@/components/organisms/Skills";
import { achievements } from "@/data/achievements";
import { certifications, continuousLearning } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { sections } from "@/data/sections";
import { skillCategories } from "@/data/skills";
import { buildPersonJsonLd } from "@/lib/seo";

export default function HomePage() {
    const jsonLd = JSON.stringify(buildPersonJsonLd()).replace(/</g, "\\u003c");

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
            <Navbar name={profile.name} />
            <main id="main-content" tabIndex={-1} className="focus:outline-none">
                <Hero profile={profile} />
                <About content={sections.about} profile={profile} achievements={achievements} />
                <Experience content={sections.experience} items={experience} />
                <Projects content={sections.projects} projects={projects} />
                <Skills content={sections.skills} categories={skillCategories} />
                <Education content={sections.education} items={education} />
                <Certifications
                    content={sections.certifications}
                    certifications={certifications}
                    learning={continuousLearning}
                />
                <Contact content={sections.contact} profile={profile} />
            </main>
            <Footer profile={profile} />
        </>
    );
}
