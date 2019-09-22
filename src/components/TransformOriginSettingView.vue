<template>
  <section class="mb-4">
    <h4>transform-origin</h4>
    <b-row>
      <TransformOriginRadio value="left top" @change="change" />
      <TransformOriginRadio value="center top" @change="change" />
      <TransformOriginRadio value="right top" @change="change" />
    </b-row>
    <b-row>
      <TransformOriginRadio value="left center" @change="change" />
      <TransformOriginRadio
        value="center center"
        :is-selected="true"
        @change="change"
      />
      <TransformOriginRadio value="right center" @change="change" />
    </b-row>
    <b-row>
      <TransformOriginRadio value="left bottom" @change="change" />
      <TransformOriginRadio value="center bottom" @change="change" />
      <TransformOriginRadio value="right bottom" @change="change" />
    </b-row>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TransformOriginRadio from "./TransformOriginRadio";

export default {
  name: "TransformOriginSettingView",
  components: {
    TransformOriginRadio
  },
  computed: {
    ...mapGetters({
      transformOrigin: "transformOrigin"
    })
  },
  methods: {
    ...mapActions({
      setTransformOrigin: "setTransformOrigin"
    }),
    change(payload) {
      this.setTransformOrigin(payload);
    }
  }
};
</script>
