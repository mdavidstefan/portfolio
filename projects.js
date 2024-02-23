import { getData } from "./utils.js";
const url =
  "https://raw.githubusercontent.com/mdavidstefan/projectjson/main/projectjson";

export const projects = () => {
  getData(url, renderProjects);
};

function renderProjects(data) {
  console.log(data);
}
