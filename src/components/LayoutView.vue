<template>
  <div class="wrapper">
    <b-container>
      <h2 class="mb-4">CSS Transform Simulator</h2>
      <b-row class="mb-4">
        <b-col cols="6">
          <h3 class="mb-4">Property Settings</h3>
          <TransformOrderSettingView />
          <TranslateSettingView />
          <RotateSettingView />
          <ScaleSettingView />
          <TransformOriginSettingView />
          <BgColorSettingView />
        </b-col>
        <b-col cols="6">
          <PreviewView
            :background-color="backgroundColor"
            :transform="transform"
            :transform-order="transformOrder"
            :transform-origin="transformOrigin"
          />
          <CssPreview
            :background-color="backgroundColor"
            :transform="transform"
            :transform-order="transformOrder"
            :transform-origin="transformOrigin"
          />
        </b-col>
      </b-row>
      <p class="text-center">
        &copy;
        <a href="https://twitter.com/nagasawaaaa" target="_blank">
          nagasawaaaa
        </a>
        All Rights Reserved.
      </p>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PreviewView from "./PreviewView";
import CssPreview from "./CssPreview";
import TranslateSettingView from "./TranslateSettingView";
import RotateSettingView from "./RotateSettingView";
import ScaleSettingView from "./ScaleSettingView";
import TransformOriginSettingView from "./TransformOriginSettingView";
import BgColorSettingView from "./BgColorSettingView";
import TransformOrderSettingView from "./TransformOrderSettingView";

export default {
  name: "LayoutView",
  components: {
    PreviewView,
    CssPreview,
    TranslateSettingView,
    RotateSettingView,
    ScaleSettingView,
    BgColorSettingView,
    TransformOriginSettingView,
    TransformOrderSettingView
  },
  computed: {
    ...mapGetters({
      backgroundColor: "backgroundColor",
      transform: "transform",
      transformOrder: "transformOrder",
      transformOrigin: "transformOrigin"
    })
  }
};
</script>
