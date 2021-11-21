import { Selector } from 'testcafe';

let elemento: any;

fixture `TETST_CONTROLLER_SESSION`
    .page `https://demoqa.com/droppable`

test
.skip
('Dragable Selector Example', async (t) => {
    elemento = Selector('.element-group:nth-child(4)');
    await t
        .click(elemento)

    await t 
        .click(elemento.find('.menu-list li:nth-child(4)'))
        .debug();

});

test
('Dragable Slider Example', async (t) => {
    await t
        //.click(elemento)
        .drag('#draggable', 200, 10)
        .wait(2000);

    const box = Selector('#droppable p');
    const textBox: string = await box.innerText;

    await t.expect(textBox).eql('Dropped!', 'Error! the textBox text is: ' + textBox)

});