<template>
  <footer class="footer mt-13">
    <div class="decorate contaier-fluid bg-light"></div>
    <div class="container-fluid bg-dark">
      <div class="container">
        <div class="row align-items-start py-11 pb-md-12">
          <div class="col-12 col-md-4">
            <h4 class="text-gray mb-8 mb-md-0">{{ $t('INFO.COMPANY_NAME') }}</h4>
          </div>
          <div class="col-12 col-md-4">
            <p class="text-gray fw-light px-md-3 mb-3 mb-md-0">{{ $t('INFO.COMPANY_ADDRESS') }}</p>
          </div>
          <div class="col-12 col-md-4">
            <p class="text-gray fw-light">© 2021. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {}
};
</script>
