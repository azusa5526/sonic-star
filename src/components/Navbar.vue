<template>
  <header class="header">
    <nav
      class="navbar navbar-expand-md navbar-light fixed-top transition py-md-5 py-4"
      :class="{ 'bg-trasparent': isTop, 'bg-white shadowBottom': !isTop }"
    >
      <div class="container-fluid">
        <div class="d-flex align-items-center">
          <h1 class="fs-4 ps-4 ps-md-6 mb-0">
            <a href="#" :class="{ 'text-white': isTop, 'text-dark': !isTop }">Sonic Star</a>
          </h1>
          <div class="dropdown ps-4 ps-md-6">
            <button
              class="btn btn-trasparent dropdown-toggle foucus-0"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              :class="{ 'text-white': isTop, 'text-dark': !isTop }"
            >
              {{ $t('GENERAL.LANG') }}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="min-width: 120px">
              <li>
                <a class="dropdown-item" data-lang="tw" href="#" @click.prevent="setLang">CHT</a>
              </li>
              <li>
                <a class="dropdown-item" data-lang="en" href="#" @click.prevent="setLang">EN</a>
              </li>
            </ul>
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            class="bi bi-list fs-4"
            :class="{ 'text-white': isTop, 'text-dark': !isTop }"
            @click="changeColor"
          ></i>
        </button>

        <div
          class="collapse navbar-collapse d-md-flex justify-content-end pt-3 pt-md-0"
          id="navbarNav"
        >
          <ul class="navbar-nav me-1 me-md-4" data-wow-duration=".5s">
            <li
              class="nav-item px-md-1 px-xl-3"
              v-for="(navOption, index) in navOptions"
              :key="index"
            >
              <a
                class="nav-link"
                :href="navLink[index]"
                :class="{ 'text-white': isTop, 'text-dark': !isTop }"
                @click="hideNavbar"
                >{{ navOption }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {
      isTop: true,
      navOptions: this.$t('GENERAL.NAV_OPTIONS'),
      navLink: this.$t('GENERAL.NAV_ANCHOR_OPTIONS')
    };
  },

  methods: {
    handleScroll() {
      const st = window.scrollY;
      if (st < 5) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },

    hideNavbar() {
      document.getElementById('navbarNav').classList.remove('show');
    },

    setActiveLanguage(lang) {
      localStorage.setItem('language', lang);
    },

    setLang(evt) {
      const lang = evt.target.dataset.lang;
      this.setActiveLanguage(lang);
      return history.go(0);
    },

    changeColor() {
      if (!document.querySelector('.navbar-toggler').classList.contains('collapsed')) {
        this.isTop = false;
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
