<?php

function listaPacientes($conexao){
	$pacientes = array();
	$resultado = mysqli_query($conexao, "select * from paciente");

	while($paciente = mysqli_fetch_assoc($resultado)) {
    	array_push($pacientes, $paciente); 
	}	

	return $pacientes;
}




