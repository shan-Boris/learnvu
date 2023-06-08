<template>
  <Header :title="title" />
  <div class="app__content">
    <router-view @setTitle="setTitle" />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "./components/Header.vue";
import { onUpdated, ref } from "vue";
const title = ref("title");

function setTitle(value: string) {
  title.value = value;
}
</script>

<style>
:root {
  --color-bg: #f0ede2;
  /* --color-forTitle: #f9e8d5; */
  --color-forTitle: #e8e2cf;
  --color-rozeLogo: #165e48;
  --color-forBtn: #165e48;
  --border-radius: 3px;
}

/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}
/* a:link,
a:visited {
  color: black;
} */

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  min-height: 100vh;
  font-size: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: "Balsamiq Sans", cursive;
  font-weight: 400;
  background-color: var(--color-bg);
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.app__content {
  align-self: center;
  flex-grow: 1;
  margin-left: -10px;
  max-width: 1200px;
  padding: 0 20px;
  width: 100%;
}
</style>
