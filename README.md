
# create-element

This simple js file helps you create html elements, and makes that process less cumbersome and a bit easier to read.

## Index
- [Why create-element](#why-create-element)
- [Documentation](#documentation)
- [How to use](#how-to-use)
# Why *create-element*?
This is an opinionated piece of javascript, but it lets you create and stack html elements in an easier way - compared to vanilla at least. Take a look at some comparisons below:

## Without *create-element*

```js
let p = document.createElement('p');
p.classList.add('class1', 'class2');
p.setAttribute('attr1', 'value1');
p.setAttribute('attr2', 'value2');
p.textContent = 'some text';

document.body.appendChild(p);
```
- The appending is at the end, which breaks the logic train of thought (hierarchy-wise)
- The way to assign information changes depending on the information itself - you don't change the classes the same way you change the content, etc
- Not particularly hard to read, but not *that* easy.

## Using *create-element*

```js
document.body.appendChild(create({
    type: 'p',
    class: ['class1', 'class2'],
    attr: [
        ['attr1', 'value1'],
        ['attr2', 'value2']
    ],
    text: 'some text'
}))
```
- The appending is at the beggining
- the info is indented, helps with visualizing hierachy 
- every thing is the same - type, class, attributes, etc follow the same logic

## Using *create-element* **more**
Here's an example of a hierachy tree in HTML 
```html
<div class="container">
    <div class="row">
        <div class="col-4">Book A</div>
        <div class="col-4">Book B</div>
        <div class="col-4">Book C</div>
    </div>
</div>
```

And here's how to build it with *create-element*

```js
let arrayOfBooks = ['Book A', 'Book B', 'Book C']

parent.appendChild(create({
    class: ['container'],
    child: create({
        class: ['row'],
        child: Array.from(arrayOfBooks, book => {
            return create({
                class: ['col-4'],
                text: book
            })
        })
    })
}))
```

Notice how easy it is to build nested structures like this! 
All while being easy to understand the logic and hierarchy.
# Documentation

[Documentation](https://linktodocumentation)


# How to use

## Via CDN
You can use jsDelivr or your choice of a free CDN provider to host this file.
Just paste this at the bottom of the `body` tag of your document.

```html
<script src="https://cdn.jsdelivr.net/gh/alexandre97costa/create-element/utilities.min.js"></script>
```

## Download
The easier way would probably be to download the single file and put it in your local folder.

