import {extend} from "./base";

export interface Component {
    render() : this
}

export abstract class Visual implements Component {
    abstract element(): HTMLElement
    abstract render(): this
}

export interface Event<A> {
    
}

function CreateElement(name: string): (attr: any, ...cont: Component[]) => Visual {
    return (attribute: any, ...content: Component[]) => {
        var element = document.createElement(name);
        extend(element, attribute);
        
        return {
            render() {
                console.log(el)
                for(var el of content) {
                    if ((<any>el.render())['element']) {     
                        element.appendChild((<Visual>el).element());  
                    }
                }
                return this;
            },
            
            element(): HTMLElement {
                return element;
            }
        }
    }
}

export const a = CreateElement("a");
export const i = CreateElement("i");
export const div = CreateElement("div");
export const input = CreateElement("input");
