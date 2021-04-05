<template>
  <div class="col-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
    <q-table
      title="Univesidades"
      :data="this.$store.state.ontology.universities"
      row-key="id"
      @row-click="onRowClick"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("ontology/getUniversities");
  },
  methods: {
    onRowClick(evt, row) {
      var parsedobj = JSON.parse(JSON.stringify(row));
      console.log("clicked on", parsedobj.Unversidades);
      this.$store.dispatch("ontology/getCareers", {
        university: parsedobj.Unversidades
      });
    }
  }
};
</script>

<style></style>
