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

        $id = (isset($requestData['idcliente'])) ? $requestData['idcliente'] : '';

        $sql = "SELECT * FROM clientes WHERE idcliente = $id";

        $resultado = mysqli_query($conn, $sql);

        if ($resultado && mysqli_num_rows($resultado) > 0){

            while ($linha = mysqli_fetch_assoc($resultado)) {
            
                $dadoscliente = array_map('utf8_encode', $linha);
    
            }

            $dados = [
                'tipo' => 'success',
                'mensagem' => '',
                'dados' => $dadoscliente
            ];

        } else {

            $dados = [
                'tipo' => 'info',
                'mensagem' => 'Não foi possível localizar a cliente.',
                'dados' => []
            ];

        }

        mysqli_close($conn);

    }

    echo json_encode($dados);

?>