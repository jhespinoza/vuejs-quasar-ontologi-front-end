<template>
  <div class="col q-pt-md">
    <q-card class="card-bg text-black">
      <q-card-section class="text-h6 ">
        <div class="text-h6">Perfil</div>
        <div class="text-subtitle2"></div>
      </q-card-section>
      <q-card-section>
        <q-select
          v-model="selected"
          :options="$store.state.ontology.students"
          @input="onValueChange"
          color="primary"
          filled
          clearable
          label="Saleccione un estudiante"
        />
      </q-card-section>
      <q-card-section class="q-pa-sm">
        <div class="row">
          <q-list class="column">
            <q-item class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <q-item-section>
                <q-input
                  color="black"
                  dense
                  label="Nombre estudiante"
                  v-model="$store.state.ontology.student.nombre"
                />
              </q-item-section>
            </q-item>
            <q-item class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <q-item-section>
                <q-input
                  color="black"
                  dense
                  label="Cedula"
                  v-model="$store.state.ontology.student.cedula"
                />
              </q-item-section>
            </q-item>
          </q-list>
          <q-list class="column">
            <q-item class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <q-item-section>
                <q-input
                  color="black"
                  dense
                  label="Puntaje"
                  v-model="$store.state.ontology.student.puntaje"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null
    };
  },
  created() {
    this.$store.dispatch("ontology/getStudents");
  },
  methods: {
    onValueChange() {
      var parsedobj = JSON.parse(JSON.stringify(this.selected));
      this.$store.dispatch("ontology/getStudent", {
        cedula: parsedobj.value
      });
      this.$store.dispatch("ontology/getNominations", {
        cedula: parsedobj.value
      });
    }
  }
};
</script>

<style></style>
