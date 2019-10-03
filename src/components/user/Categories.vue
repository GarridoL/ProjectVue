<template>
  <v-app>
     <v-flex justify-center>
    <v-content>
      <div id="app">
        <NavBar/>
        <v-card max-width="900" class="col-sm-7 border mx-auto" color="white darken-3" light>
            <br>
            <h1 class="text-center">Free Categories</h1>
            
            <div class="flex-grow-1"></div>
            <br>
          <v-card-text>
            <v-row>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Name" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Occupation" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Business Address" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Contact Number" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Date Issued" filled></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field label="Punong Barangay Signature" filled></v-text-field>
            </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="white" fab large @click="isEditing = !isEditing">Print</v-btn>
            <v-btn color="white" fab large @click="isEditing = !isEditing">Edit</v-btn>
          </v-card-actions>
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
