<template>
  <section class="container">
    <h1>Speaking</h1>

     <ul>
       <li v-for="talk in talks">
         <nuxt-link :to="talk.permalink">{{ talk.body.event }}</nuxt-link>
      </li>
     </ul>
    <nuxt-child />
  </section>
</template>

<script>
export default {
  async asyncData ({ app }) {
    return {
      talks: await app.$content('/speaking').getAll()
    }
  }
}
</script>