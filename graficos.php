<?php
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"></script>

    <div id = "topo">
      <span id = "iconeMenu" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</span>
      <h1 > Hospital Regional de Juazeiro </h1>
  </div>


    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="index.html" class="links">Home</a>
        <a href="#" class="links">Pacientes cadastrados</a>
        <a href="#" class="links">Novo paciente</a>
        <a href="#" class="links">Exportar dados</a>
        <a href="#" class="links">Adicionar campos</a>
        <a href="graficos.html" class="links">Gráficos</a>
    </div>


      <div id="dadosPaciente">
        <p><strong> Nome: </strong> Carlos Henrique de Souza &nbsp &nbsp &nbsp &nbsp <strong> Enfermaria: </strong> 15 &nbsp &nbsp &nbsp &nbsp  <strong>Leito: </strong> 12</p>
        <p><strong> Admissão Hospitalar: </strong> 15/02/2018 &nbsp &nbsp &nbsp &nbsp <strong> Admissão CM: </strong> 17/02/2018 </p>
        <p><strong> Idade: </strong> 23</p>
      </div>



      <div id="teste">
        <canvas id="myChart" style="width: 100px; height: 100px;" width="100" height="100"></canvas>
         <script type="text/javascript">
         var ctx = document.getElementById('myChart').getContext('2d');
         var myChart = new Chart(ctx, {
           responsive: false,
           type: 'line',
           data: {
             labels: ['15/02/2018 ', '16/02/2018 ', '17/02/2018', '18/02/2018 ', '19/02/2018', '20/02/2018', '21/02/2018'],

             datasets: [{
               label: 'Hb',
               data: [10, 11, 13, 13.5, 13.1, 14, 14.6],
               borderColor: "rgba(214, 4, 21,0.4)",
               fill: false
             }, {
               label: 'Htc',
               data: [0.6, 0.7, 0.7, 0.6, 0.5, 0.52, 0.45],
               borderColor: "rgba(4, 140, 214,0.4)",
               fill: false
             }, {
               label: 'HCM',
               data: [12, 19, 3, 17, 6, 3, 7],
               borderColor: "rgba(4, 214, 130,0.4)",
               fill: false
             },]
           }
         });
         </script>
      </div>




    <script src="index.js"></script>
  </body>

</html>


