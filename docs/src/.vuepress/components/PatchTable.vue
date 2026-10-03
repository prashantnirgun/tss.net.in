<template>
  <div class="table-container">
    <table v-if="users.length">
      <thead>
        <tr>
          <!-- <th v-for="key in headers" :key="key">{{ key }}</th> -->
          <td>Name</td>
          <td>Release Date</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in users" :key="i">
          <!-- <td v-for="key in headers" :key="key">{{ row[key] }}</td> -->
          <td>
            <a :href="row.download" download>{{ row["Name"] }}</a>
          </td>
          <td>{{ row["Release List"] }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "UserTable",
  data() {
    return {
      users: [],
      headers: [],
    };
  },
  mounted() {
    // ✅ Fetch JSON dynamically (from public folder)
    fetch("/data/users.json")
      .then((res) => res.json())
      .then((data) => {
        this.users = data;
        this.headers = Object.keys(data[0]);
      })
      .catch((err) => console.error("Failed to load JSON:", err));
  },
};
</script>

<style scoped>
.table-container {
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
th {
  background: #f3f3f3;
  text-align: left;
}
</style>
