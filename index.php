<?php include("cabecalho.php"); 
include("conecta.php"); 
include("banco-pacientes.php"); 

session_start();

$pacientesClick = array();

?>

 <main>
      <section class="container">
        <h2>Pacientes</h2>
        <label for="filtrar-tabela">Filtre:</label>
        <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">

        <br/>
        <br/>
        <br/>

        <div id="">
          <table class="table table-striped table-dark" cellpadding="0" cellspacing="0" class="tabela">
            <thead class="thead-light">
              <tr>
                <th colspan="2">Nome</th>
                <th>Idade</th>
                <th class="escondeTBl">Sexo</th>
                <th class="escondeTBl">Enfermaria</th>
                <th>Leito</th>
                <th class="escondeTBl">Admissão Hospitalar</th>
              </tr>
            </thead>
            <tbody id="tabela-pacientes">
              <?php
                  $pacientes = listaPacientes($conexao);
                  foreach($pacientes as $paciente){
                      array_push($pacientesClick, $paciente['CPF']);
              ?>
                <tr class="paciente" id="primeiro-paciente" >
                  <td class="info-nome" colspan="2" ondblclick="location.replace('pacientes.php');" id=<?= $paciente['CPF'] ?>><?= $paciente['NOME'] ?></td>
                  <?php $_SESSION["CPF"] = $paciente['CPF']; ?>
                  <td><?= $paciente['IDADE'] ?></td>
                  <td class="escondeTBl"><?= $paciente['SEXO'] ?></td>
                  <td class="escondeTBl"><?= $paciente['ENFERMARIA'] ?></td>
                  <td><?= $paciente['LEITO'] ?></td>
                  <td class="escondeTBl"><?= $paciente['ADMISSAO_HOSPITALAR'] ?></td>
                </tr>

              <?php
                  }
              ?>
            </tbody>
          </table>
        </div>

      </section>

     
    </main>
 <p id="perfil" class="mostra_perfil_emBaixo">Perfil: interno de medicina</p>
  </body>

    <script src="index.js"></script>
    <script src="form.js" ></script>
    <script src="filtra.js" ></script>

</html>