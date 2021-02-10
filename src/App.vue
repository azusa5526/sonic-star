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
              <strong
                class="h1 text-white text-center wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration=".5s"
                >{{ $t('INTRO.TITLE') }}</strong
              >
              <p
                class="text-light text-center fw-light fs-5 mt-4 wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
                data-wow-duration=".5s"
              >
                {{ $t('INTRO.SUBTITLE') }}
              </p>
              <a
                class="btn btn-lg btn-outline-white border-2 fs-6 px-10 mt-12 wow animate__animated animate__fadeInUp"
                href="#"
                data-wow-delay=".5s"
                data-wow-duration=".5s"
                >{{ $t('INTRO.JOIN_US') }}</a
              >
            </div>
          </div>
          <div class="mask"></div>
        </div>

        <div id="about-anchor"></div>
        <div class="about mt-12 mt-lg-13">
          <div class="container">
            <div class="d-flex flex-column align-items-center w-100">
              <h3 class="text-dark fw-bold mb-8 mb-md-11">{{ $t('GENERAL.NAV_OPTIONS[1]') }}</h3>
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
        <div class="jobs pt-11 pb-12 pt-lg-12 pb-lg-13 mt-12 mt-lg-13">
          <div class="container-fluid">
            <div class="row">
              <h3 class="text-dark text-center fw-bold mb-8 mb-md-11">
                {{ $t('GENERAL.NAV_OPTIONS[2]') }}
              </h3>
              <div
                class="col-12 col-md-6 col-xl-3 container_foto mb-4 mb-md-0 wow animate__animated animate__fadeInUp"
                data-wow-duration=".5s"
              >
                <div class="ver_mas bg-primary text-center">
                  <span class="text-dark fw-bold">MORE</span>
                </div>
                <article class="text-left w-100">
                  <h4 class="text-white">Analog IP Engineer</h4>
                  <h6 class="text-white">Cadence virtuoso, Spectre, AMS.</h6>
                </article>
                <img src="./assets/img/jobs_1.jpg" alt="" />
              </div>
              <div
                class="col-12 col-md-6 col-xl-3 container_foto mb-4 mb-md-0 wow animate__animated animate__fadeInUp"
                data-wow-duration=".5s"
              >
                <div class="ver_mas bg-primary text-center">
                  <span class="text-dark fw-bold">MORE</span>
                </div>
                <article class="text-left w-100">
                  <h4 class="text-white">IC Layout Engineer</h4>
                  <h6 class="text-white">PLL, ADC, IO, SerDes, DDR, PMIC, Bandgap</h6>
                </article>
                <img src="./assets/img/jobs_2.jpg" alt="" />
              </div>
              <div
                class="col-12 col-md-6 col-xl-3 container_foto mb-4 mb-md-0 wow animate__animated animate__fadeInUp"
                data-wow-duration=".5s"
              >
                <div class="ver_mas bg-primary text-center">
                  <span class="text-dark fw-bold">MORE</span>
                </div>
                <article class="text-left w-100">
                  <h4 class="text-white">Digital IP design Engineer</h4>
                  <h6 class="text-white">RTL, SystemVerilog, front-end design flow.</h6>
                </article>
                <img src="./assets/img/jobs_3.jpg" alt="" />
              </div>
              <div
                class="col-12 col-md-6 col-xl-3 container_foto mb-4 mb-md-0 wow animate__animated animate__fadeInUp"
                data-wow-duration=".5s"
              >
                <div class="ver_mas bg-white text-center">
                  <span class="text-dark fw-bold">MORE</span>
                </div>
                <article class="text-left w-100">
                  <h4 class="text-white">More Information</h4>
                  <h6 class="text-white">Check out more about our job openings</h6>
                </article>
                <img src="./assets/img/jobs_4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="contact-anchor"></div>
        <div class="contact mt-12 mt-lg-13">
          <div class="container">
            <div class="message mt-11 mt-lg-12">
              <div class="container-md">
                <validation-observer v-slot="{ invalid }">
                  <form class="mb-12" id="messageForm">
                    <fieldset>
                      <legend class="text-center text-dark fw-bold fs-3 mb-8">
                        {{ $t('GENERAL.NAV_OPTIONS[3]') }}
                      </legend>
                      <div class="row mb-6">
                        <div class="col-12 col-lg-4 mb-4">
                          <validation-provider rules="required" v-slot="{ errors }">
                            <label for="name" class="form-label fs-5 fw-light">{{
                              $t('CONTACT.NAME')
                            }}</label>
                            <input type="text" class="form-control" id="name" v-model="name" />
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-provider>
                        </div>
                        <div class="col-12 col-lg-4 mb-4">
                          <validation-provider
                            name="email"
                            rules="required|email"
                            v-slot="{ errors }"
                          >
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
                            <span class="text-danger">{{ errors[0] }}</span>
                          </validation-provider>
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
                        :disabled="invalid"
                        @click.prevent="sendEmail()"
                      >
                        {{ $t('CONTACT.SUBMIT') }}
                      </button>
                    </fieldset>
                  </form>
                </validation-observer>
                <hr />
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-lg-10 offset-lg-1 d-flex flex-column align-items-center mb-8">
                <p class="fs-5">{{ $t('INFO.COMPANY_NAME') }}</p>
                <p class="text-center fw-light">
                  {{ $t('INFO.COMPANY_ADDRESS') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <div
      class="modal fade"
      id="emailModal"
      tabindex="-1"
      aria-labelledby="emailModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="emailModalLabel">
              <i class="bi bi-chat-left-text-fill ms-2 me-4"></i>{{ modalMessage }}
            </h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Email from '@/assets/js/smtp.js';
import Modal from 'bootstrap/js/dist/modal';

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

  methods: {
    sendEmail() {
      this.isLoading = true;
      Email.send({
        SecureToken: '26a67c6e-d769-46af-8565-78acadf6cefd',
        To: 'azusa5526@gmail.com',
        From: this.email,
        Subject: `${this.name}: ${this.subject}`,
        Body: this.message
      })
        .then(() => {
          const emailModal = new Modal(document.getElementById('emailModal'));
          this.modalMessage = 'Send message successfully';
          this.isLoading = false;
          emailModal.show();
        })
        .catch((error) => {
          const emailModal = new Modal(document.getElementById('emailModal'));
          this.modalMessage = `Send message fail ${error}`;
          this.isLoading = false;
          emailModal.show();
        });
    }
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

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 8%, 0);
    transform: translate3d(0, 8%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.animate__fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
</style>
