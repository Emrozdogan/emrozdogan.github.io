document.addEventListener('DOMContentLoaded', function() {
    const userDataForm = document.getElementById('userDataForm');
    const userDataBody = document.getElementById('userDataBody');
    let userData = JSON.parse(localStorage.getItem('userData')) || [];
    function displayUserData() {
        userDataBody.innerHTML = '';
        userData.forEach(function(user) {
            if (user.age >= 18) {
                let row = document.createElement('tr');
                row.innerHTML = `<td>${user.firstName}</td><td>${user.lastName}</td><td>${user.age}</td>`;
                userDataBody.appendChild(row);
            }
        });
    }
    displayUserData();
    function handleSubmit(event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const age = parseInt(document.getElementById('age').value);

        if (age < 18) {
            alert('Age must be 18 or older.');
            return;
        }
        userData.push({ firstName, lastName, age });
        localStorage.setItem('userData', JSON.stringify(userData));
        displayUserData();
        userDataForm.reset();
    }
    userDataForm.addEventListener('submit', handleSubmit);
});