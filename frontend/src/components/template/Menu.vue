<template>
  <aside class="menu"></aside>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #455157, #797e83);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>