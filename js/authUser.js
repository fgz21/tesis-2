const formLogin = document.querySelector('#form-login');
const urlLogin = `http://localhost:${3000}/auth`;

function getFormValuesLogin(form) {
    const formData = new FormData(form);
    const values = {};

    for (const [key, value] of formData.entries()) {
        values[key] = value;
    }

    return values;
}

formLogin.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formValues = getFormValuesLogin(event.target);
    await axios.post(urlLogin, formValues)
        .then(response => {
            alert(response.data.message);
        })
        .catch(error => alert(error.response.data.message))
});

