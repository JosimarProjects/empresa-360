<template>
  <div>
    <h5>Componente indicadores</h5>
    <p>Poderíamos recuperar os indicadores do serviço {{id}}</p>
  </div>
</template>
<script>
export default {
  name: 'indicadores',
  props: ['id'],
  created() {
    //console.log('indicadores',this.id)
  }
}

</script>
