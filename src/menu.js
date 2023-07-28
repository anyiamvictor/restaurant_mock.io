


function createMenuItem(itemTitle, ingredient, image) {
    
    let menuItem = document.createElement('div');
    let menuItemTitle = document.createElement('h1');
    let menuItemIngredients = document.createElement('p');
    let imageWrapper = document.createElement('div');
    let menuItemImage = document.createElement('img');
    
menuItem.classList.add('menuitem');
menuItemTitle.id = 'menutitle';
    menuItemIngredients.id = 'menuingredients';
    imageWrapper.id='imagewrapper'
    menuItemTitle.textContent = itemTitle;
    menuItemIngredients.textContent = ingredient.join(' , ');
    menuItemImage.src = image;
    menuItemImage.alt = itemTitle;

    menuItem.append(menuItemTitle);
    imageWrapper.append(menuItemImage);
    menuItem.append(imageWrapper);    
    menuItem.append(menuItemIngredients);
    return menuItem
}


function loadMenu() {
    const contentContainer = document.getElementById('main');
    contentContainer.textContent = '';    
    let menuContainer = document.createElement('div');    
    menuContainer.classList.add('menuContainer');
    menuContainer.append(createMenuItem('Egusi Soup', ['images/', 'oil', 'meat'], './egusi.jpeg'));
    menuContainer.append(createMenuItem('Afang Soup', ['Vegetable', 'meat', 'rice'], './afang.jpeg'));
    menuContainer.append(createMenuItem(' Pizza', ['Vegetable', 'white looking stuf', 'tomato', 'etc'], './img4_chad-montano.jpg'));
    menuContainer.append(createMenuItem('Vegetable Salad ', ['Vegetable', 'more Vegetables', 'some juice'], './img5_eiliv-aceron.jpg'));
    menuContainer.append(createMenuItem('Vegetable Salad ', ['egg', ' Vegetables','tomatos','peas', 'some greens'], './img3_anh-nguyen.jpg'));
    menuContainer.append(createMenuItem(' desert ', ['something', ' veggies','tomatos','ketchup', ' greens'], './img2_jay-wennington-N.jpg'));

    contentContainer.append(menuContainer)
    return contentContainer;
}

export default loadMenu;