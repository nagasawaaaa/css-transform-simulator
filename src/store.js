import Vue from "vue";
import Vuex from "vuex";
import {
  SAVE_BACKGROUND_COLOR,
  SAVE_TRANSFORM,
  SAVE_TRANSFORM_ORIGIN,
  INIT
} from "./mutation-types";
import cloneDeep from "../node_modules/lodash/cloneDeep";

Vue.use(Vuex);

const defaultState = {
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
  transformOrigin: "center center"
};

export default new Vuex.Store({
  state: () => cloneDeep(defaultState),
  getters: {
    backgroundColor(state) {
      return state.backgroundColor;
    },
    transform(state) {
      return state.transform;
    },
    transformOrigin(state) {
      return state.transformOrigin;
    }
  },
  mutations: {
    [SAVE_BACKGROUND_COLOR](state, payload) {
      state.backgroundColor = payload;
    },
    [SAVE_TRANSFORM_ORIGIN](state, payload) {
      state.transformOrigin = payload;
    },
    [SAVE_TRANSFORM](state, payload) {
      state.transform[payload.prop] = payload.value;
    },
    [INIT](state = {}) {
      Object.assign(state, cloneDeep(defaultState));
    }
  },
  actions: {
    setBackgroundColor({ commit }, payload) {
      commit(SAVE_BACKGROUND_COLOR, payload);
    },
    setTransformOrigin({ commit }, payload) {
      commit(SAVE_TRANSFORM_ORIGIN, payload);
    },
    setTranslateX({ commit }, payload) {
      commit(SAVE_TRANSFORM, {
        value: payload,
        prop: "translateX"
      });
    },
    setTranslateY({ commit }, payload) {
      commit(SAVE_TRANSFORM, {
        value: payload,
        prop: "translateY"
      });
    },
    setRotateX({ commit }, payload) {
      commit(SAVE_TRANSFORM, {
        value: payload,
        prop: "rotateX"
      });
    },
    setRotateY({ commit }, payload) {
      commit(SAVE_TRANSFORM, {
        value: payload,
        prop: "rotateY"
      });
    },
    setRotateZ({ commit }, payload) {
      commit(SAVE_TRANSFORM, {
        value: payload,
        prop: "rotateZ"
      });
    },
    setScaleX({ commit }, payload) {
      commit(SAVE_TRANSFORM, {
        value: payload,
        prop: "scaleX"
      });
    },
    setScaleY({ commit }, payload) {
      commit(SAVE_TRANSFORM, {
        value: payload,
        prop: "scaleY"
      });
    }
  }
});
