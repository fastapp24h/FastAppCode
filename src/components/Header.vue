<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 16px;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 16px;
}

nav a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

nav a:hover {
  color: #bbb;
}
</style>