const ranks = ["Iron 1","Iron 2","Iron 3","Bronze 1","Bronze 2","Bronze 3","Silver 1","Silver 2","Silver 3","Gold 1","Gold 2","Gold 3","Platinum 1","Platinum 2","Platinum 3","Diamond 1","Diamond 2","Diamond 3","Ascendant 1","Ascendant 2","Ascendant 3","Immortal 1","Immortal 2","Immortal 3","Radiant"];
const players = ["P1", "P2", "P3", "P4", "P5"];
let selectedValuesL = [0,0,0,0,0];
let selectedValuesR = [0,0,0,0,0];

// Function to calculate the average rank and output the corresponding String
function avgRank(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += parseInt(array[i]);
    }
    return ranks[Math.round(sum / array.length)];
}

// Function to create a select element for each array index for the left side
function createSelectsL() {
    const container = document.getElementById("selectContainerL");

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
        select.onchange = handleSelectionChangeL;

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
        selectedValuesL[index] = 12; // Default value for default option Platinum 1
    });
}

// Function to create a select element for each array index for the left side
function createSelectsR() {
    const container = document.getElementById("selectContainerR");

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
        select.onchange = handleSelectionChangeR;

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
        selectedValuesR[index] = 12; // Default value for default option Platinum 1
    });
}

// Function to handle selection changes for the left side
function handleSelectionChangeL(event) {
    const index = event.target.dataset.index; // Get the array index from the data attribute
    selectedValuesL[index] = event.target.value; // Update the corresponding value in the selectedValues array
    displayVariables();                             // Update the Display
    console.log("Selected Values:", selectedValuesL); // Log the updated array
}

// Function to handle selection changes for the right side
function handleSelectionChangeR(event) {
    const index = event.target.dataset.index; // Get the array index from the data attribute
    selectedValuesR[index] = event.target.value; // Update the corresponding value in the selectedValues array
    displayVariables();                             // Update the Display
    console.log("Selected Values:", selectedValuesR); // Log the updated array
}

// Run the createSelects function after the DOM is loaded
document.addEventListener("DOMContentLoaded", createSelectsL);
document.addEventListener("DOMContentLoaded", createSelectsR);
// Calculate one first time
document.addEventListener("DOMContentLoaded", displayVariables);


// Calculate the output

function displayVariables() {
    const displayAreaL = document.getElementById("outputAreaL");
    displayAreaL.textContent = "Average Rank = ".concat(avgRank(selectedValuesL)); // Set the text of the left display area
    const displayAreaR = document.getElementById("outputAreaR");
    displayAreaR.textContent = "Average Rank = ".concat(avgRank(selectedValuesR)); // Set the text of the right display area
}