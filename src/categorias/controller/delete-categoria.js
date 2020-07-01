$(document).ready(function(){

    $('#table-categoria').on('click', '.btn-delete', function(e){
        
        e.preventDefault()

        dados = "idcategoria="
        dados += $(this).attr('id')

        Swal.fire({
            title: 'Tem certeza que deseja deletar essa categoria?',
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
                    url: 'src/categorias/model/delete-categoria.php',
                    success: function(dados) {
        
                        Swal.fire({
                            title: 'appAulaDS',
                            text: dados.mensagem,
                            type: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#conteudo').load('src/categorias/view/list-categoria.html');
    
                    }
                })
            }

        })

    })

})