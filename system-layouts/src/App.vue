<script setup>


</script>

<template>
  <nav class="bg-green-950">
    <div class="container mx-auto w-auto text-amber-100 font-bold">
      <ul class="flex justify-center">
        <li class="px-5 py-2 hover:bg-green-800 hover:text-amber-200">
          <router-link to="/" title="Go to home page">
            Home
          </router-link>
        </li>
        <li class="px-5 py-2 hover:bg-green-800 hover:text-amber-200">
          <router-link to="/articles" title="Go to articles">
            Articles
          </router-link>
        </li>
        <li class="px-5 py-2 hover:bg-green-800 hover:text-amber-200">
          <router-link to="/contact" title="Go to contact">
            Contact
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
  <footer>
    <small>
      Copyright © 2024 Felipe Brum. All Rights Reserved.
    </small>
    <a href="#privacy-policy">Privacy Policy</a> <br />
    <a href="#terms">Terms</a>
  </footer>
</template>

<style scoped>

</style>
