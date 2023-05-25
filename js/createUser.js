const formSignup = document.querySelector('#form-signup');
const urlSignup = `http://localhost:${3000}/users`;

function getFormValuesSignup(form) {
    const formData = new FormData(form);
    const values = {};

    for (const [key, value] of formData.entries()) {
        values[key] = value;
    }

    return values;
}

formSignup.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formValues = getFormValuesSignup(event.target);
    await axios.post(urlSignup, formValues)
        .then(response => {
            alert(response.data.message);
        })
        .catch(error => alert(error))
});