$(document).ready(function(){

    $('.btn-save').click(function(e) {
        
        e.preventDefault()

        let dados = $('#form-categoria').serialize()

        var id = $('#idcategoria').val()

        if (id > 0) {

            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                data: dados,
                url: 'src/categorias/model/update-categoria.php',
                success: function(dados) {
    
                    Swal.fire({
                        title: 'appAulaDS',
                        text: dados.mensagem,
                        type: dados.tipo,
                        confirmButtonText: 'OK'
                    })
    
                    $('#modal-categoria').modal('hide');
    
                }
            })
            
        }else{

            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                data: dados,
                url: 'src/categorias/model/create-categoria.php',
                success: function(dados) {
    
                    Swal.fire({
                        title: 'appAulaDS',
                        text: dados.mensagem,
                        type: dados.tipo,
                        confirmButtonText: 'OK'
                    })
    
                    $('#modal-categoria').modal('hide');

                }
            })

        }

        $('#conteudo').load('src/categorias/view/list-categoria.html');

    })

})