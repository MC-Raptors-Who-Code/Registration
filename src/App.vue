<template>
  <div class="bg-neutral-100 rounded-b-3xl py-24 grid justify-center">
    <div
      class="neumorphic-shadow bg-neutral-100 rounded-3xl grid content-center h-32 w-32"
    >
      <img class="logo" src="rwc.png" alt="logo" />
    </div>
  </div>
  <nav>
    <router-link to="/">Home</router-link>
  </nav>
  <router-view />
</template>

<style>
.neumorphic-shadow {
  box-shadow: #ddd 1rem 1rem 1rem 0 inset, #fff -1rem -1rem 1rem 0 inset;
}
.logo {
  filter: drop-shadow(0 0.5rem 1rem #3a0e66);
  transition-duration: 0.3s;
  transition-property: opacity, transform;
  transform: scale(1.5);
  opacity: 0;
  animation: dropin 0.5s 0.3s ease-out 1 forwards;
}
@keyframes popin {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  33% {
    opacity: 1;
    transform: scale(1.5);
  }
  66% {
    opacity: 1;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes dropin {
  0% {
    opacity: 0;
    transform: scale(1.5);
  }
  33% {
    opacity: 1;
    transform: scale(0.75);
  }
  66% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
