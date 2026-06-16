let shoppingListArray = [];

const displaySection = document.querySelector("#display-section");

const form = document.querySelector("#form");
const inputText = document.querySelector("#list-item")

const list = document.createElement("ul");
displaySection.appendChild(list);

form.addEventListener("submit", e => {
    //Prevent Default Refresh of submit button
    e.preventDefault();

    /*
        while input is not empty:
        1. add the input text value to the array
        2. create an <li> element, add the input text value to the <li>
        3. create a delete button for each <li>
        4. reset input text to ""

        5. add event listener "click" to each delete button which 
            a) deletes the listItem
            b) splices the element from the array
    */
    if (inputText.value !== "") {
        let currentText = inputText.value;
        const uniqueID = Date.now();        //creating a unique id to connect it with the corresponding delete buttons


        shoppingListArray.push({
            id : uniqueID,
            name: currentText
        });

        const listItem = document.createElement("li");
        listItem.textContent = currentText;
        list.appendChild(listItem);

        const span = document.createElement("span")
        span.textContent = " ";
        listItem.appendChild(span);

        const deleteButton = document.createElement("button");
        deleteButton.value = "Delete";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("data-id", uniqueID);

        span.appendChild(deleteButton);

        deleteButton.addEventListener("click", e => {
            list.removeChild(listItem);

            const clickedID = deleteButton.getAttribute("data-id");

            const exactIndex = shoppingListArray.findIndex(item => item.id === Number(clickedID));
            
            shoppingListArray.splice(exactIndex, 1);
            console.log(shoppingListArray);
        })

        inputText.value = "";
        console.log(shoppingListArray);
    }   
})




