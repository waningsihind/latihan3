<template>
<div id="app">
        <main>
            <h2>{{ message }}</h2>
            <p v-if="!todos.length">
                Masukan todo!
            </p>
            <ol>
                <li v-for-key="todo in todos">{{ todo }}</li>
            </ol>
            <div>
                <form @submit="addTodo($event)">
                    <input type="text" class="input" name="title" id="title" v-model="title">
                    <button class="button" type="submit">Tambahkan</button>
                    <p>{{ status }}</p>
                </form> 
            </div>
        </main>
    </div>
</template>

<script>
import HostVue from './host.vue'
export default {
name: HostVue,
data() {
    return {
        title: "",
        message: "Todo List:",
        todos: []       
        }
    }
}
    

</script>
<style>
#app {
    display:flex;
    justify-content: center;
    align-items: center;
}

.input {
    padding: 10px;
}

.button {
    padding: 10px;
}
</style>