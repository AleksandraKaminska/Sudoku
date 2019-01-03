<template>
  <form id="sudoku" ref="form">
    <table class="board">
      <tr v-for="(row, ir) in this.$parent.sheet" :key="ir">
        <!-- <tr v-for="(row, ir) in this.$parent.solution" :key="ir"> -->
        <td v-for="(cell, ic) in row" :key="ic">
          <input
            type="tel"
            maxlength="1"
            :readonly="!!cell"
            :value="cell"
            @input="checkForWin"
            :name="'['+ ir + '][' + ic + ']'"
          >
          <!-- <input
            type="tel"
            maxlength="1"
            :value="cell"
            @input="checkForWin"
            :name="'['+ ir + '][' + ic + ']'"
          >-->
        </td>
      </tr>
    </table>
  </form>
</template>

<script>
export default {
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
    }
  },

  created() {}
};
</script>

<style lang="scss">
.board {
  border-collapse: collapse;
  transition: all 0.5s;
}

td {
  border: 1px solid gray;
  text-align: center;
  vertical-align: middle;
}

td input {
  color: #000000;
  padding: 0;
  border: 0;
  text-align: center;
  width: 48px;
  height: 48px;
  font-size: 24px;
  background-color: #ffffff;
  outline: none;
  text-transform: uppercase;
  transition: all 0.5s;

  &:read-only {
    color: gray;
  }
}

tr:nth-child(3n) {
  border-bottom: 2px solid gray;
}

tr:nth-child(3n + 1) {
  border-top: 2px solid gray;
}

td:nth-child(3n) {
  border-right: 2px solid gray;
}

td:nth-child(3n + 1) {
  border-left: 2px solid gray;
}

.solved input {
  color: green;
}
</style>
