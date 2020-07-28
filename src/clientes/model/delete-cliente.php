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

        if (!isset($requestData['idcliente']) || $requestData['idcliente'] < 1){

            $dados = [
                'tipo' => 'error',
                'mensagem' => 'Não foi possível deletar a cliente.',
                'dados' => []
            ];    

        } else {

            $sql = "DELETE FROM clientes WHERE idcliente = '$requestData[idcliente]'";

            if (!mysqli_query($conn, $sql)) {

                $dados = [
                    'tipo' => 'error',
                    'mensagem' => 'Não foi possível deletar a cliente.',
                    'dados' => []
                ]; 

            } else {

                $dados = [
                    'tipo' => 'success',
                    'mensagem' => 'cliente deletada com sucesso.',
                    'dados' => []
                ]; 

            }

        }

        mysqli_close($conn);

    }

    echo json_encode($dados);

?>