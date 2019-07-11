<template>
  <div>
    <form class="ui form">
      <div class="apply">
        <div class="massive ui blue submit button">POSTULER</div>
      </div>
      <h1 class="ui center aligned header">Offre n°{{$route.params.id}}</h1>
      <div class="ui segment">
        <h3>Secteur:</h3> Services publics / Adminitrations <br>
        <h3>Poste:</h3> Secrétaire pédagogique <br>
        <h3>Description du poste:</h3>

        <p>
          La secrétaire administrative et pédagogique concourt, par son action, aux missions générales de l'institut. Elle assure tout particulièrement: <br>
        <h5 class="ui teal header">Gestion administrative : </h5>
        Traiter les dossiers de candidatures via l'application dédiée et assurer la gestion et Le suivi administratif des activités: <br>
        o Suivre les inscriptions administratives et procéder aux inscriptions pédagogiques; <br>
        o Gérer les emplois du temps et Les plannings des formations; <br>
        o Participer à La modélisation des formations dans Apogée, aux MCC spécifiques; <br>
        o Etablir Les relevés individuels et collectifs de présence des étudiants en fonction de Leur type d'inscription (Formation initiale, continue ou par apprentissage); <br>
        o Suivre Les conventions de stage; <br>
        o Assurer l'ingénierie administrative des apprentis (fiche de mission, e-livrets, fichier plac'net...); * <br>
        o Préparer les examens, les soutenances de mémoires et rapports de stage; <br>
        o Collecter les notes, organiser Les jurys, saisir Les notes dans Apogée pour l'édition des diplômes; établir les relevés de notes, les attestations de réussite et Les PV; <br>
        o Alimenter des bases de données ainsi que les suivis statistiques;<br>
        o Procéder à l'actualisation et à l'archivage des données relatives à l'institut et ses informations; <br>
        o Recenserles heures d'enseignement des vacataires et titulaires; <br>
        o Accueillir, informer et orienter Les personnels, usagers et partenaires extérieurs; <br>
        o Sélectionner et diffuser l'information liée à l'organisation administrative de l'Institut; <br>
        o Participer aux réunions du département et de l'Institut. <br><br>
        <h5 class="ui teal header">Missions annexes:</h5>
        Participer aux diverses activités des formations: organisation de sorties pédagogiques, des cérémonies de remises des diplômes, JPO … <br>Tenir les permanences des bureaux de vote aide ponctuelle au prêt de matériel. <br>
        </p> <br>

        <h3 class="ui header">Profil recherché: </h3>
        <h5 class="ui teal header">Savoir:</h5>
        <p>Culture administrative<br>Environnement des EPSCP<br>Gestion de l'informatique<br>Organisation méthode et processus</p>

        <h5 class="ui teal header">Savoir être:</h5>
        <p>Rigoureux<br>Autonome<br>Souplesse<br>Sens de la pédagogie</p>

        <h5 class="ui teal header">Savoir faire:</h5>
        <p>Accueillir<br>Organiser une activité en maitrisant les délais<br>Travailler en équipe<br>Savoir rendre compte efficacement</p>
        <br>

        <h3>Critère candidat</h3>
        <h5 class="ui teal header">Niveau d'études:</h5>
        <p>Niveau V : CAP, BEP ou diplôme équivalent.</p>
        <br>

        <h3>Informations complémentaires</h3>
        <h5 class="ui teal header">Contrat:</h5>
        <p>CDD du 03/06/19 au 20/12/2019</p>
        <p>Rémunération de 1636.22€ brut</p>
        <h5 class="ui teal header">Localisation:</h5>
        <p>Cité descartes, Champs-sur-Marne</p>
        <p>Île-de-France - France</p>
        <br>
      </div>

      <div class="apply">
        <div class="massive ui blue submit button">POSTULER</div>
      </div>
    </form>
  </div>
</template>

<script>
export default{
  validate(data){
    /** Accepts num values only */
    return /^\d+$/.test(data.params.id);
  }
}
</script>

<style scoped>
  .segment{
    margin: 5% !important;
  }

  .apply{
    display: flex;
    justify-content: center;
  }
</style>
