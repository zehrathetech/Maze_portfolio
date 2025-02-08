export const mazeData = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Start position
export const startRow = 1, startCol = 1;

// End position (Bottom-right corner)
export const endRow = 11, endCol = 18;

// **Checkpoints placed FAR apart and ONLY on valid paths (0s)**
export const checkpoints = [
  {
    id: 1,
    row: 3,
    col: 2,
    title: "About Me",
    color: "blue",
    description:
      "Yo! I'm a Java Full Stack wizard 🧙‍♂️, crafting clean code and building killer apps. Love solving complex bugs like a detective 🕵️‍♂️ and always pushing my tech limits! 🚀",
    link: "",
  },
  {
    id: 2,
    row: 3,
    col: 10,
    title: "Experience",
    color: "red",
    description:
      "💼 Solution Developer @ Tata Technologies - Present",
    link: "",
  },
  {
    id: 3,
    row: 5,
    col: 5,
    title: "Education",
    color: "green",
    description:
      "🎓\nB.Tech. in Computer Science 🖥️\nPG-DAC, CDAC Bangalore 💡",
    link: "",
  },
  {
    id: 4,
    row: 7,
    col: 14,
    title: "Skills",
    color: "orange",
    description:
      "Built diff 🤖. See what makes me a tech ninja. ⚡\n💻 Technical: API Dev, Microservices, Full-Stack Magic ✨, Performance Optimization\n🧠 Soft Skills: Problem-Solving, Adaptability, Teamwork, Quick Learner",
    link: "",
  },
  {
    id: 5,
    row: 9,
    col: 6,
    title: "Tech Stack",
    color: "cyan",
    description:
      "Peek my toolbox!\nLanguages & Frameworks: Java, Spring Boot, React.js, Next.js, HTML, CSS\nDatabases: MySQL, MongoDB",
    link: "",
  },
  {
    id: 6,
    row: 11,
    col: 2,
    title: "Resume",
    color: "teal",
    description:
      "Wanna see the full blueprint? 📄 Check out my resume!",
    link: "https://drive.google.com/file/d/1Gorg63nT9nS1BH9s9IqaxaLa7lc-5MIS/view?usp=drive_link", // Replace with actual link
  },
  {
    id: 7,
    row: 11,
    col: 6,
    title: "LinkedIn",
    color: "purple",
    description:
      "Network like a boss 💼. Let's connect!",
    link: "https://www.linkedin.com/in/zehrakhatoon-pathan-890007229/", // Replace with actual link
  },
  {
    id: 8,
    row: 8,
    col: 12,
    title: "GitHub",
    color: "black",
    description:
      "Straight-up coding wizardry 🧙‍♂️. See my magic.",
    link: "https://github.com/zehrathetech", // Replace with actual link
  },
  {
    id: 9,
    row: 9,
    col: 16,
    title: "LeetCode",
    color: "gold",
    description:
      "LeetCode sweat mode on 🔥. Flexing my DSA skills.",
    link: "https://leetcode.com/u/zehra_khatoon/", // Replace with actual link
  },
];

