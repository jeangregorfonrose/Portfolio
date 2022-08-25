import minesweeper from "../assets/projects/minesweeper.jpg";
import rle from "../assets/projects/rle.jpg";
import imageProcessing from "../assets/projects/processing.jpg";
import latinBeastInvestment from "../assets/projects/latinbeastinvestment.png";
import armSimulator from "../assets/projects/armsimulator.jpg";
import pageRank from "../assets/projects/pagerank.jpg";
import explora from "../assets/projects/explora.png";
import musicfan from "../assets/projects/musicfan.jpg";
const projects = [
  {
    name: "Minesweeper Game",
    preview: minesweeper,
    techs: ["C++", "SFML Library"],
    desc: [
      "Recreated the minesweeper game with C++ and the SMFL library for the interface.",
      "Designed with a singleton pattern by creating a Toolbox class to manage the game.",
    ],
    githubLink: "https://github.com/jeangregorfonrose/minesweeper",
  },
  {
    name: "Image Compression",
    preview: rle,
    techs: ["C++", "RLE"],
    desc: [
      "Develop routines to encode and decode data for images using run-length encoding.",
    ],
    githubLink: "",
  },
  {
    name: "Image Processing",
    preview: imageProcessing,
    techs: ["C++", "TGA"],
    desc: [
      "Develop a program to apply blending modes (multiply, subtract, screen, overlay) to images. Also, perform some rotation and combination of images.",
      "Read and write to binary files in TGA format.",
      "Code unit test to make sure image manipulation was giving the correct result.",
    ],
    githubLink: "https://github.com/jeangregorfonrose/image-processing",
  },
  {
    name: "Latin Beast Investments",
    preview: latinBeastInvestment,
    techs: ["TypeScript", "React", "Express", "Recharts"],
    desc: [
      "We develop a platform that suggests the safest stocks to invest in in the long term. To determine how safe is a stock, we calculated how close the stock price is on average to its intrinsic value.",
    ],
    githubLink: "https://github.com/jeangregorfonrose/Latin-Beast-Investment",
  },
  {
    name: "Ultra-Supercomputer Calculator",
    preview: armSimulator,
    techs: ["Python"],
    desc: ["Simulated a CPU that executes functions from an ISA."],
    githubLink: "",
  },
  {
    name: "Page Rank",
    preview: pageRank,
    techs: ["C++"],
    desc: [""],
    githubLink: "https://github.com/jeangregorfonrose/pagerank",
  },
  {
    name: "Explora",
    preview: explora,
    techs: ["HTML", "CSS", "React"],
    desc: [""],
    githubLink: "https://github.com/jeangregorfonrose/Explora",
  },
  {
    name: "MusicFan",
    preview: musicfan,
    techs: ["HTML", "CSS", "React"],
    desc: [""],
    githubLink: "https://github.com/jeangregorfonrose/music-fan",
  },
];

export default projects;
