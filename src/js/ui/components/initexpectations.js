
import {expectationsTemplate} from "../templates/expectationsTemplate.js";
import {expectationsData} from "../../mockData/expectationsData.js";

const initexpectations=(expectationsNode)=>{
    expectationsNode.insertAdjacentHTML("beforeend", expectationsTemplate(expectationsData))
};

export default initexpectations;