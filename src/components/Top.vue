<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active teal item">CATalog</router-link>
    <div class="right menu">
      <template>
        <router-link to="/gallery" class="ui item">Random Gallery</router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
};
</script>
