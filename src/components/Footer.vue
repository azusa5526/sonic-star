<template>
  <footer class="footer mt-13">
    <div class="pre-footer contaier-fluid border-bottom border-primary border-4 bg-light"></div>
    <div class="container-fluid bg-dark">
      <div class="container">
        <div class="row align-items-start py-11 pb-md-12">
          <div class="col-12 col-lg-6">
            <h4 class="text-gray mb-10">{{ $t('INFO.COMPANY_NAME') }}</h4>
            <p class="text-gray fw-light mb-3">Email contact@sonicstar.tw</p>
            <p class="text-gray fw-light mb-3">
              {{ $t('INFO.COMPANY_ADDRESS') }}
            </p>
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
