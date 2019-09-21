<template>
  <div class="wrapper">
    <b-container>
      <h2 class="mb-4">CSS Transform Simulator</h2>
      <b-row>
        <b-col cols="6">
          <h3 class="mb-4">Property Settings</h3>
          <section class="mb-4">
            <h4>
              translate
              <b-button @click="resetTransformValue(['translateX', 'translateY'])">Reset</b-button>
            </h4>
            <InputView
              id="translateX"
              label="translateX"
              :defaultValue="transform.translateX"
              @input="getTransformValue($event, 'translateX')"
            />
            <InputView
              id="translateY"
              label="translateY"
              :defaultValue="transform.translateY"
              @input="getTransformValue($event, 'translateY')"
            />
          </section>
          <section class="mb-4">
            <h4>
              rotate
              <b-button @click="resetTransformValue(['rotateX', 'rotateY', 'rotateZ'])">Reset</b-button>
            </h4>
            <InputView
              id="rotateX"
              label="rotateX"
              :max="360"
              :min="-360"
              :defaultValue="transform.rotateX"
              @input="getTransformValue($event, 'rotateX')"
            />
            <InputView
              id="rotateY"
              label="rotateY"
              :max="360"
              :min="-360"
              :defaultValue="transform.rotateY"
              @input="getTransformValue($event, 'rotateY')"
            />
            <InputView
              id="rotateZ"
              label="rotateZ"
              :max="360"
              :min="-360"
              :defaultValue="transform.rotateZ"
              @input="getTransformValue($event, 'rotateZ')"
            />
          </section>
          <section class="mb-4">
            <h4>
              scale
              <b-button @click="resetTransformValue(['scaleX', 'scaleY'], 1)">Reset</b-button>
            </h4>
            <InputView
              id="scaleX"
              label="scaleX"
              :max="2"
              :min="-2"
              :step="0.1"
              :defaultValue="transform.scaleX"
              @input="getTransformValue($event, 'scaleX')"
            />
            <InputView
              id="scaleY"
              label="scaleY"
              :max="2"
              :min="-2"
              :step="0.1"
              :defaultValue="transform.scaleY"
              @input="getTransformValue($event, 'scaleY')"
            />
          </section>
          <section class="mb-4">
            <h4>transform-origin</h4>
            <b-row>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="left top" selected>left top</b-form-radio></b-col>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="center top">center top</b-form-radio></b-col>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="right top">right top</b-form-radio></b-col>
            </b-row>
            <b-row>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="left center">left center</b-form-radio></b-col>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="center center">center center</b-form-radio></b-col>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="right center">right center</b-form-radio></b-col>
            </b-row>
            <b-row>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="left bottom">left bottom</b-form-radio></b-col>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="center bottom">center bottom</b-form-radio></b-col>
              <b-col cols="4"><b-form-radio v-model="transformOrigin" name="transform-origin" value="right bottom">right bottom</b-form-radio></b-col>
            </b-row>
          </section>
          <section>
            <h4>background-color</h4>
            <b-form-input v-model="backgroundColor" type="color" name="background-color" value="#000"></b-form-input>
          </section>
        </b-col>
        <!-- TODO: プレビュー用のViewとCSSのViewを作成する -->
        <b-col cols="6">
          <PreviewView
            :background-color="backgroundColor"
            :transform="transform"
            :transform-origin="transformOrigin"
          />
          <CssPreview
            :background-color="backgroundColor"
            :transform="transform"
            :transform-origin="transformOrigin"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import InputView from "./InputView";
import PreviewView from "./PreviewView";
import CssPreview from "./CssPreview";

export default {
  name: "LayoutView",
  data() {
    return {
      backgroundColor: "#00ff00",
      transform: {
        translateX: 0,
        translateY: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scaleX: 1,
        scaleY: 1
      },
      transformOrigin: 'center center'
    };
  },
  components: {
    InputView,
    PreviewView,
    CssPreview
  },
  methods: {
    getTransformValue(payload, property) {
      this.transform[property] = payload;
    },
    resetTransformValue([...property], initValue = 0) {
      property.forEach(item => {
        this.transform[item] = initValue
      });
    }
  }
};
</script>
