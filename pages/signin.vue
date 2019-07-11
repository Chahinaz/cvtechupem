<template>
  <section class="ui container">
    <div class="ui segment">
      <div class="column">
        <h3 class="ui center aligned header">Connexion à la CV-Tech</h3>

        <form class="ui large form">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="Identifiant ou Adresse mail"/>
              </div>
            </div>

            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Mot de passe"/>
              </div>
            </div>

            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" name="example">
                <label>Rester connecté</label>
              </div>
            </div>

          <div class="ui blue submit button" >Connexion</div>
          <!-- <div class="ui error message"></div>
                         do an error empty field
                    </div> -->
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .segment{
    margin: 0 30% 0 30% !important;;
  }

  .container{
    margin-top: 2rem;
  }

  a{
    color: blue;
  }
</style>
