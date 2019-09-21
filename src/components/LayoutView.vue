<template>
  <div class="wrapper">
    <b-container>
      <h2 class="mb-4">CSS Transform Simulator</h2>
      <b-row>
        <b-col cols="6">
          <h3 class="mb-4">Property Settings</h3>
          <section class="mb-4">
            <h4>translate</h4>
            <InputView
              id="translateX"
              label="translateX"
              @input="getTransformValue($event, 'translateX')"
            />
            <InputView
              id="translateY"
              label="translateY"
              @input="getTransformValue($event, 'translateY')"
            />
            <InputView
              id="translateZ"
              label="translateZ"
              @input="getTransformValue($event, 'translateZ')"
            />
          </section>
          <section>
            <h4>rotate</h4>
            <InputView
              id="rotateX"
              label="rotateX"
              :max="360"
              :min="-360"
              @input="getTransformValue($event, 'rotateX')"
            />
            <InputView
              id="rotateY"
              label="rotateY"
              :max="360"
              :min="-360"
              @input="getTransformValue($event, 'rotateY')"
            />
            <InputView
              id="rotateZ"
              label="rotateZ"
              :max="360"
              :min="-360"
              @input="getTransformValue($event, 'rotateZ')"
            />
          </section>
        </b-col>
        <!-- TODO: プレビュー用のViewとCSSのViewを作成する -->
        <b-col cols="6">
          <CssPreview :transform="transform" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import InputView from "./InputView";
import CssPreview from "./CssPreview";

export default {
  name: "LayoutView",
  data() {
    return {
      transform: {
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scaleX: 0,
        scaleY: 0
      }
    };
  },
  components: {
    InputView,
    CssPreview
  },
  methods: {
    getTransformValue(payload, property) {
      this.transform[property] = payload;
    }
  }
};
</script>
