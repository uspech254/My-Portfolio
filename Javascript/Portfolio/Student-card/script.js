//Get elements
const nameInput = document.getElementById('nameInput');
const regInput = document.getElementById('regInput');
const courseInput = document.getElementById('courseInput');
const updateBtn = document.getElementById('updateBtn');

const cardName = document.querySelector('.info h3');
const cardReg = document.querySelector('.info p:nth-child(2)');
const cardCourse = document.querySelector('.info p:nth-child(3)');

// Button click
updateBtn.addEventListener('click', () => {
    if(nameInput.value !== ""){
        cardName.textContent = nameInput.value;
    }
    if(regInput.value !== ""){
        cardReg.innerHTML = `<strong>Reg No:</strong> ${regInput.value}`;
    }
    if(courseInput.value !== ""){
        cardCourse.innerHTML = `<strong>Course:</strong> ${courseInput.value}`;
    }

    // Clear inputs
    nameInput.value = "";
    regInput.value = "";
    courseInput.value = "";
});

// Bonus: Press Enter to update
document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        updateBtn.click();
    }
});

console.log("Student Card Ready!"); 