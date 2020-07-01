$(document).ready(function(){

    $('.btn-new').click(function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar nova categoria')

        const dataagora = new Date().toLocaleString()

        $('.modal-body').load('src/categorias/view/form-categoria.html', function() {
            $('#dataagora').val(dataagora)
        })

        $('.btn-save').show() 
        
        $('#modal-categoria').modal('show')

    })

})