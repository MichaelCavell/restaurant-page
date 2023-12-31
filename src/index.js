import initHomePage from './home';
import initMenuPage from './menu';
import initContactPage from './contact';

import './styles.css';

initHomePage();

function handleLinkClick(event) {
    const target = event.target;
    if (target.id === 'about') {
        initHomePage();
    } else if (target.id === 'menu') {
        initMenuPage();
    } else if (target.id === 'contact') {
        initContactPage();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', handleLinkClick);
});