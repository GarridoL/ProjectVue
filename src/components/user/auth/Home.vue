<template >
  <v-container>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Express</span>
        <span class="font-weight-light">_docx</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="#">
        <span class="mr-2">Beta Version</span>
      </v-btn>
    </v-app-bar>
    <br>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title text-center">FORM CATEGORIES</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-for="item in items" :key="item.title" :to="item.link">
      <v-row>
        <v-col cols="12" md="3">
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'light-blue darken-1' : '#ffffff'"
              class="d-flex align-center rounded-card"
              light
              height="300"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active ? 'Barangay Indigency' : '#ffffff'"
                  class="display-1 flex-grow-1 text-center font-weight-light"
                >{{ item.title }}</div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-list-item>
  </v-container>
</template>
<script>
import Footer from "../../modules/Footer.vue";
export default {
  components: {
    Footer
  },
  data: () => ({
    items: [
      {
        title: "Barangay Clearance",
        icon: "mdi-home",
        link: "/barangay-clearance"
      },
      {
        title: "Barangay Indigency",
        icon: "mdi-home",
        link: "/barangay-indigency"
      },
      { title: "Barangay ID",
        icon: "mdi-home",
        link: "/barangay-id" },
      {
        title: "Business Clearance",
        icon: "mdi-home",
        link: "/business-clearance"
      }
    ],
    drawer: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>