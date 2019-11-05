<template>
    <v-item-group >
        <v-list-item>
          <v-card class="d-inline-block mx-auto">
          <v-container>
            <v-row>
              <v-col cols="auto">
                <img
                  height="300"
                  width="300"
                  :src="image"
                />
              </v-col>
              <v-col cols="100" class="text-center pl-0">
                <v-row class="flex-column ma-0 fill-height" justify="center">
                  <v-btn text>{{name}}</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
        </v-list-item>
      </v-item-group>
</template>
<script>
export default {
    props: {
        name: String,
        image: String
    }
}
</script>