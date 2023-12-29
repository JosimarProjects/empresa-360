<template>
  <div>
    <h5>Componente Opções</h5>
    <p>Poderíamos recuperar as opções do serviço {{id}}</p>
  </div>
</template>
<script>
export default {
  name: 'opcoes',
  props: ['id'],
  created(){
    //console.log('opcoes',this.id)
  },
  beforeRouteUpdate() {
    console.log('guarda de componente beforeRouteUpdate')
  }
}
</script>
