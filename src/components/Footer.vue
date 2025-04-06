<template>
  <footer>
    <p>&copy; {{ currentYear }} Your Company. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
}
</script>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 16px;
  text-align: center;
}
</style>