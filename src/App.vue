<template>
<div class="columns section" id="app"> <!-- #app is being mounted in main.js. Don't remove the id ! -->
  <div class="column is-3 border is-offset-2">

    <div class="div" v-for="item in items" :key="item._id">
      <div class="level">
        <div class="level-left">{{item.name}}</div>
        <div
          @click="$store.commit('items/setDropdown', {id: item._id})"
          class="level-right">
          <i :class="item.dropdown ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
        </div>
      </div>
      <div v-show="item.dropdown">content</div><hr>
    </div>

    
    

  </div>






  <div class="column is-5 border">
    <div class="level">
      <div class="level-left">1</div>
      <div class="level-right">2</div>
    </div>
    <div class="level">
      <div class="level-left">1</div>
      <div class="level-right">2</div>
    </div>
    
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  
  data() {
    return {
      
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      items: 'items/items'
    })
  },
  watch: {
    
  },
  async mounted() {
    
  }
};
</script>

<style>
.border {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  border-radius: 6px;
  color: #4a4a4a;
}
</style>
