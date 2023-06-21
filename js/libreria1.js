import Navigo from 'navigo'; 

const router = new Navigo('/')

document.getElementById( "app").innerHTML = `<a href="/user/xxx/save?foo=bar#anchor-here" data-navigo>click me</a>`;

router.on('../index.html', function () {
  // do something
});

router.resolve();

router.navigate('../pages');

