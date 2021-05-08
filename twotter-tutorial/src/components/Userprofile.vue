<template>
  <div class="user-profile">
    <div class="user-profile_sidebar">
      <div class="user-profile_user-panel">
        <h1 class="user-profile_username">@{{user.username}}</h1>
        <div class="user-profile_admin-badge" v-if="user.isAdmin">
          Admin
        </div>
        <div class="user-profile_follower-count">
          <strong>Followers: </strong> {{followers}}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot"/>
    </div>
    <div class="user-profile_twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
      />
    </div>
  </div>
</template>


<script>
import TwootItem from "./TwootItem";
import CreateTwootPanel from "./CreateTwootPanel";

export default {
  name: "Userprofile",
  components: { CreateTwootPanel, TwootItem },
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
  methods: {
    addTwoot(twoot) {
      this.user.twoots.unshift({ id: this.user.twoots.length + 1, content: twoot });
    }
  }
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns:1fr 3fr;
  grid-gap: 50px;
  padding:50px 5%;

  .user-profile_user-panel {
    display:flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border:1px solid #DFE3E8;
    margin-bottom: auto;

    h1 {
      margin:0;
    }

    .user-profile_admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }

  .user-profile_twoots-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom:auto;
    }
}
</style>