<template>
  <v-container>
    <div class="text-h4 text-center font-italic">Got a random joke for you!</div>
    <p class="pa-2 font-weight-medium text-center">{{joke}}</p>
  </v-container>
</template>

<script lang="ts">
import { randomJokeRequest } from '@/api/api';
import { defineComponent } from 'vue'

interface ComponentData {
  joke: string
}

export default defineComponent({
  name: 'Random',
  beforeRouteEnter(_, __, next) {
    next(vm => (vm as any).fetchRandomJoke())
  },
  data(): ComponentData {
    return {
      joke: '',
    }
  },
  methods: {
    fetchRandomJoke() {
      randomJokeRequest().then(resp => {
        if (resp) this.joke = resp.joke
      });
    }
  }
})
</script>
