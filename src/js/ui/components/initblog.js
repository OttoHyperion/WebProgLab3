import blogData from "../../mockData/blogData.js";
import {blogTemplate} from "../templates/blogTemplate.js";

const initblog = (blogNode) => {
  blogNode.insertAdjacentHTML("beforeend", blogTemplate(blogData));
};

export default initblog;