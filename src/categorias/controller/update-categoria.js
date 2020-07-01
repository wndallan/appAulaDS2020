$(document).ready(function(){

    $('#table-categoria').on('click', '.btn-edit', function(e){
        
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
                const dataagora = new Date().toLocaleString()

                $('.modal-title').append("Categoria: "+categoria.nome)

                $('.modal-body').load('src/categorias/view/form-categoria.html', function() {
                    $('#idcategoria').val(categoria.idcategoria)
                    $('#nome').val(categoria.nome)
                    $('#dataagora').val(dataagora)

                    if (categoria.ativo === "S") {
                        $('#ativo').val(1)
                    } else {
                        $('#ativo').val(2)
                    }
                })

                $('.btn-save').show() 
                
                $('#modal-categoria').modal('show')

            }
        })

    })

})