<template lang="html">
    <div>
        <div class="result">
            <div class="add">
                <div class="ui toggle teal button" @click="$router.push('/offers/newOffer')"> Ajouter une offre&nbsp;&nbsp;
                    <i class="plus icon"></i>
                </div>
            </div>
            <!-- Search bar -->
            <div class="ui category search">
                <div class="ui icon input">
                    <input class="prompt" type="text" v-model="ID" placeholder="Trouver un profile par ID ">
                </div>
                <button class="circular ui icon button" @click="onClickPost">
                    <i class="icon search"></i>
                </button>
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
                        <sui-dropdown fluid multiple placeholder="Langues" selection :options="languageOptions" v-model="currentLanguage"/>
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
                        <div class="ui link cards">
                            <!-- For profile in profiles, create card-->
                            <!-- <div v-for="s" :key="profile.id" :id=profile.id :title="profile.post"> -->
                            <div class="ui card">
                                <ProfilePreview id="1" fullName="Monique A." sector="Administration" post="Secrétaire Pédagogique"
                                              description="" studies-lvl="Bac+2 / Bac+3" contract="CDD"
                                              location="Champs-sur-Marne, Île-de-France, France." />
                            </div>
                            <div class="ui card">
                                <ProfilePreview id="2" fullName="Chahinaz D." sector="Informatique" post="Développeur Java"
                                              description="" studies-lvl="Bac+3 / Bac+5" contract="CDI"
                                              location="Noisy-le-Grand, Île-de-France, France." />
                            </div>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import ProfilePreview from "../../components/ProfilePreview";

    export default {
        name: 'searchProfiles',
        components:{
            ProfilePreview
        },
        methods: {
            onClickPost(){
                this.$router.push('/profiles/'+this.ID);
            }
        },
        data() {
            return {
                ID: '',
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
                profiles: [
                    {
                        id: "1",
                        sector: "Administration",
                        post: "Secrétaire Pédagogique",
                        description: "",
                        studiesLvl:"Bac+2 / Bac+3",
                        contract: "CDD",
                        location: "Champs-sur-Marne, Île-de-france, France."
                    }, {
                        id: "2",
                        sector: "Informatique",
                        post: "Développeur Java",
                        description: "",
                        studiesLvl:"Bac+5",
                        contract: "CDI",
                        location: "Champs-sur-Marne, Île-de-france, France."
                    }]
            };
        }
    };
</script>

<style scoped>
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
        margin-bottom: 2rem;
    }

    .add{
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        border-radius: 25% !important;
    }
</style>
