import { contentLoad } from "./contentLoad";
import { tabMaker } from "./tabs";
import { testTab } from "./testTab";



contentLoad();
tabMaker();

const homeBtn = document.querySelector('.homeBtn');
const tstDiv = document.querySelector(".test");



homeBtn.addEventListener("click", () => {
    tstDiv.remove();
    testTab();
});
