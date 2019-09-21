<template>
  <div class="cssPreview">
    <pre>
      <code>
.hoge {
  transform: {{ createTranslate(transform) }}
             {{ createRotate3d(transform) }}
}
      </code>
    </pre>
  </div>
</template>

<script>
export default {
  name: "cssPreview",
  props: {
    transform: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    createTranslate(transform) {
      return `translate3d(${transform.translateX}px, ${transform.translateY}px, ${transform.translateZ}px)`;
    },
    createRotate3d(transform) {
      return `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg)`;
    }
  }
}
</script>

<style lang="scss">
.cssPreview {
  background-color: #efefef;
  font-size: 14px;
  min-height: 50vh;
  padding: 16px;
}
</style>
