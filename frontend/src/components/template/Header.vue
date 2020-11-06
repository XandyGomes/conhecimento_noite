<template>
  <header class="header">
      <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
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
    .title {
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }
    .title a {
    color: #fff;
    text-decoration: none;
    }
    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header.header > a.toggle:hover {
        color:#fff;
        background-color: rgba(0,0,0,0.2);
    }

</style>