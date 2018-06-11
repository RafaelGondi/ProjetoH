<?php include("conecta.php"); 
include("banco-pacientes.php"); 
session_start();
$pacientesClick = array();

?>

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <link rel="stylesheet" href="index.css" type="text/css">
    <title>Fluxograma</title>
  </head>

  <body>
    <div id = "topo">
      <span id = "iconeMenu" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
      <h1 > Hospital Life Helper </h1>
  </div>


  <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="index.php" class="links">Home</a>
      <a href="#" class="links">Novo paciente</a>
      <a href="#" class="links">Exportar dados</a>
      <a href="#" class="links" onclick="opcoesCampos()">Adicionar campos</a>
      <span id="campos">
          <a href="#" class="camposEscondidos" onclick="adicionaCamposHemograma()">Hemograma</a>
          <a href="#" class="camposEscondidos">Disfunção Renal</a>
      </span>
      <a href="graficos.html" class="links">Gráficos</a>
  </div>

    <?php 
      function povoaFluxograma($cpf){
        $pacientefg = array();
        $resultadopf = mysqli_query($conexao, "select * from paciente where cpf = $cpf");
      }


    ?>


<script type="text/javascript">
  

  console.log(this);
</script>

      <div id="dadosPaciente">
        <p><strong> Nome: </strong> <?= $_SESSION["NOME"]; ?> &nbsp &nbsp &nbsp &nbsp <strong> Enfermaria: </strong> 15 &nbsp &nbsp &nbsp &nbsp  <strong>Leito: </strong> 12</p>
        <p><strong> Admissão Hospitalar: </strong> 15/02/2018 &nbsp &nbsp &nbsp &nbsp <strong> Admissão CM: </strong> 17/02/2018 </p>
        <p><strong> Idade: </strong> 23</p>
      </div>


<main>
  <section class="container">

        <div id="tabela">
          <table class="table table-striped table-dark" cellpadding="0" cellspacing="0" class="tabela" id="tabelaCampos">
            <thead>
              <tr>
                <th>Data</th>
                <th>15/02/2018 </th>
                <th>16/02/2018 </th>
                <th>17/02/2018 </th>
                <th>18/02/2018 </th>
                <th>19/02/2018 </th>
                <th>20/02/2018 </th>
                <th>21/02/2018 </th>
              </tr>
            </thead>
          </table>
        </div>

        <br>
        <br>
        <hr>

</section>
    <main>

    <script src="index.js"></script>
  </body>

</html>
