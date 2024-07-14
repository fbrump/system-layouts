<script setup>

var submitContact = () => {
  console.info('Submit Contact')
}

</script>

<template>
  <section>
    <header>
      <h1>Contact</h1>
    </header>
    <form action="contact" method="post">
      <label for="name">
        Name
        <input type="text" name="name" id="name" required placeholder="Enter with your name" title="Enter with your name">
      </label>
      <label for="email">
        Email
        <input type="email" name="email" id="email" required placeholder="Enter with your email" title="Enter with your email">
      </label>
      <label for="subject">
        Sbuject
        <input type="text" name="subject" id="subject" required placeholder="Enter with your subject" title="Enter with your subject">
      </label>
      <label for="message">
        Message
      </label>
      <textarea name="message" id="message" cols="30" rows="25" placeholder="Enter with the message" title="Enter with the message"></textarea>
      <button type="submit" @click.prevent="submitContact" title="Click here to submit the contact">
        Submit
      </button>
    </form>
  </section>
  <section>
    <header>
      <h1>Address</h1>
    </header> 
    <address>
      <a href="mailto:contact@gmail.com">contact@gmail.com</a><br />
      <a href="tel:+5744912163" title="Click to call">(574) 491-2163</a> <br />
      9474 S 825th W <br />
      Akron, Indiana(IN), 46910 <br />
    </address>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5056577035493!2d-7.068395125163027!3d40.7728962550234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3c6048aa8d3121%3A0xc27d83b42e027bfc!2sBombeiros%20Volunt%C3%A1rios%20de%20Pinhel!5e0!3m2!1spt-PT!2spt!4v1720985775297!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>
</template>

<style scoped>

</style>
