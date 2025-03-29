// Create an array of your projects here

const projects = [
  {
    name: "Project1",
    description: "This is Project 1",
    status: "completed"
  },
  {
    name: "Project2",
    description: "This is Project 2",
    status: "working"
  },
  // Add more projects as needed
];

// Loop through the array of projects and output each project details

projects.forEach(project => {
  console.log(`${project.name}: ${project.description}`);
});
