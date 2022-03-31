import CodeCopy from './CodeCopy.vue';
import Vue from 'vue';

export default {
  updated() {
    setTimeout(() => {
      document.querySelectorAll('div[class*="language"] pre').forEach((el) => {
        console.log("one code block");
      });
    });
  },
};
