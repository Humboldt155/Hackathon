<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="secondary"
      >
        <q-toolbar-title>
          Sales Assistant
          <div slot="subtitle">beta</div>
        </q-toolbar-title>
              <!--<q-btn color="primary" label="Client" />-->
              <!--<q-btn outline color="primary" label="Assistant" />-->
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      page: 'client'
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
