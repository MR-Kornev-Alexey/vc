<template>
  <div v-on:click="toggleZoom">
    <Frame :pose="pose" class="frame" />
    <ZoomImage :pose="pose" :src="src" />
  </div>
</template>

<script>
import posed from "vue-pose";

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

export default {
  props: ["src"],
  data: () => ({ isZoomed: false }),
  computed: {
    pose() {
      return this.isZoomed ? "zoomedIn" : "zoomedOut";
    },
    toggleZoom() {
      return this.isZoomed ? this.zoomOut : this.zoomIn;
    }
  },
  methods: {
    zoomIn() {
      window.addEventListener("scroll", this.zoomOut);
      this.isZoomed = true;
    },
    zoomOut() {
      window.removeEventListener("scroll", this.zoomOut);
      this.isZoomed = false;
    }
  },
  components: {
    Frame: posed.div({
      zoomedOut: {
        applyAtEnd: { display: "none" },
        opacity: 0
      },
      zoomedIn: {
        applyAtStart: { display: "block" },
        opacity: 1
      }
    }),
    ZoomImage: posed.img({
      zoomedOut: {
        position: "static",
        width: "auto",
        height: "auto",
        transition,
        flip: true
      },
      zoomedIn: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition,
        flip: true
      }
    })
  }
};
</script>

<style lang="scss" scoped>
img {
  cursor: zoom-in;
  display: block;
  max-width: 100%;
  margin: auto;
  box-shadow: 5px 3px 4px 2px #888888;
}

img.zoomed {
  cursor: zoom-out;
}

.frame {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: #6b6b6b;
  transform: translateZ(0);
}
</style>
