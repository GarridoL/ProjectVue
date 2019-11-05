<template>
  <v-app>
    <Header/>
    <v-content>
       <div id="app">
        <router-view />
    </div>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/Header.vue";
import router from '@/router.js'
 export default {
   components: {
     Header,
     router
   },
        name: 'App',
 }
</script>
