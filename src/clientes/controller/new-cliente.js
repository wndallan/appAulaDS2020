$(document).ready(function(){

    $('.btn-new').click(function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo cliente')

        const dataagora = new Date().toLocaleString()

        $('.modal-body').load('src/clientes/view/form-cliente.html', function() {
            $('#dataagora').val(dataagora)
        })

        $('.btn-save').show() 
        
        $('#modal-cliente').modal('show')

    })

})