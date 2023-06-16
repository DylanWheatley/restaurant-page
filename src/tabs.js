

function tabMaker() {

    const tabDiv = document.querySelector(".tab");

    const home = document.createElement('button');
    const menu = document.createElement("button");
    const contact = document.createElement("button");
    const btnDiv = document.createElement("div")

    btnDiv.classList.add("btnDiv");

    home.textContent = "Home";
    home.classList.add("homeBtn");
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    
    btnDiv.appendChild(home);
    btnDiv.appendChild(menu);
    btnDiv.appendChild(contact);
    tabDiv.appendChild(btnDiv)

    return tabDiv;
}

export { tabMaker };