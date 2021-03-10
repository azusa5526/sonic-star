<template>
  <div id="app">
    <loading :active.sync="isLoading" />
    <Navbar></Navbar>
    <div class="wrapper">
      <main class="index">
        <div id="home-anchor"></div>
        <div class="intro">
          <div class="container position-relative h-100">
            <div class="slogan d-flex flex-column align-items-center w-100 px-4">
              <strong
                class="h1 text-light text-center wow animate__animated animate__fadeInUp"
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
                class="btn btn-lg btn-outline-primary border-1 fs-6 fw-bold px-10 mt-11 wow animate__animated animate__fadeInUp"
                href="#jobs-anchor"
                data-wow-delay=".5s"
                data-wow-duration=".5s"
                >{{ $t('INTRO.JOIN_US') }}</a
              >
            </div>
          </div>
          <div class="mask"></div>
        </div>

        <div id="about-anchor"></div>
        <div class="about py-12 py-lg-14">
          <div class="container">
            <div class="d-flex flex-column align-items-center w-100">
              <h2 class="text-dark fs-3 fw-bold ps-3 mb-8 mb-md-11">
                {{ $t('GENERAL.NAV_OPTIONS[1]') }}<span class="text-primary fs-1">.</span>
              </h2>
              <p class="fs-4 fw-light lh-lg px-4 px-md-0">
                {{ $t('ABOUT.CONTENT') }}
              </p>
              <a
                href="https://www.104.com.tw/company/1a2x6bl9de"
                class="btn btn-lg btn-outline-dark border-1 fs-6 fw-bold px-10 mt-6 mt-md-11"
              >
                {{ $t('ABOUT.LEARN_MORE') }}</a
              >
            </div>
          </div>
        </div>

        <div id="jobs-anchor"></div>
        <div class="jobs pt-12 pb-13 pt-lg-13 pb-lg-14">
          <div class="container-fluid">
            <div class="row">
              <h2 class="text-dark text-center fs-3 fw-bold pe-3 mb-8 mb-md-11">
                {{ $t('GENERAL.NAV_OPTIONS[2]') }}<span class="text-primary fs-1">.</span>
              </h2>
              <div
                class="col-12 col-md-6 col-xl-3 container_foto mb-4 mb-md-0 wow animate__animated animate__fadeInUp"
                data-wow-duration=".5s"
                v-for="(job, index) in jobContent"
                :key="index"
              >
                <a href="https://www.104.com.tw/company/1a2x6bl9de">
                  <div class="ver_mas bg-primary text-center">
                    <span class="text-dark fw-bold">MORE</span>
                  </div>
                  <article class="job-article text-left w-100">
                    <h4 class="text-white text-row-1">{{ job.title }}</h4>
                    <h6 class="text-white text-row-2 mb-0">{{ job.subtitle }}</h6>
                  </article>
                  <img :src="require('./assets/img/jobs_' + (index + 1) + '.jpg')" alt="jobs-img" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="benefits-anchor"></div>
        <div class="benefits">
          <div
            class="container-fluid py-10 py-md-11 py-lg-12 bg-glass border-top border-bottom border-2 border-primary"
          >
            <div class="container pt-6 pt-md-8">
              <div class="d-flex flex-column align-items-center w-100 mb-6">
                <h2 class="text-light fs-3 fw-bold ps-3 mb-4 mb-md-11">
                  {{ $t('GENERAL.NAV_OPTIONS[3]') }}<span class="text-primary fs-1">.</span>
                </h2>
              </div>
              <div class="row">
                <div
                  class="col-12 col-md-6 ps-xl-12 mb-10 mb-md-12"
                  v-for="(benefit, index) in benefitsContent"
                  :key="index"
                >
                  <div class="d-flex flex-row">
                    <svg class="benifits-icon text-primary ms-4 me-7 mx-md-8">
                      <use :xlink:href="benefit.imgName" />
                    </svg>
                    <div class="benifits-contnet">
                      <h4 class="text-light">{{ benefit.title }}</h4>
                      <h6 class="text-gray fw-light">{{ benefit.subtitle }}</h6>
                    </div>
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
              <div class="container-md mb-12">
                <validation-observer v-slot="{ invalid }">
                  <form class="mb-12" id="messageForm">
                    <fieldset>
                      <h2 class="text-dark text-center fs-3 fw-bold ps-3 mb-8 mb-md-11">
                        {{ $t('GENERAL.NAV_OPTIONS[4]') }}<span class="text-primary fs-1">.</span>
                      </h2>
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
                        class="btn btn-lg btn-outline-dark border-1 fs-6 fw-bold px-6"
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
          </div>
        </div>

        <div id="information-anchor"></div>
        <div class="information mt-12 mt-lg-13">
          <div class="container">
            <div class="d-flex flex-column align-items-center w-100">
              <h2 class="text-dark fs-3 fw-bold ps-3 mb-8 mb-md-11">
                {{ $t('GENERAL.NAV_OPTIONS[5]') }}<span class="text-primary fs-1">.</span>
              </h2>
              <iframe
                frameborder="0"
                style="border: 0"
                class="bg-primary w-100"
                height="450px"
                :src="map"
              >
              </iframe>
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

import '@/assets/icon/dollar.svg';
import '@/assets/icon/insurance.svg';
import '@/assets/icon/holiday.svg';
import '@/assets/icon/health.svg';

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
      modalMessage: '',
      map: `https://www.google.com/maps/embed/v1/place?key=${process.env.VUE_APP_GCP_API_KEY}&q=302新竹縣竹北市復興三路二段168號一樓(英屬維京群島商爍星有限公司)`,
      jobContent: [],
      benefitsContent: []
    };
  },

  methods: {
    sendEmail() {
      this.isLoading = true;
      Email.send({
        SecureToken: process.env.VUE_APP_SECURE_TOKEN,
        To: process.env.VUE_APP_EMAIL_ADDRESS,
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
    },

    fillJobsContent() {
      for (let i = 0; i < this.$t('JOBS.TITLE_OPTIONS').length; i++) {
        this.jobContent.push({
          title: this.$t(`JOBS.TITLE_OPTIONS[${i}]`),
          subtitle: this.$t(`JOBS.SUBTITLE_OPTIONS[${i}]`)
        });
      }
    },

    fillBenifitsContent() {
      for (let i = 0; i < this.$t('BENIFITS.TITLE_OPTIONS').length; i++) {
        this.benefitsContent.push({
          title: this.$t(`BENIFITS.TITLE_OPTIONS[${i}]`),
          subtitle: this.$t(`BENIFITS.SUBTITLE_OPTIONS[${i}]`),
          imgName: this.$t(`BENIFITS.IMG_NAME_OPTIONS[${i}]`)
        });
      }
    }
  },

  mounted() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    this.fillJobsContent();
    this.fillBenifitsContent();
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
