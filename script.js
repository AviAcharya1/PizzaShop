const menuItems = [
    { id: 1, category: 'pizzas', name: 'Margherita', price: 10 },
    { id: 2, category: 'pizzas', name: 'Pepperoni', price: 12 },
    { id: 3, category: 'sides', name: 'Garlic Bread', price: 5 },
    { id: 4, category: 'sides', name: 'Buffalo Wings', price: 8 },
    { id: 5, category: 'desserts', name: 'Chocolate Cake', price: 6 },
    { id: 6, category: 'desserts', name: 'Ice Cream', price: 4 },
];

function filterMenu(category) {
    const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
    displayMenuItems(filteredItems);
}

function displayMenuItems(items) {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = '';

    items.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
        `;
        menuItemsContainer.appendChild(menuItemElement);
    });
}

document.getElementById('customize-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);
    const sauce = document.getElementById('sauces').value;
    const crust = document.getElementById('crusts').value;

    console.log(`Order: ${toppings.join(', ')} toppings, ${sauce} sauce, ${crust} crust`);
    alert(`Order placed with ${toppings.join(', ')} toppings, ${sauce} sauce, ${crust} crust`);
});

window.onload = function() {
    filterMenu('all');
};
