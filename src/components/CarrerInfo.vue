<template>
 <div class="col-4 col-md-4 col-sm-12 col-xs-12 q-pa-md">
  <q-card class="card-bg text-black">
    <q-card-section class="text-h6 ">
      <div class="text-h6">Información de carrera</div>
      <div class="text-subtitle2"></div>
    </q-card-section>
    <q-card-section class="q-pa-sm">
      <div class="row">
        <q-list class="column">
          <q-item class="col-6">
            <q-item-section>
              <q-input
                color="black"
                dense
                label="Nombre"
                v-model="$store.state.ontology.career.nombre"
              />
            </q-item-section>
          </q-item>
          <q-item class="col-6">
            <q-item-section>
              <q-input
                color="black"
                dense
                label="Numero de cupos"
                v-model="$store.state.ontology.career.cupos"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list class="column">
          <q-item class="col-6">
            <q-item-section>
              <q-input
                color="black"
                dense
                label="Puntaje minimo"
                v-model="$store.state.ontology.career.puntajeMin"
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
export default {};
</script>

<style></style>
