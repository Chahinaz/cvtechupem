<template>
  <section class="ui container">
    <h2 class="ui center aligned teal header">Créer une nouvelle offre</h2>
    <div class="ui segment form" @submit.prevent="OnSave">
      <div class="field">
        <div class="new section">
          <h2 class="ui teal header">Type de contrat</h2>
          <p>Secteur</p>
          <sui-dropdown placeholder="Secteur" selection :options="sectorOptions" v-model="currentSector"/>

          <p>Versant</p>
          <sui-dropdown placeholder="Fonction Publique d'Etat" selection :options="institution" v-model="currentInstitution"/>

          <p>Catégorie </p>
          <sui-dropdown placeholder="Catégorie" selection :options="categoriesOptions" v-model="currentCategory"/>

          <p>Nature de l'emploi</p>
          <input class="text"/>

          <p>Domaine fonctionnel</p>
          <input class="text"/>

          <p>Intitulé du poste</p>
          <input class="text"/>

          <p>Type de contrat </p>
          <sui-dropdown placeholder="Contrat" selection :options="contractType" v-model="currentContract"/>

          <p>Compétances techniques requises </p>
          <sui-dropdown fluid multiple placeholder="Compétances" selection :options="skillsSelection" v-model="currentSkills"/>

          <p>Langues </p>
          <sui-dropdown fluid multiple placeholder="Langues" selection :options="languageOptions" v-model="currentLanguage"/>

          <p>Ce poste, est-il disponible pour les personnes à mobilités réduites? </p>
          <sui-dropdown placeholder="Handicap" selection :options="handicapped" v-model="currentHandicap"/>

          <p>Emploi ouvert aux militaires? </p>
          <sui-dropdown placeholder="Milittaire" selection :options="army" v-model="currentArmy"/>
        </div>

        <div class="newSection">
          <h2 class="ui teal header">Descriptif du poste</h2>
          <p> Description de l'employeur: </p>
          <textarea></textarea>

          <p>Description du poste: </p>
          <textarea></textarea>

          <p>Conditions de travail:</p>
          <textarea rows="2"></textarea>
        </div>

        <div class="newSection">
          <h2 class="ui teal header">Descriptif du profil recherché</h2>
          <p> Savoirs </p>
          <textarea></textarea>

          <p> Savoirs faire </p>
          <textarea></textarea>

          <p> Savoirs être </p>
          <textarea></textarea>
        </div>

        <div class="newSection">
          <h2 class="ui teal header">Critères candidat</h2>
          <p>Niveau d'études</p>
          <input class="text"/>
        </div>

        <div class="newSection">
          <h2 class="ui teal header">Pays</h2>
          <p>Localisation du poste</p>
          <input class="text"/>

          <p>Lieu d'affection (sans géolocalisation)</p>
          <input class="text"/>
        </div>
      </div>

      <div class="apply">
        <div class="ui huge blue submit button"> Créer </div>
        <div class="ui huge blue button" @click="$router.push('/offers/')"> Annuler </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'newOffer',
    data() {
      return {
        ID: '',
        currentSector: null,
        currentContract: null,
        currentHandicap: null,
        currentLanguage: null,
        currentSkills: null,
        currentCategory: null,
        currentInstitution: null,
        currentArmy: null,

        institution: [{
          text: 'Fonction Publique d\'Etat',
          value: 1
        }],
        sectorOptions: [
          {
            text: 'Banque / Assurances / Finances',
            value: 1
          }, {
            text: 'Associatif / Art / Culture',
            value: 2
          },{
            text: 'Informatique / Telecom / Internet',
            value: 3
          }, {
            text: 'Santé / Protection Sociale',
            value: 4
          }, {
            text: 'Services publics / Administrations',
            value: 5
          }, {
            text: 'Restauration/ Loisir',
            value: 6
          }],
        contractType : [
          {
            text: 'CDD',
            value: 1
          }, {
            text: 'CDI',
            value: 2
          }, {
            text: 'Stage',
            value: 3
          }, {
            text: 'Alternance',
            value: 4
          }, {
            text: 'Interim',
            value: 5
          }],
        handicapped : [
          {
            text: 'Non',
            value: 1
          }, {
            text: 'Oui',
            value: 2
          }
        ],
        army : [
          {
            text: 'Non',
            value: 1
          }, {
            text: 'Oui',
            value: 2
          }
        ],
        languageOptions : [
          { key: 'FR', text: 'Français', value: 'fr' },
          { key: 'EN', text: 'Anglais', value: 'en' },
          { key: 'GR', text: 'Allemand', value: 'gr' },
          { key: 'ES', text: 'Espagnol', value: 'es' },
          { key: 'RU', text: 'Russe', value: 'ru' },
          { key: 'IT', text: 'Italien', value: 'it' }],
        skillsSelection : [
          { key: 'angular', text: 'Angular', value: 'angular' },
          { key: 'css', text: 'CSS', value: 'css' },
          { key: 'design', text: 'Graphic Design', value: 'design' },
          { key: 'ember', text: 'Ember', value: 'ember' },
          { key: 'html', text: 'HTML', value: 'html' },
          { key: 'ia', text: 'Information Architecture', value: 'ia' },
          { key: 'javascript', text: 'Javascript', value: 'javascript' },
          { key: 'node', text: 'NodeJS', value: 'node' },
          { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
          { key: 'python', text: 'Python', value: 'python' },
          { key: 'rails', text: 'Rails', value: 'rails' },
          { key: 'react', text: 'React', value: 'react' },
          { key: 'nuclear', text: 'NuclearJS', value: 'repair' },
          { key: 'ruby', text: 'Ruby', value: 'ruby' },
          { key: 'ui', text: 'UI Design', value: 'ui' },
          { key: 'ux', text: 'User Experience', value: 'ux' }],
        categoriesOptions:[
          {
            text: 'A',
            value: 1
          },{
            text: 'B',
            value: 2
          }, {
            text: 'C',
            value: 3
          }],
      };
    },
    methods: {
      onSave(){
        console.log("Saving");
      }
    }
  };
</script>

<style scoped>
  textarea {
    margin-bottom: 1rem !important;
  }

  p {
    padding-top: 0.8rem;
    font-weight: bold;
    font-size: 1rem;
  }

  .newSection{
    padding: 2rem 0 2rem 0;
  }
</style>
