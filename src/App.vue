<template>
  <!-- TODO: make header compact for 16:9 13" screens -->
  <div class="bg-neutral-100 flex-col pt-20 h-screen">
    <div
      class="neumorphic-shadow bg-neutral-100 rounded-3xl grid content-center h-32 w-32 m-auto"
    >
      <img class="logo" src="rwc.png" alt="logo" />
    </div>
    <h1
      class="text-3xl text-neutral-700 font-bold mt-8 m-auto"
      style="max-width: max-content"
    >
      RWC Application Form
    </h1>
    <p class="text-justify text-lg text-neutral-500 mt-8 m-auto" style="max-width: 70ch">
      &emsp;&emsp;&emsp;&emsp;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Obcaecati corrupti at, perspiciatis similique rerum, labore, cumque quos blanditiis
      minima adipisci optio. Iure, rem tempora.
      <span
        class="font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-purple-700 relative inline-block"
      >
        <span class="relative text-neutral-100">Quisquam</span>
      </span>
      unde dolore suscipit soluta atque pariatur, libero, iure quis fugiat necessitatibus
      dolor perferendis impedit, amet nam laudantium?
    </p>
    <!-- TODO: adjust width for different screen sizes -->
    <div class="mt-20 rounded-3xl bg-white m-auto w-1/2">
      <router-view />
    </div>
  </div>
</template>

<style>
.neumorphic-shadow {
  box-shadow: #ddd 1rem 1rem 1rem 0 inset, #fff -1rem -1rem 1rem 0 inset;
}
.logo {
  filter: drop-shadow(0 0.5rem 1rem #3a0e66);
  transition-duration: 0.3s;
  transition-property: opacity, transform;
  transform: scale(2);
  opacity: 0;
  animation: dropin 0.5s 0.3s ease-out 1 forwards;
}
@keyframes popin {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  33% {
    transform: scale(1.25);
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
    transform: scale(2);
  }
  33% {
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
