import loadHome from './home';
import loadContact from './contact';
import loadMenu from './menu';
import loadAbout from './about'

function createHeader() {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = "'De' Local Restaurant";
    title.classList.add('title'); 
    header.append(title);
    return header;
}

function createNav() {
    const tabWrapper = document.createElement('nav');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');
    const about = document.createElement('div');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    about.textContent = 'About';

    home.classList.add('active');  
    
    home.setAttribute('id', 'home'); 
    home.classList.add('tabs', 'clicked'); 
    menu.setAttribute('id', 'menu'); 
    menu.classList.add('tabs','clicked');
    contact.setAttribute('id', 'contact'); 
    contact.classList.add('tabs','clicked'); 
    about.setAttribute('id', 'about'); 
    about.classList.add('tabs','clicked');  

    home.addEventListener('click', function () {  
        const homebtn =document.getElementById('home');
        activateButton(homebtn);
        loadHome();
        console.log(homebtn);        
    });

    menu.addEventListener('click', function () {
        activateButton(menu);      
        loadMenu();
        console.log(this);
    });

    contact.addEventListener('click', function () {
        activateButton(this);
        loadContact();
        console.log(this);        
    })

    about.addEventListener('click', function () {
        activateButton(about);
        loadAbout()
        console.log(this);
     })
    

    tabWrapper.append(home);
    tabWrapper.append(menu);
    tabWrapper.append(contact);
    tabWrapper.append(about);

    return tabWrapper;
    
}

  function activateButton(btn) {
      const tabsAll = document.querySelectorAll('.tabs');


      tabsAll.forEach(tab => {
            if (tab !== this) {
                tab.classList.remove('active');
               }
        });
        btn.classList.add('active')
    }

function createContentContainer() {
    const contentContainer = document.createElement('main');
    contentContainer.setAttribute('id', 'main');
    return contentContainer;
}

function footer() {
    const footer = document.createElement('div');
    const aboutLink = document.createElement('div');
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    aboutLink.id = 'aboutdiv';
    paragraph.innerHTML = ` Created with ❤️ by <a href=https://github.com/anyiamvictor>AnyiamVictor</a> Copyright &copy ${new Date().getFullYear()}. For more details check the <div id='aboutdiv'>About Page</div> `;
    footer.classList.add('footer');
    footer.append(paragraph);
    return footer;
}

export { createHeader,createNav,createContentContainer,footer };
