const comments = true;

function create(options = {
    type: 'div',    // check
    class: [],      // check
    id: null,
    attr: [[]],     // check
    text: false,    // check
    child: false    // check
}) {

    let newElement = document.createElement(options?.type ?? 'div');

    for (let i = 0; i < options.class?.length ?? 0; i++) {
        newElement.classList.add(options.class[i]);
    }

    (options?.id ?? false) ? newElement.setAttribute('id', options.id) : null;

    for (let i = 0; i < options.attr?.length ?? 0; i++) {
        newElement.setAttribute(options.attr[i][0], options.attr[i][1]);
    }

    if (!!options.text) {
        newElement.innerText = options.text;
    }

    if (options.child?.nodeType === Node.ELEMENT_NODE) {
        newElement.appendChild(options.child);
    }
    if (Array.isArray(options?.child)) {
        for (let i = 0; i < options.child?.length ?? 0; i++) {
            
            if (options.child?.nodeType === Node.ELEMENT_NODE) {
                newElement.appendChild(options.child[i])
            } else {
                throw new Error('Not a valid element.');
            } 
            
        }
    }

    if (options.child != undefined &&  !(options.child?.nodeType === Node.ELEMENT_NODE) && !(Array.isArray(options?.child))) {
        console.log(options.child?.nodeType)
        console.log(options.child)
        console.log(options)
        throw new Error('child() arg is not of accepted type (either element or array of elements).')
    }

    return newElement;

}


class Element {

    type(type) {
        this.e_type = type;
        return this;
    }

    class(...classes) {
        Array.isArray(classes) ? this.e_classes = Array.from(classes) : null; 

        return this;
    }

    id(id) {
        this.e_id = id ?? null;
        return this;
    }

    attr(...attributes) {
        for (let i = 0; i < attributes.length; i++) {
            if(!Array.isArray(attributes[i])) {
                throw new Error('Argument #' + (i+1) + ' is not an array.');
            }

        }
        this.e_attr = Array.from(attributes);

        return this;
    }
    
    text(text) {
        this.e_text = text ?? '';
        return this;
    }

    child(child) {
        (Array.isArray(child)) ? this.e_child = Array.from(child) : this.e_child = child;
        return this;
    }

    create() {
        comments ? console.log('Element created, take a look: ',this) : null;
        return create({
            type: this.e_type,
            class: this.e_classes,
            id: this.e_id,
            attr: this.e_attr,
            text: this.e_text,
            child: this.e_child
        })
    }
}