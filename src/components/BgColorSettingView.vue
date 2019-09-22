<template>
  <section>
    <h4>background-color</h4>
    <b-form-input
      type="color"
      name="background-color"
      @change="setBackgroundColor"
      value="#00ff00"
    ></b-form-input>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BgColorSettingView",
  methods: {
    ...mapActions({
      setBackgroundColor: "setBackgroundColor"
    })
  }
};
</script>
