<template>
  <div class="item">
    <span>{{ image.id }}</span>
    <img :src="image.imageUrl" @error="imageIssue">
    <div class="title">
      {{ image.description }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Image',
  props: ['image'],
  methods: {
    imageIssue (event) {
      event.target.src = 'https://staytechie.com/wp-content/uploads/2020/09/YRzXPk.jpeg';
    }
  }
};
</script>

<style scoped>
.title{
  background: lightblue;
  border: white solid 1px;
}
span{
  position: absolute;
}
img{
  height: 200px;
  width: 200px;
}
.item{
  max-width: 200px;
}
</style>
