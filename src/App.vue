<script>
/* eslint-disable */
  export default {
    name: 'my-tour',
    data () {
      return {
        steps: [
          {
            target: '#v-step-0',  
            title: 'Get Started',
            content: `Start with ...!`,
            next() {
              console.log('next clicked on OK button step') 
            }
          },
          {
            target: '#v-step-1',
            content: 'An awesome plugin made with Vue.js!'
          },
          {
            target: '#v-step-2',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            // params: {
            //   placement: 'top' 
            // }
          },
          {
            target: '#v-step-3',  
            title: 'Lorem Ipsum ',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quaerat illo voluptates asperiores, atque maxime quia at debitis optio temporibus autem quae eaque explicabo quam, ex soluta nisi accusantium, dolores nostrum fuga? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quaerat illo voluptates asperiores, atque maxime quia at debitis optio temporibus autem quae eaque explicabo quam, ex soluta nisi accusantium, dolores nostrum fuga?`,
            next() {
              console.log('next clicked 3') 
            }
          },
          {
            target: '#v-step-4',  
            title: 'Lorem Ipsum',
            content: `Lorem ipsum dolor sit, amet consectetur adipisicing.`,
            next() {
              console.log('next clicked 4') 
            }
          },
        ]
      }
    },
   methods: {
    startTour() {
      this.$tours["myTour"].start();
    }
   },
  }
</script>

<template>
  <nav>
    <router-link id="v-step-0" to="/">Home</router-link> |
    <router-link id="v-step-1"to="/about">Menu</router-link>
  </nav>
  <router-view />

  <div>
    <v-tour name="myTour" :steps="steps"></v-tour>
    <button @click="startTour">Start Tour</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
