<template>
    <div class="scoped">
        <table>
        <thead>
            <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Correo Electrónico</th>
                <th>Fecha de Nacimiento</th>
                <th>Fecha de Creación</th>
                <th>Cargo</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    </div>
</template>

<script lang="ts">
</script>

<style >  
.scoped {
    padding: 30px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
}   

table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
    text-align: left;
}
tr:nth-child(even) {
    background-color: #f9f9f9;
}
tr:hover {
    background-color: #f1f1f1;
} 
</style>