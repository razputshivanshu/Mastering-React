const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target:'_blank',
  },
  children:'Click me to visit google',

}

const mainContainer = document.getElementById(root);

//As above, I have created a react component, in the same manner react creates the components and now we want that react will render these component in the main div that is present with the id root.