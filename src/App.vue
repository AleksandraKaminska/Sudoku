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
// import { SudokuGenerator } from "js-sudoku-generator";

export default {
  components: { Grid },
  name: "app"
  // data() {
  //   return {
  //     solution: [],
  //     sheet: []
  //   };
  // },

  // methods: {
  //   generateBoards() {
  //     SudokuGenerator.generate(1);

  //     const board = SudokuGenerator.generatedBoards[0];
  //     this.solution = board.board;
  //     this.sheet = board.getSheet(0);
  //     this.$children[0] && this.$children[0].$el.classList.remove("solved");
  //   }
  // },

  // created() {
  //   this.generateBoards();
  // }
};
</script>

<style lang="scss">
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}

a {
  background-color: transparent;
}

a:active,
a:hover {
  outline: 0;
}

abbr[title] {
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: 700;
}

dfn {
  font-style: italic;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

mark {
  background: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 1em 40px;
}

hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: textfield;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: 0;
  padding: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: 700;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

:after,
:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857;
  color: #333;
  background-color: #fff;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

a {
  color: #337ab7;
  text-decoration: none;
}

a:focus,
a:hover {
  color: #23527c;
  text-decoration: underline;
}

a:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

figure {
  margin: 0;
}

img {
  vertical-align: middle;
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
}

.img-rounded {
  border-radius: 6px;
}

.img-thumbnail {
  padding: 4px;
  line-height: 1.42857;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
}

.img-circle {
  border-radius: 50%;
}

hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}

[role="button"] {
  cursor: pointer;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

.h1 .small,
.h1 small,
.h2 .small,
.h2 small,
.h3 .small,
.h3 small,
.h4 .small,
.h4 small,
.h5 .small,
.h5 small,
.h6 .small,
.h6 small,
h1 .small,
h1 small,
h2 .small,
h2 small,
h3 .small,
h3 small,
h4 .small,
h4 small,
h5 .small,
h5 small,
h6 .small,
h6 small {
  font-weight: 400;
  line-height: 1;
  color: #777;
}

.h1,
.h2,
.h3,
h1,
h2,
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.h1 .small,
.h1 small,
.h2 .small,
.h2 small,
.h3 .small,
.h3 small,
h1 .small,
h1 small,
h2 .small,
h2 small,
h3 .small,
h3 small {
  font-size: 65%;
}

.h4,
.h5,
.h6,
h4,
h5,
h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.h4 .small,
.h4 small,
.h5 .small,
.h5 small,
.h6 .small,
.h6 small,
h4 .small,
h4 small,
h5 .small,
h5 small,
h6 .small,
h6 small {
  font-size: 75%;
}

.h1,
h1 {
  font-size: 36px;
}

.h2,
h2 {
  font-size: 30px;
}

.h3,
h3 {
  font-size: 24px;
}

.h4,
h4 {
  font-size: 18px;
}

.h5,
h5 {
  font-size: 14px;
}

.h6,
h6 {
  font-size: 12px;
}

p {
  margin: 0 0 10px;
}

.lead {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
}

@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}

.small,
small {
  font-size: 85%;
}

.mark,
mark {
  background-color: #fcf8e3;
  padding: 0.2em;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}

.text-nowrap {
  white-space: nowrap;
}

.text-lowercase {
  text-transform: lowercase;
}

.initialism,
.text-uppercase {
  text-transform: uppercase;
}

.text-capitalize {
  text-transform: capitalize;
}

.text-muted {
  color: #777;
}

.text-primary {
  color: #337ab7;
}

a.text-primary:hover {
  color: #286090;
}

.text-success {
  color: #3c763d;
}

a.text-success:hover {
  color: #2b542c;
}

.text-info {
  color: #31708f;
}

a.text-info:hover {
  color: #245269;
}

.text-warning {
  color: #8a6d3b;
}

a.text-warning:hover {
  color: #66512c;
}

.text-danger {
  color: #a94442;
}

a.text-danger:hover {
  color: #843534;
}

.bg-primary {
  color: #fff;
}

.bg-primary {
  background-color: #337ab7;
}

a.bg-primary:hover {
  background-color: #286090;
}

.bg-success {
  background-color: #dff0d8;
}

a.bg-success:hover {
  background-color: #c1e2b3;
}

.bg-info {
  background-color: #d9edf7;
}

a.bg-info:hover {
  background-color: #afd9ee;
}

.bg-warning {
  background-color: #fcf8e3;
}

a.bg-warning:hover {
  background-color: #f7ecb5;
}

.bg-danger {
  background-color: #f2dede;
}

a.bg-danger:hover {
  background-color: #e4b9b9;
}

.page-header {
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}

ol ol,
ol ul,
ul ol,
ul ul {
  margin-bottom: 0;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
  margin-left: -5px;
}

.list-inline > li {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}

dl {
  margin-top: 0;
  margin-bottom: 20px;
}

dd,
dt {
  line-height: 1.42857;
}

dt {
  font-weight: 700;
}

dd {
  margin-left: 0;
}

.dl-horizontal dd:after,
.dl-horizontal dd:before {
  content: " ";
  display: table;
}

.dl-horizontal dd:after {
  clear: both;
}

@media (min-width: 768px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    clear: left;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dl-horizontal dd {
    margin-left: 180px;
  }
}

abbr[data-original-title],
abbr[title] {
  cursor: help;
  border-bottom: 1px dotted #777;
}

.initialism {
  font-size: 90%;
}

blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 17.5px;
  border-left: 5px solid #eee;
}

blockquote ol:last-child,
blockquote p:last-child,
blockquote ul:last-child {
  margin-bottom: 0;
}

blockquote .small,
blockquote footer,
blockquote small {
  display: block;
  font-size: 80%;
  line-height: 1.42857;
  color: #777;
}

blockquote .small:before,
blockquote footer:before,
blockquote small:before {
  content: "\2014 \00A0";
}

.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eee;
  border-left: 0;
  text-align: right;
}

.blockquote-reverse .small:before,
.blockquote-reverse footer:before,
.blockquote-reverse small:before,
blockquote.pull-right .small:before,
blockquote.pull-right footer:before,
blockquote.pull-right small:before {
  content: "";
}

.blockquote-reverse .small:after,
.blockquote-reverse footer:after,
.blockquote-reverse small:after,
blockquote.pull-right .small:after,
blockquote.pull-right footer:after,
blockquote.pull-right small:after {
  content: "\00A0 \2014";
}

address {
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.42857;
}

.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn:active:focus,
.btn:focus {
  outline: thin dotted;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.btn.focus,
.btn:focus,
.btn:hover {
  color: #333;
  text-decoration: none;
}

.btn.active,
.btn:active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.65;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

.btn-default.active,
.btn-default.focus,
.btn-default:active,
.btn-default:focus,
.btn-default:hover,
.open > .btn-default.dropdown-toggle {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}

.btn-default.active,
.btn-default:active,
.open > .btn-default.dropdown-toggle {
  background-image: none;
}

.btn-default.disabled,
.btn-default.disabled.active,
.btn-default.disabled.focus,
.btn-default.disabled:active,
.btn-default.disabled:focus,
.btn-default.disabled:hover,
.btn-default[disabled],
.btn-default[disabled].active,
.btn-default[disabled].focus,
.btn-default[disabled]:active,
.btn-default[disabled]:focus,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default,
fieldset[disabled] .btn-default.active,
fieldset[disabled] .btn-default.focus,
fieldset[disabled] .btn-default:active,
fieldset[disabled] .btn-default:focus,
fieldset[disabled] .btn-default:hover {
  background-color: #fff;
  border-color: #ccc;
}

.btn-default .badge {
  color: #fff;
  background-color: #333;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.btn-primary.active,
.btn-primary.focus,
.btn-primary:active,
.btn-primary:focus,
.btn-primary:hover,
.open > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}

.btn-primary.active,
.btn-primary:active,
.open > .btn-primary.dropdown-toggle {
  background-image: none;
}

.btn-primary.disabled,
.btn-primary.disabled.active,
.btn-primary.disabled.focus,
.btn-primary.disabled:active,
.btn-primary.disabled:focus,
.btn-primary.disabled:hover,
.btn-primary[disabled],
.btn-primary[disabled].active,
.btn-primary[disabled].focus,
.btn-primary[disabled]:active,
.btn-primary[disabled]:focus,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary,
fieldset[disabled] .btn-primary.active,
fieldset[disabled] .btn-primary.focus,
fieldset[disabled] .btn-primary:active,
fieldset[disabled] .btn-primary:focus,
fieldset[disabled] .btn-primary:hover {
  background-color: #337ab7;
  border-color: #2e6da4;
}

.btn-primary .badge {
  color: #337ab7;
  background-color: #fff;
}

.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.btn-success.active,
.btn-success.focus,
.btn-success:active,
.btn-success:focus,
.btn-success:hover,
.open > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}

.btn-success.active,
.btn-success:active,
.open > .btn-success.dropdown-toggle {
  background-image: none;
}

.btn-success.disabled,
.btn-success.disabled.active,
.btn-success.disabled.focus,
.btn-success.disabled:active,
.btn-success.disabled:focus,
.btn-success.disabled:hover,
.btn-success[disabled],
.btn-success[disabled].active,
.btn-success[disabled].focus,
.btn-success[disabled]:active,
.btn-success[disabled]:focus,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success,
fieldset[disabled] .btn-success.active,
fieldset[disabled] .btn-success.focus,
fieldset[disabled] .btn-success:active,
fieldset[disabled] .btn-success:focus,
fieldset[disabled] .btn-success:hover {
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}

.btn-info.active,
.btn-info.focus,
.btn-info:active,
.btn-info:focus,
.btn-info:hover,
.open > .btn-info.dropdown-toggle {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}

.btn-info.active,
.btn-info:active,
.open > .btn-info.dropdown-toggle {
  background-image: none;
}

.btn-info.disabled,
.btn-info.disabled.active,
.btn-info.disabled.focus,
.btn-info.disabled:active,
.btn-info.disabled:focus,
.btn-info.disabled:hover,
.btn-info[disabled],
.btn-info[disabled].active,
.btn-info[disabled].focus,
.btn-info[disabled]:active,
.btn-info[disabled]:focus,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info,
fieldset[disabled] .btn-info.active,
fieldset[disabled] .btn-info.focus,
fieldset[disabled] .btn-info:active,
fieldset[disabled] .btn-info:focus,
fieldset[disabled] .btn-info:hover {
  background-color: #5bc0de;
  border-color: #46b8da;
}

.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}

.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}

.btn-warning.active,
.btn-warning.focus,
.btn-warning:active,
.btn-warning:focus,
.btn-warning:hover,
.open > .btn-warning.dropdown-toggle {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}

.btn-warning.active,
.btn-warning:active,
.open > .btn-warning.dropdown-toggle {
  background-image: none;
}

.btn-warning.disabled,
.btn-warning.disabled.active,
.btn-warning.disabled.focus,
.btn-warning.disabled:active,
.btn-warning.disabled:focus,
.btn-warning.disabled:hover,
.btn-warning[disabled],
.btn-warning[disabled].active,
.btn-warning[disabled].focus,
.btn-warning[disabled]:active,
.btn-warning[disabled]:focus,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning,
fieldset[disabled] .btn-warning.active,
fieldset[disabled] .btn-warning.focus,
fieldset[disabled] .btn-warning:active,
fieldset[disabled] .btn-warning:focus,
fieldset[disabled] .btn-warning:hover {
  background-color: #f0ad4e;
  border-color: #eea236;
}

.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}

.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}

.btn-danger.active,
.btn-danger.focus,
.btn-danger:active,
.btn-danger:focus,
.btn-danger:hover,
.open > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}

.btn-danger.active,
.btn-danger:active,
.open > .btn-danger.dropdown-toggle {
  background-image: none;
}

.btn-danger.disabled,
.btn-danger.disabled.active,
.btn-danger.disabled.focus,
.btn-danger.disabled:active,
.btn-danger.disabled:focus,
.btn-danger.disabled:hover,
.btn-danger[disabled],
.btn-danger[disabled].active,
.btn-danger[disabled].focus,
.btn-danger[disabled]:active,
.btn-danger[disabled]:focus,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger,
fieldset[disabled] .btn-danger.active,
fieldset[disabled] .btn-danger.focus,
fieldset[disabled] .btn-danger:active,
fieldset[disabled] .btn-danger:focus,
fieldset[disabled] .btn-danger:hover {
  background-color: #d9534f;
  border-color: #d43f3a;
}

.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}

.btn-link {
  color: #337ab7;
  font-weight: 400;
  border-radius: 0;
}

.btn-link,
.btn-link.active,
.btn-link:active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.btn-link,
.btn-link:active,
.btn-link:focus,
.btn-link:hover {
  border-color: transparent;
}

.btn-link:focus,
.btn-link:hover {
  color: #23527c;
  text-decoration: underline;
  background-color: transparent;
}

.btn-link[disabled]:focus,
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:focus,
fieldset[disabled] .btn-link:hover {
  color: #777;
  text-decoration: none;
}

.btn-group-lg > .btn,
.btn-lg {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33333;
  border-radius: 6px;
}

.btn-group-sm > .btn,
.btn-sm {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.btn-group-xs > .btn,
.btn-xs {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block + .btn-block {
  margin-top: 5px;
}

input[type="button"].btn-block,
input[type="reset"].btn-block,
input[type="submit"].btn-block {
  width: 100%;
}

.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}

.fade.in {
  opacity: 1;
}

.collapse {
  display: none;
}

.collapse.in {
  display: block;
}

tr.collapse.in {
  display: table-row;
}

tbody.collapse.in {
  display: table-row-group;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.btn-group-vertical > .btn,
.btn-group > .btn {
  position: relative;
  float: left;
}

.btn-group-vertical > .btn.active,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:hover,
.btn-group > .btn.active,
.btn-group > .btn:active,
.btn-group > .btn:focus,
.btn-group > .btn:hover {
  z-index: 2;
}

.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}

.btn-toolbar {
  margin-left: -5px;
}

.btn-toolbar:after,
.btn-toolbar:before {
  content: " ";
  display: table;
}

.btn-toolbar:after {
  clear: both;
}

.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}

.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}

.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}

.btn-group > .btn:first-child {
  margin-left: 0;
}

.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.btn-group > .btn-group {
  float: left;
}

.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}

.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}

.btn-group > .btn + .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}

.btn-group-lg.btn-group > .btn + .dropdown-toggle,
.btn-group > .btn-lg + .dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px;
}

.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.btn .caret {
  margin-left: 0;
}

.btn-group-lg > .btn .caret,
.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}

.dropup .btn-group-lg > .btn .caret,
.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}

.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}

.btn-group-vertical > .btn-group:after,
.btn-group-vertical > .btn-group:before {
  content: " ";
  display: table;
}

.btn-group-vertical > .btn-group:after {
  clear: both;
}

.btn-group-vertical > .btn-group > .btn {
  float: none;
}

.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}

.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}

.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical
  > .btn-group:first-child:not(:last-child)
  > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical
  > .btn-group:last-child:not(:first-child)
  > .btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}

.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}

.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  float: none;
  display: table-cell;
  width: 1%;
}

.btn-group-justified > .btn-group .btn {
  width: 100%;
}

.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}

[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.dropdown,
.dropup {
  position: relative;
}

.dropdown-toggle:focus {
  outline: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 4000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}

.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}

.dropdown-menu .divider {
  height: 1px;
  margin: 9px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}

.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857;
  color: #333;
  white-space: nowrap;
}

.dropdown-menu > li > a:focus,
.dropdown-menu > li > a:hover {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}

.dropdown-menu > .active > a,
.dropdown-menu > .active > a:focus,
.dropdown-menu > .active > a:hover {
  color: #fff;
  text-decoration: none;
  outline: 0;
  background-color: #337ab7;
}

.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:focus,
.dropdown-menu > .disabled > a:hover {
  color: #777;
}

.dropdown-menu > .disabled > a:focus,
.dropdown-menu > .disabled > a:hover {
  text-decoration: none;
  background-color: transparent;
  background-image: none;
  cursor: not-allowed;
}

.open > .dropdown-menu {
  display: block;
}

.open > a {
  outline: 0;
}

.dropdown-menu-right {
  left: auto;
  right: 0;
}

.dropdown-menu-left {
  left: 0;
  right: auto;
}

.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857;
  color: #777;
  white-space: nowrap;
}

.dropdown-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 3990;
}

.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}

.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  border-top: 0;
  border-bottom: 4px solid;
  content: "";
}

.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}

@media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }

  .navbar-right .dropdown-menu-left {
    left: 0;
    right: auto;
  }
}

.close {
  float: right;
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
}

.close:focus,
.close:hover {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
}

button.close {
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  -webkit-appearance: none;
}

.modal-open {
  overflow: hidden;
}

.modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4050;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}

.modal.fade .modal-dialog {
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
  transform: translate(0, -25%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}

.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

.modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4040;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.in {
  opacity: 0.5;
}

.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
  min-height: 16.42857px;
}

.modal-header .close {
  margin-top: -2px;
}

.modal-title {
  margin: 0;
  line-height: 1.42857;
}

.modal-body {
  position: relative;
  padding: 15px;
}

.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}

.modal-footer:after,
.modal-footer:before {
  content: " ";
  display: table;
}

.modal-footer:after {
  clear: both;
}

.modal-footer .btn + .btn {
  margin-left: 5px;
  margin-bottom: 0;
}

.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}

.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }

  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .modal-sm {
    width: 300px;
  }
}

@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}

/*! ========================================================================
 * Bootstrap Toggle: bootstrap-toggle.css v2.2.0
 * http://www.bootstraptoggle.com
 * ========================================================================
 * Copyright 2014 Min Hur, The New York Times Company
 * Licensed under MIT
 * ======================================================================== */
.checkbox label .toggle,
.checkbox-inline .toggle {
  margin-left: -20px;
  margin-right: 5px;
}

.toggle,
.toggle * {
  box-sizing: border-box;
}

.toggle {
  position: relative;
  overflow: hidden;
}

.toggle input[type="checkbox"] {
  display: none;
}

.toggle-group {
  position: absolute;
  width: 200%;
  top: 0;
  bottom: 0;
  left: 0;
  transition: left 0.35s;
  -webkit-transition: left 0.35s;
  -moz-user-select: none;
  -webkit-user-select: none;
}

.toggle.off .toggle-group {
  left: -100%;
}

.toggle-on {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 50%;
  margin: 0;
  border: 0;
  border-radius: 0;
}

.toggle-off {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 0;
  margin: 0;
  border: 0;
  border-radius: 0;
}

.toggle-handle {
  position: relative;
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
  width: 0;
  border-width: 0 1px;
}

.toggle.btn {
  min-width: 59px;
  min-height: 34px;
}

.toggle-on.btn {
  padding-right: 24px;
}

.toggle-off.btn {
  padding-left: 24px;
}

.btn-group-lg > .toggle.btn,
.toggle.btn-lg {
  min-width: 79px;
  min-height: 45px;
}

.btn-group-lg > .toggle-on.btn,
.toggle-on.btn-lg {
  padding-right: 31px;
}

.btn-group-lg > .toggle-off.btn,
.toggle-off.btn-lg {
  padding-left: 31px;
}

.btn-group-lg > .toggle-handle.btn,
.toggle-handle.btn-lg {
  width: 40px;
}

.btn-group-sm > .toggle.btn,
.toggle.btn-sm {
  min-width: 50px;
  min-height: 30px;
}

.btn-group-sm > .toggle-on.btn,
.toggle-on.btn-sm {
  padding-right: 20px;
}

.btn-group-sm > .toggle-off.btn,
.toggle-off.btn-sm {
  padding-left: 20px;
}

.btn-group-xs > .toggle.btn,
.toggle.btn-xs {
  min-width: 35px;
  min-height: 22px;
}

.btn-group-xs > .toggle-on.btn,
.toggle-on.btn-xs {
  padding-right: 12px;
}

.btn-group-xs > .toggle-off.btn,
.toggle-off.btn-xs {
  padding-left: 12px;
}

a {
  text-decoration: none;
}

.solitr-header {
  position: relative;
  z-index: 1900;
  width: 100%;
  font-family: Segoe UI, Helvetica Neue, sans-serif;
  text-rendering: optimizeLegibility;
}

.solitr-tab-bar {
  overflow: hidden;
  height: 36px;
  font-size: 0;
}

.solitr-news {
  font-size: 10px;
  color: #aaa;
  width: 275px;
  display: inline-block;
  margin: 4px 0 0 20px;
}

.solitr-news-link {
  color: #aaf;
}

.solitr-small-links-container {
  font-size: 9px;
  color: #777;
  float: right;
  line-height: 34px;
  margin-right: 20px;
}

.solitr-small-link {
  color: inherit;
  text-decoration: underline;
}

.solitr-tab {
  vertical-align: top;
  margin: 5px 0 0 20px;
  display: inline-block;
  padding: 0 20px;
  height: 31px;
  border-radius: 5px 5px 0 0;
  z-index: 0;
  position: relative;
  border: 1px solid #ddd;
  border-bottom: none;
  background: #fff;
  font-size: 16px;
  text-decoration: none;
  color: #555;
  line-height: 28px;
}

.solitr-tab.active {
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.07);
  z-index: 2;
  position: relative;
}

.solitr-tab.active,
.solitr-tab:hover {
  text-decoration: none;
  color: #222;
}

.solitr-brand,
span.solitr-tab.active {
  cursor: default;
}

.solitr-brand {
  vertical-align: top;
  margin: 0 0 0 20px;
  color: #333;
  display: inline-block;
  height: 36px;
  font-size: 22px;
  line-height: 36px;
}

.mahjong-icon {
  font-family: MS PGothic, Segoe UI, Helvetica Neue, sans-serif;
}

@media (max-width: 800px) {
  .solitr-tab-bar-text {
    display: none;
  }

  .solitr-tab {
    padding: 0 15px;
  }
}

@media (max-width: 510px) {
  .solitr-brand {
    display: none;
  }
}

.solitaire-menu-bar,
.solitaire-menu-bar ul.dropdown-menu,
.solitaire-tab,
.solitaire-tab ul.dropdown-menu {
  background: #ececf9;
}

.solitaire-tab.active,
.solitaire-tab:hover {
  background: linear-gradient(to bottom, #e0e0f5, #ececf9 70%, #ececf9);
}

.spider-menu-bar,
.spider-menu-bar ul.dropdown-menu,
.spider-tab,
.spider-tab ul.dropdown-menu {
  background: #f9ecf6;
}

.spider-tab.active,
.spider-tab:hover {
  background: linear-gradient(to bottom, #f5e0f1, #f9ecf6 70%, #f9ecf6);
}

.mahjong-menu-bar,
.mahjong-menu-bar ul.dropdown-menu,
.mahjong-tab,
.mahjong-tab ul.dropdown-menu {
  background: #f1f9ec;
}

.mahjong-tab.active,
.mahjong-tab:hover {
  background: linear-gradient(to bottom, #e9f5e0, #f1f9ec 70%, #f1f9ec);
}

.sudoku-menu-bar,
.sudoku-menu-bar ul.dropdown-menu,
.sudoku-tab,
.sudoku-tab ul.dropdown-menu {
  background: #f9f1ec;
}

.sudoku-tab.active,
.sudoku-tab:hover {
  background: linear-gradient(to bottom, #f5e9e0, #f9f1ec 70%, #f9f1ec);
}

.solitr-menu-bar {
  width: 100%;
  height: 35px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.07);
  z-index: 1;
  position: relative;
  font-size: 0;
}

.solitr-menu-bar .btn.active {
  cursor: default;
}

.spider-menu-bar .dropdown-menu {
  width: 400px;
}

.spider-suit-button {
  font-size: 20px;
  line-height: 17px;
  width: 120px;
  padding-left: 0;
  padding-right: 0;
}

.spider-suit-annotation {
  width: 120px;
  display: inline-block;
  text-align: center;
}

.solitaire-red {
  color: #e00000;
}

.solitr-dropdown-button-item > .btn,
.solitr-dropdown-button-item > .btn-group {
  margin-left: 20px;
}

.solitaire-menu-bar-contents {
  width: 705px;
}

.spider-menu-bar-contents {
  width: 1000px;
}

.solitr-menu-item {
  display: inline-block;
  font-size: 16px;
  line-height: 35px;
  margin: 0 0;
  padding: 0 20px;
  cursor: pointer;
  color: #000;
  opacity: 0.95;
  transition: opacity 0.1s ease-out;
  will-change: opacity;
}

.solitr-dropdown-menu-wrapper.open .solitr-menu-item,
.solitr-menu-item:focus,
.solitr-menu-item:hover {
  outline: 0;
  text-decoration: none;
  color: #000;
  background: #f5f5f5;
  background: rgba(255, 255, 255, 0.4);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.3)
  );
}

.solitr-menu-item.disabled {
  opacity: 0.3;
  cursor: default;
}

.solitr-menu-item.disabled:hover {
  background: 0 0;
}

.solitr-menu-item-right {
  float: right;
}

.solitr-dropdown-menu-wrapper {
  display: inline-block;
  position: relative;
}

.turn-one-icon,
.turn-three-icon {
  position: relative;
  top: 3px;
  height: 16px;
  display: inline-block;
}

.turn-one-icon .blank-card-icon,
.turn-one-icon .blank-card-icon-1,
.turn-one-icon .blank-card-icon-2,
.turn-one-icon .blank-card-icon-3,
.turn-three-icon .blank-card-icon,
.turn-three-icon .blank-card-icon-1,
.turn-three-icon .blank-card-icon-2,
.turn-three-icon .blank-card-icon-3 {
  border: 1px solid #222;
  border-radius: 3px;
  position: absolute;
  width: 12px;
  height: 16px;
}

.turn-one-icon .blank-card-icon-1,
.turn-three-icon .blank-card-icon-1 {
  border-radius: 3px 0 0 3px;
  border-right: none;
}

.turn-one-icon .blank-card-icon-2,
.turn-three-icon .blank-card-icon-2 {
  left: 3px;
  border-radius: 3px 0 0 3px;
  border-right: none;
}

.turn-one-icon .blank-card-icon-3,
.turn-three-icon .blank-card-icon-3 {
  left: 6px;
}

.turn-one-icon {
  width: 12px;
}

.turn-three-icon {
  width: 18px;
}

.hint-icon,
.shuffle-icon,
.undo-icon {
  background-repeat: no-repeat;
  background-size: 100%;
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  top: 4px;
  opacity: 0.8;
}

.undo-icon {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%221792%22%20height%3D%221792%22%20viewBox%3D%220%200%201792%201792%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M1664%20896q0%20156-61%20298t-164%20245-245%20164-298%2061q-172%200-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9%2025-9%2016%202%2023%2012%2073%2095%20179%20147t225%2052q104%200%20198.5-40.5t163.5-109.5%20109.5-163.5%2040.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98%200-188%2035.5t-160%20101.5l137%20138q31%2030%2014%2069-17%2040-59%2040h-448q-26%200-45-19t-19-45v-448q0-42%2040-59%2039-17%2069%2014l130%20129q107-101%20244.5-156.5t284.5-55.5q156%200%20298%2061t245%20164%20164%20245%2061%20298z%22/%3E%3C/svg%3E);
}

.hint-icon {
  background-image: url(data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%20standalone%3D%22no%22%3F%3E%0A%3C%21DOCTYPE%20svg%20%20PUBLIC%20%27-//W3C//DTD%20SVG%201.1//EN%27%20%20%27http%3A//www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd%27%3E%0A%3Csvg%20style%3D%22enable-background%3Anew%200%200%2047%2047.001%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xml%3Aspace%3D%22preserve%22%20height%3D%2247.001px%22%20viewBox%3D%220%200%2047%2047.001%22%20width%3D%2247px%22%20version%3D%221.1%22%20y%3D%220px%22%20x%3D%220px%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%3E%0A%09%3Cpath%20d%3D%22m23.5%200c-8.44%200-15.287%206.556-15.287%2014.644%200%209.604%206.671%2012.051%206.671%2017.642%200%201.382%201.056%202.666%202.643%203.61-0.333%200.275-0.517%200.578-0.517%200.896%200%200.426%200.335%200.824%200.909%201.165-0.54%200.334-0.852%200.72-0.852%201.132%200%200.416%200.32%200.805%200.872%201.141-0.563%200.34-0.892%200.732-0.892%201.153%200%200.511%200.484%200.983%201.293%201.365-0.314%200.285-0.493%200.599-0.493%200.931%200%200.978%201.525%201.81%203.668%202.141%200.375%200.697%201.14%201.181%202.032%201.181%200.889%200%201.652-0.479%202.029-1.176%202.162-0.327%203.703-1.163%203.703-2.146%200-0.328-0.172-0.638-0.479-0.919%200.825-0.384%201.32-0.86%201.32-1.377%200-0.417-0.321-0.806-0.874-1.143%200.563-0.339%200.892-0.731%200.892-1.151%200-0.426-0.336-0.822-0.91-1.165%200.541-0.334%200.853-0.72%200.853-1.132%200-0.329-0.201-0.641-0.556-0.923%201.562-0.943%202.599-2.214%202.599-3.583%200-5.59%206.663-8.038%206.663-17.642%200.001-8.088-6.845-14.644-15.287-14.644zm7.983%2023.707c-1.525%202.236-3.248%204.763-3.354%208.238-0.521%200.585-2.389%201.533-4.625%201.533s-4.104-0.948-4.626-1.533c-0.106-3.478-1.831-6.002-3.357-8.24-1.701-2.493-3.308-4.848-3.308-9.061%200-5.869%205.063-10.644%2011.287-10.644%206.225%200%2011.287%204.775%2011.287%2010.644%200.001%204.214-1.605%206.569-3.304%209.063z%22/%3E%0A%3C/svg%3E%0A);
}

.shuffle-icon {
  background-image: url(data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3Csvg%20width%3D%221792%22%20height%3D%221792%22%20viewBox%3D%220%200%201792%201792%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M666%20481q-60%2092-137%20273-22-45-37-72.5t-40.5-63.5-51-56.5-63-35-81.5-14.5h-224q-14%200-23-9t-9-23v-192q0-14%209-23t23-9h224q250%200%20410%20225zm1126%20799q0%2014-9%2023l-320%20320q-9%209-23%209-13%200-22.5-9.5t-9.5-22.5v-192q-32%200-85%20.5t-81%201-73-1-71-5-64-10.5-63-18.5-58-28.5-59-40-55-53.5-56-69.5q59-93%20136-273%2022%2045%2037%2072.5t40.5%2063.5%2051%2056.5%2063%2035%2081.5%2014.5h256v-192q0-14%209-23t23-9q12%200%2024%2010l319%20319q9%209%209%2023zm0-896q0%2014-9%2023l-320%20320q-9%209-23%209-13%200-22.5-9.5t-9.5-22.5v-192h-256q-48%200-87%2015t-69%2045-51%2061.5-45%2077.5q-32%2062-78%20171-29%2066-49.5%20111t-54%20105-64%20100-74%2083-90%2068.5-106.5%2042-128%2016.5h-224q-14%200-23-9t-9-23v-192q0-14%209-23t23-9h224q48%200%2087-15t69-45%2051-61.5%2045-77.5q32-62%2078-171%2029-66%2049.5-111t54-105%2064-100%2074-83%2090-68.5%20106.5-42%20128-16.5h256v-192q0-14%209-23t23-9q12%200%2024%2010l319%20319q9%209%209%2023z%22/%3E%3C/svg%3E);
}

#game-score,
#game-timer {
  display: none;
}

#game-score.active,
#game-timer.active {
  display: block;
}

.solitr-status-item {
  font-size: 12px;
  cursor: default;
}

.solitr-status-item:hover {
  background: inherit;
}

html.mahjongPage,
html.mahjongPage body,
html.solitairePage,
html.solitairePage body {
  width: 100%;
  height: 100%;
}

.win-modal .modal-dialog {
  margin: 250px auto 30px;
}

.adsense-container {
  position: absolute;
  left: 850px;
  top: 0;
}

.noTransitions {
  transition: none !important;
}

body {
  height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

#solitaireCanvas {
  position: relative;
  top: 0;
  left: 0;
  min-height: 515px;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  cursor: default;
}

.card {
  position: absolute;
  -moz-transform-origin: 20px 0;
  -ms-transform-origin: 20px 0;
  -webkit-transform-origin: 20px 0;
  transform-origin: 20px 0;
}

.baseContainer {
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
}

.baseCardElement {
  position: absolute;
}

.baseCardElement,
.card {
  background-position: 0 0;
  background-size: 100% 100%;
  border: 1.5px solid #000;
  border-radius: 6px;
  box-sizing: border-box;
  background-origin: border-box;
  box-shadow: 0 1px rgba(0, 0, 0, 0.05);
}

.foundationBase,
.tableauPileBase,
.turnOverWasteImage {
  border: 1.5px solid #999;
  box-shadow: none;
}

.card {
  will-change: opacity;
}

.visualization {
  background-color: #080;
  opacity: 0.2;
  position: absolute;
  z-index: 1000000;
}

.overlayContainer {
  display: none;
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}

.dummy {
  visibility: none;
}

html.sudokuPage,
html.sudokuPage body {
  width: 100%;
}

#sudoku {
  width: 100%;
  position: relative;
  z-index: 0;
}

.sudokuGame {
  width: calc((100vw - 40px));
  max-width: calc(((100vh - 121px) * 0.9));
}

.sudokuGame:before {
  content: "";
  padding-top: 111.11111%;
  float: left;
}

.sudokuGame:after {
  content: "";
  display: table;
  clear: both;
}

@media (min-aspect-ratio: 1 / 1) and (max-width: 1024px) {
  .modernizr-touchevents .sudokuGame {
    max-width: calc(((100vh - 121px) * 0.9) - 27px);
  }
}

.sudokuContainer {
  padding-top: 25px;
  padding-bottom: 22px;
  display: -ms-grid;
  display: grid;
  width: 100%;
  -ms-grid-columns: 1fr max-content 1fr;
  -ms-grid-column-align: stretch;
  grid-template-columns: auto max-content auto;
  -ms-grid-rows: 1fr;
  grid-template-rows: auto;
}

.sudokuContainer .sudokuAdLeft {
  -ms-grid-column: 1;
}

.sudokuContainer .sudokuGame {
  -ms-grid-column: 2;
}

.sudokuContainer .sudokuAdRight {
  -ms-grid-column: 3;
}

.sudokuAdSpacer {
  max-width: 330px;
}

.sudokuAdLeft .sudokuAdSpacer {
  min-width: 20px;
  width: calc(100vw - ((100vh - 121px) * 0.9) - 330px);
}

.sudokuAdRight .sudokuAdSpacer {
  min-width: 20px;
  width: calc(100vw - ((100vh - 121px) * 0.9) - 20px);
}

.sudokuAd {
  overflow: hidden;
  position: relative;
}

.sudokuAd .adsenseContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

.sudokuAd.sudokuAdLeft .adsenseContainer {
  left: 0;
  right: 150px;
}

.sudokuAd.sudokuAdRight .adsenseContainer {
  left: 150px;
  right: 0;
}

.sudokuGame {
  position: relative;
}

.sudokuBoardContainer {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.sudokuBoardContainer:before {
  content: "";
  padding-top: 100%;
  float: left;
}

.sudokuBoardContainer:after {
  content: "";
  display: table;
  clear: both;
}

#sudokuBoard {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.sudokuInputBar .cell1 .unselectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjIsMTkuNDdRMjIsMjAsMjIsMjAuOTJ0MC4xNiwycTAuMDksMS4xMS4yLDIuMjh0MC4yMSwyLjEycTAuMTEsMSwuMTcsMS41OGMwLDAuNDIuMDcsMC42NCwwLjA3LDAuNjZhMC42NywwLjY3LDAsMCwxLS4yLjUsMSwxLDAsMCwxLS41NS4yNSwwLjc1LDAuNzUsMCwwLDEtLjUxLTAuMTksMC43LDAuNywwLDAsMS0uMjQtMC40OEE2Ljc4LDYuNzgsMCwwLDEsMjEuMjUsMjlxLTAuMDctLjY0LTAuMTYtMS42MXQtMC4yLTIuMTJxLTAuMTEtMS4xNS0uMi0yLjI1dC0wLjE2LTJxLTAuMDctLjk0LTAuMDctMS40NywwLS43Mi0wLjA1LTEuNzl0LTAuMTMtMi4yMnEtMC4wOC0xLjE1LS4yLTIuMjh0LTAuMjMtMS45M2wtMSwuNzJMMTgsMTIuNTksMTcuMzgsMTNsLTAuMjQuMTlhMC42MiwwLjYyLDAsMCwxLS40Ni4xOSwwLjY4LDAuNjgsMCwwLDEtLjU2LTAuMjcsMC42NSwwLjY1LDAsMCwxLS4xOS0wLjQ4LDAuNzMsMC43MywwLDAsMSwuMjEtMC41NGwwLjM1LS4yOCwwLjgyLS42MiwxLjExLS44UTE5LDEwLDE5LjY4LDkuNTZhMC43OCwwLjc4LDAsMCwxLC44MywwLDAuNzksMC43OSwwLDAsMSwuNDMuMTksMC43MiwwLjcyLDAsMCwxLC4yNC40LDIwLjA5LDIwLjA5LDAsMCwxLC4yOSwycTAuMTMsMS4yNS4yNCwyLjYxdDAuMTcsMi42NFEyMiwxOC42OSwyMiwxOS40N1oiLz48L3N2Zz4K);
}

.sudokuInputBar .cell1 .selectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjE5NmYzIi8+PHBhdGggZD0iTTIyLDE5LjQ3UTIyLDIwLDIyLDIwLjkydDAuMTYsMnEwLjA5LDEuMTEuMiwyLjI4dDAuMjEsMi4xMnEwLjExLDEsLjE3LDEuNThjMCwwLjQyLjA3LDAuNjQsMC4wNywwLjY2YTAuNjcsMC42NywwLDAsMS0uMi41LDEsMSwwLDAsMS0uNTUuMjUsMC43NSwwLjc1LDAsMCwxLS41MS0wLjE5LDAuNywwLjcsMCwwLDEtLjI0LTAuNDhBNi43OCw2Ljc4LDAsMCwxLDIxLjI1LDI5cS0wLjA3LS42NC0wLjE2LTEuNjF0LTAuMi0yLjEycS0wLjExLTEuMTUtLjItMi4yNXQtMC4xNi0ycS0wLjA3LS45NC0wLjA3LTEuNDcsMC0uNzItMC4wNS0xLjc5dC0wLjEzLTIuMjJxLTAuMDgtMS4xNS0uMi0yLjI4dC0wLjIzLTEuOTNsLTEsLjcyTDE4LDEyLjU5LDE3LjM4LDEzbC0wLjI0LjE5YTAuNjIsMC42MiwwLDAsMS0uNDYuMTksMC42OCwwLjY4LDAsMCwxLS41Ni0wLjI3LDAuNjUsMC42NSwwLDAsMS0uMTktMC40OCwwLjczLDAuNzMsMCwwLDEsLjIxLTAuNTRsMC4zNS0uMjgsMC44Mi0uNjIsMS4xMS0uOFExOSwxMCwxOS42OCw5LjU2YTAuNzgsMC43OCwwLDAsMSwuODMsMCwwLjc5LDAuNzksMCwwLDEsLjQzLjE5LDAuNzIsMC43MiwwLDAsMSwuMjQuNCwyMC4wOSwyMC4wOSwwLDAsMSwuMjksMnEwLjEzLDEuMjUuMjQsMi42MXQwLjE3LDIuNjRRMjIsMTguNjksMjIsMTkuNDdaIiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg==);
}

.sudokuInputBar .cell1 .disabledButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDZkNmQ2Ii8+PHBhdGggZD0iTTIyLDE5LjQ3UTIyLDIwLDIyLDIwLjkydDAuMTYsMnEwLjA5LDEuMTEuMiwyLjI4dDAuMjEsMi4xMnEwLjExLDEsLjE3LDEuNThjMCwwLjQyLjA3LDAuNjQsMC4wNywwLjY2YTAuNjcsMC42NywwLDAsMS0uMi41LDEsMSwwLDAsMS0uNTUuMjUsMC43NSwwLjc1LDAsMCwxLS41MS0wLjE5LDAuNywwLjcsMCwwLDEtLjI0LTAuNDhBNi43OCw2Ljc4LDAsMCwxLDIxLjI1LDI5cS0wLjA3LS42NC0wLjE2LTEuNjF0LTAuMi0yLjEycS0wLjExLTEuMTUtLjItMi4yNXQtMC4xNi0ycS0wLjA3LS45NC0wLjA3LTEuNDcsMC0uNzItMC4wNS0xLjc5dC0wLjEzLTIuMjJxLTAuMDgtMS4xNS0uMi0yLjI4dC0wLjIzLTEuOTNsLTEsLjcyTDE4LDEyLjU5LDE3LjM4LDEzbC0wLjI0LjE5YTAuNjIsMC42MiwwLDAsMS0uNDYuMTksMC42OCwwLjY4LDAsMCwxLS41Ni0wLjI3LDAuNjUsMC42NSwwLDAsMS0uMTktMC40OCwwLjczLDAuNzMsMCwwLDEsLjIxLTAuNTRsMC4zNS0uMjgsMC44Mi0uNjIsMS4xMS0uOFExOSwxMCwxOS42OCw5LjU2YTAuNzgsMC43OCwwLDAsMSwuODMsMCwwLjc5LDAuNzksMCwwLDEsLjQzLjE5LDAuNzIsMC43MiwwLDAsMSwuMjQuNCwyMC4wOSwyMC4wOSwwLDAsMSwuMjksMnEwLjEzLDEuMjUuMjQsMi42MXQwLjE3LDIuNjRRMjIsMTguNjksMjIsMTkuNDdaIiBmaWxsPSIjYTJhMmEyIi8+PC9zdmc+Cg==);
}

.sudokuInputBar .cell2 .unselectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjcuMzQsMjlhMC44LDAuOCwwLDAsMSwuNTkuOTEsMC42NiwwLjY2LDAsMCwxLS4yOS40MywxLDEsMCwwLDEtLjYyLjEzbC0xLjIzLS4xOXEtMC41OS0uMDgtMS40My0wLjE1VDIyLjUsMzBIMjIuMTJxLTEsMC0yLjA2LjA3dC0xLjg5LjE1bC0xLjQxLjE1LTAuNjIuMDdIMTUuNjFhMC43MSwwLjcxLDAsMCwxLS41NC0wLjIzLDAuNzQsMC43NCwwLDAsMS0uMjEtMC41MiwxMC45MSwxMC45MSwwLDAsMSwuNjMtMy44QTguMjEsOC4yMSwwLDAsMSwxNy4zOCwyM2ExMS40OSwxMS40OSwwLDAsMSwxLjcxLTEuNDFMMjEsMjAuMzhxMC44My0uNTEsMS42MS0xYTEwLjI5LDEwLjI5LDAsMCwwLDEuMzctMS4wOCw1LjMyLDUuMzIsMCwwLDAsMS0xLjE5LDIuNjcsMi42NywwLDAsMCwuMzYtMS4zNSwxMy40NiwxMy40NiwwLDAsMC0uMDgtMS41MSw0LjE0LDQuMTQsMCwwLDAtLjM3LTEuMzMsMy4yMiwzLjIyLDAsMCwwLS44OC0xLjEsNS41NCw1LjU0LDAsMCwwLTEuNjMtLjg2LDcuODcsNy44NywwLDAsMC0xLS4zMSw0LjA3LDQuMDcsMCwwLDAtLjg0LTAuMDksNC42NSw0LjY1LDAsMCwwLTEuMTguMTZxLTAuNjIuMTYtMS41NSwwLjQ2YTIuODMsMi44MywwLDAsMC0xLjEyLjY2LDUuMiw1LjIsMCwwLDAtLjc1LjksNi4zOCw2LjM4LDAsMCwwLS41OSwxLjE1LDAuODMsMC44MywwLDAsMS0uOTQuNTFBMC43MywwLjczLDAsMCwxLDEzLjg4LDE0YTAuOTIsMC45MiwwLDAsMS0uMDktMC42M0EzLjc5LDMuNzksMCwwLDEsMTQsMTIuODhhNS4zNyw1LjM3LDAsMCwxLC42LTEuMDksNyw3LDAsMCwxLDEuMDgtMS4yMSw0LjI3LDQuMjcsMCwwLDEsMS42My0uOVExOC4yMyw5LjQsMTksOS4yMkE2LjE5LDYuMTksMCwwLDEsMjAuNDEsOWE2LDYsMCwwLDEsMS4wOC4xMSwxMCwxMCwwLDAsMSwxLjMuMzUsNi4xNCw2LjE0LDAsMCwxLDIuMjksMS4zLDUuMDYsNS4wNiwwLDAsMSwxLjE4LDEuNjUsNS41Miw1LjUyLDAsMCwxLC40MywxLjczYzAsMC41OC4wNywxLjA5LDAuMDcsMS41NGE0LDQsMCwwLDEtLjQzLDEuODgsNi4yLDYuMiwwLDAsMS0xLjE0LDEuNTQsMTAuNjQsMTAuNjQsMCwwLDEtMS42MSwxLjMxbC0xLjgxLDEuMTlMMjAsMjIuODJhMTAuMzMsMTAuMzMsMCwwLDAtMS41OCwxLjI5QTYuMzgsNi4zOCwwLDAsMCwxNywyNi4xN2E4LjM0LDguMzQsMCwwLDAtLjU5LDIuNzNsMS0uMDksMS4zOS0uMTNxMC43OC0uMDcsMS42NS0wLjExdDEuNzUsMGgwLjM4YTI4LjI4LDI4LjI4LDAsMCwxLDMuNDguMjVaIi8+PC9zdmc+Cg==);
}

.sudokuInputBar .cell2 .selectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjE5NmYzIi8+PHBhdGggZD0iTTI3LjM0LDI5YTAuOCwwLjgsMCwwLDEsLjU5LjkxLDAuNjYsMC42NiwwLDAsMS0uMjkuNDMsMSwxLDAsMCwxLS42Mi4xM2wtMS4yMy0uMTlxLTAuNTktLjA4LTEuNDMtMC4xNVQyMi41LDMwSDIyLjEycS0xLDAtMi4wNi4wN3QtMS44OS4xNWwtMS40MS4xNS0wLjYyLjA3SDE1LjYxYTAuNzEsMC43MSwwLDAsMS0uNTQtMC4yMywwLjc0LDAuNzQsMCwwLDEtLjIxLTAuNTIsMTAuOTEsMTAuOTEsMCwwLDEsLjYzLTMuOEE4LjIxLDguMjEsMCwwLDEsMTcuMzgsMjNhMTEuNDksMTEuNDksMCwwLDEsMS43MS0xLjQxTDIxLDIwLjM4cTAuODMtLjUxLDEuNjEtMWExMC4yOSwxMC4yOSwwLDAsMCwxLjM3LTEuMDgsNS4zMiw1LjMyLDAsMCwwLDEtMS4xOSwyLjY3LDIuNjcsMCwwLDAsLjM2LTEuMzUsMTMuNDYsMTMuNDYsMCwwLDAtLjA4LTEuNTEsNC4xNCw0LjE0LDAsMCwwLS4zNy0xLjMzLDMuMjIsMy4yMiwwLDAsMC0uODgtMS4xLDUuNTQsNS41NCwwLDAsMC0xLjYzLS44Niw3Ljg3LDcuODcsMCwwLDAtMS0uMzEsNC4wNyw0LjA3LDAsMCwwLS44NC0wLjA5LDQuNjUsNC42NSwwLDAsMC0xLjE4LjE2cS0wLjYyLjE2LTEuNTUsMC40NmEyLjgzLDIuODMsMCwwLDAtMS4xMi42Niw1LjIsNS4yLDAsMCwwLS43NS45LDYuMzgsNi4zOCwwLDAsMC0uNTksMS4xNSwwLjgzLDAuODMsMCwwLDEtLjk0LjUxQTAuNzMsMC43MywwLDAsMSwxMy44OCwxNGEwLjkyLDAuOTIsMCwwLDEtLjA5LTAuNjNBMy43OSwzLjc5LDAsMCwxLDE0LDEyLjg4YTUuMzcsNS4zNywwLDAsMSwuNi0xLjA5LDcsNywwLDAsMSwxLjA4LTEuMjEsNC4yNyw0LjI3LDAsMCwxLDEuNjMtLjlRMTguMjMsOS40LDE5LDkuMjJBNi4xOSw2LjE5LDAsMCwxLDIwLjQxLDlhNiw2LDAsMCwxLDEuMDguMTEsMTAsMTAsMCwwLDEsMS4zLjM1LDYuMTQsNi4xNCwwLDAsMSwyLjI5LDEuMyw1LjA2LDUuMDYsMCwwLDEsMS4xOCwxLjY1LDUuNTIsNS41MiwwLDAsMSwuNDMsMS43M2MwLDAuNTguMDcsMS4wOSwwLjA3LDEuNTRhNCw0LDAsMCwxLS40MywxLjg4LDYuMiw2LjIsMCwwLDEtMS4xNCwxLjU0LDEwLjY0LDEwLjY0LDAsMCwxLTEuNjEsMS4zMWwtMS44MSwxLjE5TDIwLDIyLjgyYTEwLjMzLDEwLjMzLDAsMCwwLTEuNTgsMS4yOUE2LjM4LDYuMzgsMCwwLDAsMTcsMjYuMTdhOC4zNCw4LjM0LDAsMCwwLS41OSwyLjczbDEtLjA5LDEuMzktLjEzcTAuNzgtLjA3LDEuNjUtMC4xMXQxLjc1LDBoMC4zOGEyOC4yOCwyOC4yOCwwLDAsMSwzLjQ4LjI1WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell2 .disabledButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDZkNmQ2Ii8+PHBhdGggZD0iTTI3LjM0LDI5YTAuOCwwLjgsMCwwLDEsLjU5LjkxLDAuNjYsMC42NiwwLDAsMS0uMjkuNDMsMSwxLDAsMCwxLS42Mi4xM2wtMS4yMy0uMTlxLTAuNTktLjA4LTEuNDMtMC4xNVQyMi41LDMwSDIyLjEycS0xLDAtMi4wNi4wN3QtMS44OS4xNWwtMS40MS4xNS0wLjYyLjA3SDE1LjYxYTAuNzEsMC43MSwwLDAsMS0uNTQtMC4yMywwLjc0LDAuNzQsMCwwLDEtLjIxLTAuNTIsMTAuOTEsMTAuOTEsMCwwLDEsLjYzLTMuOEE4LjIxLDguMjEsMCwwLDEsMTcuMzgsMjNhMTEuNDksMTEuNDksMCwwLDEsMS43MS0xLjQxTDIxLDIwLjM4cTAuODMtLjUxLDEuNjEtMWExMC4yOSwxMC4yOSwwLDAsMCwxLjM3LTEuMDgsNS4zMiw1LjMyLDAsMCwwLDEtMS4xOSwyLjY3LDIuNjcsMCwwLDAsLjM2LTEuMzUsMTMuNDYsMTMuNDYsMCwwLDAtLjA4LTEuNTEsNC4xNCw0LjE0LDAsMCwwLS4zNy0xLjMzLDMuMjIsMy4yMiwwLDAsMC0uODgtMS4xLDUuNTQsNS41NCwwLDAsMC0xLjYzLS44Niw3Ljg3LDcuODcsMCwwLDAtMS0uMzEsNC4wNyw0LjA3LDAsMCwwLS44NC0wLjA5LDQuNjUsNC42NSwwLDAsMC0xLjE4LjE2cS0wLjYyLjE2LTEuNTUsMC40NmEyLjgzLDIuODMsMCwwLDAtMS4xMi42Niw1LjIsNS4yLDAsMCwwLS43NS45LDYuMzgsNi4zOCwwLDAsMC0uNTksMS4xNSwwLjgzLDAuODMsMCwwLDEtLjk0LjUxQTAuNzMsMC43MywwLDAsMSwxMy44OCwxNGEwLjkyLDAuOTIsMCwwLDEtLjA5LTAuNjNBMy43OSwzLjc5LDAsMCwxLDE0LDEyLjg4YTUuMzcsNS4zNywwLDAsMSwuNi0xLjA5LDcsNywwLDAsMSwxLjA4LTEuMjEsNC4yNyw0LjI3LDAsMCwxLDEuNjMtLjlRMTguMjMsOS40LDE5LDkuMjJBNi4xOSw2LjE5LDAsMCwxLDIwLjQxLDlhNiw2LDAsMCwxLDEuMDguMTEsMTAsMTAsMCwwLDEsMS4zLjM1LDYuMTQsNi4xNCwwLDAsMSwyLjI5LDEuMyw1LjA2LDUuMDYsMCwwLDEsMS4xOCwxLjY1LDUuNTIsNS41MiwwLDAsMSwuNDMsMS43M2MwLDAuNTguMDcsMS4wOSwwLjA3LDEuNTRhNCw0LDAsMCwxLS40MywxLjg4LDYuMiw2LjIsMCwwLDEtMS4xNCwxLjU0LDEwLjY0LDEwLjY0LDAsMCwxLTEuNjEsMS4zMWwtMS44MSwxLjE5TDIwLDIyLjgyYTEwLjMzLDEwLjMzLDAsMCwwLTEuNTgsMS4yOUE2LjM4LDYuMzgsMCwwLDAsMTcsMjYuMTdhOC4zNCw4LjM0LDAsMCwwLS41OSwyLjczbDEtLjA5LDEuMzktLjEzcTAuNzgtLjA3LDEuNjUtMC4xMXQxLjc1LDBoMC4zOGEyOC4yOCwyOC4yOCwwLDAsMSwzLjQ4LjI1WiIgZmlsbD0iI2EyYTJhMiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell3 .unselectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEuMzQsMTYuNjNhNy4zNSw3LjM1LDAsMCwxLDEuNTcuNDIsOC4zOSw4LjM5LDAsMCwxLDEuMy42NCw4LjI4LDguMjgsMCwwLDEsMS4wNi43Niw3Ljg1LDcuODUsMCwwLDEsLjgyLjgsNy42LDcuNiwwLDAsMSwxLjU0LDIuNDQsNi4zLDYuMywwLDAsMSwuNDcsMi4xMnYwLjMybC0wLjA1LjRxLTAuMDguNy0uMjEsMS40OWE0LjM3LDQuMzcsMCwwLDEtLjU5LDEuNTRBNS4xMiw1LjEyLDAsMCwxLDI1LjkxLDI5YTcuMjMsNy4yMywwLDAsMS0yLjQsMS4wOSwxMi4wNywxMi4wNywwLDAsMS0xLjQxLjMxLDgsOCwwLDAsMS0xLjE3LjA5LDcuMzUsNy4zNSwwLDAsMS0xLjY1LS4xOXEtMC44Mi0uMTktMS45NC0wLjQ4YTQuNjQsNC42NCwwLDAsMS0xLjc4LS44Niw2LjU2LDYuNTYsMCwwLDEtMS4xOS0xLjIxLDUuNDYsNS40NiwwLDAsMS0uNjctMS4xNCw1LjIxLDUuMjEsMCwwLDEtLjI0LTAuNjYsMC42NCwwLjY0LDAsMCwxLC4xNi0wLjQzLDEuMjcsMS4yNywwLDAsMSwuNTktMC4zMiwwLjc4LDAuNzgsMCwwLDEsLjQ0LjEzLDAuNywwLjcsMCwwLDEsLjI4LjM4LDQuNDEsNC40MSwwLDAsMCwuNjQsMS4xMyw1LjI5LDUuMjksMCwwLDAsLjkuOSwzLjYyLDMuNjIsMCwwLDAsMS4zMy42NnExLDAuMywxLjc0LjQ0YTYuNjgsNi42OCwwLDAsMCwxLjM5LjE1LDguNTYsOC41NiwwLDAsMCwyLjE3LS4zNSw2LDYsMCwwLDAsMS44MS0uNzgsMy40MSwzLjQxLDAsMCwwLDEtMSwzLjI5LDMuMjksMCwwLDAsLjQ0LTEuMThxMC4xMS0uNjMuMTktMS4yN2wwLjA1LS41NmE0Ljc4LDQuNzgsMCwwLDAtLjM3LTEuNTgsNi4xNiw2LjE2LDAsMCwwLTEuMjYtMiw3LjgsNy44LDAsMCwwLS44Mi0wLjgsNS41OCw1LjU4LDAsMCwwLTEuMS0uNzIsNi44Niw2Ljg2LDAsMCwwLTEuNDEtLjUyQTcsNywwLDAsMCwxOS45LDE4bC0wLjEzLDAtMC4yOS0uMTMtMC4yMS0uMTlhMC4yMywwLjIzLDAsMCwwLDAtLjA3bC0wLjA3LS4yYTAuMDksMC4wOSwwLDAsMSwwLS4wN3MwLS4xLDAtMC4yM2EwLjIyLDAuMjIsMCwwLDEsMC0uMDcsMi4xNywyLjE3LDAsMCwxLC4xMi0wLjIzbDAuODctMS4xNXEwLjUtLjY0LDEuMDYtMS4zNHQxLjI5LTEuNTlxMC42NC0uODIsMS4xMy0xLjQ5bC0xLjMtLjA5cS0wLjc0LDAtMS42MiwwLTEsMC0yLjE0LjA4bC0yLC4xNnEtMC45Mi4wOC0xLjUzLDAuMTZsLTAuNjYuMDhhMC43LDAuNywwLDAsMS0uNS0wLjE5LDAuOTEsMC45MSwwLDAsMS0uMjUtMC41NiwwLjY4LDAuNjgsMCwwLDEsLjE3LTAuNDgsMC44MiwwLjgyLDAsMCwxLC40Ny0wLjI0TDE0LjkzLDEwbDEuNTMtLjE3cTAuOTItLjA5LDItMC4xN3QyLjIyLS4wOHExLjMxLDAsMi4zMi4wOHQxLjYyLDAuMTZhMC42NSwwLjY1LDAsMCwxLC40My0wLjEzLDEuMSwxLjEsMCwwLDEsLjM4LjA4bDAuMTIsMC4xMWEwLjYxLDAuNjEsMCwwLDEsLjEyLjEzLDAuOCwwLjgsMCwwLDEsLjQ2LjgzLDAuNzQsMC43NCwwLDAsMS0uODMuNTlxLTAuNDguNzItMS4yNywxLjc0dC0xLjY1LDIuMDZMMjEuODUsMTZaIi8+PC9zdmc+Cg==);
}

.sudokuInputBar .cell3 .selectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjE5NmYzIi8+PHBhdGggZD0iTTIxLjM0LDE2LjYzYTcuMzUsNy4zNSwwLDAsMSwxLjU3LjQyLDguMzksOC4zOSwwLDAsMSwxLjMuNjQsOC4yOCw4LjI4LDAsMCwxLDEuMDYuNzYsNy44NSw3Ljg1LDAsMCwxLC44Mi44LDcuNiw3LjYsMCwwLDEsMS41NCwyLjQ0LDYuMyw2LjMsMCwwLDEsLjQ3LDIuMTJ2MC4zMmwtMC4wNS40cS0wLjA4LjctLjIxLDEuNDlhNC4zNyw0LjM3LDAsMCwxLS41OSwxLjU0QTUuMTIsNS4xMiwwLDAsMSwyNS45MSwyOWE3LjIzLDcuMjMsMCwwLDEtMi40LDEuMDksMTIuMDcsMTIuMDcsMCwwLDEtMS40MS4zMSw4LDgsMCwwLDEtMS4xNy4wOSw3LjM1LDcuMzUsMCwwLDEtMS42NS0uMTlxLTAuODItLjE5LTEuOTQtMC40OGE0LjY0LDQuNjQsMCwwLDEtMS43OC0uODYsNi41Niw2LjU2LDAsMCwxLTEuMTktMS4yMSw1LjQ2LDUuNDYsMCwwLDEtLjY3LTEuMTQsNS4yMSw1LjIxLDAsMCwxLS4yNC0wLjY2LDAuNjQsMC42NCwwLDAsMSwuMTYtMC40MywxLjI3LDEuMjcsMCwwLDEsLjU5LTAuMzIsMC43OCwwLjc4LDAsMCwxLC40NC4xMywwLjcsMC43LDAsMCwxLC4yOC4zOCw0LjQxLDQuNDEsMCwwLDAsLjY0LDEuMTMsNS4yOSw1LjI5LDAsMCwwLC45LjksMy42MiwzLjYyLDAsMCwwLDEuMzMuNjZxMSwwLjMsMS43NC40NGE2LjY4LDYuNjgsMCwwLDAsMS4zOS4xNSw4LjU2LDguNTYsMCwwLDAsMi4xNy0uMzUsNiw2LDAsMCwwLDEuODEtLjc4LDMuNDEsMy40MSwwLDAsMCwxLTEsMy4yOSwzLjI5LDAsMCwwLC40NC0xLjE4cTAuMTEtLjYzLjE5LTEuMjdsMC4wNS0uNTZhNC43OCw0Ljc4LDAsMCwwLS4zNy0xLjU4LDYuMTYsNi4xNiwwLDAsMC0xLjI2LTIsNy44LDcuOCwwLDAsMC0uODItMC44LDUuNTgsNS41OCwwLDAsMC0xLjEtLjcyLDYuODYsNi44NiwwLDAsMC0xLjQxLS41MkE3LDcsMCwwLDAsMTkuOSwxOGwtMC4xMywwLTAuMjktLjEzLTAuMjEtLjE5YTAuMjMsMC4yMywwLDAsMCwwLS4wN2wtMC4wNy0uMmEwLjA5LDAuMDksMCwwLDEsMC0uMDdzMC0uMSwwLTAuMjNhMC4yMiwwLjIyLDAsMCwxLDAtLjA3LDIuMTcsMi4xNywwLDAsMSwuMTItMC4yM2wwLjg3LTEuMTVxMC41LS42NCwxLjA2LTEuMzR0MS4yOS0xLjU5cTAuNjQtLjgyLDEuMTMtMS40OWwtMS4zLS4wOXEtMC43NCwwLTEuNjIsMC0xLDAtMi4xNC4wOGwtMiwuMTZxLTAuOTIuMDgtMS41MywwLjE2bC0wLjY2LjA4YTAuNywwLjcsMCwwLDEtLjUtMC4xOSwwLjkxLDAuOTEsMCwwLDEtLjI1LTAuNTYsMC42OCwwLjY4LDAsMCwxLC4xNy0wLjQ4LDAuODIsMC44MiwwLDAsMSwuNDctMC4yNEwxNC45MywxMGwxLjUzLS4xN3EwLjkyLS4wOSwyLTAuMTd0Mi4yMi0uMDhxMS4zMSwwLDIuMzIuMDh0MS42MiwwLjE2YTAuNjUsMC42NSwwLDAsMSwuNDMtMC4xMywxLjEsMS4xLDAsMCwxLC4zOC4wOGwwLjEyLDAuMTFhMC42MSwwLjYxLDAsMCwxLC4xMi4xMywwLjgsMC44LDAsMCwxLC40Ni44MywwLjc0LDAuNzQsMCwwLDEtLjgzLjU5cS0wLjQ4LjcyLTEuMjcsMS43NHQtMS42NSwyLjA2TDIxLjg1LDE2WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell3 .disabledButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDZkNmQ2Ii8+PHBhdGggZD0iTTIxLjM0LDE2LjYzYTcuMzUsNy4zNSwwLDAsMSwxLjU3LjQyLDguMzksOC4zOSwwLDAsMSwxLjMuNjQsOC4yOCw4LjI4LDAsMCwxLDEuMDYuNzYsNy44NSw3Ljg1LDAsMCwxLC44Mi44LDcuNiw3LjYsMCwwLDEsMS41NCwyLjQ0LDYuMyw2LjMsMCwwLDEsLjQ3LDIuMTJ2MC4zMmwtMC4wNS40cS0wLjA4LjctLjIxLDEuNDlhNC4zNyw0LjM3LDAsMCwxLS41OSwxLjU0QTUuMTIsNS4xMiwwLDAsMSwyNS45MSwyOWE3LjIzLDcuMjMsMCwwLDEtMi40LDEuMDksMTIuMDcsMTIuMDcsMCwwLDEtMS40MS4zMSw4LDgsMCwwLDEtMS4xNy4wOSw3LjM1LDcuMzUsMCwwLDEtMS42NS0uMTlxLTAuODItLjE5LTEuOTQtMC40OGE0LjY0LDQuNjQsMCwwLDEtMS43OC0uODYsNi41Niw2LjU2LDAsMCwxLTEuMTktMS4yMSw1LjQ2LDUuNDYsMCwwLDEtLjY3LTEuMTQsNS4yMSw1LjIxLDAsMCwxLS4yNC0wLjY2LDAuNjQsMC42NCwwLDAsMSwuMTYtMC40MywxLjI3LDEuMjcsMCwwLDEsLjU5LTAuMzIsMC43OCwwLjc4LDAsMCwxLC40NC4xMywwLjcsMC43LDAsMCwxLC4yOC4zOCw0LjQxLDQuNDEsMCwwLDAsLjY0LDEuMTMsNS4yOSw1LjI5LDAsMCwwLC45LjksMy42MiwzLjYyLDAsMCwwLDEuMzMuNjZxMSwwLjMsMS43NC40NGE2LjY4LDYuNjgsMCwwLDAsMS4zOS4xNSw4LjU2LDguNTYsMCwwLDAsMi4xNy0uMzUsNiw2LDAsMCwwLDEuODEtLjc4LDMuNDEsMy40MSwwLDAsMCwxLTEsMy4yOSwzLjI5LDAsMCwwLC40NC0xLjE4cTAuMTEtLjYzLjE5LTEuMjdsMC4wNS0uNTZhNC43OCw0Ljc4LDAsMCwwLS4zNy0xLjU4LDYuMTYsNi4xNiwwLDAsMC0xLjI2LTIsNy44LDcuOCwwLDAsMC0uODItMC44LDUuNTgsNS41OCwwLDAsMC0xLjEtLjcyLDYuODYsNi44NiwwLDAsMC0xLjQxLS41MkE3LDcsMCwwLDAsMTkuOSwxOGwtMC4xMywwLTAuMjktLjEzLTAuMjEtLjE5YTAuMjMsMC4yMywwLDAsMCwwLS4wN2wtMC4wNy0uMmEwLjA5LDAuMDksMCwwLDEsMC0uMDdzMC0uMSwwLTAuMjNhMC4yMiwwLjIyLDAsMCwxLDAtLjA3LDIuMTcsMi4xNywwLDAsMSwuMTItMC4yM2wwLjg3LTEuMTVxMC41LS42NCwxLjA2LTEuMzR0MS4yOS0xLjU5cTAuNjQtLjgyLDEuMTMtMS40OWwtMS4zLS4wOXEtMC43NCwwLTEuNjIsMC0xLDAtMi4xNC4wOGwtMiwuMTZxLTAuOTIuMDgtMS41MywwLjE2bC0wLjY2LjA4YTAuNywwLjcsMCwwLDEtLjUtMC4xOSwwLjkxLDAuOTEsMCwwLDEtLjI1LTAuNTYsMC42OCwwLjY4LDAsMCwxLC4xNy0wLjQ4LDAuODIsMC44MiwwLDAsMSwuNDctMC4yNEwxNC45MywxMGwxLjUzLS4xN3EwLjkyLS4wOSwyLTAuMTd0Mi4yMi0uMDhxMS4zMSwwLDIuMzIuMDh0MS42MiwwLjE2YTAuNjUsMC42NSwwLDAsMSwuNDMtMC4xMywxLjEsMS4xLDAsMCwxLC4zOC4wOGwwLjEyLDAuMTFhMC42MSwwLjYxLDAsMCwxLC4xMi4xMywwLjgsMC44LDAsMCwxLC40Ni44MywwLjc0LDAuNzQsMCwwLDEtLjgzLjU5cS0wLjQ4LjcyLTEuMjcsMS43NHQtMS42NSwyLjA2TDIxLjg1LDE2WiIgZmlsbD0iI2EyYTJhMiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell4 .unselectedButtonState {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M26.65%2C21a0.75%2C0.75%2C0%2C0%2C1-.29%2C1.47l-0.27-.05c-0.16%2C0-.39-0.07-0.7-0.11q0.08%2C1.15.2%2C2.42T25.82%2C27q0.11%2C1.06.19%2C1.78c0.05%2C0.48.08%2C0.74%2C0.08%2C0.78a0.7%2C0.7%2C0%2C0%2C1-.19.5%2C0.92%2C0.92%2C0%2C0%2C1-.56.25%2C0.7%2C0.7%2C0%2C0%2C1-.5-0.19%2C0.72%2C0.72%2C0%2C0%2C1-.23-0.48q0-.08-0.08-0.84T24.33%2C27q-0.12-1.1-.24-2.38l-0.23-2.44-1-.05-1.1%2C0q-1%2C0-2.14.08l-2%2C.17-1.54.17-0.7.08a0.73%2C0.73%2C0%2C0%2C1-.75-0.75q0-.83-0.07-2.09T14.4%2C17.15q-0.11-1.33-.24-2.53t-0.27-1.93a0.77%2C0.77%2C0%2C0%2C1%2C.75-0.75%2C0.69%2C0.69%2C0%2C0%2C1%2C.47.17%2C0.77%2C0.77%2C0%2C0%2C1%2C.25.44q0.13%2C0.64.25%2C1.71t0.21%2C2.26q0.09%2C1.19.17%2C2.37T16.12%2C21l1.1-.13%2C1.41-.15q0.76-.07%2C1.58-0.11t1.59%2C0q1.1%2C0%2C2%2C.08%2C0-.37%2C0-0.67V19.47q0-.83-0.07-2.09T23.49%2C14.8q-0.11-1.33-.24-2.53T23%2C10.33a0.71%2C0.71%2C0%2C0%2C1%2C.19-0.48%2C0.88%2C0.88%2C0%2C0%2C1%2C.56-0.27%2C0.73%2C0.73%2C0%2C0%2C1%2C.47.16%2C0.71%2C0.71%2C0%2C0%2C1%2C.25.43q0.16%2C0.75.29%2C2T25%2C14.78q0.11%2C1.37.17%2C2.64t0.07%2C2c0%2C0.14%2C0%2C.33%2C0%2C0.55s0%2C0.47%2C0%2C.74l1%2C0.15Z%22/%3E%3C/svg%3E%0A);
}

.sudokuInputBar .cell4 .selectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjE5NmYzIi8+PHBhdGggZD0iTTI2LjY1LDIxYTAuNzUsMC43NSwwLDAsMS0uMjksMS40N2wtMC4yNy0uMDVjLTAuMTYsMC0uMzktMC4wNy0wLjctMC4xMXEwLjA4LDEuMTUuMiwyLjQyVDI1LjgyLDI3cTAuMTEsMS4wNi4xOSwxLjc4YzAuMDUsMC40OC4wOCwwLjc0LDAuMDgsMC43OGEwLjcsMC43LDAsMCwxLS4xOS41LDAuOTIsMC45MiwwLDAsMS0uNTYuMjUsMC43LDAuNywwLDAsMS0uNS0wLjE5LDAuNzIsMC43MiwwLDAsMS0uMjMtMC40OHEwLS4wOC0wLjA4LTAuODRUMjQuMzMsMjdxLTAuMTItMS4xLS4yNC0yLjM4bC0wLjIzLTIuNDQtMS0uMDUtMS4xLDBxLTEsMC0yLjE0LjA4bC0yLC4xNy0xLjU0LjE3LTAuNy4wOGEwLjczLDAuNzMsMCwwLDEtLjc1LTAuNzVxMC0uODMtMC4wNy0yLjA5VDE0LjQsMTcuMTVxLTAuMTEtMS4zMy0uMjQtMi41M3QtMC4yNy0xLjkzYTAuNzcsMC43NywwLDAsMSwuNzUtMC43NSwwLjY5LDAuNjksMCwwLDEsLjQ3LjE3LDAuNzcsMC43NywwLDAsMSwuMjUuNDRxMC4xMywwLjY0LjI1LDEuNzF0MC4yMSwyLjI2cTAuMDksMS4xOS4xNywyLjM3VDE2LjEyLDIxbDEuMS0uMTMsMS40MS0uMTVxMC43Ni0uMDcsMS41OC0wLjExdDEuNTksMHExLjEsMCwyLC4wOCwwLS4zNywwLTAuNjdWMTkuNDdxMC0uODMtMC4wNy0yLjA5VDIzLjQ5LDE0LjhxLTAuMTEtMS4zMy0uMjQtMi41M1QyMywxMC4zM2EwLjcxLDAuNzEsMCwwLDEsLjE5LTAuNDgsMC44OCwwLjg4LDAsMCwxLC41Ni0wLjI3LDAuNzMsMC43MywwLDAsMSwuNDcuMTYsMC43MSwwLjcxLDAsMCwxLC4yNS40M3EwLjE2LDAuNzUuMjksMlQyNSwxNC43OHEwLjExLDEuMzcuMTcsMi42NHQwLjA3LDJjMCwwLjE0LDAsLjMzLDAsMC41NXMwLDAuNDcsMCwuNzRsMSwwLjE1WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell4 .disabledButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDZkNmQ2Ii8+PHBhdGggZD0iTTI2LjY1LDIxYTAuNzUsMC43NSwwLDAsMS0uMjksMS40N2wtMC4yNy0uMDVjLTAuMTYsMC0uMzktMC4wNy0wLjctMC4xMXEwLjA4LDEuMTUuMiwyLjQyVDI1LjgyLDI3cTAuMTEsMS4wNi4xOSwxLjc4YzAuMDUsMC40OC4wOCwwLjc0LDAuMDgsMC43OGEwLjcsMC43LDAsMCwxLS4xOS41LDAuOTIsMC45MiwwLDAsMS0uNTYuMjUsMC43LDAuNywwLDAsMS0uNS0wLjE5LDAuNzIsMC43MiwwLDAsMS0uMjMtMC40OHEwLS4wOC0wLjA4LTAuODRUMjQuMzMsMjdxLTAuMTItMS4xLS4yNC0yLjM4bC0wLjIzLTIuNDQtMS0uMDUtMS4xLDBxLTEsMC0yLjE0LjA4bC0yLC4xNy0xLjU0LjE3LTAuNy4wOGEwLjczLDAuNzMsMCwwLDEtLjc1LTAuNzVxMC0uODMtMC4wNy0yLjA5VDE0LjQsMTcuMTVxLTAuMTEtMS4zMy0uMjQtMi41M3QtMC4yNy0xLjkzYTAuNzcsMC43NywwLDAsMSwuNzUtMC43NSwwLjY5LDAuNjksMCwwLDEsLjQ3LjE3LDAuNzcsMC43NywwLDAsMSwuMjUuNDRxMC4xMywwLjY0LjI1LDEuNzF0MC4yMSwyLjI2cTAuMDksMS4xOS4xNywyLjM3VDE2LjEyLDIxbDEuMS0uMTMsMS40MS0uMTVxMC43Ni0uMDcsMS41OC0wLjExdDEuNTksMHExLjEsMCwyLC4wOCwwLS4zNywwLTAuNjdWMTkuNDdxMC0uODMtMC4wNy0yLjA5VDIzLjQ5LDE0LjhxLTAuMTEtMS4zMy0uMjQtMi41M1QyMywxMC4zM2EwLjcxLDAuNzEsMCwwLDEsLjE5LTAuNDgsMC44OCwwLjg4LDAsMCwxLC41Ni0wLjI3LDAuNzMsMC43MywwLDAsMSwuNDcuMTYsMC43MSwwLjcxLDAsMCwxLC4yNS40M3EwLjE2LDAuNzUuMjksMlQyNSwxNC43OHEwLjExLDEuMzcuMTcsMi42NHQwLjA3LDJjMCwwLjE0LDAsLjMzLDAsMC41NXMwLDAuNDcsMCwuNzRsMSwwLjE1WiIgZmlsbD0iI2EyYTJhMiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell5 .unselectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuODYsMTdhNS41LDUuNSwwLDAsMSwyLDEsNyw3LDAsMCwxLDEuNDYsMS42Miw3LjcxLDcuNzEsMCwwLDEsLjksMS45LDYuMjcsNi4yNywwLDAsMSwuMzEsMS44NXYwLjI0YTAuODUsMC44NSwwLDAsMSwwLC4yMWwwLDAuNHEtMC4wOC43LS4yMSwxLjQ5YTQuNTMsNC41MywwLDAsMS0uNTgsMS41NCw1LDUsMCwwLDEtMS4zLDEuNDEsNy4xLDcuMSwwLDAsMS0yLjMzLDEuMDgsMTEuMzksMTEuMzksMCwwLDEtMS4zNS4zMSw3LjQyLDcuNDIsMCwwLDEtMS4xNC4wOUE2LjcyLDYuNzIsMCwwLDEsMjAsMzBsLTEuOS0uNDhhNC40MSw0LjQxLDAsMCwxLTEuNzMtLjg2LDYuNDIsNi40MiwwLDAsMS0xLjgxLTIuMzYsNC44OSw0Ljg5LDAsMCwxLS4yNC0wLjY0LDAuNjYsMC42NiwwLDAsMSwuMTctMC40NCwxLjEyLDEuMTIsMCwwLDEsLjU4LTAuMzEsMC43OCwwLjc4LDAsMCwxLC40NC4xMywwLjcsMC43LDAsMCwxLC4yOC4zOEwxNiwyNS43NGEzLjMzLDMuMzMsMCwwLDAsLjQ3Ljc5LDUuNzIsNS43MiwwLDAsMCwuODYuODgsMy4zNywzLjM3LDAsMCwwLDEuMjcuNjZxMSwwLjMsMS43LjQ0YTYuMjUsNi4yNSwwLDAsMCwxLjMzLjE1LDcuOTEsNy45MSwwLDAsMCwyLjA5LS4zNSw1LjY1LDUuNjUsMCwwLDAsMS43NS0uNzgsMy4zMywzLjMzLDAsMCwwLDEtMSwzLjQ1LDMuNDUsMCwwLDAsLjQzLTEuMThxMC4xMS0uNjMuMTktMS4yN2wwLjA1LS40VjIzLjQxYTUsNSwwLDAsMC0uMjEtMS4zMyw2LDYsMCwwLDAtLjY2LTEuNDksNS44LDUuOCwwLDAsMC0xLjEzLTEuMzMsMy44NywzLjg3LDAsMCwwLTEuNTktLjg0LDguMTksOC4xOSwwLDAsMC0xLjMzLS4yNywxMS45LDExLjksMCwwLDAtMS4zOC0uMDgsMTMuMzMsMTMuMzMsMCwwLDAtMi42Ny4yNSwxMS41NywxMS41NywwLDAsMC0yLC41NSwwLjUsMC41LDAsMCwxLS4yNy4wNUgxNS43MmwtMC4yOSwwYTAuNjksMC42OSwwLDAsMS0uNTEtMC4yMSwwLjgsMC44LDAsMCwxLS4yNC0wLjUxcS0wLjA1LS44LTAuMTItMS43MXQtMC4xNS0xLjhxLTAuMDgtLjg4LTAuMTctMS42N1QxNCwxMS43YTEsMSwwLDAsMSwuMDctMC4zNkEyLjMzLDIuMzMsMCwwLDEsMTQuMywxMWEwLjY5LDAuNjksMCwwLDEsLjE3LTAuNDcsMC43OSwwLjc5LDAsMCwxLC40Ny0wLjI1bDAuNjMtLjA4TDE3LDEwcTAuODgtLjA5LDItMC4xN3QyLjEzLS4wOGEyMy40NiwyMy40NiwwLDAsMSwzLjM0LjE5bDEuMywwLjE5YTAuNjUsMC42NSwwLDAsMSwuNDMuMjksMSwxLDAsMCwxLC4xMy42MiwwLjc1LDAuNzUsMCwwLDEtLjg4LjU2bC0xLjE5LS4xN2EyMi4xNywyMi4xNywwLDAsMC0zLjEyLS4xN3EtMC44LDAtMS42NS4wNWwtMS42MS4xMi0xLjM4LjEzLTEsLjEycTAuMDgsMC40OC4xNywxLjEzdDAuMTYsMS4zOXEwLjA3LDAuNzUuMTMsMS41NXQwLjEyLDEuNThhMTQsMTQsMCwwLDEsMi4wNi0uNTEsMTQuNjksMTQuNjksMCwwLDEsMi41Ny0uMjEsMTMsMTMsMCwwLDEsMS41NS4wOUExMC42LDEwLjYsMCwwLDEsMjMuODYsMTdaIi8+PC9zdmc+Cg==);
}

.sudokuInputBar .cell5 .selectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjE5NmYzIi8+PHBhdGggZD0iTTIzLjg2LDE3YTUuNSw1LjUsMCwwLDEsMiwxLDcsNywwLDAsMSwxLjQ2LDEuNjIsNy43MSw3LjcxLDAsMCwxLC45LDEuOSw2LjI3LDYuMjcsMCwwLDEsLjMxLDEuODV2MC4yNGEwLjg1LDAuODUsMCwwLDEsMCwuMjFsMCwwLjRxLTAuMDguNy0uMjEsMS40OWE0LjUzLDQuNTMsMCwwLDEtLjU4LDEuNTQsNSw1LDAsMCwxLTEuMywxLjQxLDcuMSw3LjEsMCwwLDEtMi4zMywxLjA4LDExLjM5LDExLjM5LDAsMCwxLTEuMzUuMzEsNy40Miw3LjQyLDAsMCwxLTEuMTQuMDlBNi43Miw2LjcyLDAsMCwxLDIwLDMwbC0xLjktLjQ4YTQuNDEsNC40MSwwLDAsMS0xLjczLS44Niw2LjQyLDYuNDIsMCwwLDEtMS44MS0yLjM2LDQuODksNC44OSwwLDAsMS0uMjQtMC42NCwwLjY2LDAuNjYsMCwwLDEsLjE3LTAuNDQsMS4xMiwxLjEyLDAsMCwxLC41OC0wLjMxLDAuNzgsMC43OCwwLDAsMSwuNDQuMTMsMC43LDAuNywwLDAsMSwuMjguMzhMMTYsMjUuNzRhMy4zMywzLjMzLDAsMCwwLC40Ny43OSw1LjcyLDUuNzIsMCwwLDAsLjg2Ljg4LDMuMzcsMy4zNywwLDAsMCwxLjI3LjY2cTEsMC4zLDEuNy40NGE2LjI1LDYuMjUsMCwwLDAsMS4zMy4xNSw3LjkxLDcuOTEsMCwwLDAsMi4wOS0uMzUsNS42NSw1LjY1LDAsMCwwLDEuNzUtLjc4LDMuMzMsMy4zMywwLDAsMCwxLTEsMy40NSwzLjQ1LDAsMCwwLC40My0xLjE4cTAuMTEtLjYzLjE5LTEuMjdsMC4wNS0uNFYyMy40MWE1LDUsMCwwLDAtLjIxLTEuMzMsNiw2LDAsMCwwLS42Ni0xLjQ5LDUuOCw1LjgsMCwwLDAtMS4xMy0xLjMzLDMuODcsMy44NywwLDAsMC0xLjU5LS44NCw4LjE5LDguMTksMCwwLDAtMS4zMy0uMjcsMTEuOSwxMS45LDAsMCwwLTEuMzgtLjA4LDEzLjMzLDEzLjMzLDAsMCwwLTIuNjcuMjUsMTEuNTcsMTEuNTcsMCwwLDAtMiwuNTUsMC41LDAuNSwwLDAsMS0uMjcuMDVIMTUuNzJsLTAuMjksMGEwLjY5LDAuNjksMCwwLDEtLjUxLTAuMjEsMC44LDAuOCwwLDAsMS0uMjQtMC41MXEtMC4wNS0uOC0wLjEyLTEuNzF0LTAuMTUtMS44cS0wLjA4LS44OC0wLjE3LTEuNjdUMTQsMTEuN2ExLDEsMCwwLDEsLjA3LTAuMzZBMi4zMywyLjMzLDAsMCwxLDE0LjMsMTFhMC42OSwwLjY5LDAsMCwxLC4xNy0wLjQ3LDAuNzksMC43OSwwLDAsMSwuNDctMC4yNWwwLjYzLS4wOEwxNywxMHEwLjg4LS4wOSwyLTAuMTd0Mi4xMy0uMDhhMjMuNDYsMjMuNDYsMCwwLDEsMy4zNC4xOWwxLjMsMC4xOWEwLjY1LDAuNjUsMCwwLDEsLjQzLjI5LDEsMSwwLDAsMSwuMTMuNjIsMC43NSwwLjc1LDAsMCwxLS44OC41NmwtMS4xOS0uMTdhMjIuMTcsMjIuMTcsMCwwLDAtMy4xMi0uMTdxLTAuOCwwLTEuNjUuMDVsLTEuNjEuMTItMS4zOC4xMy0xLC4xMnEwLjA4LDAuNDguMTcsMS4xM3QwLjE2LDEuMzlxMC4wNywwLjc1LjEzLDEuNTV0MC4xMiwxLjU4YTE0LDE0LDAsMCwxLDIuMDYtLjUxLDE0LjY5LDE0LjY5LDAsMCwxLDIuNTctLjIxLDEzLDEzLDAsMCwxLDEuNTUuMDlBMTAuNiwxMC42LDAsMCwxLDIzLjg2LDE3WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell5 .disabledButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDZkNmQ2Ii8+PHBhdGggZD0iTTIzLjg2LDE3YTUuNSw1LjUsMCwwLDEsMiwxLDcsNywwLDAsMSwxLjQ2LDEuNjIsNy43MSw3LjcxLDAsMCwxLC45LDEuOSw2LjI3LDYuMjcsMCwwLDEsLjMxLDEuODV2MC4yNGEwLjg1LDAuODUsMCwwLDEsMCwuMjFsMCwwLjRxLTAuMDguNy0uMjEsMS40OWE0LjUzLDQuNTMsMCwwLDEtLjU4LDEuNTQsNSw1LDAsMCwxLTEuMywxLjQxLDcuMSw3LjEsMCwwLDEtMi4zMywxLjA4LDExLjM5LDExLjM5LDAsMCwxLTEuMzUuMzEsNy40Miw3LjQyLDAsMCwxLTEuMTQuMDlBNi43Miw2LjcyLDAsMCwxLDIwLDMwbC0xLjktLjQ4YTQuNDEsNC40MSwwLDAsMS0xLjczLS44Niw2LjQyLDYuNDIsMCwwLDEtMS44MS0yLjM2LDQuODksNC44OSwwLDAsMS0uMjQtMC42NCwwLjY2LDAuNjYsMCwwLDEsLjE3LTAuNDQsMS4xMiwxLjEyLDAsMCwxLC41OC0wLjMxLDAuNzgsMC43OCwwLDAsMSwuNDQuMTMsMC43LDAuNywwLDAsMSwuMjguMzhMMTYsMjUuNzRhMy4zMywzLjMzLDAsMCwwLC40Ny43OSw1LjcyLDUuNzIsMCwwLDAsLjg2Ljg4LDMuMzcsMy4zNywwLDAsMCwxLjI3LjY2cTEsMC4zLDEuNy40NGE2LjI1LDYuMjUsMCwwLDAsMS4zMy4xNSw3LjkxLDcuOTEsMCwwLDAsMi4wOS0uMzUsNS42NSw1LjY1LDAsMCwwLDEuNzUtLjc4LDMuMzMsMy4zMywwLDAsMCwxLTEsMy40NSwzLjQ1LDAsMCwwLC40My0xLjE4cTAuMTEtLjYzLjE5LTEuMjdsMC4wNS0uNFYyMy40MWE1LDUsMCwwLDAtLjIxLTEuMzMsNiw2LDAsMCwwLS42Ni0xLjQ5LDUuOCw1LjgsMCwwLDAtMS4xMy0xLjMzLDMuODcsMy44NywwLDAsMC0xLjU5LS44NCw4LjE5LDguMTksMCwwLDAtMS4zMy0uMjcsMTEuOSwxMS45LDAsMCwwLTEuMzgtLjA4LDEzLjMzLDEzLjMzLDAsMCwwLTIuNjcuMjUsMTEuNTcsMTEuNTcsMCwwLDAtMiwuNTUsMC41LDAuNSwwLDAsMS0uMjcuMDVIMTUuNzJsLTAuMjksMGEwLjY5LDAuNjksMCwwLDEtLjUxLTAuMjEsMC44LDAuOCwwLDAsMS0uMjQtMC41MXEtMC4wNS0uOC0wLjEyLTEuNzF0LTAuMTUtMS44cS0wLjA4LS44OC0wLjE3LTEuNjdUMTQsMTEuN2ExLDEsMCwwLDEsLjA3LTAuMzZBMi4zMywyLjMzLDAsMCwxLDE0LjMsMTFhMC42OSwwLjY5LDAsMCwxLC4xNy0wLjQ3LDAuNzksMC43OSwwLDAsMSwuNDctMC4yNWwwLjYzLS4wOEwxNywxMHEwLjg4LS4wOSwyLTAuMTd0Mi4xMy0uMDhhMjMuNDYsMjMuNDYsMCwwLDEsMy4zNC4xOWwxLjMsMC4xOWEwLjY1LDAuNjUsMCwwLDEsLjQzLjI5LDEsMSwwLDAsMSwuMTMuNjIsMC43NSwwLjc1LDAsMCwxLS44OC41NmwtMS4xOS0uMTdhMjIuMTcsMjIuMTcsMCwwLDAtMy4xMi0uMTdxLTAuOCwwLTEuNjUuMDVsLTEuNjEuMTItMS4zOC4xMy0xLC4xMnEwLjA4LDAuNDguMTcsMS4xM3QwLjE2LDEuMzlxMC4wNywwLjc1LjEzLDEuNTV0MC4xMiwxLjU4YTE0LDE0LDAsMCwxLDIuMDYtLjUxLDE0LjY5LDE0LjY5LDAsMCwxLDIuNTctLjIxLDEzLDEzLDAsMCwxLDEuNTUuMDlBMTAuNiwxMC42LDAsMCwxLDIzLjg2LDE3WiIgZmlsbD0iI2EyYTJhMiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell6 .unselectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjUuOSwxN2E2LjI3LDYuMjcsMCwwLDEsMS43NCwxLDYsNiwwLDAsMSwxLjIzLDEuNDMsNi40LDYuNCwwLDAsMSwuNzIsMS43QTcuMDgsNy4wOCwwLDAsMSwyOS44NCwyM2E3LjU2LDcuNTYsMCwwLDEtLjI3LDIsNi44NSw2Ljg1LDAsMCwxLS44MiwxLjg1LDcuMiw3LjIsMCwwLDEtMS4zNCwxLjU3LDYuNDUsNi40NSwwLDAsMS0xLjg0LDEuMTNBNy44LDcuOCwwLDAsMSwyNCwzMGE5LjE3LDkuMTcsMCwwLDEtMS42Mi4xNSw4LjQ0LDguNDQsMCwwLDEtMy4yMy0uNjMsNi45Myw2LjkzLDAsMCwxLTIuNjctMS45NEE4LjU1LDguNTUsMCwwLDEsMTUuMzUsMjYsMTAuODQsMTAuODQsMCwwLDEsMTQuNTksMjQsMTMuMDcsMTMuMDcsMCwwLDEsMTQuMTYsMjJhMTYuNjUsMTYuNjUsMCwwLDEtLjEzLTIuMSwxNC43OSwxNC43OSwwLDAsMSwuMjQtMi43MywxMiwxMiwwLDAsMSwuNjQtMi4zNiw3LjY3LDcuNjcsMCwwLDEsMS4xMS0yLDYuNTgsNi41OCwwLDAsMSwxLjY1LTEuNDksNy41Niw3LjU2LDAsMCwxLDIuMjUtLjk0LDExLDExLDAsMCwxLDEuMTgtLjIsMTAuNDgsMTAuNDgsMCwwLDEsMS4xOC0uMDcsNy40OSw3LjQ5LDAsMCwxLDMsLjYzLDUuMzUsNS4zNSwwLDAsMSwyLjM3LDIuMSwwLjYzLDAuNjMsMCwwLDEtLjEyLjlBMC44NywwLjg3LDAsMCwxLDI3LDE0YTAuNzIsMC43MiwwLDAsMS0uNjItMC4zNUEzLjkzLDMuOTMsMCwwLDAsMjQuNiwxMmE2LDYsMCwwLDAtMi4zNC0uNDcsNyw3LDAsMCwwLTIuNzEuNTQsNS41OSw1LjU5LDAsMCwwLTIuOTEsMi40OCw2Ljk0LDYuOTQsMCwwLDAtLjcxLDEuNzgsMTIuMDgsMTIuMDgsMCwwLDAtLjMyLDJxMCwwLjMyLDAsLjY3dDAsMC43MlYyMC4yYTYuMSw2LjEsMCwwLDEsMS4yNS0xLjYyLDcuMTgsNy4xOCwwLDAsMSwxLjcxLTEuMTgsOS4wOCw5LjA4LDAsMCwxLDItLjcxLDkuNzQsOS43NCwwLDAsMSwyLjE0LS4yNCw5LjIxLDkuMjEsMCwwLDEsMS42Ni4xNUE4LjM5LDguMzksMCwwLDEsMjUuOSwxN1pNMjUuMzYsMjhhNiw2LDAsMCwwLDIuMjItMS45NCw0Ljc1LDQuNzUsMCwwLDAsLjgtMi43Miw1LjA4LDUuMDgsMCwwLDAsMC0uNjRjMC0uMjEtMC4wNi0wLjQzLTAuMDktMC42NEE1LjgsNS44LDAsMCwwLDI3LDE5LjU4YTQuNTgsNC41OCwwLDAsMC0yLjM4LTEuNDIsOC4xOSw4LjE5LDAsMCwwLTEuODgtLjIxLDkuMjksOS4yOSwwLDAsMC0yLjEzLjI1LDYuNTUsNi41NSwwLDAsMC0yLC44LDUuMTMsNS4xMywwLDAsMC0xLjQ3LDEuMzcsMy43LDMuNywwLDAsMC0uNjcsMS45NCwwLjcsMC43LDAsMCwxLS4yMS40NywwLjkxLDAuOTEsMCwwLDEtLjQuMjMsOS42MSw5LjYxLDAsMCwwLC43MiwyLjE3LDUuNDQsNS40NCwwLDAsMCwxLjI5LDEuNzRBNyw3LDAsMCwwLDIwLDI4LjI2YTYuNjMsNi42MywwLDAsMCwyLjQ5LjQ4QTYsNiwwLDAsMCwyNCwyOC41Nyw1LjkzLDUuOTMsMCwwLDAsMjUuMzYsMjhaIi8+PC9zdmc+Cg==);
}

.sudokuInputBar .cell6 .selectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjE5NmYzIi8+PHBhdGggZD0iTTI1LjksMTdhNi4yNyw2LjI3LDAsMCwxLDEuNzQsMSw2LDYsMCwwLDEsMS4yMywxLjQzLDYuNCw2LjQsMCwwLDEsLjcyLDEuN0E3LjA4LDcuMDgsMCwwLDEsMjkuODQsMjNhNy41Niw3LjU2LDAsMCwxLS4yNywyLDYuODUsNi44NSwwLDAsMS0uODIsMS44NSw3LjIsNy4yLDAsMCwxLTEuMzQsMS41Nyw2LjQ1LDYuNDUsMCwwLDEtMS44NCwxLjEzQTcuOCw3LjgsMCwwLDEsMjQsMzBhOS4xNyw5LjE3LDAsMCwxLTEuNjIuMTUsOC40NCw4LjQ0LDAsMCwxLTMuMjMtLjYzLDYuOTMsNi45MywwLDAsMS0yLjY3LTEuOTRBOC41NSw4LjU1LDAsMCwxLDE1LjM1LDI2LDEwLjg0LDEwLjg0LDAsMCwxLDE0LjU5LDI0LDEzLjA3LDEzLjA3LDAsMCwxLDE0LjE2LDIyYTE2LjY1LDE2LjY1LDAsMCwxLS4xMy0yLjEsMTQuNzksMTQuNzksMCwwLDEsLjI0LTIuNzMsMTIsMTIsMCwwLDEsLjY0LTIuMzYsNy42Nyw3LjY3LDAsMCwxLDEuMTEtMiw2LjU4LDYuNTgsMCwwLDEsMS42NS0xLjQ5LDcuNTYsNy41NiwwLDAsMSwyLjI1LS45NCwxMSwxMSwwLDAsMSwxLjE4LS4yLDEwLjQ4LDEwLjQ4LDAsMCwxLDEuMTgtLjA3LDcuNDksNy40OSwwLDAsMSwzLC42Myw1LjM1LDUuMzUsMCwwLDEsMi4zNywyLjEsMC42MywwLjYzLDAsMCwxLS4xMi45QTAuODcsMC44NywwLDAsMSwyNywxNGEwLjcyLDAuNzIsMCwwLDEtLjYyLTAuMzVBMy45MywzLjkzLDAsMCwwLDI0LjYsMTJhNiw2LDAsMCwwLTIuMzQtLjQ3LDcsNywwLDAsMC0yLjcxLjU0LDUuNTksNS41OSwwLDAsMC0yLjkxLDIuNDgsNi45NCw2Ljk0LDAsMCwwLS43MSwxLjc4LDEyLjA4LDEyLjA4LDAsMCwwLS4zMiwycTAsMC4zMiwwLC42N3QwLDAuNzJWMjAuMmE2LjEsNi4xLDAsMCwxLDEuMjUtMS42Miw3LjE4LDcuMTgsMCwwLDEsMS43MS0xLjE4LDkuMDgsOS4wOCwwLDAsMSwyLS43MSw5Ljc0LDkuNzQsMCwwLDEsMi4xNC0uMjQsOS4yMSw5LjIxLDAsMCwxLDEuNjYuMTVBOC4zOSw4LjM5LDAsMCwxLDI1LjksMTdaTTI1LjM2LDI4YTYsNiwwLDAsMCwyLjIyLTEuOTQsNC43NSw0Ljc1LDAsMCwwLC44LTIuNzIsNS4wOCw1LjA4LDAsMCwwLDAtLjY0YzAtLjIxLTAuMDYtMC40My0wLjA5LTAuNjRBNS44LDUuOCwwLDAsMCwyNywxOS41OGE0LjU4LDQuNTgsMCwwLDAtMi4zOC0xLjQyLDguMTksOC4xOSwwLDAsMC0xLjg4LS4yMSw5LjI5LDkuMjksMCwwLDAtMi4xMy4yNSw2LjU1LDYuNTUsMCwwLDAtMiwuOCw1LjEzLDUuMTMsMCwwLDAtMS40NywxLjM3LDMuNywzLjcsMCwwLDAtLjY3LDEuOTQsMC43LDAuNywwLDAsMS0uMjEuNDcsMC45MSwwLjkxLDAsMCwxLS40LjIzLDkuNjEsOS42MSwwLDAsMCwuNzIsMi4xNyw1LjQ0LDUuNDQsMCwwLDAsMS4yOSwxLjc0QTcsNywwLDAsMCwyMCwyOC4yNmE2LjYzLDYuNjMsMCwwLDAsMi40OS40OEE2LDYsMCwwLDAsMjQsMjguNTcsNS45Myw1LjkzLDAsMCwwLDI1LjM2LDI4WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell6 .disabledButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDZkNmQ2Ii8+PHBhdGggZD0iTTI1LjksMTdhNi4yNyw2LjI3LDAsMCwxLDEuNzQsMSw2LDYsMCwwLDEsMS4yMywxLjQzLDYuNCw2LjQsMCwwLDEsLjcyLDEuN0E3LjA4LDcuMDgsMCwwLDEsMjkuODQsMjNhNy41Niw3LjU2LDAsMCwxLS4yNywyLDYuODUsNi44NSwwLDAsMS0uODIsMS44NSw3LjIsNy4yLDAsMCwxLTEuMzQsMS41Nyw2LjQ1LDYuNDUsMCwwLDEtMS44NCwxLjEzQTcuOCw3LjgsMCwwLDEsMjQsMzBhOS4xNyw5LjE3LDAsMCwxLTEuNjIuMTUsOC40NCw4LjQ0LDAsMCwxLTMuMjMtLjYzLDYuOTMsNi45MywwLDAsMS0yLjY3LTEuOTRBOC41NSw4LjU1LDAsMCwxLDE1LjM1LDI2LDEwLjg0LDEwLjg0LDAsMCwxLDE0LjU5LDI0LDEzLjA3LDEzLjA3LDAsMCwxLDE0LjE2LDIyYTE2LjY1LDE2LjY1LDAsMCwxLS4xMy0yLjEsMTQuNzksMTQuNzksMCwwLDEsLjI0LTIuNzMsMTIsMTIsMCwwLDEsLjY0LTIuMzYsNy42Nyw3LjY3LDAsMCwxLDEuMTEtMiw2LjU4LDYuNTgsMCwwLDEsMS42NS0xLjQ5LDcuNTYsNy41NiwwLDAsMSwyLjI1LS45NCwxMSwxMSwwLDAsMSwxLjE4LS4yLDEwLjQ4LDEwLjQ4LDAsMCwxLDEuMTgtLjA3LDcuNDksNy40OSwwLDAsMSwzLC42Myw1LjM1LDUuMzUsMCwwLDEsMi4zNywyLjEsMC42MywwLjYzLDAsMCwxLS4xMi45QTAuODcsMC44NywwLDAsMSwyNywxNGEwLjcyLDAuNzIsMCwwLDEtLjYyLTAuMzVBMy45MywzLjkzLDAsMCwwLDI0LjYsMTJhNiw2LDAsMCwwLTIuMzQtLjQ3LDcsNywwLDAsMC0yLjcxLjU0LDUuNTksNS41OSwwLDAsMC0yLjkxLDIuNDgsNi45NCw2Ljk0LDAsMCwwLS43MSwxLjc4LDEyLjA4LDEyLjA4LDAsMCwwLS4zMiwycTAsMC4zMiwwLC42N3QwLDAuNzJWMjAuMmE2LjEsNi4xLDAsMCwxLDEuMjUtMS42Miw3LjE4LDcuMTgsMCwwLDEsMS43MS0xLjE4LDkuMDgsOS4wOCwwLDAsMSwyLS43MSw5Ljc0LDkuNzQsMCwwLDEsMi4xNC0uMjQsOS4yMSw5LjIxLDAsMCwxLDEuNjYuMTVBOC4zOSw4LjM5LDAsMCwxLDI1LjksMTdaTTI1LjM2LDI4YTYsNiwwLDAsMCwyLjIyLTEuOTQsNC43NSw0Ljc1LDAsMCwwLC44LTIuNzIsNS4wOCw1LjA4LDAsMCwwLDAtLjY0YzAtLjIxLTAuMDYtMC40My0wLjA5LTAuNjRBNS44LDUuOCwwLDAsMCwyNywxOS41OGE0LjU4LDQuNTgsMCwwLDAtMi4zOC0xLjQyLDguMTksOC4xOSwwLDAsMC0xLjg4LS4yMSw5LjI5LDkuMjksMCwwLDAtMi4xMy4yNSw2LjU1LDYuNTUsMCwwLDAtMiwuOCw1LjEzLDUuMTMsMCwwLDAtMS40NywxLjM3LDMuNywzLjcsMCwwLDAtLjY3LDEuOTQsMC43LDAuNywwLDAsMS0uMjEuNDcsMC45MSwwLjkxLDAsMCwxLS40LjIzLDkuNjEsOS42MSwwLDAsMCwuNzIsMi4xNyw1LjQ0LDUuNDQsMCwwLDAsMS4yOSwxLjc0QTcsNywwLDAsMCwyMCwyOC4yNmE2LjYzLDYuNjMsMCwwLDAsMi40OS40OEE2LDYsMCwwLDAsMjQsMjguNTcsNS45Myw1LjkzLDAsMCwwLDI1LjM2LDI4WiIgZmlsbD0iI2EyYTJhMiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell7 .unselectedButtonState {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M25.45%2C10.09a0.86%2C0.86%2C0%2C0%2C1%2C.59%2C1q-0.13.78-.46%2C2T24.86%2C15.6q-0.4%2C1.3-.8%2C2.49T23.39%2C20q-0.19.48-.47%2C1.38t-0.6%2C2q-0.32%2C1.07-.63%2C2.18t-0.58%2C2q-0.27.91-.43%2C1.5t-0.16.62a0.66%2C0.66%2C0%2C0%2C1-.28.4%2C1%2C1%2C0%2C0%2C1-.63.13%2C0.8%2C0.8%2C0%2C0%2C1-.4-0.31%2C1%2C1%2C0%2C0%2C1-.13-0.63l0.2-.7L19.7%2C27q0.25-.92.58-2l0.63-2.17q0.31-1.06.59-2T22%2C19.47q0.27-.7.62-1.74t0.68-2.17q0.34-1.12.64-2.22t0.5-1.88q-0.56-.08-1.54-0.16t-2.26-.08q-1%2C0-2.14.08l-2%2C.16q-0.93.08-1.54%2C0.16l-0.67.08a0.71%2C0.71%2C0%2C0%2C1-.48-0.19A0.88%2C0.88%2C0%2C0%2C1%2C13.5%2C11a0.69%2C0.69%2C0%2C0%2C1%2C.17-0.47%2C0.79%2C0.79%2C0%2C0%2C1%2C.47-0.25l0.67-.08L16.35%2C10q0.92-.09%2C2-0.17t2.22-.08a25.39%2C25.39%2C0%2C0%2C1%2C3.47.19Z%22/%3E%3C/svg%3E%0A);
}

.sudokuInputBar .cell7 .selectedButtonState {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%232196f3%22/%3E%3Cpath%20d%3D%22M25.45%2C10.09a0.86%2C0.86%2C0%2C0%2C1%2C.59%2C1q-0.13.78-.46%2C2T24.86%2C15.6q-0.4%2C1.3-.8%2C2.49T23.39%2C20q-0.19.48-.47%2C1.38t-0.6%2C2q-0.32%2C1.07-.63%2C2.18t-0.58%2C2q-0.27.91-.43%2C1.5t-0.16.62a0.66%2C0.66%2C0%2C0%2C1-.28.4%2C1%2C1%2C0%2C0%2C1-.63.13%2C0.8%2C0.8%2C0%2C0%2C1-.4-0.31%2C1%2C1%2C0%2C0%2C1-.13-0.63l0.2-.7L19.7%2C27q0.25-.92.58-2l0.63-2.17q0.31-1.06.59-2T22%2C19.47q0.27-.7.62-1.74t0.68-2.17q0.34-1.12.64-2.22t0.5-1.88q-0.56-.08-1.54-0.16t-2.26-.08q-1%2C0-2.14.08l-2%2C.16q-0.93.08-1.54%2C0.16l-0.67.08a0.71%2C0.71%2C0%2C0%2C1-.48-0.19A0.88%2C0.88%2C0%2C0%2C1%2C13.5%2C11a0.69%2C0.69%2C0%2C0%2C1%2C.17-0.47%2C0.79%2C0.79%2C0%2C0%2C1%2C.47-0.25l0.67-.08L16.35%2C10q0.92-.09%2C2-0.17t2.22-.08a25.39%2C25.39%2C0%2C0%2C1%2C3.47.19Z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E%0A);
}

.sudokuInputBar .cell7 .disabledButtonState {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23d6d6d6%22/%3E%3Cpath%20d%3D%22M25.45%2C10.09a0.86%2C0.86%2C0%2C0%2C1%2C.59%2C1q-0.13.78-.46%2C2T24.86%2C15.6q-0.4%2C1.3-.8%2C2.49T23.39%2C20q-0.19.48-.47%2C1.38t-0.6%2C2q-0.32%2C1.07-.63%2C2.18t-0.58%2C2q-0.27.91-.43%2C1.5t-0.16.62a0.66%2C0.66%2C0%2C0%2C1-.28.4%2C1%2C1%2C0%2C0%2C1-.63.13%2C0.8%2C0.8%2C0%2C0%2C1-.4-0.31%2C1%2C1%2C0%2C0%2C1-.13-0.63l0.2-.7L19.7%2C27q0.25-.92.58-2l0.63-2.17q0.31-1.06.59-2T22%2C19.47q0.27-.7.62-1.74t0.68-2.17q0.34-1.12.64-2.22t0.5-1.88q-0.56-.08-1.54-0.16t-2.26-.08q-1%2C0-2.14.08l-2%2C.16q-0.93.08-1.54%2C0.16l-0.67.08a0.71%2C0.71%2C0%2C0%2C1-.48-0.19A0.88%2C0.88%2C0%2C0%2C1%2C13.5%2C11a0.69%2C0.69%2C0%2C0%2C1%2C.17-0.47%2C0.79%2C0.79%2C0%2C0%2C1%2C.47-0.25l0.67-.08L16.35%2C10q0.92-.09%2C2-0.17t2.22-.08a25.39%2C25.39%2C0%2C0%2C1%2C3.47.19Z%22%20fill%3D%22%23a2a2a2%22/%3E%3C/svg%3E%0A);
}

.sudokuInputBar .cell8 .unselectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjUuNDcsMTguODNhNi4xNiw2LjE2LDAsMCwxLDEuNjcsMSw3LDcsMCwwLDEsMS4yNSwxLjM0LDYsNiwwLDAsMSwuNzgsMS41LDQuNDUsNC40NSwwLDAsMSwuMjcsMS40NXYwLjMycTAsMC42Mi0uMDksMS4zMWEzLjU2LDMuNTYsMCwwLDEtLjQ2LDEuMzksNC41MSw0LjUxLDAsMCwxLTEuMTksMS4zMyw3LjUzLDcuNTMsMCwwLDEtMi4yOCwxLjExLDEzLjY0LDEzLjY0LDAsMCwxLTEuNjIuNDMsNy42Miw3LjYyLDAsMCwxLTEuNDEuMTNBOC44NCw4Ljg0LDAsMCwxLDIxLDMwbC0xLjYzLS4yNGE1LjIxLDUuMjEsMCwwLDEtMi0uNzJBNiw2LDAsMCwxLDE2LDI3Ljc5YTYuNzYsNi43NiwwLDAsMS0xLTEuNjEsOC4xNCw4LjE0LDAsMCwxLS41NC0xLjczLDIuNjMsMi42MywwLDAsMSwwLS4yOWMwLS4xMSwwLTAuMjEsMC0wLjMyYTQuMTksNC4xOSwwLDAsMSwxLjEtMi43MUE2LjY0LDYuNjQsMCwwLDEsMTgsMTkuMjNhNC40Niw0LjQ2LDAsMCwxLTEuMTktLjc2LDUuNDQsNS40NCwwLDAsMS0uOS0xLDYuMjEsNi4yMSwwLDAsMS0uNjItMS4xOEE2LjMzLDYuMzMsMCwwLDEsMTUsMTVhMC43MSwwLjcxLDAsMCwxLS4wNS0wLjI3VjE0LjQ5YTMuNjcsMy42NywwLDAsMSwuOTEtMi4zMyw2LjIzLDYuMjMsMCwwLDEsMi40Ny0xLjc1LDguNjMsOC42MywwLDAsMSwzLjMyLS42Myw3LDcsMCwwLDEsLjc1LDBsMC43OCwwLjA5YTQuODksNC44OSwwLDAsMSwxLjkuNjgsNS44Myw1LjgzLDAsMCwxLDEuNDEsMS4yMiw1LjU2LDUuNTYsMCwwLDEsLjg4LDEuNDYsMy44NSwzLjg1LDAsMCwxLC4zMSwxLjQzVjE1YTguNzYsOC43NiwwLDAsMS0uMDUuOTIsMy41OSwzLjU5LDAsMCwxLS4yNywxLDMuOCwzLjgsMCwwLDEtLjY0LDFBNC4yNyw0LjI3LDAsMCwxLDI1LjQ3LDE4LjgzWk0yNy45MywyNGEzLDMsMCwwLDAtLjI1LTEuMDcsNC41NCw0LjU0LDAsMCwwLS43Ni0xLjI1LDUuNTYsNS41NiwwLDAsMC0xLjI2LTEuMDhBNC41Myw0LjUzLDAsMCwwLDIzLjkyLDIwbC0wLjgyLS4wOC0wLjgyLDBhOC43Niw4Ljc2LDAsMCwwLTMuMjUuNTksNS42NCw1LjY0LDAsMCwwLTIuMzQsMS42MywyLjg1LDIuODUsMCwwLDAtLjc1LDEuNzksMS40NCwxLjQ0LDAsMCwwLDAsLjMyLDcsNywwLDAsMCwuNDIsMS4zNCw1LjA1LDUuMDUsMCwwLDAsLjc1LDEuMjUsNC44Miw0LjgyLDAsMCwwLDEuMSwxLDMuNywzLjcsMCwwLDAsMS40OS41NWwxLjUsMC4yM2E3LjcyLDcuNzIsMCwwLDAsMS4xOC4wOSw1Ljg5LDUuODksMCwwLDAsMS4xOC0uMTJxMC41OS0uMTIsMS4zOS0wLjM2YTYsNiwwLDAsMCwxLjY5LS43OCwzLjE2LDMuMTYsMCwwLDAsLjg3LTAuOSwyLjU0LDIuNTQsMCwwLDAsLjM1LTEsOC40Nyw4LjQ3LDAsMCwwLC4wNy0xLjA4VjI0Wk0xNi40NywxNC43M2E1LjgyLDUuODIsMCwwLDAsLjMzLDEuMDksNC40Niw0LjQ2LDAsMCwwLC41OSwxLDMuNTUsMy41NSwwLDAsMCwuODcuOCwzLDMsMCwwLDAsMS4yMS40NHEwLjcyLDAuMTMsMS4yMy4xOWE5LjEsOS4xLDAsMCwwLDEsLjA1LDUuODQsNS44NCwwLDAsMCwxLS4wOCw3LjUzLDcuNTMsMCwwLDAsMS4xMy0uMjksNS40Nyw1LjQ3LDAsMCwwLDEuMzctLjYzLDIuNDQsMi40NCwwLDAsMCwuNzEtMC43MSwxLjg1LDEuODUsMCwwLDAsLjI3LTAuNzlxMC0uNDIuMDctMC44N1YxNC42MmEyLjQzLDIuNDMsMCwwLDAtLjItMC44NiwzLjUsMy41LDAsMCwwLS42Mi0xLDQuNjgsNC42OCwwLDAsMC0xLS44NywzLjY4LDMuNjgsMCwwLDAtMS40MS0uNTJsLTAuNjgtLjA4LTAuNjYsMGE3LjA4LDcuMDgsMCwwLDAtMi42NS40OEE0LjU4LDQuNTgsMCwwLDAsMTcsMTMuMSwyLjI4LDIuMjgsMCwwLDAsMTYuNDcsMTQuNzNaIi8+PC9zdmc+Cg==);
}

.sudokuInputBar .cell8 .selectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjE5NmYzIi8+PHBhdGggZD0iTTI1LjQ3LDE4LjgzYTYuMTYsNi4xNiwwLDAsMSwxLjY3LDEsNyw3LDAsMCwxLDEuMjUsMS4zNCw2LDYsMCwwLDEsLjc4LDEuNSw0LjQ1LDQuNDUsMCwwLDEsLjI3LDEuNDV2MC4zMnEwLDAuNjItLjA5LDEuMzFhMy41NiwzLjU2LDAsMCwxLS40NiwxLjM5LDQuNTEsNC41MSwwLDAsMS0xLjE5LDEuMzMsNy41Myw3LjUzLDAsMCwxLTIuMjgsMS4xMSwxMy42NCwxMy42NCwwLDAsMS0xLjYyLjQzLDcuNjIsNy42MiwwLDAsMS0xLjQxLjEzQTguODQsOC44NCwwLDAsMSwyMSwzMGwtMS42My0uMjRhNS4yMSw1LjIxLDAsMCwxLTItLjcyQTYsNiwwLDAsMSwxNiwyNy43OWE2Ljc2LDYuNzYsMCwwLDEtMS0xLjYxLDguMTQsOC4xNCwwLDAsMS0uNTQtMS43MywyLjYzLDIuNjMsMCwwLDEsMC0uMjljMC0uMTEsMC0wLjIxLDAtMC4zMmE0LjE5LDQuMTksMCwwLDEsMS4xLTIuNzFBNi42NCw2LjY0LDAsMCwxLDE4LDE5LjIzYTQuNDYsNC40NiwwLDAsMS0xLjE5LS43Niw1LjQ0LDUuNDQsMCwwLDEtLjktMSw2LjIxLDYuMjEsMCwwLDEtLjYyLTEuMThBNi4zMyw2LjMzLDAsMCwxLDE1LDE1YTAuNzEsMC43MSwwLDAsMS0uMDUtMC4yN1YxNC40OWEzLjY3LDMuNjcsMCwwLDEsLjkxLTIuMzMsNi4yMyw2LjIzLDAsMCwxLDIuNDctMS43NSw4LjYzLDguNjMsMCwwLDEsMy4zMi0uNjMsNyw3LDAsMCwxLC43NSwwbDAuNzgsMC4wOWE0Ljg5LDQuODksMCwwLDEsMS45LjY4LDUuODMsNS44MywwLDAsMSwxLjQxLDEuMjIsNS41Niw1LjU2LDAsMCwxLC44OCwxLjQ2LDMuODUsMy44NSwwLDAsMSwuMzEsMS40M1YxNWE4Ljc2LDguNzYsMCwwLDEtLjA1LjkyLDMuNTksMy41OSwwLDAsMS0uMjcsMSwzLjgsMy44LDAsMCwxLS42NCwxQTQuMjcsNC4yNywwLDAsMSwyNS40NywxOC44M1pNMjcuOTMsMjRhMywzLDAsMCwwLS4yNS0xLjA3LDQuNTQsNC41NCwwLDAsMC0uNzYtMS4yNSw1LjU2LDUuNTYsMCwwLDAtMS4yNi0xLjA4QTQuNTMsNC41MywwLDAsMCwyMy45MiwyMGwtMC44Mi0uMDgtMC44MiwwYTguNzYsOC43NiwwLDAsMC0zLjI1LjU5LDUuNjQsNS42NCwwLDAsMC0yLjM0LDEuNjMsMi44NSwyLjg1LDAsMCwwLS43NSwxLjc5LDEuNDQsMS40NCwwLDAsMCwwLC4zMiw3LDcsMCwwLDAsLjQyLDEuMzQsNS4wNSw1LjA1LDAsMCwwLC43NSwxLjI1LDQuODIsNC44MiwwLDAsMCwxLjEsMSwzLjcsMy43LDAsMCwwLDEuNDkuNTVsMS41LDAuMjNhNy43Miw3LjcyLDAsMCwwLDEuMTguMDksNS44OSw1Ljg5LDAsMCwwLDEuMTgtLjEycTAuNTktLjEyLDEuMzktMC4zNmE2LDYsMCwwLDAsMS42OS0uNzgsMy4xNiwzLjE2LDAsMCwwLC44Ny0wLjksMi41NCwyLjU0LDAsMCwwLC4zNS0xLDguNDcsOC40NywwLDAsMCwuMDctMS4wOFYyNFpNMTYuNDcsMTQuNzNhNS44Miw1LjgyLDAsMCwwLC4zMywxLjA5LDQuNDYsNC40NiwwLDAsMCwuNTksMSwzLjU1LDMuNTUsMCwwLDAsLjg3LjgsMywzLDAsMCwwLDEuMjEuNDRxMC43MiwwLjEzLDEuMjMuMTlhOS4xLDkuMSwwLDAsMCwxLC4wNSw1Ljg0LDUuODQsMCwwLDAsMS0uMDgsNy41Myw3LjUzLDAsMCwwLDEuMTMtLjI5LDUuNDcsNS40NywwLDAsMCwxLjM3LS42MywyLjQ0LDIuNDQsMCwwLDAsLjcxLTAuNzEsMS44NSwxLjg1LDAsMCwwLC4yNy0wLjc5cTAtLjQyLjA3LTAuODdWMTQuNjJhMi40MywyLjQzLDAsMCwwLS4yLTAuODYsMy41LDMuNSwwLDAsMC0uNjItMSw0LjY4LDQuNjgsMCwwLDAtMS0uODcsMy42OCwzLjY4LDAsMCwwLTEuNDEtLjUybC0wLjY4LS4wOC0wLjY2LDBhNy4wOCw3LjA4LDAsMCwwLTIuNjUuNDhBNC41OCw0LjU4LDAsMCwwLDE3LDEzLjEsMi4yOCwyLjI4LDAsMCwwLDE2LjQ3LDE0LjczWiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell8 .disabledButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDZkNmQ2Ii8+PHBhdGggZD0iTTI1LjQ3LDE4LjgzYTYuMTYsNi4xNiwwLDAsMSwxLjY3LDEsNyw3LDAsMCwxLDEuMjUsMS4zNCw2LDYsMCwwLDEsLjc4LDEuNSw0LjQ1LDQuNDUsMCwwLDEsLjI3LDEuNDV2MC4zMnEwLDAuNjItLjA5LDEuMzFhMy41NiwzLjU2LDAsMCwxLS40NiwxLjM5LDQuNTEsNC41MSwwLDAsMS0xLjE5LDEuMzMsNy41Myw3LjUzLDAsMCwxLTIuMjgsMS4xMSwxMy42NCwxMy42NCwwLDAsMS0xLjYyLjQzLDcuNjIsNy42MiwwLDAsMS0xLjQxLjEzQTguODQsOC44NCwwLDAsMSwyMSwzMGwtMS42My0uMjRhNS4yMSw1LjIxLDAsMCwxLTItLjcyQTYsNiwwLDAsMSwxNiwyNy43OWE2Ljc2LDYuNzYsMCwwLDEtMS0xLjYxLDguMTQsOC4xNCwwLDAsMS0uNTQtMS43MywyLjYzLDIuNjMsMCwwLDEsMC0uMjljMC0uMTEsMC0wLjIxLDAtMC4zMmE0LjE5LDQuMTksMCwwLDEsMS4xLTIuNzFBNi42NCw2LjY0LDAsMCwxLDE4LDE5LjIzYTQuNDYsNC40NiwwLDAsMS0xLjE5LS43Niw1LjQ0LDUuNDQsMCwwLDEtLjktMSw2LjIxLDYuMjEsMCwwLDEtLjYyLTEuMThBNi4zMyw2LjMzLDAsMCwxLDE1LDE1YTAuNzEsMC43MSwwLDAsMS0uMDUtMC4yN1YxNC40OWEzLjY3LDMuNjcsMCwwLDEsLjkxLTIuMzMsNi4yMyw2LjIzLDAsMCwxLDIuNDctMS43NSw4LjYzLDguNjMsMCwwLDEsMy4zMi0uNjMsNyw3LDAsMCwxLC43NSwwbDAuNzgsMC4wOWE0Ljg5LDQuODksMCwwLDEsMS45LjY4LDUuODMsNS44MywwLDAsMSwxLjQxLDEuMjIsNS41Niw1LjU2LDAsMCwxLC44OCwxLjQ2LDMuODUsMy44NSwwLDAsMSwuMzEsMS40M1YxNWE4Ljc2LDguNzYsMCwwLDEtLjA1LjkyLDMuNTksMy41OSwwLDAsMS0uMjcsMSwzLjgsMy44LDAsMCwxLS42NCwxQTQuMjcsNC4yNywwLDAsMSwyNS40NywxOC44M1pNMjcuOTMsMjRhMywzLDAsMCwwLS4yNS0xLjA3LDQuNTQsNC41NCwwLDAsMC0uNzYtMS4yNSw1LjU2LDUuNTYsMCwwLDAtMS4yNi0xLjA4QTQuNTMsNC41MywwLDAsMCwyMy45MiwyMGwtMC44Mi0uMDgtMC44MiwwYTguNzYsOC43NiwwLDAsMC0zLjI1LjU5LDUuNjQsNS42NCwwLDAsMC0yLjM0LDEuNjMsMi44NSwyLjg1LDAsMCwwLS43NSwxLjc5LDEuNDQsMS40NCwwLDAsMCwwLC4zMiw3LDcsMCwwLDAsLjQyLDEuMzQsNS4wNSw1LjA1LDAsMCwwLC43NSwxLjI1LDQuODIsNC44MiwwLDAsMCwxLjEsMSwzLjcsMy43LDAsMCwwLDEuNDkuNTVsMS41LDAuMjNhNy43Miw3LjcyLDAsMCwwLDEuMTguMDksNS44OSw1Ljg5LDAsMCwwLDEuMTgtLjEycTAuNTktLjEyLDEuMzktMC4zNmE2LDYsMCwwLDAsMS42OS0uNzgsMy4xNiwzLjE2LDAsMCwwLC44Ny0wLjksMi41NCwyLjU0LDAsMCwwLC4zNS0xLDguNDcsOC40NywwLDAsMCwuMDctMS4wOFYyNFpNMTYuNDcsMTQuNzNhNS44Miw1LjgyLDAsMCwwLC4zMywxLjA5LDQuNDYsNC40NiwwLDAsMCwuNTksMSwzLjU1LDMuNTUsMCwwLDAsLjg3LjgsMywzLDAsMCwwLDEuMjEuNDRxMC43MiwwLjEzLDEuMjMuMTlhOS4xLDkuMSwwLDAsMCwxLC4wNSw1Ljg0LDUuODQsMCwwLDAsMS0uMDgsNy41Myw3LjUzLDAsMCwwLDEuMTMtLjI5LDUuNDcsNS40NywwLDAsMCwxLjM3LS42MywyLjQ0LDIuNDQsMCwwLDAsLjcxLTAuNzEsMS44NSwxLjg1LDAsMCwwLC4yNy0wLjc5cTAtLjQyLjA3LTAuODdWMTQuNjJhMi40MywyLjQzLDAsMCwwLS4yLTAuODYsMy41LDMuNSwwLDAsMC0uNjItMSw0LjY4LDQuNjgsMCwwLDAtMS0uODcsMy42OCwzLjY4LDAsMCwwLTEuNDEtLjUybC0wLjY4LS4wOC0wLjY2LDBhNy4wOCw3LjA4LDAsMCwwLTIuNjUuNDhBNC41OCw0LjU4LDAsMCwwLDE3LDEzLjEsMi4yOCwyLjI4LDAsMCwwLDE2LjQ3LDE0LjczWiIgZmlsbD0iI2EyYTJhMiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell9 .unselectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguMjYsMTAuNzZhNy43NSw3Ljc1LDAsMCwxLDEuNDktLjM5LDkuODMsOS44MywwLDAsMSwxLjU0LS4xMiw4LjY1LDguNjUsMCwwLDEsMy4yNi42Myw3LjM0LDcuMzQsMCwwLDEsMi43NSwxLjk0LDgsOCwwLDAsMSwxLjExLDEuNjIsMTEuNDIsMTEuNDIsMCwwLDEsLjc4LDEuODksMTIsMTIsMCwwLDEsLjQ0LDIsMTYuMzMsMTYuMzMsMCwwLDEsLjEzLDIuMDljMCwwLjU3LDAsMS4xMy0uMDgsMS42NmExMC44NywxMC44NywwLDAsMS0uMjcsMS41NSw4Ljg2LDguODYsMCwwLDEtMiw0LDYuODksNi44OSwwLDAsMS0zLjk0LDIuMTJxLTAuNTQuMTEtMSwuMTZhMTAuMTYsMTAuMTYsMCwwLDEtMSwuMDUsNy44NCw3Ljg0LDAsMCwxLTMuMTEtLjYyLDUuNTUsNS41NSwwLDAsMS0yLjQ0LTIuMDksMC43NiwwLjc2LDAsMCwxLS4xMy0wLjQsMC42MSwwLjYxLDAsMCwxLC4yNS0wLjUsMC44NywwLjg3LDAsMCwxLC41NS0wLjIsMC43LDAuNywwLDAsMSwuNjIuMzJBNCw0LDAsMCwwLDE5LDI4LjE0YTYuMjMsNi4yMywwLDAsMCwyLjQuNDcsNy40MSw3LjQxLDAsMCwwLDEuNDYtLjE1QTcuOTQsNy45NCwwLDAsMCwyNC4yOSwyOGE1LjQsNS40LDAsMCwwLDEuNjktMSw1Ljc4LDUuNzgsMCwwLDAsMS4xNy0xLjQyLDYuODEsNi44MSwwLDAsMCwuNzEtMS43NCwxMS41MiwxMS41MiwwLDAsMCwuMzItMnEwLS4zMiwwLTAuNjZWMjAuMTFBNS4yNiw1LjI2LDAsMCwxLDI3LDIxLjc1YTcuNTIsNy41MiwwLDAsMS0xLjc0LDEuMTcsOS4zMiw5LjMyLDAsMCwxLTIsLjcxLDEwLjA4LDEwLjA4LDAsMCwxLTIuMTguMjQsOC41OSw4LjU5LDAsMCwxLTMuNDYtLjcsNi4xNCw2LjE0LDAsMCwxLTIuODctMi41MSw2LjcyLDYuNzIsMCwwLDEtLjk0LTMuNDIsNyw3LDAsMCwxLC4yOS0yLDYuNzUsNi43NSwwLDAsMSwuODctMS44NSw3LDcsMCwwLDEsMS40Mi0xLjU0QTYuNzIsNi43MiwwLDAsMSwxOC4yNiwxMC43NlptOSw3LjI5YTAuNywwLjcsMCwwLDEsLjIxLTAuNDcsMC45MiwwLjkyLDAsMCwxLC40LTAuMjMsOS4yOCw5LjI4LDAsMCwwLS43Mi0yLjEyLDUuNTUsNS41NSwwLDAsMC0xLjI5LTEuNzEsNy43Myw3LjczLDAsMCwwLTIuMi0xLjM0LDYuNTgsNi41OCwwLDAsMC01LDAsNi4wNyw2LjA3LDAsMCwwLTIuNTMsMS45Myw0LjY0LDQuNjQsMCwwLDAtMSwyLjg3LDQuNTUsNC41NSwwLDAsMCwwLC42cTAsMC4zMS4wOSwwLjYzQTUuNDMsNS40MywwLDAsMCwxNi42LDIwLjcsNC44LDQuOCwwLDAsMCwxOSwyMi4xYTQuNjMsNC42MywwLDAsMCwuOTQuMTdjMC4zMiwwLC42NiwwLDEsMGE5Ljc4LDkuNzgsMCwwLDAsMi4xMy0uMjQsNi44Niw2Ljg2LDAsMCwwLDItLjc2QTUsNSwwLDAsMCwyNi41OCwyMCwzLjU2LDMuNTYsMCwwLDAsMjcuMjYsMTguMDVaIi8+PC9zdmc+Cg==);
}

.sudokuInputBar .cell9 .selectedButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjE5NmYzIi8+PHBhdGggZD0iTTE4LjI2LDEwLjc2YTcuNzUsNy43NSwwLDAsMSwxLjQ5LS4zOSw5LjgzLDkuODMsMCwwLDEsMS41NC0uMTIsOC42NSw4LjY1LDAsMCwxLDMuMjYuNjMsNy4zNCw3LjM0LDAsMCwxLDIuNzUsMS45NCw4LDgsMCwwLDEsMS4xMSwxLjYyLDExLjQyLDExLjQyLDAsMCwxLC43OCwxLjg5LDEyLDEyLDAsMCwxLC40NCwyLDE2LjMzLDE2LjMzLDAsMCwxLC4xMywyLjA5YzAsMC41NywwLDEuMTMtLjA4LDEuNjZhMTAuODcsMTAuODcsMCwwLDEtLjI3LDEuNTUsOC44Niw4Ljg2LDAsMCwxLTIsNCw2Ljg5LDYuODksMCwwLDEtMy45NCwyLjEycS0wLjU0LjExLTEsLjE2YTEwLjE2LDEwLjE2LDAsMCwxLTEsLjA1LDcuODQsNy44NCwwLDAsMS0zLjExLS42Miw1LjU1LDUuNTUsMCwwLDEtMi40NC0yLjA5LDAuNzYsMC43NiwwLDAsMS0uMTMtMC40LDAuNjEsMC42MSwwLDAsMSwuMjUtMC41LDAuODcsMC44NywwLDAsMSwuNTUtMC4yLDAuNywwLjcsMCwwLDEsLjYyLjMyQTQsNCwwLDAsMCwxOSwyOC4xNGE2LjIzLDYuMjMsMCwwLDAsMi40LjQ3LDcuNDEsNy40MSwwLDAsMCwxLjQ2LS4xNUE3Ljk0LDcuOTQsMCwwLDAsMjQuMjksMjhhNS40LDUuNCwwLDAsMCwxLjY5LTEsNS43OCw1Ljc4LDAsMCwwLDEuMTctMS40Miw2LjgxLDYuODEsMCwwLDAsLjcxLTEuNzQsMTEuNTIsMTEuNTIsMCwwLDAsLjMyLTJxMC0uMzIsMC0wLjY2VjIwLjExQTUuMjYsNS4yNiwwLDAsMSwyNywyMS43NWE3LjUyLDcuNTIsMCwwLDEtMS43NCwxLjE3LDkuMzIsOS4zMiwwLDAsMS0yLC43MSwxMC4wOCwxMC4wOCwwLDAsMS0yLjE4LjI0LDguNTksOC41OSwwLDAsMS0zLjQ2LS43LDYuMTQsNi4xNCwwLDAsMS0yLjg3LTIuNTEsNi43Miw2LjcyLDAsMCwxLS45NC0zLjQyLDcsNywwLDAsMSwuMjktMiw2Ljc1LDYuNzUsMCwwLDEsLjg3LTEuODUsNyw3LDAsMCwxLDEuNDItMS41NEE2LjcyLDYuNzIsMCwwLDEsMTguMjYsMTAuNzZabTksNy4yOWEwLjcsMC43LDAsMCwxLC4yMS0wLjQ3LDAuOTIsMC45MiwwLDAsMSwuNC0wLjIzLDkuMjgsOS4yOCwwLDAsMC0uNzItMi4xMiw1LjU1LDUuNTUsMCwwLDAtMS4yOS0xLjcxLDcuNzMsNy43MywwLDAsMC0yLjItMS4zNCw2LjU4LDYuNTgsMCwwLDAtNSwwLDYuMDcsNi4wNywwLDAsMC0yLjUzLDEuOTMsNC42NCw0LjY0LDAsMCwwLTEsMi44Nyw0LjU1LDQuNTUsMCwwLDAsMCwuNnEwLDAuMzEuMDksMC42M0E1LjQzLDUuNDMsMCwwLDAsMTYuNiwyMC43LDQuOCw0LjgsMCwwLDAsMTksMjIuMWE0LjYzLDQuNjMsMCwwLDAsLjk0LjE3YzAuMzIsMCwuNjYsMCwxLDBhOS43OCw5Ljc4LDAsMCwwLDIuMTMtLjI0LDYuODYsNi44NiwwLDAsMCwyLS43NkE1LDUsMCwwLDAsMjYuNTgsMjAsMy41NiwzLjU2LDAsMCwwLDI3LjI2LDE4LjA1WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .cell9 .disabledButtonState {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZDZkNmQ2Ii8+PHBhdGggZD0iTTE4LjI2LDEwLjc2YTcuNzUsNy43NSwwLDAsMSwxLjQ5LS4zOSw5LjgzLDkuODMsMCwwLDEsMS41NC0uMTIsOC42NSw4LjY1LDAsMCwxLDMuMjYuNjMsNy4zNCw3LjM0LDAsMCwxLDIuNzUsMS45NCw4LDgsMCwwLDEsMS4xMSwxLjYyLDExLjQyLDExLjQyLDAsMCwxLC43OCwxLjg5LDEyLDEyLDAsMCwxLC40NCwyLDE2LjMzLDE2LjMzLDAsMCwxLC4xMywyLjA5YzAsMC41NywwLDEuMTMtLjA4LDEuNjZhMTAuODcsMTAuODcsMCwwLDEtLjI3LDEuNTUsOC44Niw4Ljg2LDAsMCwxLTIsNCw2Ljg5LDYuODksMCwwLDEtMy45NCwyLjEycS0wLjU0LjExLTEsLjE2YTEwLjE2LDEwLjE2LDAsMCwxLTEsLjA1LDcuODQsNy44NCwwLDAsMS0zLjExLS42Miw1LjU1LDUuNTUsMCwwLDEtMi40NC0yLjA5LDAuNzYsMC43NiwwLDAsMS0uMTMtMC40LDAuNjEsMC42MSwwLDAsMSwuMjUtMC41LDAuODcsMC44NywwLDAsMSwuNTUtMC4yLDAuNywwLjcsMCwwLDEsLjYyLjMyQTQsNCwwLDAsMCwxOSwyOC4xNGE2LjIzLDYuMjMsMCwwLDAsMi40LjQ3LDcuNDEsNy40MSwwLDAsMCwxLjQ2LS4xNUE3Ljk0LDcuOTQsMCwwLDAsMjQuMjksMjhhNS40LDUuNCwwLDAsMCwxLjY5LTEsNS43OCw1Ljc4LDAsMCwwLDEuMTctMS40Miw2LjgxLDYuODEsMCwwLDAsLjcxLTEuNzQsMTEuNTIsMTEuNTIsMCwwLDAsLjMyLTJxMC0uMzIsMC0wLjY2VjIwLjExQTUuMjYsNS4yNiwwLDAsMSwyNywyMS43NWE3LjUyLDcuNTIsMCwwLDEtMS43NCwxLjE3LDkuMzIsOS4zMiwwLDAsMS0yLC43MSwxMC4wOCwxMC4wOCwwLDAsMS0yLjE4LjI0LDguNTksOC41OSwwLDAsMS0zLjQ2LS43LDYuMTQsNi4xNCwwLDAsMS0yLjg3LTIuNTEsNi43Miw2LjcyLDAsMCwxLS45NC0zLjQyLDcsNywwLDAsMSwuMjktMiw2Ljc1LDYuNzUsMCwwLDEsLjg3LTEuODUsNyw3LDAsMCwxLDEuNDItMS41NEE2LjcyLDYuNzIsMCwwLDEsMTguMjYsMTAuNzZabTksNy4yOWEwLjcsMC43LDAsMCwxLC4yMS0wLjQ3LDAuOTIsMC45MiwwLDAsMSwuNC0wLjIzLDkuMjgsOS4yOCwwLDAsMC0uNzItMi4xMiw1LjU1LDUuNTUsMCwwLDAtMS4yOS0xLjcxLDcuNzMsNy43MywwLDAsMC0yLjItMS4zNCw2LjU4LDYuNTgsMCwwLDAtNSwwLDYuMDcsNi4wNywwLDAsMC0yLjUzLDEuOTMsNC42NCw0LjY0LDAsMCwwLTEsMi44Nyw0LjU1LDQuNTUsMCwwLDAsMCwuNnEwLDAuMzEuMDksMC42M0E1LjQzLDUuNDMsMCwwLDAsMTYuNiwyMC43LDQuOCw0LjgsMCwwLDAsMTksMjIuMWE0LjYzLDQuNjMsMCwwLDAsLjk0LjE3YzAuMzIsMCwuNjYsMCwxLDBhOS43OCw5Ljc4LDAsMCwwLDIuMTMtLjI0LDYuODYsNi44NiwwLDAsMCwyLS43NkE1LDUsMCwwLDAsMjYuNTgsMjAsMy41NiwzLjU2LDAsMCwwLDI3LjI2LDE4LjA1WiIgZmlsbD0iI2EyYTJhMiIvPjwvc3ZnPgo=);
}

.sudokuInputBar .notes .unselectedButtonState {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%222784%22%20height%3D%222784%22%20version%3D%221.1%22%20viewBox%3D%220%200%202784%202784%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22m1448.7%201734.6%20116-116-152-152-116%20116v56h96v96zm440-720q-16-16-33%200.9999l-350%20350q-17%2017-1%2033t33-1l350-350q17-17%201-33zm80%20594v190q0%20119-84.5%20203.5t-203.5%2084.5h-832q-119%200-203.5-84.5t-84.5-203.5v-832q0-119%2084.5-203.5t203.5-84.5h832q63%200%20117%2025%2015%207%2018%2023%203%2017-9%2029l-49%2049q-14%2014-32%208-23-6-45-6h-832q-66%200-113%2047t-47%20113v832q0%2066%2047%20113t113%2047h832q66%200%20113-47t47-113v-126q0-13%209-22l64-64q15-15%2035-7t20%2029zm-96-738%20288%20288-672%20672h-288v-288zm444%20132-92%2092-288-288%2092-92q28-28%2068-28t68%2028l152%20152q28%2028%2028%2068t-28%2068z%22/%3E%3C/svg%3E%0A);
}

.sudokuInputBar .notes .selectedButtonState {
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%222784%22%20height%3D%222784%22%20version%3D%221.1%22%20viewBox%3D%220%200%202784%202784%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%232196f3%22/%3E%3Cpath%20d%3D%22m1448.7%201734.6%20116-116-152-152-116%20116v56h96v96zm440-720q-16-16-33%200.9999l-350%20350q-17%2017-1%2033t33-1l350-350q17-17%201-33zm80%20594v190q0%20119-84.5%20203.5t-203.5%2084.5h-832q-119%200-203.5-84.5t-84.5-203.5v-832q0-119%2084.5-203.5t203.5-84.5h832q63%200%20117%2025%2015%207%2018%2023%203%2017-9%2029l-49%2049q-14%2014-32%208-23-6-45-6h-832q-66%200-113%2047t-47%20113v832q0%2066%2047%20113t113%2047h832q66%200%20113-47t47-113v-126q0-13%209-22l64-64q15-15%2035-7t20%2029zm-96-738%20288%20288-672%20672h-288v-288zm444%20132-92%2092-288-288%2092-92q28-28%2068-28t68%2028l152%20152q28%2028%2028%2068t-28%2068z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E%0A);
}

.sudokuInputBar {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.sudokuInputBar .button {
  width: calc((100vw - 40px) * 0.089);
  max-width: calc(((100vh - 121px) * 0.9) * 0.089);
  position: relative;
}

.sudokuInputBar .buttonState {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 15%;
  position: absolute;
  bottom: 0;
  left: 0;
  visibility: hidden;
}

.sudokuInputBar .buttonState:before {
  content: "";
  padding-top: 100%;
  float: left;
}

.sudokuInputBar .buttonState:after {
  content: "";
  display: table;
  clear: both;
}

.sudokuInputBar .selectedButton .selectedButtonState {
  visibility: visible;
}

.sudokuInputBar .unselectedButton .unselectedButtonState {
  visibility: visible;
}

.sudokuInputBar .disabledButton .disabledButtonState {
  visibility: visible;
}

.sudokuInputBar .unselectedButtonState {
  box-shadow: inset 0 -1px 0 0 #c4c4c4, inset 0 0 0 1px #ddd;
}

.modernizr-no-touchevents .sudokuInputBar .unselectedButtonState:hover {
  box-shadow: inset 0 -1px 0 0 #c4c4c4, inset 0 0 0 1px #ddd,
    inset 0 0 0 500px rgba(0, 0, 0, 0.07);
}

.modernizr-no-touchevents .sudokuInputBar .selectedButtonState:not(:hover) {
  box-shadow: inset 0 0 0 500px rgba(255, 255, 255, 0.13);
}

.sudoku-difficulty-dropdown-menu {
  width: 440px;
}

.sudoku-difficulty-dropdown-menu .btn {
  width: 100px;
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 800px) {
  .sudoku-difficulty-dropdown-menu {
    width: 360px;
  }

  .sudoku-difficulty-dropdown-menu .btn {
    width: 80px;
  }

  .solitr-dropdown-menu-wrapper {
    position: static;
  }
}

.modernizr-no-touchevents .touch-only,
.modernizr-touchevents .no-touch-only {
  display: none;
}

.sudokuPage,
.sudokuPage body {
  overflow-x: hidden;
}
</style>
