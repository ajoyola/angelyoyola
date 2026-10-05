import { Project } from "./types";

// Manual snapshot of real public GitHub repositories and real client work,
// captured 2026-08-07. Update by hand when new work should be featured —
// this is not a live GitHub API feed.
export const projects: Project[] = [
  {
    type: "github",
    name: "website-angelyoyola",
    description:
      "My personal project in which I have created this website you are seeing right now. It uses Next.js, TypeScript, and Tailwind CSS, statically exported and deployed on Netlify.",
    url: "https://github.com/ajoyola/angelyoyola",
    language: "TypeScript",
    image: "/images/projects/website.png",
    featured: true,
  },
  {
    type: "client",
    name: "An Embedded In-Cabin Lightweight High-Performance 3D Gaze Estimation System",
    description: "A DMS (ADAS) system that monitors the 3D gaze of the driver to detect his point of attention. The system is able to detect drowsiness.",
    category: "Python, Pytorch, ONNX, CV, AI",
    liveUrl: "https://amslaurea.unibo.it/id/eprint/26674/",    
    image: "/images/projects/3dgaze.png",
    featured: true,
  },
  {
    type: "client",
    name: "A lightweight high-performance Unsafe Driving detection augmented by the CAN bus",
    description: "A DMS (ADAS) system that detects unsafe driving.",
    category: "Python, Pytorch, ONNX, CV, AI",
    liveUrl: "https://amslaurea.unibo.it/id/eprint/26674/",    
    featured: true,
  },
  {
    type: "client",
    name: "Human action recognition",
    description: "A computer vision system that detects several human actions by analyzing the body's keypoints",
    category: "Python, Pytorch, CV, AI",
    image: "/images/projects/fall.png",
    featured: true,
  },
  {
    type: "client",
    name: "A Dijkstra-Based Algorithm for Selecting the Shortest-Safe Evacuation Routes in Dynamic Environments (SSER)",
    description: "It is one of my first papers presented in the IEA/AIE and part of the Advances in AI book of Springer. The intelligent system addresses the problem to find the shortest-safe routes in buildings with many evacuation doors and where the accessibility of internal areas could be changed by different kind of sensors",
    category: "C++, AI",
    liveUrl: "https://link.springer.com/chapter/10.1007/978-3-319-60042-0_15",    
    featured: true,
  },
  {
    type: "github",
    name: "ros2-python-c++",
    description:
      "A structured collection of projects developed using ROS2. It demonstrates practical implementation of core concepts and software architecture principles used in modern robotic systems.",
    url: "https://github.com/ajoyola/ROS2",
    language: "Python, C++",
    stars: 0,
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
