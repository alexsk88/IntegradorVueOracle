<template>
  <div class="offset-1 productos col-7">
    <div class="text-black mb-3" style="max-width: 60rem;">
      <div class="row">
        <h1>Produtos de : {{name}}</h1>
        <div class="col-10">
          <label class="sr-only" for="searchcategoria">Username</label>
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
      <div class="card-body">
        <h4 class="card-title">Primary card title</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Productos",
  props: ["id", "name"]
};
</script>

<style>
.productos {
  padding-top: 30px;
}
</style>