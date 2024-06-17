const bt = document.getElementById('comecar');
bt.addEventListener('click', () => {
    const nome = localStorage.getItem("name")
    console.log(nome);
    if (nome == undefined) {
        window.open('../pagina-inicial/index.html', '_self')
    } else {
        window.open("../exercicio_1/indexq1.html", "_self")
    }
})