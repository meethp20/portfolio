import Masonry from "react-masonry-css";
import Card from "./Card";

export default function Pro1() {
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    500: 1,
  };

  const projects = [
    {
      link: "https://github.com/meethp20/docuchat-app",
      appName: "Docuchat-app",
      description:
        "DocuChat is a modern web application that combines PDF document processing with AI-powered chat capabilities.",
      spanStack: ["Next.js", "Supabase", "Typescript", "Gemini Api"],
    },
    {
      link: "https://github.com/meethp20/Crypto-Crash",
      appName: "Crypto-Crash",
      description:
        "A real-time multiplayer crypto crash game with WebSocket integration and cryptocurrency conversions.",
      spanStack: ["React", "MongoDb", "Websockets", "Nodejs", "Express"],
    },
    {
      link: "https://image-gallery-eosin-seven.vercel.app/",
      appName: "Image Gallery",
      description: "Takes image and displays it all in a grid.",
      spanStack: ["React"],
    },
    {
      link: "https://github-profiles-blue.vercel.app/",
      appName: "GitHub Profile Finder",
      description: "Finds GitHub profile of a user.",
      spanStack: ["JavaScript"], // Note: fix typo 'Javasript' from original
    },
    {
      link: "#",
      appName: "Blog App",
      description: "(in development)",
      spanStack: ["React", "Tailwind", "Appwrite", "Redux", "Bun"],
    },
    {
      link: "https://todo-list-ruddy-alpha-51.vercel.app/",
      appName: "Todo List",
      description: "A simple todo list I made for fun just using JS.",
      spanStack: [], // No stack mentioned in original
    },
  ];

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"

    >
      {projects.map((project, idx) => (
        <Card
          key={idx}
          link={project.link}
          appName={project.appName}
          description={project.description}
          spanStack={project.spanStack}
        />
      ))}
    </Masonry>
  );
}
