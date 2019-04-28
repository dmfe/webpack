const colors = ['red', 'green', 'blue', 'yellow', 'black', 'pink', 'grey', 'brown', 'purple'];

const addButton = () => {
    const container = document.querySelector('#container');
    const button = document.createElement('button');

    button.innerText = 'Click me';
    button.style = "padding 10px 15px; margin: 10px; border-radius: 5px";
    button.onclick = () => button.style.color = colors[Math.round(Math.random() * (colors.length - 1))];

    container.append(button);
}

export default addButton;
