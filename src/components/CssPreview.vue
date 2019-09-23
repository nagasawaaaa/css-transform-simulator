<template>
  <div>
    <h3>CSS Preview</h3>
    <div class="cssPreview">
      <pre>
        <code>
.element {
  transform: {{ createTranslateOrder(transformOrder.value) }};
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
        return {};
      }
    },
    transformOrigin: {
      type: String,
      default: ""
    },
    transformOrder: {
      type: Object,
      default() {
        return {
          value: 1,
          text: "translate rotate scale"
        };
      }
    }
  },
  methods: {
    createTranslate() {
      const tf = this.transform;
      return `translateX(${tf.translateX}px) translateY(${tf.translateY}px)`;
    },
    createRotate() {
      const tf = this.transform;
      return `rotateX(${tf.rotateX}deg) rotateY(${tf.rotateY}deg) rotateZ(${tf.rotateZ}deg)`;
    },
    createScale() {
      const tf = this.transform;
      return `scaleX(${tf.scaleX}) scaleY(${tf.scaleY})`;
    },
    createTranslateOrder(order = 1) {
      switch (order) {
        case 1:
          return `${this.createTranslate()}
             ${this.createRotate()}
             ${this.createScale()}`;
        case 2:
          return `${this.createRotate()}
             ${this.createTranslate()}
             ${this.createScale()}`;
        default:
          return `${this.createTranslate()}
             ${this.createRotate()}
             ${this.createScale()}`;
      }
    }
  }
};
</script>

<style lang="scss">
.cssPreview {
  background-color: #efefef;
  font-size: 14px;
  padding: 16px;
  margin-bottom: 40px;
}
</style>
