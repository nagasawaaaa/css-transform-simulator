<template>
  <div>
    <h3>CSS Preview</h3>
    <div class="cssPreview">
      <pre>
        <code>
.element {
  transform: {{ createTranslate(transform) }}
             {{ createRotate3d(transform) }}
             {{ createScales(transform) }};
  transform-origin: {{ transformOrigin }};
  background-color: {{ backgroundColor }};
}
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "cssPreview",
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
      default: ''
    }
  },
  methods: {
    createTranslate(tf) {
      return `translateX(${tf.translateX}px) translateY(${tf.translateY}px) translateZ(${tf.translateZ}px)`;
    },
    createRotate3d(tf) {
      return `rotateX(${tf.rotateX}deg) rotateY(${tf.rotateY}deg) rotateZ(${tf.rotateZ}deg)`;
    },
    createScales(tf) {
      return `scaleX(${tf.scaleX}) scaleY(${tf.scaleY})`;
    }
  }
}
</script>

<style lang="scss">
.cssPreview {
  background-color: #efefef;
  font-size: 14px;
  padding: 16px;
  margin-bottom: 40px;
}
</style>
