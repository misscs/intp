
<template>
  <section class="container bg-near-black vh-100">
     <h1>Project: {{ project.name }}</h1>
    <nuxtent-body :body="project.body" />
  </section>
</template>

<script>
export default {
  async asyncData ({ app, route }) {
    return {
      project: await app.$content('/projects').get(route.path)
    }
  }
}
</script>