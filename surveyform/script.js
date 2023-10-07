
const form = document.getElementById('survey-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const dateOfBirthInput = document.getElementById('date-of-birth');
const countryInput = document.getElementById('country');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const professionInput = document.getElementById('profession');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');

const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const closePopupButton = document.getElementById('close-popup');

submitButton.addEventListener('click', () => {
  
    if (validateForm()) {
        displayPopup();
    }
});

resetButton.addEventListener('click', () => {
    form.reset();
});
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    form.reset();
});

function validateForm() {
    if (
        firstNameInput.value.trim() === '' ||
        lastNameInput.value.trim() === '' ||
        dateOfBirthInput.value.trim() === '' ||
        countryInput.value === '' ||
        !isGenderSelected() ||
        professionInput.value.trim() === '' ||
        emailInput.value.trim() === '' ||
        mobileInput.value.trim() === ''
    ) {
        alert('Please fill in all required fields.');
        return false;
    }
    return true;
}

function isGenderSelected() {
    return Array.from(genderInputs).some(input => input.checked);
}

function displayPopup() {
    const popupContentDiv = document.getElementById('popup-content');
    popupContentDiv.innerHTML = ''; 
    const submittedValues = [
        { label: 'First Name', value: firstNameInput.value },
        { label: 'Last Name', value: lastNameInput.value },
        { label: 'Date of Birth', value: dateOfBirthInput.value },
        { label: 'Country', value: countryInput.value },
        { label: 'Gender', value: getSelectedGenders() },
        { label: 'Profession', value: professionInput.value },
        { label: 'Email', value: emailInput.value },
        { label: 'Mobile Number', value: mobileInput.value },
    ];

    submittedValues.forEach(item => {
        const label = document.createElement('p');
        label.textContent = item.label + ': ';
        const value = document.createElement('span');
        value.textContent = item.value;
        label.appendChild(value);
        popupContentDiv.appendChild(label);
    });

    popup.style.display = 'block';
}

function getSelectedGenders() {
    const selectedGenders = [];
    genderInputs.forEach(input => {
        if (input.checked) {
            selectedGenders.push(input.value);
        }
    });
    return selectedGenders.join(', ');
}
