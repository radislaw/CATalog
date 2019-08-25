<template>
  <div class="ui form">
    <div class="field">
      <label>Breed</label>
      <div class="fields">
        <select class="ui fluid search dropdown" v-model="selected">
          <option v-for="breed in breeds" :value="breed.id" :key="breed.id">{{breed.name}}</option>
        </select>
      </div>
      <div class="ui center aligned piled segment" v-if="currentBreed">
        <LazyImage
          v-if="images.length"
          :lazySrc="images[0].url"
          :alt="images[0].name"
          :width="200"
          :height="200"
          class="breed-image"
        />
        <h1 class="ui header">{{currentBreed.name}}</h1>
        <p>{{currentBreed.description}}</p>
        <h3 class="ui header">Temperament</h3>
        <p>{{currentBreed.temperament}}</p>
        <a :href="currentBreed.wikipedia_url">More Info</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LazyImage from './LazyImage.vue';

export default {
  name: 'Breeds',
  components: { LazyImage },
  data() {
    return {
      selected: 'ocic',
    };
  },
  computed: {
    ...mapState('breeds', ['breeds']),
    ...mapState('images', ['images']),
    currentBreed() {
      return this.breeds.filter(breed => breed.id === this.selected)[0];
    },
  },
  methods: {
    ...mapActions('breeds', ['getBreeds']),
    ...mapActions('images', ['getImages']),
  },
  mounted() {
    this.getBreeds();
  },
  watch: {
    selected: {
      handler(breed) {
        this.getImages(breed);
      },
      immediate: true,
    },
  },
};
</script>


<style scoped>
  .breed-image {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
</style>
