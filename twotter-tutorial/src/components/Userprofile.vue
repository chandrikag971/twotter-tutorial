<template>
  <div class="user-profile">
    <div class="user-profile_user-panel">
      <h1 class="user-profile_username">@{{user.username}}</h1>
      <div class="user-profile_admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="user-profile_follower-count">
        <strong>Followers: </strong> {{followers}}
      </div>
      <form class="user-profile_create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharacterCount > 180 }">
        <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>

        <div class="user-profile_create-twoot-type">
          <label for="newTwootType"><strong>Type: </strong></label>
          <select id="newTwootType" v-model="selectedTwootType">
            <option :value="option.value" v-for="(option,index) in twootTypes" :key="index">
            {{ option.name }}
            </option>
          </select>
        </div>

        <button>
          Twoot!
        </button> 
      </form>
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
      newTwootContent: '',
      selectedTwoottype: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Twoot' }
      ],
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
    newTwootCharacterCount() {
      return this.newTwootContent.length;
    }
  },
  methods: {
    followUser() {
      this.followers++
    },
    toggleFavourite(id) {
      console.log(`Favourited Tweet #${ id }`);
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent
        })
        this.newTwootContent=''
      }
    }
  },
  mounted() {
    this.followUser();
  }
};
</script>

<style lang="scss" scoped>
  .user-profile {
    display:grid;
    grid-template-columns:1fr 3fr;
    width:10%;
    padding:50px 5%;

    .user-profile_user-panel {
      display:flex;
      flex-direction: column;
      margin-right: 50px;
      padding: 20px;
      background-color: white;
      border-radius: 5px;
      border:1px solid #DFE3E8;

      h1 {
        margin:0;
      }

      .user-profile_admin-badge {
        background: rebeccapurple;
        color: white;
        border-radius: 5px;
        margin-right: auto;
        padding: 0 0px;
        font-weight: bold;
      }

      .user-profile_create-twoot {
        padding-top: 20px;
        display: flex;
        flex-direction: column;

        &.--exceeded {
          color: red;
          border-color: red;

          button {
            background-color:red;
            border: none;
            color: white;
          }
        }
      }
    }

    .user-profile_twoots-wrapper {
      display: grid;
      grid-gap: 10px;
    }
  }
</style>