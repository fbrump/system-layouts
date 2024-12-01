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
  <footer class="bg-green-800 text-center py-32">
    <small>
      Copyright © 2024 Felipe Brum. All Rights Reserved.
    </small>
    <nav>
      <ul>
        <li>
          <router-link to="/privacy-policy" title="Go to the privacy Policy">Privacy Policy</router-link>
        </li>
        <li>
          <router-link to="/terms-of-service" title="Go to terms of service">Terms</router-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>

</style>
