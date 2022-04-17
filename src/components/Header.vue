<template>
  <v-app-bar
    color="primary"
    prominent
  >
    <v-btn variant="text" @click="goToHome">Home</v-btn>
    <v-btn variant="text" @click="goToSearch">Search</v-btn>
    <v-btn variant="text" @click="goToRandom">Random</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    goToSearch() {
      this.$router.push('/search')
    },
    goToRandom() {
      this.$router.push('/random')
    }
  }
})
</script>
