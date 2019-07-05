<template>
    <div class="ui stackable blue inverted menu">
      <div class="left menu">
        <a class="item" href="http://univ-gustave-eiffel.fr/">UGE Website</a>
      </div>
      <div class="right menu">
        <nuxt-link class="header item" to="/offers">Offres</nuxt-link>
        <nuxt-link class="header item" to="/profile">Profile</nuxt-link>
      </div>
    </div>
</template>

<style>
  .menu {
    background-color: #4385d0;
  }

  a{
    color: #FFFFFF !important;;
  }
</style>
