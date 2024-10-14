import {footerTemplate} from "../templates/footerTemplate.js";
import footerData from "../../mockData/footerData.js";

const initfooter=(footerNode)=>{
    footerNode.insertAdjacentHTML("beforeend", footerTemplate(footerData))
};

export default initfooter;