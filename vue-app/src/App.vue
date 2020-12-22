<template>
  <v-app>
    <v-row>
      <aside-menu 
        :items="items"
      />
      <v-main>
        <router-view :key="$route.fullPath"></router-view>
      </v-main>
    </v-row>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    items:[
      {title:'About Me', icon:'mdi-account', router:'AboutMe'},
      {title:'Portfolio', icon:'mdi-folder-heart', router:'Portfolio'},
      {title:'Skill', icon:'mdi-inbox-full', router:'Skill'},
      {title:'Contact', icon:'mdi-card-account-phone', router:'Contact'}
    ]
  }),
  methods:{
  }
};
</script>
