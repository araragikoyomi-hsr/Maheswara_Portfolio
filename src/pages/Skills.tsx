import { motion } from "framer-motion";
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandGit,
  IconBrandGithub,
} from "@tabler/icons-react";
import { SectionMotion } from "../common/motion/Section";
import { SectionHeader } from "../components/SectionHeader";
import { SkillCard } from "../components/SkillCard";

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = "Technologies I work with";

  const skills = [
    { label: "React Native (Expo)", icon: <IconBrandReact /> },
    { label: "Next.js", icon: <IconBrandNextjs /> },
    { label: "Tailwind CSS", icon: <IconBrandTailwind /> },
    { label: "JavaScript (ES6+)", icon: <IconBrandJavascript /> },
    { label: "TypeScript", icon: <IconBrandTypescript /> },
    { label: "Python", icon: <IconBrandPython /> },
    { label: "Git", icon: <IconBrandGit /> },
    { label: "GitHub", icon: <IconBrandGithub /> },
  ];

  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
