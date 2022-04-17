<script setup lang="ts">
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <v-app>
    <v-main>
      <Header />
      <router-view/>
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>
