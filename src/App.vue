<template>
  <div id="app">
    <loading :active.sync="isLoading" />
    <Navbar></Navbar>
    <div class="wrapper">
      <main class="index">
        <div id="intro-anchor"></div>
        <div class="intro">
          <div class="container position-relative h-100">
            <div class="slogan d-flex flex-column align-items-center w-100 px-6">
              <strong class="h1 text-white text-center">{{ $t('INTRO.TITLE') }}</strong>
              <p class="text-light text-center fs-5 mt-4">
                {{ $t('INTRO.SUBTITLE') }}
              </p>
              <a class="btn btn-lg btn-outline-white border-2 fs-6 px-10 mt-12" href="#">{{
                $t('INTRO.JOIN_US')
              }}</a>
            </div>
          </div>
          <div class="mask"></div>
        </div>

        <div id="about-anchor"></div>
        <div class="about mt-12 mt-lg-13">
          <div class="container">
            <div class="d-flex flex-column align-items-center w-100">
              <h3 class="mb-8 mb-md-11">{{ $t('GENERAL.NAV_OPTIONS[1]') }}</h3>
              <p class="fs-4 fw-light lh-lg px-4 px-md-0">
                Sonic Star Global Ltd. (Sonic Star) is a professional silicon intellectual property
                (IP) provider, with its principal office located in Hsinchu, Taiwan. Our strength is
                in R&D and customer service. We focus on providing high-speed interface IPs,
                mixed-mode circuit IPs, standard cell library solutions, and multimedia related
                HW/SW solutions.
              </p>
              <a class="btn btn-lg btn-outline-dark border-2 fs-6 px-10 mt-6 mt-md-11" href="#"
                >LEAEN MORE</a
              >
            </div>
          </div>
        </div>

        <div id="jobs-anchor"></div>
        <div class="jobs mt-12 mt-lg-13">
          <div class="container-fluid">
            <div class="row no-gutters">
              <h3 class="mb-8 mb-md-11 text-center">{{ $t('GENERAL.NAV_OPTIONS[2]') }}</h3>
              <div class="col-12 col-md-6 col-lg-3 p-0">
                <div class="card bg-dark text-white">
                  <img src="./assets/img/jobs_1.jpg" class="card-img transition" alt="..." />
                  <div class="card-img-overlay">
                    <h4 class="card-title absolute-center">Card title</h4>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3 p-0">
                <div class="card bg-dark text-white">
                  <img src="./assets/img/jobs_1.jpg" class="card-img transition" alt="..." />
                  <div class="card-img-overlay">
                    <h4 class="card-title absolute-center">Card title</h4>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3 p-0">
                <div class="card bg-dark text-white">
                  <img src="./assets/img/jobs_1.jpg" class="card-img transition" alt="..." />
                  <div class="card-img-overlay">
                    <div class="absolute-center">
                      <h4 class="card-title text-center">Card title</h4>
                      <p class="card-text">contentcontentcontentcontentcontentcontent</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-3 p-0">
                <div class="card bg-dark text-white">
                  <img src="./assets/img/jobs_1.jpg" class="card-img transition" alt="..." />
                  <div class="card-img-overlay">
                    <h4 class="card-title absolute-center">Card title</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-anchor"></div>
        <div class="contact mt-12 mt-lg-13">
          <div class="container">
            <div class="message mt-11 mt-lg-12">
              <div class="container-md">
                <form class="mb-12" id="messageForm">
                  <fieldset>
                    <legend class="mb-8 fs-3 text-center">
                      {{ $t('GENERAL.NAV_OPTIONS[3]') }}
                    </legend>
                    <div class="row mb-6">
                      <div class="col-12 col-lg-4 mb-4">
                        <label for="name" class="form-label fs-5 fw-light">{{
                          $t('CONTACT.NAME')
                        }}</label>
                        <input type="text" class="form-control" id="name" v-model="name" />
                      </div>
                      <div class="col-12 col-lg-4 mb-4">
                        <label for="exampleInputEmail1" class="form-label fs-5 fw-light">{{
                          $t('CONTACT.EMAIL')
                        }}</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          v-model="email"
                        />
                      </div>
                      <div class="col-12 col-lg-4 mb-4">
                        <label for="subject" class="form-label fs-5 fw-light">{{
                          $t('CONTACT.SUBJECT')
                        }}</label>
                        <input type="text" class="form-control" id="subject" v-model="subject" />
                      </div>
                    </div>

                    <div class="mb-8">
                      <label for="message" class="form-label fs-5 fw-light">{{
                        $t('CONTACT.MESSAGE')
                      }}</label>
                      <textarea type="text" class="form-control" id="message" v-model="message" />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-lg btn-outline-dark border-2 fs-6 px-6"
                      @click.prevent="sendEmail()"
                    >
                      {{ $t('CONTACT.SUBMIT') }}
                    </button>
                  </fieldset>
                </form>
                <hr />
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-10 offset-lg-1 d-flex flex-column align-items-center mb-8">
                <p class="fs-5">{{ $t('CONTACT.COMPANY_NAME') }}</p>
                <p class="text-center fw-light">
                  {{ $t('CONTACT.ADDRESS') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      isLoading: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      modalMessage: ''
    };
  },

  mounted() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
};
</script>

<style lang="scss">
@import './assets/scss/all.scss';
</style>
