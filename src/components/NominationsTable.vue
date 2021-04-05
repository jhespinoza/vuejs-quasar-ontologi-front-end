<template>
  <div class=" col-md-4 col-sm-12 col-xs-12 q-pt-md">
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
