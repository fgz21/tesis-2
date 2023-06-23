const router = new Navigo("/", { hash: true });

// Esta función es para extraer el html de otro archivo
async function getHtmlAsString(filePath) {
  try {
    const response = await fetch(filePath);
    const htmlString = await response.text();
    return htmlString;
  } catch (error) {
    console.error(error);
  }
}

router.on("/dashboard", async () => {
  /* Aqui se debe comprobar que esta inciado sesion */
  // Cambia el valor a true para ver el contenido
  const isAuth = false;

  // Si isAuth es falso no entrar al contenido
  if (!isAuth) {
    return router.navigate("/");
  }

  // De lo contrario el carga el contenido
  const htmlString = await getHtmlAsString("/pages/dashboard.html");
  document.body.innerHTML = htmlString;
});

//* Para añadir mas rutas es así:
/*
router.on('/ruta', () => {
  const htmlString = await getHtmlAsString("/la-ruta-del-html");
  document.body.innerHTML = htmlString;
})
*/

// Esto siempre queda al final para que funcione las rutas
router.resolve();
