<template>
  <div>
    <button class="ui teal basic button " @click="getRandomImages">Refresh</button>
    <div class="ui divider"></div>
    <div class="image-container">
      <LazyImage
       v-for="image in randomImages"
       :lazySrc="image.url"
       :alt="image.name"
        :width="image.width"
       :height="image.height"
       :key="image.id"
       class="image"
    />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import LazyImage from '../components/LazyImage.vue';

export default {
  name: 'Gallery',
  components: { LazyImage },
  computed: {
    ...mapState('images', ['randomImages']),
  },
  methods: {
    ...mapActions('images', ['getRandomImages']),
  },
  created() {
    this.getRandomImages();
  },
};
</script>

<style lang="scss" scoped>
  .image-container {
    @media screen and (min-width: 640px) {
      column-count: 2;
      column-gap: 5px;
    }
    @media screen and (min-width: 768px) {
      column-count: 3;
    }
  }

  .image {
    max-width: 100%;
    margin-bottom: 5px;
    page-break-inside: avoid;
    break-inside: avoid;
  }
</style>
