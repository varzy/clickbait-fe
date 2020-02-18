<template>
  <div class="single_news"></div>
</template>

<script>
export default {
  name: 'SingleNews',

  props: {
    title: String,
    link: String,
    source: String
  }
};
</script>

<style>
.single_news {
  display: flex;
  width: 100%;

  .left {
  }
}
</style>
