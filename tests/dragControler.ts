import { Selector } from 'testcafe';

let elemento: any;

fixture `TETST_CONTROLLER_SESSION`
    .page `https://demoqa.com/elements`

test
('Dragable Selector Example', async (t) => {
    elemento = Selector('.element-group:nth-child(4)');
    await t
        .click(elemento)

    await t 
        .click(elemento.find('.menu-list li:nth-child(4)'))
        .debug();

    //await t
        //.click(elemento)
        //.drag('#draggable', 200, 10)
        //.wait(2000);
});

test
.skip
('Dragable Slider Example', async (t) => {
    await t
        //.click(elemento)
        .drag('#sliderContainer > div.col-9 > span > input', 200, 0)
        .wait(2000);
});