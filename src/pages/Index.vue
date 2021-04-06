<template>
  <q-page class="q-pa-sm">
    <div class="row">
      <university-table />
      <careers-table />
      <carrer-info />
    </div>
    <div class="row">
        <user-info />
        <nominations-table />
      </div>
  </q-page>
</template>

<script>
import UniversityTable from "src/components/UniversityTable.vue";
import CareersTable from "src/components/CareersTable.vue";
import CarrerInfo from "src/components/CarrerInfo.vue";
import UserInfo from "src/components/UserInfo.vue";
import NominationsTable from "src/components/NominationsTable.vue";
export default {
  components: {
    UniversityTable,
    CareersTable,
    CarrerInfo,
    UserInfo,
    NominationsTable
  },
  name: "PageIndex"
};
</script>
<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 10px;
  background-color: rgb(240, 242, 245);
  position: relative;
  .chart-wrapper {
    background: #fff;
    padding: 10px 10px 0;
    margin-bottom: 10px;
  }
}
@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 4px;
  }
}
</style>
