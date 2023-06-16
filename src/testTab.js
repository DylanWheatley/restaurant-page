
function testTab () {

    const contentDiv = document.querySelector("#content");

    const testDiv = document.createElement("div")
    testDiv.classList.add("test");
    contentDiv.appendChild(testDiv);

    const newHeader = document.createElement("h1");
    newHeader.textContent = "Come back for sketti";
    testDiv.appendChild(newHeader);

    const sketti2 = document.createElement("img");
    sketti2.src = "/home/dylanwheatley/repos/restaurant-page/src/sketti.jpg";
    testDiv.appendChild(sketti2);



    return contentDiv;
};

export { testTab };
