<template>
    <div class="card"  style="width: 18rem;">
        <img class="card-img-top" v-bind:src="aCountry.flag" alt="Card image cap">
        <div class="card-body"  >
            <h5 class="card-title">{{aCountry.name}}</h5>
            <p class="card-text">{{aCountry.capital}}</p>
            <a href="#" class="btn btn-info">
                <router-link :to="'/countries/'+country.numericCode+'/info'" class="details-container">
                    <span class="details-text">Details</span><i class="material-icons">subject</i>
                </router-link>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Country",

        props: {
            country: {
                type: Object
            }
        },

        data(){
            return {
                aCountry: this.$props.country
            }
        }
    }
</script>

<style scoped>
    .card{
        margin: 10px;
    }
    .details-container{
        display: flex;
        justify-content: center;
        color: white;
        text-decoration: none;
        outline: none;
    }
</style>