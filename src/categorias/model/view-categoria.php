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

        $id = (isset($requestData['idcategoria'])) ? $requestData['idcategoria'] : '';

        $sql = "SELECT * FROM categorias WHERE idcategoria = $id";

        $resultado = mysqli_query($conn, $sql);

        if ($resultado && mysqli_num_rows($resultado) > 0){

            while ($linha = mysqli_fetch_assoc($resultado)) {
            
                $dadosCategoria = array_map('utf8_encode', $linha);
    
            }

            $dados = [
                'tipo' => 'success',
                'mensagem' => '',
                'dados' => $dadosCategoria
            ];

        } else {

            $dados = [
                'tipo' => 'info',
                'mensagem' => 'Não foi possível localizar a categoria.',
                'dados' => []
            ];

        }

        mysqli_close($conn);

    }

    echo json_encode($dados);

?>