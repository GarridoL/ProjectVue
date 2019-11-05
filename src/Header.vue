<template >
  <v-container>
    <v-app-bar>
      <v-toolbar-title class="headline text-uppercase">
        <span>Garrido</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-item-group> -->
        <!-- <v-list-item v-for="item in items" :key="item.title" :to="item.link"> -->
          <router-link to="/about" tag="button"><v-btn>About</v-btn></router-link>
          <br />
          <router-link to="/home" tag="button"><v-btn>Home</v-btn></router-link>
          
        <!-- </v-list-item> -->
      <!-- </v-item-group> -->
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  items: [
    {
      title: "Home",
      link: "/home"
    },
    {
      title: "About",
      link: "/about"
    }
  ]
};
</script>
