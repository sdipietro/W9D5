const DomNodeCollection = require('./dom_node_module'); 

window.$l = function (element) {
  // let nodeArray;
  if (typeof element === "string") {
    let nodes = document.querySelectorAll(element);
    nodeArray = Array.from(nodes);
    return new DomNodeCollection(nodeArray);
  } else if (element instanceof HTMLElement) {
    return new DomNodeCollection([element]);
  }
  
};

// $('li')


// $(<li>mittens</li>)
  


