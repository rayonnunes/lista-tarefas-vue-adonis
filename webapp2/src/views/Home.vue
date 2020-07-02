<template>
  <div class="home">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import api from "../connection/api";
export default {
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      name: "Hello World",
      serverMessage: ""
    };
  },
  mounted: function() {
    const setMessage = function(msg) {
      this.serverMessage = msg;
    };
    api.get().then(res => {
      console.log(res);
      setMessage(res.data)
    },
    err => {
      console.log(err);
    });
  }
};
</script>
