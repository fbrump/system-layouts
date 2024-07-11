<script setup>


</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" title="Go to home page">
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/articles" title="Go to articles">
          Articles
        </router-link>
      </li>
      <li>
        <router-link to="/contact" title="Go to contact">
          Contact
        </router-link>
      </li>
    </ul>
  </nav>

  <router-view />
</template>

<style scoped>

</style>
