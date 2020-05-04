<template>
  <div class="hello">
    <img src="../assets/logo.png" alt="Vue Logo">
    <form @submit.prevent="sendMEssage(message)">
      <input v-model="message" type="text" name="" id="">
      <input type="submit" value="emit">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data(){
    return{
      message: '',
      connection: null
    }
  },
  methods:{

    ...mapActions(['send']),

    sendMesage(message){
      console.log(this.connection);
      this.connection.send(message)
    }
  },
  created: function(){
    console.log('starting Connection to websocket')
    // this.connection = new WebSocket("wss://server.mikk149c.com:9090")
    this.connection = new WebSocket("wss://echo.websocket.org");

    this.connection.onopen = event =>{
      console.log(event);
      console.log('a connection has been established')
    }

    this.connection.onerror = error =>{
      console.log(`WebSocket error: ${error}`)
    }

    this.connection.onmessage = event => {
      console.log(event);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
