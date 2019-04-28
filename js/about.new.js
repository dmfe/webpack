const addButton = () => {
    const container = document.querySelector('#container');
    const button = document.createElement('button');

    button.innerText = 'About me';
    button.onclick = () => console.log('^__^');

    container.append(button);
}

addButton();
