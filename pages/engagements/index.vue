<template>
  <section class="container speaking-grid ma4 center">
    <h1 class="speaking-title-intro f-subheadline lh-solid tracked-tight ma0 bb bw4">Claudina Sarahe <span class="db red">in:</span></h1>
    <h1 class="speaking-title f1 ttu tracked-tight ma0">Talks, Panels, Workshops, Interviews</h1>
    <img src="/images/speaking/djangocon-keynote-cs.jpg">

    <section class="engagement-list speaking-list">
     <h2 class="ttu f4 red mb2">Workshops:</h2>
     <ul class="list ma0 pa0">
       <li v-for="talk in engagmentType('workshops')" class="mb3">
         <nuxt-link :to="talk.permalink" class="fw4 f5">{{ talk.body.event }}</nuxt-link>
         <span class="black-30 f5 db fw4 lh-copy">{{ fulldate(talk.body.date) }}</span>
          <h3 class="fw6 f5">
           <nuxt-link :to="talk.permalink">{{ talk.body.title }}</nuxt-link>
          </h3>
      </li>
     </ul>
    </section>

    <section class="engagement-list workshop-list">
     <h2 class="ttu f4 red mb2">Interviews:</h2>
     <ul class="list ma0 pa0">
        <li v-for="talk in engagmentType('interviews')" class="mb3">
         <nuxt-link :to="talk.permalink" class="fw4 f5">{{ talk.body.event }}</nuxt-link>
         <span class="black-30 f5 db fw4 lh-copy">{{ fulldate(talk.body.date) }}</span>
          <h3 class="fw6 f5">
           <nuxt-link :to="talk.permalink">{{ talk.body.title }}</nuxt-link>
          </h3>
        </li>
     </ul>
    </section>

    <section class="engagement-list panels-list">
     <h2 class="ttu f4 red mb2">Panels:</h2>
     <ul class="list ma0 pa0">
        <li v-for="talk in engagmentType('panels')" class="mb3">
         <nuxt-link :to="talk.permalink" class="fw4 f5">{{ talk.body.event }}</nuxt-link>
         <span class="black-30 f5 db fw4 lh-copy">{{ fulldate(talk.body.date) }}</span>
          <h3 class="fw6 f5">
           <nuxt-link :to="talk.permalink">{{ talk.body.title }}</nuxt-link>
          </h3>
        </li>
     </ul>
    </section>

    <section class="engagement-list talks-list">
     <h2 class="ttu f4 red mb2">Talks:</h2>
     <ul class="list ma0 pa0">
        <li v-for="talk in engagmentType('talks')" class="mb3">
         <nuxt-link :to="talk.permalink" class="fw4 f5">{{ talk.body.event }}</nuxt-link>
         <span class="black-30 f5 db fw4 lh-copy">{{ fulldate(talk.body.date) }}</span>
          <h3 class="fw6 f5">
           <nuxt-link :to="talk.permalink">{{ talk.body.title }}</nuxt-link>
          </h3>
        </li>
     </ul>
    </section>

    <nuxt-child />
  </section>
</template>

<script>
import moment from 'moment'

import sortBy from 'lodash/sortby'

export default {
  async asyncData ({ app }) {
    return {
      engagements: await app.$content('/engagements').getAll()
    }
  },
  methods: {
    engagmentType: function (type) {
      /* eslint-disable */
      const items = this.engagements.filter((item) => item.meta.section === `/${type}`)
      return sortBy(items, function (o) { return new moment(o.body.date).format('YYYYMMDD')}).reverse()
    },
    fulldate: function (timestamp) {
      return moment(timestamp).format('DD MMMM YYYY')
    }

  }
}
</script>


<style>
.speaking-grid {
  width: 70vw;
  display: grid;
  grid-template-columns: auto 2fr 2fr 2fr 2fr auto auto;
  grid-template-rows: auto 1fr 1fr auto auto auto;
  grid-gap: 1rem;
  transform: rotate(-15deg);
}

.speaking-title-intro {
  grid-column: 1 / 5;
  text-align: left;
}

.speaking-title {
  color: #f9423a;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  grid-column: 1/ 4;
  grid-row: 2 / 5;
  justify-self: start;
  margin-top: -10px;
}

img {
  grid-column: 4 / 8;
  grid-row: 2 / 4;
  height: 800px;
  width: 800px;
  max-width: auto;
  border-radius: 100%;
  border: 2px solid currentColor;
  transform: rotate(15deg);
}

.speaking-list {
  grid-column: 3 / 4;
  grid-row: 3;
  font-weight: 700;
  line-height: 1.2;
  align-self: end;
}

.workshop-list {
  grid-column: 2 / 3;
  grid-row: 5;
}

.panels-list {
  grid-column: 4;
  grid-row: 5;
  align-self: start;
}

.talks-list {
  grid-column: 3;
  grid-row: 5;
  align-self: center;
}


.engagement-list a {
  text-decoration: none;
}

</style>



