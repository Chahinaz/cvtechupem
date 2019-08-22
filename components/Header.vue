<template>
    <div class="ui stackable blue inverted menu">
      <div class="left menu">
        <nuxt-link class="header item" to="/">
          <i class="icon home"></i>
        </nuxt-link>
        <a class="item" href="http://univ-gustave-eiffel.fr/">UGE Website</a>
      </div>
      <div class="right menu">
        <nuxt-link class="header item" to="/offers">Offres</nuxt-link>
        <nuxt-link class="header item" to="/profiles">Profiles</nuxt-link>

        <sui-dropdown class="blue icon" icon="user circle" button pointing="top right">
          <sui-dropdown-menu>
            <nuxt-link class="header item" to="/profile">Profile</nuxt-link>
            <nuxt-link class="header item" to="/">Déconnection</nuxt-link>
          </sui-dropdown-menu>
        </sui-dropdown>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'DropdownIcon',
  };
</script>

<style>
  .menu {
    background-color: #4385d0;
  }

  .menu a{
    color: #FFFFFF !important;;
  }
</style>
