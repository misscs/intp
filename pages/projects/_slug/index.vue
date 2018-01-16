
<template>
  <article class="container white pv6 ph5"
    v-bind:class="project.background"
  >
    <header class="bb bw4 pb3 mb4">
      <h1 class="f-headline lh-solid mb0 mt0 tracked-tight">{{ project.name }}</h1>
      <h2 class="f1 lh-solid fw4 mb2 mt0">{{ project.description }}</h2>
      <dl class="lh-solid fw6">
        <dt class="clip">Date</dt><dd class="dib f1 mr2 br bw2 pr2">{{ project.timeline }}</dd>
        <dt class="clip">Location</dt><dd class="dib f1">{{ project.location }}</dd>
        </dl>
    </header>
    <nuxtent-body :body="project.body" class="lh-copy f4 cc-1 measure-narrow cf-balance mb6 nested-copy-line-height" />
    <p class="fw8">{{ project.role }}</p>
    <!-- <div class="mt5 mb6">  
      <img :src="project.photos" class="br-100 h5 w5 mr6">
      <img :src="project.photos" class="br-100 h5 w5 mr6">
      <img :src="project.photos" class="br-100 h5 w5">
    </div> -->

  </article>
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