<template>
  <div id="app">
    <header class="header">
      <h1 class="header__title">Sudoku</h1>
    </header>
    <main class="container">
      <grid :level="level"></grid>
      <aside>
        <slick ref="slick" :options="slickOptions" @beforeChange="handleBeforeChange">
          <button class="btn btn--stripe" data-level="0">Easy</button>
          <button class="btn btn--stripe" data-level="1">Medium</button>
          <button class="btn btn--stripe" data-level="2">Hard</button>
        </slick>
        <a href="https://www.sudokuoftheday.com/techniques/" class="btn btn__help" target="_blank">?</a>
        <button class="btn btn--stripe restart" @click="generateBoards">Restart</button>
      </aside>
    </main>
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import { SudokuGenerator } from "js-sudoku-generator";
import Slick from "vue-slick";
import "./../node_modules/slick-carousel/slick/slick.scss";
import "./styles/App.scss";

export default {
  components: { Grid, Slick },
  name: "app",
  data() {
    return {
      solution: [],
      sheet: [],
      level: 0,
      slickOptions: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  },

  watch: {
    level: function() {
      this.generateBoards();
    }
  },

  methods: {
    generateBoards() {
      SudokuGenerator.generate(1);

      const board = SudokuGenerator.generatedBoards[0];
      this.solution = board.board;
      this.sheet = board.getSheet(this.level);
      this.$children[0] && this.$children[0].$el.classList.remove("solved");
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      this.level = nextSlide;
    }
  },

  created() {
    this.generateBoards();
  }
};
</script>
