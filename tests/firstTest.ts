fixture(`MyFirstTest`)
.page(`http://devexpress.github.io/testcafe/blog/`)

test
    ('Test Cafe Blog', async t => {
        console.log('Se ingresó al sitio web test cafe blog correctamente');
    });