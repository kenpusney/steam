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

class ToolboxItem {
    render() {
        return div({
            className: 'toolbox-item' 
        }, div({}, a({href: "/hello"}, i({textContent: "Hello world"}))));    
    }
}

document.body.appendChild(new ToolboxItem().render().element());