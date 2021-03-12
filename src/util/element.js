export function element({tag = "div", className = "", html}) {
  let el = document.createElement(tag);
  el.className = className;

  el.innerHTML = html;

  return el;
}


export function div(className = "") {
  return (html) => {
    return element({
      className, html
    })
  }
}

export function append(el, container = document.body) {
  container.appendChild(el);
}

export function html(html) {
  return element({html}).firstElementChild;
}
