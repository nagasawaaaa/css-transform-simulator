<template>
  <section class="mb-4">
    <h4>Transform Order</h4>
    <b-form-select
      v-model="selected"
      :options="options"
      @change="setTransformOrder"
    ></b-form-select>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { transformOrderOptions } from "../defaultOptions";
export default {
  name: "TransformOrderSettingView",
  data() {
    return {
      selected: 1,
      options: transformOrderOptions
    };
  },
  computed: {
    ...mapGetters({
      transformOrder: "transformOrder"
    })
  },
  methods: {
    ...mapActions({
      setTransformOrder: "setTransformOrder"
    })
  }
};
</script>
