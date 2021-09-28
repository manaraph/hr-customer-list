<template>
  <div>
    <h8k-navbar v-bind:header="title"></h8k-navbar>
    <CustomerList/>
  </div>
</template>

<script>
import CustomerList from "@/components/CustomerList";
export default {
  components : {
    CustomerList
  },
  data() {
    return {
      title : 'Customer List'
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/h8k-design/dist/index.css';
</style>
