<script setup lang="ts">
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
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
