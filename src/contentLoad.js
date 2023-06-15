


function contentLoad () {

    const contentDiv = document.querySelector("#content")

    const newHeader = document.createElement("h1");
    newHeader.textContent = "Please eat my sketti";
    contentDiv.appendChild(newHeader);

    const sketti = document.createElement("img")
    sketti.src = "../src/sketti.jpg";
    contentDiv.appendChild(sketti);

    const bodyText = document.createElement("p");
    bodyText.textContent = "Blew my balls off - Phil";
    contentDiv.appendChild(bodyText);

    return contentDiv;
}

export { contentLoad };
