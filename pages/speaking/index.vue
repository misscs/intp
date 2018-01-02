<template>
  <section class="container">
    <h1>Speaking</h1>

      {{ talks.body }}

     <ul>
       <li v-for="talk in talks.items">
         {{ talk }}
      </li>
     </ul>
    <nuxt-child />
  </section>
</template>

<script>
export default {
  async asyncData ({ app }) {
    return {
      talks: await app.$content('speaking').getAll()
    }
  }
}
</script>