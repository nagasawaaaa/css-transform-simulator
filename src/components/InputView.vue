<template>
  <div class="input">
    <b-row>
      <b-col cols="4">
        <label :for="`type-${id}`">{{ label }}</label>
        : <strong>{{ value }}</strong>
      </b-col>
      <b-col cols="8">
        <b-form-input
          :id="`type-${id}`"
          v-model="value"
          type="range"
          :min="min"
          :max="max"
          :step="step"
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
    defaultValue: {
      type: [Number, String],
      default: 0
    },
    label: {
      type: String,
      default: "label Name"
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: -100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  watch: {
    defaultValue(newVal, oldVal) {
      this.value = newVal;
    }
  },
  methods: {
    input() {
      this.$emit("input", this.value);
    }
  },
  created() {
    this.value = this.defaultValue
  }
};
</script>
