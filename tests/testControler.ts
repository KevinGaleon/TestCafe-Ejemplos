import { Selector } from 'testcafe';

let elemento: any;

fixture `SELECTOR_SESSION`
    .page `https://demoqa.com/slider`

/** ------ TYPE TEXT ------**/
test
    .skip('Type Selector Example', async (t) => {
        
        ///html/body/div[2]/div/div/div[2]/div[1]/div/div/div[5]/div/ul/li[5]
        //#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(5)
        elemento = Selector('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(1)');
        await t
            .click(elemento)
            .wait(1000)

        elemento = Selector('#item-0');
        await t
            .click(elemento)
            .wait(1000)

        const userName = Selector('#userName');
        const userEmail = Selector('#userEmail');
        const currentAddress = Selector('#currentAddress');
        await t
            .typeText(userName, 'Kevin Garzón')
            .wait(500)
            .typeText(userEmail, 'Kevin@hotmail.com')
            .wait(500)
            .typeText(currentAddress, 'El Cambio')
            .wait(500)
        
        elemento = Selector('button').withExactText('Submit');
        await t
            .click(elemento)
            .wait(3000)

        const output = Selector('#output');
        const salida: string = await output.innerText;

        console.log('Datos: ');
        console.log(salida);
    });

test
    ('Agregar Valor a Tabla y Eliminarlo - Example', async (t) => {
        
        elemento = Selector('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(1)');
        await t
            .click(elemento)
            .wait(1000)

        elemento = Selector('#item-3');
        await t
            .click(elemento)
            .wait(1000)

        elemento = Selector('button').withExactText('Add');
        await t
            .click(elemento)
            .wait(1000)

        const firstName = Selector('#firstName');
        const lastName = Selector('#lastName');
        const userEmail = Selector('#userEmail');
        const age = Selector('#age-wrapper');
        const salary = Selector('#salary-wrapper');
        const department = Selector('#department-wrapper');
        await t
            .typeText(firstName, 'Kevin')
            .wait(500)
            .typeText(lastName, 'Garzón')
            .wait(500)
            .typeText(userEmail, 'Kevin@hotmail.com')
            .wait(500)
            .typeText(age, '21')
            .wait(500)
            .typeText(salary, '5000')
            .wait(500)
            .typeText(department, 'IT')
            .wait(500)

        elemento = Selector('button').withExactText('Submit');
        await t
            .click(elemento)
            .wait(2000)

        elemento = Selector('#delete-record-1');
        await t
            .click(elemento)
            .wait(2000)
        
            .typeText(Selector('#searchBox'), 'Kevin')
            .wait(2000)

    });

