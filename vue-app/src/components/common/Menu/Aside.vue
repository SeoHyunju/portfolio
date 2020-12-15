<template>
  <v-app>
    <v-navigation-drawer >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            HyunJu Seo
          </v-list-item-title>
          <v-list-item-subtitle>
            <div>이미지</div>
            <div>설명</div>
            <div>
              <v-btn
                class="mx-2"
                fab
                small
                depressed
                color="#61549c"
              >
                <v-icon color="#ffffff">
                  mdi-github
                </v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                small
                depressed
                color="#61549c"
              >
                <v-icon color="#ffffff">
                  mdi-instagram
                </v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                fab
                small
                depressed
                color="#61549c"
              >
                <v-icon color="#ffffff">
                  mdi-facebook
                </v-icon>
              </v-btn>
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item-group
          link
          color="#61549c"
        >
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!--<router-view></router-view>-->
    </v-main>
  </v-app>
</template>

<script>
export default {
  data:()=>({
    items:[
      {title:'About Me', icon:'mdi-account'},
      {title:'Portfolio', icon:'mdi-folder-heart'},
      {title:'Skill', icon:'mdi-inbox-full'},
      {title:'Contact', icon:'mdi-card-account-phone'}
    ]
  })
}
</script>

<style>

</style>