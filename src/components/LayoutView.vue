<template>
  <div class="wrapper">
    <b-container>
      <h2 class="mb-4">CSS Transform Simulator</h2>
      <b-row>
        <b-col cols="6">
          <h3 class="mb-4">Property Settings</h3>
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
        </b-col>
        <!-- TODO: プレビュー用のViewとCSSのViewを作成する -->
        <b-col cols="6">col-8</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import InputView from "./InputView";

export default {
  name: "LayoutView",
  data() {
    return {
      transform: {
        translateX: 0,
        translateY: 0,
        translateZ: 0
      }
    };
  },
  components: {
    InputView
  },
  methods: {
    getTransformValue(payload, property) {
      this.transform[property] = payload;
    }
  }
};
</script>
