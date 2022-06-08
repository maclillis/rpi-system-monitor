<template>
  <div class="rpi-mode-adjust-wrap">
    <div
      class="rpi-mode-adjust-inner d-flex align-items-center justify-content-center"
    >
      <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
      />
      <label for="checkbox" class="switch-label">
        <span
          ><font-awesome-icon icon="fa-solid fa-moon" class="icon-dark"
        /></span>
        <span
          ><font-awesome-icon icon="fa-solid fa-sun" class="icon-light"
        /></span>
        <div
          class="switch-toggle"
          :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
        ></div>
      </label>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/components/partials/ModeAdjuster.scss";
</style>

<script type="text/javascript">
export default {
  name: "ModeAdjuster",
  data() {
    return {
      userTheme: "light-theme",
    };
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
    getTheme() {
      return localStorage.getItem("user-theme");
    },
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
};
</script>
