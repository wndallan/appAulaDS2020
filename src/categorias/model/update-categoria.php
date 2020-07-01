<?php

    include('../../banco/conexao.php');

    if (!$conn) {

        $dados = [
            'tipo' => 'info',
            'mensagem' => 'OPS, não foi possível obter uma conexão com o banco de dados.'
        ];

    } else {

        $requestData = $_POST;

        $requestData['ativo'] = ($requestData['ativo'] == 1) ? 'S' : 'N';

        $date = date_create_from_format('d/m/Y H:i:s', $requestData['dataagora']);
        $requestData['dataagora'] = date_format($date, 'Y-m-d H:i:s');

        if (empty($requestData['nome']) || empty($requestData['ativo'])) {

            $dados = [
                'tipo' => 'info',
                'mensagem' => 'Existe(m) campo(s) obrigatório(s) vazio(s).'
            ];

        } else {

            $sql = "UPDATE categorias SET nome = '$requestData[nome]', ativo = '$requestData[ativo]', datamodificacao = '$requestData[dataagora]' WHERE idcategoria = '$requestData[idcategoria]'";

            $resultado = mysqli_query($conn, $sql);

            if ($resultado) {

                $dados = [
                    'tipo' => 'success',
                    'mensagem' => 'Categoria atualizada com sucesso.'
                ];

            } else {

                $dados = [
                    'tipo' => 'error',
                    'mensagem' => 'Não foi possível atualizar a categoria.'
                ];

            }

        }

        mysqli_close($conn);

    }

    echo json_encode($dados);

?>