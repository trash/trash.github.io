import {bootstrapCitation} from './bootstrap-citations';

window.addEventListener('load', () => {
    bootstrapCitation();

    // Properly style header links
    const headerLinks = document.querySelectorAll('.header-links a');
    // Default to the blog post header link
    let activeLink: Element = document.querySelector('.header-links #posts');
    for (let i = 0; i < headerLinks.length; i++) {
        const link = headerLinks[i];
        if ((window.location.pathname === '/' && link.id === 'about') ||
            window.location.pathname.indexOf(link.id) !== -1
        ) {
            activeLink = link;
            break;
        }
    }
    activeLink.classList.add('active');
});