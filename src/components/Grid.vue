<template>
  <div id="sudoku">
    <div class="sudokuContainer">
      <div class="sudokuAd sudokuAdLeft">
        <div class="sudokuAdSpacer"></div>
        <div class="adsenseContainer"></div>
      </div>
      <div class="sudokuGame">
        <div class="sudokuBoardContainer">
          <canvas id="sudokuBoard" width="978" height="978"></canvas>
        </div>
        <div class="sudokuInputBar">
          <div class="button sudokuCell cell1 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button sudokuCell cell2 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button sudokuCell cell3 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button sudokuCell cell4 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button sudokuCell cell5 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button sudokuCell cell6 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button sudokuCell cell7 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button sudokuCell cell8 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button sudokuCell cell9 unselectedButton">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
            <div class="buttonState disabledButtonState"></div>
          </div>
          <div class="button notes unselectedButton" title="Note-taking mode (N)">
            <div class="buttonState unselectedButtonState"></div>
            <div class="buttonState selectedButtonState"></div>
          </div>
        </div>
      </div>
      <div class="sudokuAd sudokuAdRight">
        <div class="sudokuAdSpacer"></div>
        <div class="adsenseContainer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // methods: {
  //   checkForWin() {
  //     const solution = this.$parent.solution
  //       .map(el => el.toString())
  //       .toString();

  //     const data = new URLSearchParams(new FormData(this.$refs.form))
  //       .toString()
  //       .replace(/%20/g, "+")
  //       .replace(/%5B/g, "[")
  //       .replace(/%5D/g, "]")
  //       .split("&")
  //       .map(el => el.match(/=(.*)$/)[1])
  //       .toString();
  //     if (data === solution) {
  //       this.$refs.form.classList.add("solved");
  //     } else {
  //       this.$refs.form.classList.remove("solved");
  //     }
  //     return data === solution;
  //   }
  // },

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
