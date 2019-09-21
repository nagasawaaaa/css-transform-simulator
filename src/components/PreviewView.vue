<template>
  <div class="preview">
    <h3 class="mb-4">Element Preview</h3>
    <div class="elementWrapper">
      <div id="previewElement" :style="createStyle()"></div>
    </div>
    <!-- /.elementWrapper -->
  </div>
</template>

<script>
export default {
  name: "PreviewView",
  props: {
    backgroundColor: {
      type: String,
      default: "#00ff00"
    },
    transform: {
      type: Object,
      default() {
        return {}
      }
    },
    transformOrigin: {
      type: String,
      default: ""
    }
  },
  methods: {
    createStyle() {
      const tf = this.transform;
      return {
        backgroundColor: this.backgroundColor,
        transform: `translateX(${tf.translateX}px) translateY(${tf.translateY}px) rotateX(${tf.rotateX}deg) rotateY(${tf.rotateY}deg) rotateZ(${tf.rotateZ}deg) scaleX(${tf.scaleX}) scaleY(${tf.scaleY})`,
        transformOrigin: this.transformOrigin
      };
    }
  }
};
</script>

<style lang="scss">
.preview {
  margin-bottom: 50px;
}
.elementWrapper {
  padding: 20px;
  border: 1px solid #ccc;
  height: 300px;
  overflow: hidden;
}
#previewElement {
  transition: all .5s;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: greenyellow;
  perspective: 500px;
  transform-style: preserve-3d;
}
</style>
