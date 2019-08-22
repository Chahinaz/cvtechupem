<template>
    <nuxt-link :to="'/profiles/'+id">
        <div class="ui card">
            <div class="content">
                <img class="ui medium circular image" href="https://semantic-ui.com/images/avatar/large/jenny.jpg">
                <div class="center aligned small header">{{fullName}}</div>
                <div class="ui center aligned orange header">{{sector}}</div>
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
            fullName: {
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
            contract: String,
            location: String,
        }
    }
</script>


<style scoped>
</style>
