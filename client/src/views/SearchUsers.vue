<template>
  <v-container fluid fill-height>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center row>
        <v-form ref="form" class="elevation-2 pa-5" @submit.prevent="findUserId">
          <v-text-field v-model="username" type="text" label="Search for Username"></v-text-field>
          <v-btn type="submit" class="teal lighten-2">
            Search
          </v-btn>
        </v-form>
        <v-dialog v-model="loading" hide-overlay persistent width="300">
          <v-card color="primary" dark>
            <v-card-text>
              Please stand by
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="notFound" width="500">

          <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
              User "{{this.username}}" not found
            </v-card-title>

            <v-card-text>
              Please try again with a different user name.
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="notFound = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        username: '',
        loading: false,
        notFound: false
      }
    },
    methods: {
      findUserId() {
        this.loading = true
        this.$store.dispatch('findUser', this.username)
      },
      noUsers() {
        this.loading = false
        this.notFound = true
      }
    },
    watch: {
      loading(val) {
        if (!val) return

        setTimeout(this.noUsers, 1000)

      }
    }
  }
</script>