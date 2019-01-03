<template>
  <div id="app">
    <header class="header">
      <h1 class="header__title">Sudoku</h1>
    </header>
    <main class="container">
      <grid></grid>
      <aside>
        <button class="restart" @click="generateBoards">Restart</button>
      </aside>
    </main>
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import { SudokuGenerator } from "js-sudoku-generator";

export default {
  components: { Grid },
  name: "app",
  data() {
    return {
      solution: [],
      sheet: []
    };
  },

  methods: {
    generateBoards() {
      SudokuGenerator.generate(1);

      const board = SudokuGenerator.generatedBoards[0];
      this.solution = board.board;
      this.sheet = board.getSheet(0);
      this.$children[0] && this.$children[0].$el.classList.remove("solved");
    }
  },

  created() {
    this.generateBoards();
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
}

body {
  text-align: center;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
  padding: 3em;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header {
  background-color: rgb(171, 97, 218);
  padding: 12px;
  &__title {
    text-transform: uppercase;
    font-size: 1.2em;
    color: white;
    text-decoration: underline;
    font-weight: lighter;
  }
}

.restart {
  background-color: rgb(206, 78, 167);
  color: #fff;
  border: 0px;
  font-size: 1.2em;
  font-weight: lighter;
  margin: 0px;
  padding: 15px 30px;
  text-transform: uppercase;

  &:hover {
    background-color: #c0392b;
    cursor: pointer;
  }
}
</style>
