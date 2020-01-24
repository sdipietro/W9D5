class DomNodeCollection {
  constructor(array) {
    this.array = array;
  }



  html (string) {
    if (typeof string === 'undefined'){
      return this.array[0].innerHTML;
    } else {
      this.array.forEach(element => {
        element.innerHTML = string;
      });
    }
  }

  empty () {
    this.html('');
  }
  
  append(arg) {                         
    if (typeof arg === 'string') {
      this.array.forEach(nodeEl => {
      nodeEl.innerHTML += arg;
      });
    } else if (arg instanceof HTMLElement) {
      // let newArg = window.$l(arg);
      this.array.forEach(nodeEl => {
        nodeEl.appendChild(arg);      //newArg.array[0]);
      });
    } else {
      this.array.forEach(el => {
        arg.array.forEach(el2 => {
          el.innerHTML += el2.outerHTML;
        });
      });
    }
  }

  addClass (string) {
    this.array.forEach(element => {
      if (element.className === "") {
        element.className = string;
      } else {
        element.className += ` ${string}`;
      }
    });
  }

  removeClass(string) {
      this.array.forEach(element => {
        element.classList.remove(string);
    });
  }

  attr(arg1, arg2) {
    if (typeof arg2 === "string") {
      // setter
      // debugger
      this.array.forEach(el => {
        el.setAttribute(arg1, arg2);
      });
    } else {
        return this.array[0].getAttribute(arg1);
    }
  }

  children() {
    let array = []
    this.array.forEach(el => {
      array.push(el.childNodes);
    });
    return new DomNodeCollection(array);
  }
}

module.exports = DomNodeCollection;