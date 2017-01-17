<html>
<head>
<script src="src/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="src/jquery.dynamic-table-plugin.js"></script>
<script>
$(document).ready(function(){
	//Save table reference
	var tbl = $("#tbl");
	
	//Start the plugin
	tbl.DynamicTable({table: tbl});
	
	//Add a line
	//AddLn();
	
	//Remove last line
	//RmvLn(tabela.find("tr:last"));
});
</script>
<style>
table, th, td {
	border: 1px solid black;
}

th, td {
	min-width: 80px;
	text-align: center;
}

</style>
</head>
<body>
	<BR>
	<table id="tbl">
		<tbody>
			<tr>
				<th>a</th>
				<th>b</th>
			</tr>
			<tr>
				<td>c</td>
				<td>d</td>
			</tr>
			<tr>
				<td>e</td>
				<td>f</td>
			</tr>
		</tbody>
	</table>
</body>
</html>