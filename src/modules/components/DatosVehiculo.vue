<template>
        <label for="">ID</label>
        <input v-model="id" type="text">
        <label for="">Placa</label>
        <input v-model="placa" type="text">
        <label for="">Marca</label>
        <input v-model="marca" type="text">
        <label for="">Modelo</label>
        <input v-model="modelo" type="text">
        <label for="">Motor</label>
        <input v-model="motor" type="text">
        <button>Visualizar</button>

</template>

<script>
import { consultarTodosFachada } from "../helpers/VehiculoCliente.js"
export default {
    data: {
        id: null,
        placa: null,
        marca: null,
        modelo: null
    },
    methods: {
        async consultarTodos() {
            const data = await consultarTodosFachada();
            return data;
        }
    }

}
</script>

<style></style>