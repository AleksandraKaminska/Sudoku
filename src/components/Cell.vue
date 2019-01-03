<template>
  <td class="cell" @click="handleClick">
    <input
      class="cell__field"
      type="number"
      maxlength="1"
      :readonly="!!cell"
      :value="cell"
      @input="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      :name="'['+ ir + '][' + ic + ']'"
      ref="field"
    >
    <div class="notes" v-show="!cell" ref="notes">
      <input type="checkbox" data-number="1">
      <input type="checkbox" data-number="2">
      <input type="checkbox" data-number="3">
      <input type="checkbox" data-number="4">
      <input type="checkbox" data-number="5">
      <input type="checkbox" data-number="6">
      <input type="checkbox" data-number="7">
      <input type="checkbox" data-number="8">
      <input type="checkbox" data-number="9">
    </div>
  </td>
</template>

<script>
import "./../styles/Cell.scss";

export default {
  props: ["cell", "ir", "ic"],
  data() {
    return {
      adjacentCells: null
    };
  },
  methods: {
    isValid(value) {
      // console.log(this.adjacentCells);
      const errCell = Array.from(this.adjacentCells).some(el => {
        // el.value == value && console.log(el, value);
        return el.value == value;
      });
      return !(value && errCell);
    },
    handleFocus() {
      if (!this.$el.hasAttribute("readonly")) {
        this.$parent.focusedEl = this.$el;
      }
    },
    handleBlur() {
      this.$parent.focusedEl = null;
    },
    handleChange({ target: { value } }) {
      value
        ? (this.$refs.notes.style.display = "none")
        : (this.$refs.notes.style.display = "flex");
      if (this.isValid(value)) {
        this.$el.classList.remove("hasError");
        this.updateCandidates(value);
      } else {
        this.$el.classList.add("hasError");
      }
      this.$parent.checkForWin();
    },
    handleClick(e) {
      this.$refs.field.focus();
      this.handleFocus();
    },
    showCandidates() {
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(num => {
        if (this.isValid(num)) {
          this.$refs.notes.querySelector(
            `input[data-number="${num}"]`
          ).checked = true;
        }
      });
    },
    updateCandidates(num) {
      Array.from(this.adjacentCells).forEach(el => {
        el.nextElementSibling.querySelector(
          `input[data-number="${num}"]`
        ).checked = false;
      });
    },
    setAdjacentCells() {
      const row = this.ir;
      const col = this.ic;
      const rbase = row - (row % 3);
      const cbase = col - (col % 3);

      const nextRow1 = ((row + 1) % 3) + rbase;
      const nextRow2 = ((row + 2) % 3) + rbase;
      const nextCol1 = ((col + 1) % 3) + cbase;
      const nextCol2 = ((col + 2) % 3) + cbase;

      const rows = `.cell__field[name^="[${row}]"]:not([name="[${row}][${col}]"])`;
      const cols = `.cell__field[name$="[${col}]"]:not([name="[${row}][${col}]"])`;
      const square = `
        .cell__field[name="[${nextRow1}][${nextCol1}]"], 
        .cell__field[name="[${nextRow1}][${nextCol2}]"], 
        .cell__field[name="[${nextRow2}][${nextCol1}]"], 
        .cell__field[name="[${nextRow2}][${nextCol2}]"]
      `;

      this.adjacentCells = document.querySelectorAll(
        `${rows}, ${cols}, ${square}`
      );
    }
  },
  mounted() {
    this.setAdjacentCells();
    this.showCandidates();
  }
};
</script>
