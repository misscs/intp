
<template>
  <article class="event-grid mw8 center">
  <h1 class="f2 lh-solid tracked-tight mb0 ml5">{{ talk.body.title }}</h1>
  <h2 class="mb2 lh-solid ml5 fw4">
    <a :href="talk.body.event_url"
      class="link black"
    >
      {{ talk.body.event }}
      </a>
    </h2>
    <div class="event-meta pt4 ml5">
      <p class="f3 lh-copy">
        <span>
          {{ talk.body.event_location_venue }}
        </span>
        <span>
          {{ talk.body.event_location }}
        </span>
      </p>
      <p class="f3 lh-copy">
        <span>
          {{ talk.body.date }}
        </span>
      </p>
    </div>
    <b role="presentation" class="bg-near-black"></b>
    <b role="presentation" class="bg-near-black"></b>
    <b role="presentation" class="bg-near-black"></b>
    <b role="presentation" class="bg-near-black"></b>
    <b role="presentation" class="bg-near-black"></b>
  </article>
</template>

<script>
export default {
  async asyncData ({ app, route }) {
    return {
      talk: await app.$content('/speaking').get(route.path)
    }
  }
}
</script>

<style scoped>

.event-grid {
  display: grid;
  grid-template-columns: 0.75fr 3fr 1fr 5fr 1fr;
  grid-template-rows: 300px 150px 250px 250px 75px;
  grid-gap: 0;
}

h1 {
  grid-row: 3;
  grid-column: 2 / 5;
  align-self: end;
}

h2 {
  grid-row: 3;
  grid-column: 2 / 5;
  align-self: center;  
}

.event-meta {
  grid-row: 4;
  grid-column: 2 / 5;
  align-self: start;
}

b:nth-last-of-type(1) {
  grid-column: 2;
  grid-row: 1;
  height: 50px;
  align-self: end;
}

b:nth-last-of-type(2) {
  grid-column: 4;
  grid-row: 5;
}

b:nth-last-of-type(3) {
  grid-column: 5;
  grid-row: 1 / 3;
}

b:nth-last-of-type(4) {
  grid-column: 1;
  grid-row: 3 / 5;
}

b:nth-last-of-type(5) {
  grid-column: 4;
  grid-row: 2;
  width: 50px;
}

</style>