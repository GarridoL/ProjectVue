<template>
  <v-app>
      <template v-for="(dev, index) in developer">
        <Developer :key="index" v-bind:name="dev.name" v-bind:image="dev.image"/>
      </template>
  </v-app>
</template>
<script>
import Developer from "../homepage/Developer.vue";
export default {
  components: {
    Developer
  },
  data: () => ({
    items: [
      {
        title: "Home",
        link: "/home"
      },
      {
        title: "About",
        link: "/about"
      }
    ],
    developer: [
        {
            name: "Chervin Pepito Tanilon",
            image: require("@/assets/chervz.jpg")
        },
        {
            name: "Leonilo Rasonable Torres",
            image: require("@/assets/yol.jpg")
        },
        {
            name: "Renan Canete Bargaso",
            image: require("@/assets/bargs.jpg")
        },
        {
            name: "Lalaine Cabelin Garrido",
            image: require("@/assets/ling.jpg")
        }
    ]
  })
};
</script>