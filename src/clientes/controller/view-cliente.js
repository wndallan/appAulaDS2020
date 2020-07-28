$(document).ready(function(){

    $('#table-cliente').on('click', '.btn-view', function(e){
        
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        dados = "idcliente="
        dados += $(this).attr('id')

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/clientes/model/view-cliente.php',
            success: function(dados) {

                var cliente = dados.dados

                $('.modal-title').append("cliente: "+cliente.nome)

                $('.modal-body').load('src/clientes/view/view-cliente.html', function() {
                    $('#idcliente').append(cliente.idcliente)
                    $('#nome').append(cliente.nome)
                    $('#email').append(cliente.email)
                    $('#telefone').append(cliente.telefone)
                    $('#datacriacao').append(cliente.datacriacao)
                    $('#datamodificacao').append(cliente.datamodificacao)

                    if (cliente.ativo == 'S') {
                        $('#ativo').append('Ativado')
                    } else {
                        $('#ativo').append('Desativado')
                    }
                })

                $('.btn-save').hide() 
                
                $('#modal-cliente').modal('show')

            }
        })

    })

})