<template>
    <v-app>
        <Header />
          <br>
          <br>
      <v-item-group>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-row>
            <v-col>
              <v-item v-slot:default="{ active, toggle }">
                <v-button
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
                </v-button>
              </v-item>
            </v-col>
          </v-row>
        </v-list-item>
      </v-item-group>
      <v-card
        :color="active ? 'light-blue darken-1' : '#ffffff'"
        class="d-flex align-center rounded-card"
        light
        height="300"
        @click="toggle">This is a web application that serves as a portal for all of these services. The person need only access the webpage, select the government document he wants to process, then fill up the form. Once the form is sent, the user needs to verify his identity by also providing a valid government issued ID. After this has been done, and the submission is validated by the government office concerned, the user is given a transaction code. The person simply goes to that government office, line up at the designated rush counter for online transactions, give his transaction code. The government officer inputs his code into the system, and immediately the government document for the user is generated. Finally, the person pays the necessary fees, and goes on his way. We plan to partner with the government offices to make this application a reality. We believe that procuring documents doesn't need to be difficult. Our app ensures a quick and hassle-free experience for the Filipinos who require these government documents.

      </v-card>
    </v-app>
</template>
<script>
import Header from "../../modules/Header.vue";
export default {
    components: {
    Header
  },
  data: () => ({
    color: {
      header: "#0D47A1",
      text: "white"
    },
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
  })
}
</script>