<template lang="html">
  <div>
    <div class="result">
      <!-- Search bar -->
      <div class="ui search">
        <div class="ui icon input">
          <input class="prompt" type="text" style="padding: 1rem 3rem 1rem 2rem !important;"
                 placeholder="                     Mot clé ">
          <i class="search teal icon"></i>
        </div>
      </div>


      <div class="ui internally celled grid">
        <!-- search div -->
        <div class="five wide column">
          <h3 class="ui teal center header">Options de recherche</h3>
            <!-- dropbox on sectors -->
            <div class="space">
              <sui-dropdown placeholder="Secteur" selection :options="sectorOptions" v-model="currentSector"/>
            </div>

            <!-- dropdown of contract type  -->
            <div class="space">
              <sui-dropdown placeholder="Contrat" selection :options="contractType" v-model="currentContract"/>
            </div>

            <!-- dropdown of skills -->
            <div class="space">
              <sui-dropdown fluid multiple placeholder="Compétances" selection :options="skillsSelection" v-model="currentSkills"/>
            </div>

            <!-- dropdown language  -->
            <div class="space">
              <sui-dropdown placeholder="Langues" selection :options="languageOptions" v-model="currentLanguage"/>
            </div>

            <!-- dropdown handicap  -->
            <div class="space">
              <sui-dropdown placeholder="Handicap" selection :options="handicapped" v-model="currentHandicap"/>
            </div>

            <div class="ui blue center aligned submit button">Recherche</div>
        </div>

        <!-- result div -->
        <div class="eight wide divided column">
          <div style="margin-left: 1rem">
            <h3 class="ui teal center header">Résultats</h3>
              <!-- For offer in offers, create card-->
              <div class="ui link cards">
                <!-- desc -->
                <div class="ui card">
                  <div class="content">
                    <div class="center aligned header">Informatique</div>
                    <div class="center aligned description">
                      <p>Ingénieur Java</p>
                      <p><i class="file code outline icon"></i>: Java, CSS, HTML, JS, Hibernaten, PostgreSQL</p>
                    </div>
                  </div>
                  <div class="extra content">
                    <div class="center aligned blue author">
                      <div class="ui blue horizontal label">En savoir plus</div>
                    </div>
                  </div>
                </div>

                <!-- desc -->
                <div class="ui card">
                  <div class="content">
                    <div class="center aligned header">Administration</div>
                    <div class="center aligned description">
                      <p>Secrétaire pédagogique</p>
                      <p><i class="file code outline icon"></i>: EPSCP, Excel, Organisation, Pédagogue</p>
                    </div>
                  </div>
                  <div class="extra content">
                    <div class="center aligned blue author">
                      <div class="ui blue horizontal label">En savoir plus</div>
                    </div>
                  </div>
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searchOffers',
    data() {
      return {
        currentSector: null,
        currentContract: null,
        currentHandicap: null,
        currentLanguage: null,
        currentSkills: null,

        sectorOptions: [
          {
          text: 'Banque / Assurances / Finances',
          value: 1,
        }, {
          text: 'Associatif / Art / Culture',
          value: 2,
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
        languageOptions : [
          {
            text: 'Anglais',
            value: 1,
          }, {
            text: 'Allemand',
            value: 2,
          }, {
            text: 'Espagnol',
            value: 3,
          }, {
            text: 'Russe',
            value: 4,
          }
        ],
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
      };
    },
  };
</script>

<style>
  sui-dropdown{
    margin-bottom: 10rem !important;
  }

  .result{
    margin-left: auto;
    position: center;
  }

  .search{
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .space{
    margin-bottom: 1rem;
  }
</style>
