<template>
  <v-app id="inspire">

  <Navbar />

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      color="cyan"
      app
    >
      <v-spacer />

      <span class="white--text">&copy; 2020 by <a class="copy_link" to="https://github.com/YakovSPb">Yakov</a></span>
    </v-footer>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    name: 'Home',
    components: {
      Navbar
    },
    data: () => ({
      drawer: false
    }),
  }
</script>
<style lang="scss">
.copy_link{
  color: #fff!important;
  text-decoration: underline;
  &:hover{
    text-decoration: none;
  }
}
</style>