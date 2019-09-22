<template>
  <b-col cols="4">
    <b-form-radio
      name="transform-origin"
      :value="value"
      v-model="selected"
      @change="change"
    >
      {{ value }}
    </b-form-radio>
  </b-col>
</template>

<script>
export default {
  name: "TransformOriginRadio",
  props: {
    value: {
      type: String,
      default: ""
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: this.isSelected ? this.value : null
    };
  },
  methods: {
    change(value) {
      this.$emit("change", value);
    }
  }
};
</script>
