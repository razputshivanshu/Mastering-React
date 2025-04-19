const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target:'_blank',
  },
  children:'Click me to visit google',

}

const mainContainer = document.getElementById('root');

//As above, I have created a react component, in the same manner react creates the components and now we want that react will render these component in the main div that is present with the id root.


/*
This function is good for understanding but in reality it have issue it will fail to handle different type of tags along with it's attributes


function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);

  container.appendChild(domElement);
}

*/

//Now I am writing version 2: it is better than previous code
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  
  container.appendChild(domElement);
  }

//This function is responsible to inject the element to the main container
customRender(reactElement, mainContainer);