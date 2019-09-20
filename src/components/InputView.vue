<template>
  <div class="input">
    <b-row>
      <b-col cols="4">
        <label :for="`type-${id}`">{{ label }}</label>
        :{{ value }}
      </b-col>
      <b-col cols="8">
        <b-form-input
          :id="`type-${id}`"
          v-model="value"
          type="range"
          :min="min"
          :max="max"
          @input="input"
        ></b-form-input>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "InputView",
  data() {
    return {
      value: 0
    };
  },
  props: {
    id: {
      type: String,
      default: "labelName"
    },
    label: {
      type: String,
      default: "label Name"
    },
    max: {
      type: Number,
      default: 1000
    },
    min: {
      type: Number,
      default: -1000
    }
  },
  methods: {
    input() {
      this.$emit("input", this.value);
    }
  }
};
</script>
