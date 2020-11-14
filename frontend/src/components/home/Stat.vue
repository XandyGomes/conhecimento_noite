<template>
  <div class="stat">
    <div class="stat-icon">
      <i :class="icon" :style="style"></i>
    </div>
    <div class="stat-info">
      <span class="Stat-title"> {{ title }} </span>
      <span class="Stat-value"> {{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stat",
  props: ['title', 'value', 'icon', 'color'],
  computed: {
    style(){
      return "color: " + (this.color || "#000")
    }
  }

}
</script>

<style>
  .stats {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

</style>