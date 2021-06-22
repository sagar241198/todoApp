<template>
  <div>
    <h1>Emlpyee's</h1>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">First_name</th>
            <th scope="col">Last_name</th>
            <th scope="col">Avtar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="emplyee in EmployeeData" v-bind:key="emplyee.id">
            <th scope="row">{{ emplyee.id }}</th>
            <td>{{ emplyee.email }}</td>
            <td>{{ emplyee.first_name }}</td>
            <td>{{ emplyee.last_name }}</td>
            <td>
              <img v-bind:src="emplyee.avatar" alt="avatar" />
            </td>
          </tr>
        </tbody>
      </table>
      <button v-on:click="previous" class=" btn btn-outline-success mb-4 m-r-10" style="margin-right:10px">prev</button>
      <button v-on:click="Next" class=" btn btn-outline-success mb-4">Next</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Employee",
    data() {
      return {
        EmployeeData: null,
        pageNo: 1,
      };
    },
    mounted() {
      axios
        .get(`https://reqres.in/api/users?page=${this.pageNo}`)
        .then((response) => (this.EmployeeData = response.data.data));
    },
    methods: {
      Next() {
        this.pageNo += 1;
        axios
          .get(`https://reqres.in/api/users?page=${this.pageNo}`)
          .then((response) => (this.EmployeeData = response.data.data));
      },
      previous() {
        this.pageNo = this.pageNo > 2 ? this.pageNo - 1 : 1;
        axios
          .get(`https://reqres.in/api/users?page=${this.pageNo}`)
          .then((response) => (this.EmployeeData = response.data.data));
      },
    },
  };
</script>


    

