<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar rounded>
            <img src="https://lh3.googleusercontent.com/proxy/IqqRi6Wa-BqzzaanoZbLIsfu1WhWqDwE6FhcAkzIg6NQrGIADx6aiafU4fuMQb59XiP9ZO4TDxcxwPxGFB9PL7TyNONB0hXhBCiVGRRf7ubHBrCyF18TE4_NlCwaZk-NUg">
          </q-avatar>
          Postulación a Univesidad
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>