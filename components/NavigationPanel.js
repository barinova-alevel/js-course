const NavigationPanel = ( 'nav-panel', {
    props: [ "drawer", "states" ],
    data: function () {
      return {
          
      }
    },
    template: `
      <v-container>
      <v-navigation-drawer secondary temporary v-model = "drawer" absolute>
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="./images/vue.svg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Content</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for = "item in states" :key = "item" @click = "clickHandler ( event, item )">
            <v-list-tile-action>
              <v-icon>assignment</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    `,
    methods: {
        clickHandler: function ( event, val ) {
            this.$root.$emit ( 'closeNavigationPanel' )
            this.$root.$store.commit( 'changeCurrentSectionId', val )
            this.$root.$store.commit( 'getCurrentSectionInfo' )
            this.$root.$store.commit( 'getCurrentSectionPosts' )
            this.$root.$router.push ( { name: "mainSection", params: { id: val } } )
        }
    },
    mounted: function () {
      
    }
})
