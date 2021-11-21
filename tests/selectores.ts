import { Selector } from 'testcafe';

//Param function syntaxis ----- PARA SEGUNDO MÉTODO
const elementWithId = Selector((id: string) => {
    return document.getElementById(id);
});

//options.dependency syntaxis ----- PARA TERCER MÉTODO
const persistentId = 'item-3';

const element = Selector(() => {
    return document.getElementById(persistentId);
}, {
    dependencies: { persistentId }
});

fixture `SELECTOR_SESSION`
    .page `http://demoqa.com/text-box`

/** ------ PRIMERO MÉTODO ------**/

test
    .skip('Single Selector Example', async t => {
        console.log('-----------------------');
        console.log('Single Selector Example');

        //Selector to get the first child element
        const webTableLi = Selector('#item-3');

        await t
            .click(webTableLi)
            .wait(5000)

        const headerSelector = Selector('.main-header');
        const headerString: string = await headerSelector.innerText;

        console.log('Header String: ' + headerString);

        await t.expect(headerString).eql('Web Tables');
    });

    /** ------ SEGUNDO MÉTODO ------**/

test
    .skip('Function Parameter Selector Example', async (t) => {
    console.log('-----------------------------------');
    console.log('Function Parameter Selector Example');

    await t
        .click(elementWithId('item-3'))
        .wait(5000)

    const headerSelector = Selector('.main-header');
    const headerString: string = await headerSelector.innerText;

    console.log('Header String: ' + headerString);

    await t.expect(headerString).eql('Web Tables');
});

/** ------ TERCER MÉTODO ------**/
test
    .skip('Options.Dependency Selector Simple', async (t) => {
        console.log('-----------------------------------');
        console.log('Options.Dependency Selector Example');

        await t
            .click(element)
            .wait(5000)

        const headerSelector = Selector('.main-header');
        const headerString: string = await headerSelector.innerText;

        console.log('Header String: ' + headerString);

        await t.expect(headerString).eql('Web Tables');
    });

test
    .skip(`Child Selector Example`, async t => {
        console.log('----------------------');
        console.log('Child Selector Example');

        //Selection to get the first child element
        const checkboxChildren = Selector('ul').child(1);

        await t
            .click(checkboxChildren)
            .wait(3000)

        const headerSelector = Selector('.main-header');
        const headerString: string = await headerSelector.innerText;

        console.log('Header String: ' + headerString);

        await t.expect(headerString).eql('Check Box');
    });

test
    .skip(`Count & Click Selector Example`, async t => {
        console.log('----------------------');
        console.log('Child Selector Example');

        await t
            //To click on CheckBox
            .click(elementWithId('item-1'))
            //to expand the options
            .click('#tree-node > ol > li > span > button')
            .wait(3000)

        const checkboxSelector = Selector('ol li .rct-node-collapsed span label .rct-checkbox')
        const counter: number = await checkboxSelector.count;

        console.log('Checkboxs Found: ' + counter);

        for (let i: number = 0; i < counter; i++) {
            await t
                .click(checkboxSelector.nth(i));
        }

        await t
            .wait(3000)

        const textDisplayedSelector = Selector('#result');
        const result: string = await textDisplayedSelector.innerText;

        console.log(result);

        await t.expect(result).contains('desktop');
        await t.expect(result).contains('documents');
        await t.expect(result).contains('downloads');
    });

test
    .skip(`With Attribute Selector`, async (t) => {
        console.log('----------------------');
        console.log('Single Selector Example');

        //Selector to get the first child element
        const webTableLi = Selector('#item-3');

        await t
            .click(webTableLi)
            .wait(3000)

        const elementByAttrSelector = Selector('button').withAttribute('id', 'addNewRecordButton');

        await t
            .click(elementByAttrSelector)
            .wait(3000)

        const headerSelector = Selector('#registration-form-modal');
        const headerString: string = await headerSelector.innerText;

        console.log(headerString);

        await t.expect(headerString).eql('Registration Form');
    });

test
    (`With Exact Text Selector`, async t => {
        console.log('----------------------');
        console.log('Single Selector Example');

        //Selector to get the first child element
        const webTableLi = Selector('#item-3');

        await t
            .click(webTableLi)
            .wait(3000)

        const elementByAttrSelector = Selector('button').withExactText('Add');

        await t
            .click(elementByAttrSelector)
            .wait(3000)

        const headerSelector = Selector('#registration-form-modal');
        const headerString: string = await headerSelector.innerText;

        console.log(headerString);
        await t.expect(headerString).eql('Registration Form');
    });