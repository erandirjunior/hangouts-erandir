<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <input v-model="form.name"/>
    <pre>{{ $data }}</pre>
    <button @click="save">Salvar</button>
  </div>
</template>

<script>
export default {
  name: 'AppForm',
  props: {
    message: String,
    service: Object
  },
  data: () => ({
    form: {
      name: ''
    }
  }),
  methods: {
    save () {
      this.service.update(this.form)
        .then(() => {
            window.alert('Tudo certo!')
        })
    }
  },
  created () {
    // this.form.name = this.message
  },
  mounted () {
    this.service  .read(1)
      .then(response => {
          this.form = response.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
