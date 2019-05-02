<template>
     <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on }">
        <v-btn
        id="scroll-button"
        fab
        fixed
        bottom
        left
        @click="openNotification"
      >
        <font-awesome-icon size="2x" :icon="['fas', 'bell']" />
      </v-btn>
      </template>

      <v-card class="test">
        <v-list >
          <v-list-tile>
              <v-list-tile-title>Your notifications</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list class="list">
          <NotificationCard />
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="menu = false, message = ''">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
</template>

<script>
import NotificationCard from '../Notification/NotificationCard'
export default {
    name: 'notification',
    components:{
    NotificationCard
    },
     data:() => ({
      loaded: false,
        fav: true,
      menu: false,
      showList: true,
      choosenChat: null,
    }),
  methods:{
    openNotification(){
      this.menu = true;
    }
  }
}
</script>

<style>
#scroll-button{
        margin-bottom: 50px;
    }
.list{
  height: 40vh;
  overflow: hidden;
}
.test{
  width: 300px !important;
}
</style>
