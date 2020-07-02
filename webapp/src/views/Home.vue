<template>
  <div class="home">
    <h1>{{ name }}</h1>
    <p>{{serverMessage}}</p>
  </div>
</template>

<script>
import axios from "axios";
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
    const that = this;
    const setMessage = function(msg) {
      that.serverMessage = msg.greeting;
    };
    axios.get('http://127.0.0.1:3333/')
    .then(res => {
      console.log(res);
      setMessage(res.data)
    })
    .catch(err => {
      console.log(err);
    });
    // err => {
    //   console.log(err);
    // });
  }
};
</script>
