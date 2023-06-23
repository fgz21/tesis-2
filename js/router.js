import Navigo from 'navigo'; 

const router = new Navigo('/', { hash: true });


//funcion asyncrona


async function getHtmlAsString("pages/perfil-estudiante.html") {
  try{
    const response = await fetch(filepath);
    const htmlString = response.text();
    return htmlString;
  } catch{error}{
    console.error(error);
  }  
}

//router 

router.on('/pages', async () => {
  
  //comprobacion de inicio de sesion

 const auth = localStorage.getItem("isAuth");

//si no entra 

  if (!auth || auth === "false") {
  return router.navigate("pages/perfil-estudiante.html");
  }

  //carga del contenido

  const htmlString = await getHtmlAsString("/pages/perfil-estudiante.html");

  document.body.innerHTML = htmlString;

});

router.resolve();

