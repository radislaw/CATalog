<template>
  <div>
    <Top/>
    <div class="ui container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Top from './components/Top.vue';

export default {
  name: 'app',
  components: { Top },
};
</script>
