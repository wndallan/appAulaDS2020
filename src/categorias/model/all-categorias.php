<?php

    include('../../banco/conexao.php');

    if (!$conn) {

        $dados = [
            'tipo' => 'info',
            'mensagem' => 'OPS, não foi possível obter uma conexão com o banco de dados.',
            'dados' => []
        ];

    } else {

        $sql = "SELECT idcategoria, nome FROM categorias WHERE ativo = 'S'";

        $resultado = mysqli_query($conn, $sql);

        if ($resultado && mysqli_num_rows($resultado) > 0){

            $categoriasAtivas = [];

            while ($linha = mysqli_fetch_assoc($resultado)) {

                array_push($categoriasAtivas, array_map('utf8_encode', $linha));
    
            }

            $dados = [
                'tipo' => 'success',
                'mensagem' => '',
                'dados' => $categoriasAtivas
            ];

        } else {

            $dados = [
                'tipo' => 'error',
                'mensagem' => 'Não foi possível localizar a categoria.',
                'dados' => []
            ];

        }

        mysqli_close($conn);

    }

    echo json_encode($dados);

?>