<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <form @submit.prevent="sendMessage">
      <input v-model="message" type="text" name="" id="">
      <button type="submit">emit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';


export default {
  name: 'App',
  data(){
    return{
      message: '',
      connection: null
    }
  },
  methods:{

    ...mapActions(['send']),

    sendMessage(){
      console.log(this.connection);
      this.connection.send(this.message)
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
