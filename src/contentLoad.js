


function contentLoad () {

    const contentDiv = document.querySelector("#content")

    const testDiv = document.createElement("div")
    testDiv.classList.add("test");
    contentDiv.appendChild(testDiv);

    const newHeader = document.createElement("h1");
    newHeader.textContent = "Please eat my sketti";
    testDiv.appendChild(newHeader);

    const sketti = document.createElement("img")
    sketti.src = "../src/sketti.jpg";
    testDiv.appendChild(sketti);

    const bodyText = document.createElement("p");
    bodyText.textContent = "Blew my balls off - Phil";
    testDiv.appendChild(bodyText);

    return contentDiv;
}

export { contentLoad };
