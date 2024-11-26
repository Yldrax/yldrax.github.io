const ranks = ["Iron 1","Iron 2","Iron 3","Bronze 1","Bronze 2","Bronze 3","Silver 1","Silver 2","Silver 3","Gold 1","Gold 2","Gold 3","Platinum 1","Platinum 2","Platinum 3","Diamond 1","Diamond 2","Diamond 3","Ascendant 1","Ascendant 2","Ascendant 3","Immortal 1","Immortal 2","Immortal 3","Radiant"];
const players = ["P1", "P2", "P3", "P4", "P5"];
let selectedValues = [0,0,0,0,0];

// Function to calculate the average rank and output the corresponding String
function avgRank(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return ranks[Math.round(sum / array.length)];
}

// Function to create a select element for each array index
function createSelects() {
    const container = document.getElementById("selectContainer");

    players.forEach((item, index) => {
        // Create a div to group each select and label
        const div = document.createElement("div");
        div.className = "select-group"; 

        // Create a label for the select element
        const label = document.createElement("label");
        label.setAttribute("for", `select-${index}`);

        // Create the select element
        const select = document.createElement("select");
        select.id = `select-${index}`;
        select.dataset.index = index; // Store the array index as a data attribute
        select.onchange = handleSelectionChange;

        /*
        // Create the default "Select an option" choice
        const defaultOption = document.createElement("option");
        defaultOption.value = 0;
        defaultOption.textContent = `Player ${index+1} Rank`;
        select.appendChild(defaultOption);
        */

        // Add options to the select element
        ranks.forEach((option, optIndex) => {
            const optionElement = document.createElement("option");
            optionElement.value = optIndex;
            optionElement.textContent = option;
            if (option === "Platinum 1") {
                optionElement.selected = true; // Set Platinum 1 as the default selected option
            }
            select.appendChild(optionElement);
        });

        // Append the label and select to the div
        div.appendChild(label);
        div.appendChild(select);

        // Append the div to the container
        container.appendChild(div);

        // Initialize the selectedValues array
        selectedValues[index] = 12; // Default value for default option Platinum 1
    });
}

// Function to handle selection changes
function handleSelectionChange(event) {
    const index = event.target.dataset.index; // Get the array index from the data attribute
    selectedValues[index] = event.target.value; // Update the corresponding value in the selectedValues array
    console.log("Selected Values:", selectedValues); // Log the updated array
}

// Run the createSelects function after the DOM is loaded
document.addEventListener("DOMContentLoaded", createSelects);


// Calculate the output

function displayVariable() {
    const displayArea = document.getElementById("outputAreaL");
    displayArea.textContent = "Average Rank = ".concat(avgRank(selectedValues)); // Set the text of the display area
}