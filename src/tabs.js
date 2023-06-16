

function tabMaker() {

    const tabDiv = document.querySelector(".tab");

    const home = document.createElement('button');
    const menu = document.createElement("button");
    const contact = document.createElement("button");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    tabDiv.appendChild(home);
    tabDiv.appendChild(menu);
    tabDiv.appendChild(contact);

    return tabDiv;
}

export { tabMaker };