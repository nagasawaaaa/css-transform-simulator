<template>
  <section class="mb-4">
    <h4>
      translate
      <b-button @click="resetValues">Reset</b-button>
    </h4>
    <InputView
      id="translateX"
      label="translateX"
      :defaultValue="transform.translateX"
      @input="setTranslateX"
    />
    <InputView
      id="translateY"
      label="translateY"
      :defaultValue="transform.translateY"
      @input="setTranslateY"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import InputView from "./InputView";

export default {
  name: "TranslateSettingView",
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
      setTranslateX: "setTranslateX",
      setTranslateY: "setTranslateY"
    }),
    resetValues() {
      this.setTranslateX(0);
      this.setTranslateY(0);
    }
  }
};
</script>
