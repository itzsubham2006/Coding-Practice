// import simpleGit from "simple-git";
// import jsonfile from "jsonfile";
// import moment from "moment";

// const git = simpleGit();
// const path = "./data.json";

// const makeCommit = async () => {
//   // Set the commit date to 4 July 2026
//   const date = moment("2026-07-04T12:00:00");

//   const data = {
//     date: date.format(),
//     message: "GitHub contribution"
//   };

//   // Write data to the file
//   await jsonfile.writeFile(path, data, {
//     spaces: 2
//   });

//   // Stage the file
//   await git.add(path);

//   // Create the commit with the specified date
//   await git.commit(
//     `Commit on ${date.format("YYYY-MM-DD")}`,
//     {
//       "--date": date.format()
//     }
//   );

//   // Push to GitHub
//   await git.push();

//   console.log("Commit created successfully!");
// };

// makeCommit().catch(console.error);