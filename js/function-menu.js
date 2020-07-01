$(document).ready(function() {

    $('.categoria').click(function(e) {
        e.preventDefault()
        $('#conteudo').empty()
        $('#conteudo').load('src/categorias/view/list-categoria.html')
    })
})