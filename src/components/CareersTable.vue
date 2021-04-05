<template>
  <div class="col-md-4 col-sm-12 col-xs-12 q-pa-md">
    <q-table
      title="Carreras Univesitarias"
      :data="this.$store.state.ontology.careers"
      row-key="name"
      @row-click="onRowClick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onRowClick(evt, row) {
      var parsedobj = JSON.parse(JSON.stringify(row));
      console.log("clicked on", parsedobj.Carreras);
      this.$store.dispatch("ontology/getCareerInfo", {
        career: parsedobj.Carreras
      });
    }
  }
};
</script>

<style></style>
