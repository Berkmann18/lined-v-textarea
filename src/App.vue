<template>
  <v-app>
    <v-content>
      <v-layout
        align-center>
        <v-checkbox
          id="disable"
          label="Disable textarea"
          v-model="disable"
        /><br>
        Width <v-text-field v-model="width" />px<br>
        Height <v-text-field v-model="height" />px<br>
        Resize:
        <v-radio-group v-model="resize">
          <v-radio
            id="fixed"
            value="none"
            label="Fixed"
          />
          <v-radio
            id="vertical"
            value="vertical"
            label="Vertical"
          />
          <v-radio
            id="both"
            value="both"
            label="Both"
          />
        </v-radio-group>
        <br>Validate:
        <v-radio-group v-model="validateName">
          <v-radio
            id="none"
            value="none"
            label="None"
          />
          <v-radio
            id="email"
            value="email"
            label="Email"
          />
          <v-radio
            id="telephone"
            value="telephone"
            label="Telephone Number"
          />
        </v-radio-group>
        <br>Word wrap:
        <v-radio-group v-model="nowrap">
          <v-radio
            id="wrap"
            value="false"
            label="Wrap"
          />
          <v-radio
            id="nowrap"
            value="true"
            label="No Wrap"
          />
        </v-radio-group>
        <br><br>
      </v-layout>
      <lined-v-textarea
        :disabled="disable"
        :nowrap="nowrap === 'true'"
        :validate="validate"
        :styles="{ height: `${height}px`, width: `${width}px`, resize }"
        v-model="content"
      ></lined-v-textarea>
    </v-content>
  </v-app>
</template>

<script>
import LinedVTextarea from './LinedVTextarea.vue'
import './reset.css'
const sammpleInput = `email@exampleexampleexampleexampleexampleexampleexampleexample.com
firstname.lastname@example.com
email@subdomain.exampexampleexampleexampleexampleexamplele.com
firstname+lastname@example.com
not valid
email@example.co.jp
A long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long input
(123) 456-7890
(123)456-7890
(123)456-xxxx
123-456-7890
123.456.7890`

export default {
  name: 'App',
  components: {
    LinedVTextarea
  },
  data () {
    return {
      // eslint-disable-next-line
      email: (email) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email),
      telephone: (telephone) => /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im.test(telephone),
      content: sammpleInput,
      disable: false,
      height: 300,
      nowrap: 'false',
      resize: 'both',
      validateName: 'none',
      width: 450
    }
  },
  computed: {
    validate () {
      switch (this.validateName) {
        case 'email':
          return this.email
        case 'telephone':
          return this.telephone
        default:
          return () => (true)
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 50px auto auto 50px;
}
</style>
