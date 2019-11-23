<template>
  <div>
      {movie.title}
  </div>
</template>

<script>
export default {
  name : 'MovieDetail',
  props: {
    movie : {
      type: Object,
      required: true
      }
  },

}
</script>

<style>

</style>