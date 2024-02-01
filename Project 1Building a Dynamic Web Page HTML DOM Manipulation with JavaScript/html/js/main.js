// Adding a mouseover event listener to the page header
document.getElementById('pageHeader').addEventListener('mouseover', showPopup);

// Function to change the content of Main Section 1
function changeContent(newContent) {
    document.getElementById('mainSection1').innerHTML = `<h2>Main Section 1</h2><p>${newContent}</p>`;
}

// Function to change the color scheme of the page
function changeColorScheme() {
    document.body.style.backgroundColor = getRandomColor();
    document.body.style.color = getRandomColor();
}

// Function to add a new item to the sidebar
function addItem() {
    // Prompting the user for a new item
    const newItem = prompt('Enter the new item:');
    
    // Checking if the user entered a value
    if (newItem) {
        const sidebar = document.getElementById('sidebar').getElementsByTagName('ul')[0];
        
        // Creating a new list item
        const listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(newItem));
        
        // Adding an onclick event to the new list item
        listItem.onclick = function () {
            changeContent('New Content ' + (sidebar.children.length + 1));
        };
        
        // Appending the new list item to the sidebar
        sidebar.appendChild(listItem);
    }
}

// Function to remove the last item from the sidebar
function removeItem() {
    const sidebar = document.getElementById('sidebar').getElementsByTagName('ul')[0];
    
    // Checking if there are items in the sidebar
    if (sidebar.children.length > 0) {
        // Removing the last item from the sidebar
        sidebar.removeChild(sidebar.lastElementChild);
    }
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    // Generating a random color code
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

// Function to show a welcome popup on mouseover
function showPopup() {
    alert('Welcome to the DOM Manipulation Assignment!');
}
