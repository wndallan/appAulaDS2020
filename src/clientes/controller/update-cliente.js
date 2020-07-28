$(document).ready(function(){

    $('#table-cliente').on('click', '.btn-edit', function(e){
        
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
                const dataagora = new Date().toLocaleString()

                $('.modal-title').append("Cliente: "+cliente.nome)

                $('.modal-body').load('src/clientes/view/form-cliente.html', function() {
                    $('#idcliente').val(cliente.idcliente)
                    $('#nome').val(cliente.nome)
                    $('#email').val(cliente.email)
                    $('#telefone').val(cliente.telefone)
                    $('#dataagora').val(dataagora)

                    if (cliente.ativo === "S") {
                        $('#ativo').val(1)
                    } else {
                        $('#ativo').val(2)
                    }
                })

                $('.btn-save').show() 
                
                $('#modal-cliente').modal('show')

            }
        })

    })

})