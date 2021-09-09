var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function populateTable(obj) {
  const table = document.getElementsByClassName('content');
  for (let index in obj) {
    let getColumn = document.getElementById('title');
    let createItem = document.createElement('tr');
    createItem.innerText = obj[index].title;
    getColumn.appendChild(createItem);
  }

  for (let index in obj) {
    let getColumn = document.getElementById('userid');
    let createItem = document.createElement('tr');
    createItem.innerText = obj[index].userId;
    getColumn.appendChild(createItem);
  }

  for (let index in obj) {
    let getColumn = document.getElementById('taskid');
    let createItem = document.createElement('tr');
    createItem.innerText = obj[index].id;
    getColumn.appendChild(createItem);
  }

  for (let index in obj) {
    let getColumn = document.getElementById('completed');
    let createItem = document.createElement('tr');
    createItem.innerText = obj[index].completed;
    getColumn.appendChild(createItem);
  }
};