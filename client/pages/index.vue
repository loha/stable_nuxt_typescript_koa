<template>
  <div>
    <Hello />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Hello from '@/components/Hello.vue';

@Component({
  components: {
    Hello,
  },
})
export default class extends Vue {}
</script>

<style>
</style>
