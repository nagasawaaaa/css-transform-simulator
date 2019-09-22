<template>
  <section class="mb-4">
    <h4>
      scale
      <b-button @click="resetValues">Reset</b-button>
    </h4>
    <InputView
      id="scaleX"
      label="scaleX"
      :max="2"
      :min="-2"
      :step="0.1"
      :defaultValue="transform.scaleX"
      @input="setScaleX"
    />
    <InputView
      id="scaleY"
      label="scaleY"
      :max="2"
      :min="-2"
      :step="0.1"
      :defaultValue="transform.scaleY"
      @input="setScaleY"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InputView from "./InputView";

export default {
  name: "ScaleSettingView",
  components: {
    InputView
  },
  computed: {
    ...mapGetters({
      transform: "transform"
    })
  },
  methods: {
    ...mapActions({
      setScaleX: "setScaleX",
      setScaleY: "setScaleY"
    }),
    resetValues() {
      this.setScaleX(1);
      this.setScaleY(1);
    }
  }
};
</script>
