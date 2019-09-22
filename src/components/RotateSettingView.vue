<template>
  <section class="mb-4">
    <h4>
      rotate
      <b-button @click="resetValues">Reset</b-button>
    </h4>
    <InputView
      id="rotateX"
      label="rotateX"
      :max="360"
      :min="-360"
      :defaultValue="transform.rotateX"
      @input="setRotateX"
    />
    <InputView
      id="rotateY"
      label="rotateY"
      :max="360"
      :min="-360"
      :defaultValue="transform.rotateY"
      @input="setRotateY"
    />
    <InputView
      id="rotateZ"
      label="rotateZ"
      :max="360"
      :min="-360"
      :defaultValue="transform.rotateZ"
      @input="setRotateZ"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InputView from "./InputView";

export default {
  name: "RotateSettingView",
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
      setRotateX: "setRotateX",
      setRotateY: "setRotateY",
      setRotateZ: "setRotateZ"
    }),
    resetValues() {
      this.setRotateX(0);
      this.setRotateY(0);
      this.setRotateZ(0);
    }
  }
};
</script>
