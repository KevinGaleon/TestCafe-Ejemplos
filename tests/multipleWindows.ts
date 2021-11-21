import { Selector, t, ClientFunction } from 'testcafe';

fixture('New Window Feature')
.page('https://testcafe.io/')

let fbSelector: any;
let url: string = '';

test
.skip('Nueva Ventana Abierta Automáticamente Después de un Clic', async (t) => {
    fbSelector = Selector('div.social a').nth(0);
    url = await t.eval(() => document.documentURI);
    console.log('Main URL: ' +  url);
    await t.expect(url).eql('https://www.stestcafe.io/');

    await t
    .wait(3000)
    .click(fbSelector)

    url = await t.eval(() => document.documentURI);
    console.log('FB URL: ' +  url);
    //await t.expect(url).eql('https://www.facebook.com/dxtestcafe/');
});

test 
.skip('New Window controlada por AE', async (t) => {
    url = await t.eval(()=> document.documentURI);
    console.log('Main URL: ' + url);
    await t.expect(url).eql('https://testcafe.io/')

    //Este método toma una descripcion de la ventana como un argumento
    const ventanaInicial = await t.getCurrentWindow();

    /*** Abre una nueva ventana #2 ***/
    //NOTA: Browser Window comparte el almacenamiento Client-side. Solo un rol de usuario puede ser activado a la vez...
    await t.openWindow('https://www.youtube.com/');

    url = await t.eval(() => document.documentURI);
    console.log('New Window URL: ' + url);
    await t.expect(url).eql('https://www.youtube.com/');

    //Este método toma una descripcion de la ventana como un argumento
    const ventana2 = await t.getCurrentWindow();

    /*** Abre una nueva ventana #3 ***/
    const ventana3 = await t.openWindow('https://www.facebook.com/');

    url = await t.eval(() => document.documentURI);
    console.log('New Window URL: ' + url);
    await t.expect(url).eql('https://www.facebook.com/');

    /*** Cambia entre ventanas ***/
    await t.switchToWindow(ventanaInicial);

    url = await t.eval(() => document.documentURI);
    console.log('Main URL despues de cambiarla: ' + url);
    await t.expect(url).eql('https://testcafe.io/');

    /*** Cierra las ventanas abiertas ***/
    await t.closeWindow(ventana2)
    console.log('Ventana #2 ha sido cerrada')

    await t.closeWindow(ventana3)
    console.log('Ventana #3 ha sido cerrada')
});