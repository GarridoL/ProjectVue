<template>
    <v-app>
          <br> <br> <br> <br>
          <center>
      <v-card
        class="d-flex align-center rounded-card"
        light
        height="300"
        width="900"
      >This is a web application that serves as a portal for all of these services. The person need only access the webpage, select the government document he wants to process, then fill up the form. Once the form is sent, the user needs to verify his identity by also providing a valid government issued ID. After this has been done, and the submission is validated by the government office concerned, the user is given a transaction code. The person simply goes to that government office, line up at the designated rush counter for online transactions, give his transaction code. The government officer inputs his code into the system, and immediately the government document for the user is generated. Finally, the person pays the necessary fees, and goes on his way. We plan to partner with the government offices to make this application a reality. We believe that procuring documents doesn't need to be difficult. Our app ensures a quick and hassle-free experience for the Filipinos who require these government documents.

      </v-card>
          </center>
    </v-app>
</template>
<script>
export default {
    components: {
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
    ]
  })
}
</script>