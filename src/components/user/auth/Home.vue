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
    <v-item-group>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title text-center">FORM CATEGORIES</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link">
        <v-row>
          <v-col>
            <div class="float-right"><v-card class="white--text text-center headline font-weight-regular">
            <v-img
            height="300"
            width="930"
            src= "https://csusmchronicle.com/wp-content/uploads/2017/10/O6_An-acquaintance-today-and-a-friend-tomorrow_Courtesy-of-Wikimedia-Commons.jpg"
            
          >REQUIREMENTS: <pre>{{ item.requirement }}</pre></v-img> 
              </v-card>
            </div>
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
                  >{{ item.title}}</div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-list-item>
    </v-item-group>
    <Footer/>
  </v-container>
</template>
<script>
import Footer from "../../modules/Footer.vue";
export default {
  components: {
    Footer
  },
  data: () => ({
    color: {
      header: "#0D47A1",
      text: "white"
    },
    items: [
      {
        title: "Barangay Clearance",
        requirement:"1. Application Form\n2. Application Fee (Usually varies around less than P100)\n3. Recent Community Tax Certificate or Cedula.",
        icon: "mdi-home",
        link: "/barangay-clearance"
      },
      {
        title: "Barangay Indigency",
        requirement:"1. Application Form\n2. Application Fee (Usually varies around less than P100)\n3. Recent Community Tax Certificate or Cedula\n4. Reason why you need such form",
        icon: "mdi-home",
        link: "/barangay-indigency"
      },
      {
        title: "Business Clearance",
        requirement:"1. Latest Community Tax Certificate (Cedula)\n2. DTI Business Name Registration\n3. Barangay Business Permit Fee.",
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