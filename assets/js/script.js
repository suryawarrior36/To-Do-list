const inputEl = document.getElementById("task-content");
const taskEl = document.getElementById("list-content");

function printList() {
    if (inputEl.value.trim() === '') {
        alert("Please enter your task to submit!!");
    } else {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = inputEl.value;
        const listItem = document.createElement('li');
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        taskEl.appendChild(listItem);
    }
    inputEl.value = "";
}
