<?php

    include('../../banco/conexao.php');

    if (!$conn) {

        $dados = [
            'tipo' => 'error',
            'mensagem' => 'OPS, não foi possível obter uma conexão com o banco de dados.',
            'dados' => []
        ];

    } else {

        $requestData = $_REQUEST;

        if (!isset($requestData['idcategoria']) || $requestData['idcategoria'] < 1){

            $dados = [
                'tipo' => 'error',
                'mensagem' => 'Não foi possível deletar a categoria.',
                'dados' => []
            ];    

        } else {

            $sql = "DELETE FROM categorias WHERE idcategoria = '$requestData[idcategoria]'";

            if (!mysqli_query($conn, $sql)) {

                $dados = [
                    'tipo' => 'error',
                    'mensagem' => 'Não foi possível deletar a categoria.',
                    'dados' => []
                ]; 

            } else {

                $dados = [
                    'tipo' => 'success',
                    'mensagem' => 'Categoria deletada com sucesso.',
                    'dados' => []
                ]; 

            }

        }

        mysqli_close($conn);

    }

    echo json_encode($dados);

?>