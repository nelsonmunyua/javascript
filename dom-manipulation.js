/**
 * DOM --> (document object model) - a programming iterface for web documents.
 * -->It represents the structure of HTML /XML documents as a tree of objects
 * DOM-MANIPULATION -->
 */
// We are going to use the crud
// CREATE
// document.createElement("")

const div = document.createElement("div");
document.body.appendChild(div);
// READ
// get access to html elements from our document
// method - querySelector()

const container = document.getElementById('container');
container.style.width = '200px';
container.style.height = '200px';
container.style.backgroundColor = 'red';
container.style.border = '10px';
console.log(container);

console.log(container.style);

// 
// UPDATE
// DELETE
