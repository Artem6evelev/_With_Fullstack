<template>
  <div class="main">
    <div class="row">
      <h1>Coing</h1>
      <Button @click="loadImages">
        Load Images
      </Button>
    </div>
    <div class="container">
      <Images
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        :image="image"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Images from '../components/Images';
import Button from '~/components/Button';
export default {
  components: {
    Images,
    Button
  },
  computed: {
    ...mapGetters({
      images: 'images/getImages'
    })
  },
  methods: {
    loadImages () {
      this.$store.dispatch('images/getImagesFromApi');
    }
  }
};
</script>

<style scoped>
.main{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
}
h1{
  padding: 20px;
}
.row{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.container{
  justify-self: center;
  align-self: center;
  flex-wrap: wrap;
  display: flex;
  width: 600px;
}
</style>
