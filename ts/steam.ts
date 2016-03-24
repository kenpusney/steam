import {a, i, div, Component, Visual} from "./polyfill";
let hello = a({href: "#", onclick: ()=> alert("bbb")},
                i({textContent: "hello world"}))

document.body.appendChild(hello.render().element());

function CreateCombinedElement(ctor: (...comps: Component[]) => Visual): (...comps: Component[]) => Visual  {
    return (...comps: Component[]): Visual => {
        
        let elem = ctor(...comps);
        
        return {
            render() {
                elem.render();
                return this;
            },
            element() {
                return elem.element();
            }
        }
    };
}

const if_ = CreateCombinedElement((test, alter, conseq) => {
    return div(
            {textContent: "hello world"},
            div({}, test),
            div({}, alter),
            div({}, conseq)
        );;
});

document.body.appendChild(
    if_(
        a({textContent:"hello"}), 
        a({textContent:"hello"}), 
        a({textContent:"hello"}))
     .render().element())

