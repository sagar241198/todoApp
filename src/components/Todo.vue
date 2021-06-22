<template>
  <h1>Todo App</h1>

  <input
    class="form-control w-50 m-auto"
    type="text"
    v-model="textInput"
    palceholder="Type Somthing"
    require
  />
  <button type="submit" class="btn btn-secondary my-2" v-on:click="add">
    add
  </button>

  <hr />

  <div id="saveNotes" class="container d-flex flex-wrap w-60 m-auto">
    <ul class="card mr-2" v-for="item in ListItems" v-bind:key="item.id">
      <li class="card-body">Note - {{ item.id + 1 }} : {{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Todo",
    data() {
      return {
        title: "",
        ListItems: [],
      };
    },
    methods: {
      add() {
        if (this.textInput.length === 0) {
          return alert("plz type somthing");
        } else {
          this.ListItems.push({
            id: this.ListItems.length,
            name: this.textInput,
          });
          this.textInput = "";
        }
      },
    },
  };
</script>

<style>
  li {
    list-style: none;
  }
</style>