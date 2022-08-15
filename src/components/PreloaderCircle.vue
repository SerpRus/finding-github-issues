<template>
  <div
    class="preloader"
    v-if="isLoader"
  >
  </div>
</template>

<script>
export default {
  name: 'PreloaderCircle',
  props: {
    isLoader: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    display: block;
    width: 50px;
    height: 50px;

    content: '';
    animation: preloader-rotate 1s ease infinite;

    border: 8px solid #ccc;
    border-left: 8px solid brown;
    border-radius: 50%;

    @media (min-width: 767px) {
      width: 100px;
      height: 100px;

      border: 4px solid #ccc;
      border-left: 4px solid brown;
    }
  }
}

@keyframes preloader-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
