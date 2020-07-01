$(document).ready(function(){

    $('#table-categoria').on('click', '.btn-view', function(e){
        
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        dados = "idcategoria="
        dados += $(this).attr('id')

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/categorias/model/view-categoria.php',
            success: function(dados) {

                var categoria = dados.dados

                $('.modal-title').append("Categoria: "+categoria.nome)

                $('.modal-body').load('src/categorias/view/view-categoria.html', function() {
                    $('#idcategoria').append(categoria.idcategoria)
                    $('#nome').append(categoria.nome)
                    $('#datacriacao').append(categoria.datacriacao)
                    $('#datamodificacao').append(categoria.datamodificacao)

                    if (categoria.ativo == 'S') {
                        $('#ativo').append('Ativado')
                    } else {
                        $('#ativo').append('Desativado')
                    }
                })

                $('.btn-save').hide() 
                
                $('#modal-categoria').modal('show')

            }
        })

    })

})