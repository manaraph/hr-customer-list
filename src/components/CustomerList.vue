<template>
  <div class="mt-75 layout-column justify-content-center align-items-center">
    <section class="layout-row align-items-center justify-content-center">
      <input
        v-model="customerName"
        type="text"
        class="large"
        placeholder="Name"
        data-testid="app-input"
      />
      <button
        type="submit"
        class="ml-30"
        data-testid="submit-button"
        @click="addCustomer"
      >
        Add Customer
      </button>
    </section>
    <ul
      v-if="customerList.length"
      class="styled mt-50"
      data-testid="customer-list"
    >
      <!--      Use this section for rendering each customer as it contains the requisite test-id required for tests to pass-->
      <li
        v-for="(customer, index) in customerList"
        class="slide-up-fade-in"
        :data-testid="`list-item${index}`"
        :key="`list-item${index}`"
      >
        {{ customer }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomerList",
  data() {
    return {
      customerName: "",
      customerList: [],
    };
  },
  mounted() {
    this.customerName = "";
  },
  methods: {
    addCustomer() {
      if (this.customerName.trim() === "") {
        this.customerName = "";
        return false;
      }
      this.customerList.push(this.customerName);
      this.customerName = "";
    },
  },
};
</script>

<style scoped>
</style>
