const inputEl = document.getElementById("task-content");
const taskEl = document.getElementById("list-content");

function printList() {
    if (inputEl.value === '') {
        alert("Please enter your task to submit!!");
    } else {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.borderRadius = "100px"
        checkbox.style.backgroundColor = "red"
        const label = document.createElement('label');
        label.textContent = inputEl.value;
        const listItem = document.createElement('li');
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        taskEl.appendChild(listItem);
    }
    inputEl.value = "";
}
