import { createHeader, createNav, createContentContainer, footer } from './pageLoad';
import loadHome from './home';
import loadAbout from './about';

function webApp() {
    const content = document.getElementById('content');
    content.append(createHeader());
    content.append(createNav());
    content.append(createContentContainer());
    content.append(footer());    
    loadHome();
}


webApp();
const aboutdiv = document.getElementById('aboutdiv');
if (aboutdiv !== null) aboutdiv.addEventListener('click', loadAbout);
    