import simpleGit from "simple-git";
import jsonfile from "jsonfile";
import moment from "moment";
import random from "random";

const git = simpleGit();
const path = "./data.json";

const TARGET_YEAR = 2023;
let TOTAL_COMMITS = 1;

const makeCommits = async () => {

  while (TOTAL_COMMITS > 0) {

    const date = moment()
      .year(TARGET_YEAR)
      .startOf("year")
      .add(random.int(200, 364), "days");

    const commitsToday = Math.min(
      random.int(1, 4),
      TOTAL_COMMITS
    );

    for (let i = 0; i < commitsToday; i++) {

      const data = {
        date: date.format(),
        index: i
      };

      await jsonfile.writeFile(path, data, {
        spaces: 2
      });

      await git.raw(["add", "-f", path]);

      await git.commit(
        `commit on ${date.format("YYYY-MM-DD")}`,
        {
          "--date": date.format()
        }
      );

      TOTAL_COMMITS--;

      await new Promise(resolve =>
        setTimeout(resolve, 500)
      );
    }
  }

  await git.push();
};

makeCommits();