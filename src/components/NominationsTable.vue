<template>
  <div class="col-4 col-md-6 col-sm-12 col-xs-12 q-pa-md">
    <q-table
      title="Postulaciones"
      :data="this.$store.state.ontology.nominations"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
