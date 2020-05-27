<template>
  <div class="offset-1 productos col-7">
    <div class="text-black mb-3" style="max-width: 60rem;">
      <div class="row">
        <h1>Produtos de : {{name}}</h1>
        <div class="col-10">
          <label class="sr-only" for="searchcategoria">Buscar Productos</label>
          <div class="input-group">
            <div class="input-group-text">
              🔍&nbsp;
              <input type="text" placeholder=" Buscar Producto" class="input-custom" />
            </div>
          </div>
        </div>
        <div class="col-2">
          <button class="btn btn-danger rounded">
            <b style="font-size: 20px">+</b>
          </button>
        </div>
      </div>
      <div class="card-body" v-if="productos">
        <div class="contenproductos">
          <div v-for="(item) in productos" :key="item.id">
            <hr />
            <h4 class="card-title">{{item.nombre}}</h4>
            <h5>{{item.precio_venta}}</h5>
            <button class="btn btn-danger">VER MAS</button>
          </div>
        </div>
      </div>
      <div v-else>NO EXISTEN PRODUCTOS DE ESTA CATEGORIA</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Productos",
  props: ["name", "productos"],

};
</script>

<style>
.productos {
  padding-top: 30px;
}
.contenproductos {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 60vh;
}
</style>