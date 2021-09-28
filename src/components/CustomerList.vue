<template>
  <div class="mt-75 layout-column justify-content-center align-items-center">
    <section class="layout-row align-items-center justify-content-center">
      <input type="text" class="large" placeholder="Name"
             data-testid="app-input"/>
      <button type="submit"
              class="ml-30"
              data-testid="submit-button">
        Add Customer
      </button>
    </section>
    <ul class="styled mt-50" data-testid="customer-list">
<!--      Use this section for rendering each customer as it contains the requisite test-id required for tests to pass-->
<!--      <li class="slide-up-fade-in"-->
<!--          :data-testid="`list-item${index}`" :key="`list-item${index}`">-->
<!--      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomerList"
}
</script>

<style scoped>

</style>
