<script setup>

var submitContact = () => {
  console.info('Submit Contact')
}

</script>

<template>
<main>
  <header class="basis-full container mx-auto">
    <h1 class="text-center text-3xl font-bold py-7">
      Contact
    </h1>
  </header>
  <hr />
  <div class="flex flex-row">
    <section class="basis-1/2">
      <header class="basis-full container mx-auto">
        <h2 class="text-lg font-bold py-2">
          Form
        </h2>
      </header> 
      <form action="contact" method="post" class="flex flex-col py-4">
        <div class="px-4">
          <label for="name" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name
          </label>
          <input type="text" name="name" id="name" required placeholder="Enter with your name" title="Enter with your name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
        <div class="px-4">
          <label for="email" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input type="email" name="email" id="email" required placeholder="Enter with your email" title="Enter with your email" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
        <div class="px-4">
          <label for="subject" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Sbuject
          </label>
          <input type="text" name="subject" id="subject" required placeholder="Enter with your subject" title="Enter with your subject" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
        </div>
        <div class="px-4">
          <label for="message" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Message
          </label>
          <textarea name="message" id="message" cols="10" rows="10" placeholder="Enter with the message" title="Enter with the message" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"></textarea>
        </div>
        <div class="px-4 text-right">
          <button type="submit" @click.prevent="submitContact" title="Click here to submit the contact" class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-6 rounded">
            Submit
          </button>
        </div>
      </form>
    </section>
    <section class="basis-1/2">
      <header class="basis-full container mx-auto">
        <h2 class="text-lg font-bold py-2">
          Address
        </h2>
      </header> 
      <address>
        <a href="mailto:contact@gmail.com">contact@gmail.com</a><br />
        <a href="tel:+5744912163" title="Click to call">(574) 491-2163</a> <br />
        9474 S 825th W <br />
        Akron, Indiana(IN), 46910 <br />
      </address>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5056577035493!2d-7.068395125163027!3d40.7728962550234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3c6048aa8d3121%3A0xc27d83b42e027bfc!2sBombeiros%20Volunt%C3%A1rios%20de%20Pinhel!5e0!3m2!1spt-PT!2spt!4v1720985775297!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
  </div>
</main>
</template>

<style scoped>

</style>
