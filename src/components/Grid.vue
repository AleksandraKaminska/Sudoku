<template>
  <div class="sudokuContainer">
    <div class="sudokuGame">
      <div class="sudokuBoardContainer">
        <form id="sudoku" ref="form">
          <table class="board">
            <tr v-for="(row, ir) in this.$parent.sheet" :key="level + '/' + ir">
              <cell
                v-for="(cell, ic) in row"
                v-bind:cell="cell"
                v-bind:ic="ic"
                v-bind:ir="ir"
                :key="level + '/' + ic"
              />
            </tr>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from "./Cell.vue";
import "./../styles/Grid.scss";

export default {
  components: { Cell },
  props: ["level"],
  data() {
    return {};
  },
  methods: {
    checkForWin() {
      const solution = this.$parent.solution
        .map(el => el.toString())
        .toString();

      const data = new URLSearchParams(new FormData(this.$refs.form))
        .toString()
        .replace(/%20/g, "+")
        .replace(/%5B/g, "[")
        .replace(/%5D/g, "]")
        .split("&")
        .map(el => el.match(/=(.*)$/)[1])
        .toString();
      if (data === solution) {
        this.$refs.form.classList.add("solved");
      } else {
        this.$refs.form.classList.remove("solved");
      }
      return data === solution;
    },
    clearCandidates() {
      Array.from(document.querySelectorAll('input[type="checkbox"]')).forEach(
        el => {
          el.checked = false;
        }
      );
    }
  },
  beforeUpdate() {
    this.clearCandidates();
  }
};
</script>
