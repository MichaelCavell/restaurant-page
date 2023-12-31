import pizzaPhone from './pizzaphone.jpg';

const initContactPage = () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = "Cavell's Pizza";

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');

    const menuItems = ['About', 'Menu', 'Contact'];

    menuItems.forEach(itemText => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = itemText;
        a.id = itemText.toLowerCase()
        li.appendChild(a);
        ul.appendChild(li);
      });

      header.appendChild(h1);
      header.appendChild(nav);
      nav.appendChild(ul);

      const img = document.createElement('img');
      img.src = pizzaPhone;
      img.alt = 'Pizza Phone';

      const h2 = document.createElement('h2');
      h2.textContent = '1-800-PIZZA-NOW';

    contentDiv.appendChild(header);
    contentDiv.appendChild(img);
    contentDiv.appendChild(h2);
  };
  
  export default initContactPage;