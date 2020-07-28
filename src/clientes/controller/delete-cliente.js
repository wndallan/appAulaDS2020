$(document).ready(function(){

    $('#table-cliente').on('click', '.btn-delete', function(e){
        
        e.preventDefault()

        dados = "idcliente="
        dados += $(this).attr('id')

        Swal.fire({
            title: 'Tem certeza que deseja deletar essa cliente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim!'
        }).then((result) => {

            if (result.value) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: dados,
                    url: 'src/clientes/model/delete-cliente.php',
                    success: function(dados) {
        
                        Swal.fire({
                            title: 'appAulaDS',
                            text: dados.mensagem,
                            type: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#conteudo').load('src/clientes/view/list-cliente.html');
    
                    }
                })
            }

        })

    })

})