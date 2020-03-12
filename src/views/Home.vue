<template>
  <div class="home">
      <div class="row">
          <input type="text" v-model="search" placeholder="Search country.."/>
      </div>
      <div class="row">
          <letter v-for="letter in letters" :key="letter" :name="letter" @clickfilterbyletter="filterByLetter(letter)"></letter>
      </div>
      <div class="row">
          <country v-for="country in filteredCountries(countries)" v-bind:key="country.numericCode" v-bind:country="country" v-show="countries"></country>
      </div>
  </div>
</template>

<script>
    import Country from '../components/Country.vue';
    import Letter from '../components/Letter.vue';

    export default {
        name: 'home',
        components: {
            Country,
            Letter
        },
        data () {
            return {
                countries: [],
                letters: "abcdefghijklmnopqrstuvwxyz".split(""),
                currentLetter: '',
                search: '',
            }
        },

        created(){
            axios.get('https://restcountries.eu/rest/v2/all')
                .then(response => {
                    this.countries = response.data;
                })
                .catch(error => {console.log(error)});
        },

        methods: {
            filterByLetter(letter) {
                this.currentLetter = letter;
                
            },

            filteredCountries(countries) {
                if(this.currentLetter === ''){
                    return this.countries;
                }
                return countries.filter(country => {
                    return country.name.charAt(0).toLowerCase() === this.currentLetter.toLowerCase()
                    && country.name.toLowerCase().includes(this.search.toLowerCase());
                })
            },

        },
        
        computed:{

        }
    }
</script>

<style scoped>
    .home{
        margin: 100px;
    }
</style>