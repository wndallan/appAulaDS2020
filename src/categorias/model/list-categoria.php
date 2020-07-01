<?php

    include('../../banco/conexao.php');

    if (!$conn) {

        $json_data = [
            'draw' => 0,
            'recordsTotal' => 0,
            'recordsFiltered' => 0,
            'data' => []
        ];

    } else {

        $requestData = $_REQUEST;

        $colunas = $requestData['columns'];

        $sql = "SELECT idcategoria, nome, date_format(datamodificacao,'%d/%m/%Y %H:%i:%s') as datamodificacao, ativo FROM categorias WHERE 1=1";

        $resultado = mysqli_query($conn, $sql);
        $qtdLinhas = mysqli_num_rows($resultado);

        $filtro = $requestData['search']['value'];

        if (!empty($filtro)) {

            $sql .= " AND (idcategoria LIKE '$filtro%'";
            $sql .= " OR nome LIKE '$filtro%')";

        }

        $resultado = mysqli_query($conn, $sql);
        $totalFiltrados = mysqli_num_rows($resultado);

        $colunaOrdem = $requestData['order'][0]['column'];
        $ordem = $colunas[$colunaOrdem]['data'];
        $direcao = $requestData['order'][0]['dir'];

        $inicio = $requestData['start'];
        $tamanho = $requestData['length'];

        $sql .= " ORDER BY $ordem $direcao LIMIT $inicio, $tamanho";

        $resultado = mysqli_query($conn, $sql);

        $dados = [];

        while ($linha = mysqli_fetch_assoc($resultado)) {
            
            $dados[] = array_map('utf8_encode', $linha);

        }

        $json_data = [
            'draw' => intval($requestData['draw']),
            'recordsTotal' => intval($qtdLinhas),
            'recordsFiltered' => intval($totalFiltrados),
            'data' => $dados
        ];

        mysqli_close($conn);

    }

    echo json_encode($json_data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

?>