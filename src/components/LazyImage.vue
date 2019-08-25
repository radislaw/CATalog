<template>
  <span class="LazyImage" :class="{'ui placeholder': loading}">
    <img
      :src="imageSrc"
      :style="style"
      :srcset="imageSrcset"
      class="--image"
      :class="{'-opacity': !loading}"
      @error="onError"
      @load="onLoad"
    >
  </span>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    height: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
    lazySrc: {
      type: String,
      default: null,
    },
    lazySrcset: {
      type: String,
      default: null,
    },
    imageAlt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      imageSrc: null,
      imageSrcset: null,
      loading: true,
      isError: false,
    };
  },
  mounted() {
    this.$observe(this.$el, this.loadImage, {
      rootMargin: '0px',
      threshold: 0.1,
    });
  },
  computed: {
    aspectRatio() {
      if (!this.width || !this.height) return null;
      return (this.height / this.width) * 100;
    },
    style() {
      const style = {};
      // для пропорционального изменения высоты плейсхолдера
      const applyAspectRatio = this.loading && this.aspectRatio;
      if (applyAspectRatio) {
        style.height = 0;
        style.paddingTop = `${this.aspectRatio}%`;
      }
      return style;
    },
  },
  methods: {
    onError() {
      this.loading = false;
      this.isError = true;
    },
    onLoad() {
      this.loading = false;
    },

    loadImage() {
      this.isError = false;
      this.imageSrc = this.lazySrc;
      this.imageSrcset = this.lazySrcset;
    },
  },
  watch: {
    lazySrc() {
      this.loading = true;
      this.isError = false;
      this.imageSrc = null;
      this.imageSrcset = null;
      this.$observe(this.$el, this.loadImage);
    },
  },
};
</script>

<style lang="scss">
  .LazyImage {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    margin-top: 0 !important;

    .--image {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      vertical-align: middle;
      transition: opacity 0.7s;
      opacity: 0;
      margin: 0 auto;

      &.-opacity {
        opacity: 1;
      }
    }
  }
</style>
