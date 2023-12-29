<template>

  <div class="card">
    <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
    <div class="card-body">
      <p class="card-text">{{dados.detalhes}} </p>
    </div>
  </div>
</template>

<script>
import apiMixin from "@/mixins/ApiMixin";

export default {
  name: 'servico',
  mixins: [
    apiMixin
  ],
  props: ['id'],

  created() {
    //console.log('servico', this.$props)
    this.getDadosApi(`http://localhost:3000/servicos/${this.id}`)
  },
  beforeRouteUpdate(to, from, next) {
    //to = onde está indo
    //from = de onde está vindo
    //next = função para continuar

    if(to.params.id !== undefined)  this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
    next()


  }
  /* watch: {
     $route(to) {
      if(to.params.id !== undefined)  this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
     }
   }*/
}

</script>
