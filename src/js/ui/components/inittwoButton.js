import {twoButtonTemplate} from "../templates/twoButtonTemplate.js";
import {twoButtonData} from "../../mockData/twoButtonData.js";

const inittwoButton=(twoButtonNode)=>{
    twoButtonNode.insertAdjacentHTML("beforeend", twoButtonTemplate(twoButtonData))
};

export default inittwoButton;