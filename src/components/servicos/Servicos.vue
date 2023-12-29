<template>
  <div>
    <h5>Serviços</h5>
    <hr>
    <div class="row">
      <div class="row">
        <div class="col mb-2" v-for="d in dados" :key="d.id">
          <div class="card" style="width: 11rem">
            <img class="card-img-top" :src="`/img/${d.icone}`" alt="Card image cap">
            <div class="card-body text-center">
              <RouterLink :to="{name: 'servico', params: {id: d.id}}">
                <p class="card-text">{{d.servico}}</p>
              </RouterLink>
            </div>
          </div>

        </div>
      </div>
    </div>
    <router-view class="mt-3"/> <!-- default> -->
    <router-view name="opcoes" class="mt-3"/>
    <router-view name="indicadores" class="mt-3"/>
  </div>

</template>

<script>
import apiMixin from "@/mixins/ApiMixin";

export default {
  name: 'servicos',
  mixins: [
    apiMixin
  ],
  created() {
    this.getDadosApi('http://localhost:3000/servicos')
  }
}
</script>
