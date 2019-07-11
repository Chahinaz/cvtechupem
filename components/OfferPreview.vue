<template>
  <nuxt-link :to="'/offers/'+id">
    <div class="ui card">
      <div class="content">
        <div class="center aligned header">{{sector}}</div>
        <div class="center aligned description">
          <p>{{post}}</p>
          <p><i class="file code outline icon"></i>Type de contrat: {{contract}}</p>
        </div>
      </div>
      <div class="extra content">
        <div class="center aligned blue author">
          <div class="ui blue horizontal label">En savoir plus</div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default{
    props:{
      id: {
        type: String,
        require: true
      },
      sector:{
        type: String,
        require: true
      },
      post:{
        type: String,
        require: true
      },
      description: String,
      management: String,
      missions: String,
      knowledge: String,
      howToBe: String,
      expertise: String,
      studiesLvl: String,
      contract: String,
      location: String,
    }
  }
</script>


<style scoped>
</style>
