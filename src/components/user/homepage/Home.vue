<template>
  <v-app>
     <v-flex justify-center>
    <v-content>
      <div id="app">
        <NavBar/>
       
        <v-card max-width="900" class="col-sm-7 border mx-auto text-align-center" color="white darken-3" light>
          <v-toolbar flat color="grey">
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-dark">Business Clearance</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-text-field label="Name"></v-text-field>
            <v-text-field label="Occupation"></v-text-field>
            <v-text-field label="Business Address"></v-text-field>
            <v-text-field label="Contact Number"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="white" fab large @click="isEditing = !isEditing">Preview</v-btn>
          </v-card-actions>
          <v-snackbar
            v-model="hasSaved"
            :timeout="2000"
            absolute
            bottom
            left
          >Your profile has been updated</v-snackbar>
        </v-card>
       
    <Footer/>
      </div>
    </v-content>
     </v-flex>
  </v-app>
</template>
<script>
import NavBar from "../../modules/NavBar.vue";
import Footer from "../../modules/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
