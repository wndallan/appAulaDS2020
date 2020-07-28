$(document).ready(function(){

    $('.btn-save').click(function(e) {
        
        e.preventDefault()

        let dados = $('#form-cliente').serialize()

        var id = $('#idcliente').val()

        if (id > 0) {

            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                data: dados,
                url: 'src/clientes/model/update-cliente.php',
                success: function(dados) {
    
                    Swal.fire({
                        title: 'appAulaDS',
                        text: dados.mensagem,
                        type: dados.tipo,
                        confirmButtonText: 'OK'
                    })
    
                    $('#modal-cliente').modal('hide');
    
                }
            })
            
        }else{

            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                data: dados,
                url: 'src/clientes/model/create-cliente.php',
                success: function(dados) {
    
                    Swal.fire({
                        title: 'appAulaDS',
                        text: dados.mensagem,
                        type: dados.tipo,
                        confirmButtonText: 'OK'
                    })
    
                    $('#modal-cliente').modal('hide');

                }
            })

        }

        $('#conteudo').load('src/clientes/view/list-cliente.html');

    })

})