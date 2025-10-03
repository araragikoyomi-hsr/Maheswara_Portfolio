import { IconLeaf } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { SectionMotion } from "../common/motion/Section";

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = "A short story of me";
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, I'm Maheswara </h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        I am a Software Developer specializing in building scalable mobile and
        web applications with React Native, NestJS, and modern frameworks. With
        experience as an SDE-1 at Salesken.ai, I have contributed to developing
        cross-platform solutions, real-time integrations, and secure
        authentication systems. My technical expertise spans TypeScript,
        JavaScript, and tools like Electron.js and Next.js, enabling me to
        deliver efficient and maintainable solutions.
      </p>
      <p>
        Beyond coding, I am passionate about problem-solving, performance
        optimization, and crafting user-friendly experiences. I enjoy learning
        new technologies and continuously improving my skills to build solutions
        that are both innovative and reliable.
      </p>
    </motion.section>
  );
};
