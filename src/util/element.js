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

export function html(html, ...args) {
  if (!(html.raw)) {
    throw new TypeError("first parameter must be an template literal")
  }
  if (args && args.length) {
    throw new TypeError("Template literal must not have variables");
  }
  return element({html}).firstElementChild;
}
