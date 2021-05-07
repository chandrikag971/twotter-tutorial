<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{user.username}}</h1>
      <div class="user-profile_admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="user-profile_followers-count">
        <strong>Followers: </strong> {{followers}}
      </div>
    </div>
    <div class="user-profile__twoots-wrapper">
      <TwootItem 
      v-for="twoot in user.twoots"
      :key="twoot.id" 
      :username="user.username" 
      :twoot="twoot" 
      @favourite="taggleFavourite"
      />
    </div>
  </div>
</template>


<script>
import TwootItem from "./TwootItem";

export default {
  name: "Userprofile",
  components: { TwootItem },
  data() {
    return {
      followers:0,
      user: {
        id:1,
        username:"_Chandrika",
        firstname:"chandu",
        lastname:"G",
        email:'chandrikag971@gmail.com',
        isAdmin:true,
        twoots: [
          { id:1,content:"This is a vue framework"},
          { id:2,content:"It is used for developing websites"}
        ]
      }
    }
  },
  watch: {
    followers(newfollowercount,oldfollowercount){
       if(newfollowercount>oldfollowercount) {
          console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },
  computed: {
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`;
    }
  },
  methods: {
    followUser() {
      this.followers++
    },
    toggleFavourite(id) {
      console.log(`Favourited Tweet #${ id }`);
    }
  },
  mounted() {
    this.followUser();
  }
}
</script>

<style>
.user-profile {
  display:grid;
  grid-template-columns:1fr 3fr;
  width:10%;
  padding:50px 5%;
}
.user-profile_user-panel {
  display:flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border:1px solid #DFE3E8;
}
.user-profile_admin-badge {
    background: purple;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    padding: 0 0px;
    font-weight: bold;
}
h1 {
  margin:0;
}
</style>
