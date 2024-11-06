<!-- https://github.com/barelyhuman/snips/blob/dev/pages/css-loader.md -->
<template>
  <div class="loader">
    ❤️
    <div class="loader">
      ❤️
      <div class="loader">❤️</div>
    </div>
  </div>
</template>

<style>
.loader {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5vw;
  height: 10vh;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: purple;
  border-left-color: fuchsia;
  border-bottom-color: blue;
  border-right-color: red;
  border-radius: 50%;
  -webkit-animation: loader 400ms linear infinite;
  animation: loader 10000ms linear infinite;
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes loader {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
