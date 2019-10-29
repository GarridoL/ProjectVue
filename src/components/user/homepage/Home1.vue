<template>
  <v-app>
      <Header />
      <div>
      <center>
          <br>
          <br>
      <v-item-group>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-row>
            <v-col>
              <v-item v-slot:default="{ active, toggle }">
                <header
                  :color="active ? 'light-blue darken-1' : '#ffffff'"
                  class="d-flex align-center rounded-card"
                  light
                  height="50"
                  @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div
                      v-if="active ? 'Barangay Indigency' : '#ffffff'"
                      class="display-1 flex-grow-1 text-center font-weight-light"
                    >{{ item.title}}</div>
                  </v-scroll-y-transition>
                </header>
              </v-item>
            </v-col>
          </v-row>
        </v-list-item>
      </v-item-group>
        <br> <br> <br> <br>
        <v-card class="d-inline-block mx-auto">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-img
                  height="200"
                  width="200"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Jeon_Jung-kook_at_Golden_Disk_Awards%2C_5_January_2019_07.jpg"
                ></v-img>
              </v-col>
              <v-col cols="auto" class="text-center pl-0">
                <v-row class="flex-column ma-0 fill-height" justify="center">
                  <v-btn text>Chervs</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="d-inline-block mx-auto">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-img
                  height="200"
                  width="200"
                  src="http://pm1.narvii.com/7257/f464a5a568a32570ed7b82d7e97f0ba1ed05c63er1-682-1024v2_uhq.jpg"
                ></v-img>
              </v-col>
              <v-col cols="auto" class="text-center pl-0">
                <v-row class="flex-column ma-0 fill-height" justify="center">
                  <v-btn text>Yols</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="d-inline-block mx-auto">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-img
                  height="200"
                  width="200"
                  src="https://biaswrecker.com/wp-content/uploads/2019/07/ddc149ea6c6da327015ccdd23546f1be.jpg"
                ></v-img>
              </v-col>
              <v-col cols="auto" class="text-center pl-0">
                <v-row class="flex-column ma-0 fill-height" justify="center">
                  <v-btn text>Bargs</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        <v-card class="d-inline-block mx-auto">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-img
                  height="200"
                  width="200"
                  src="https://i2.wp.com/i.imgur.com/TMtOuFN.jpg?w=1060&ssl=1"
                ></v-img>
              </v-col>

              <v-col cols="auto" class="text-center pl-0">
                <v-row class="flex-column ma-0 fill-height" justify="center">
                  <v-btn text>Ling</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        </center>
      </div>
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
};
</script>