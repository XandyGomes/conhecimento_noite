<template>
  <header class="header">
      <a class="toogle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"> </i>
      </a>
      <h1 class="title">
          {{ title }}
      </h1>

  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        hideToggle: Boolean
    },
    computed: {
        icon() {
            return "fa-angle-left"
        }
    },
    methods: {
        toggleMenu() {
        }
    }

}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>