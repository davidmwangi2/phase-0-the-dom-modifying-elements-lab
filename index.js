// Write your code here!

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'David is the champion';
const mainElement = document.getElementById('main');
mainElement.appendChild(newHeader);
mainElement.remove();