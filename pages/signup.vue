<template>
  <section class="ui container">
    <div class="ui segment">
      <h3 class="ui center aligned header">Inscription</h3>
      <form class="ui form">
        <div class="field">
          <label>Nom</label>
          <div class="two fields">
            <div class="field">
              <input type="text" name="first-name" placeholder="Prenom">
            </div>
            <div class="field">
              <input type="text" name="last-name" placeholder="Nom">
            </div>
          </div>
        </div>

        <div class="field">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email">
        </div>

        <div class="field">
          <label>Nom</label>
          <div class="two fields">
            <div class="field">
              <input type="password" name="password" placeholder="Mot de passe">
            </div>
            <div class="field">
              <input type="password" name="password" placeholder="Confirmation du mot de passe">
            </div>
          </div>
        </div>

        <div class="ui center checkbox">
          <input type="checkbox" name="terms">
          <label>J'accepte les <a href=""> conditions d'utilisateurs</a>.</label>
        </div>

        <div class="apply">
          <div class="ui blue submit button">Connexion</div>
        </div>
      </form>
    </div>
  </section>
</template>


<style scoped>
  .segment{
    margin: 0 30% 0 30% !important;;
  }

  .container, .submit{
    margin-top: 2rem;
  }

  a{
    color: blue;
  }
</style>
