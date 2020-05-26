<template>
  <div class="container taller">
    <div class="row p-3">
      <!-- Categorias view -->
      <div class="col-4">
        <div class="card text-black bg-light mb-3" style="max-width: 16rem;">
          <div class="card-header">
            <div class="col-auto">
              <label class="sr-only" for="searchcategoria">Username</label>
              <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <div class="input-group-text">🔍</div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="searchcategoria"
                  placeholder="Buscar Categoria"
                />
              </div>
            </div>
          </div>
          <div class="row iconos">
            <div class="col">
              <img class="icon-crud" src="../assets/add.png" alt />
            </div>
            <div class="col">
              <img class="icon-crud" src="../assets/edit.png" alt />
            </div>
            <div class="col">
              <img class="icon-crud" src="../assets/delete.png" alt />
            </div>
          </div>
          <div class="card-body">
            <h4 class="card-title">Primary card title</h4>
            <img class="icon-crud" src="../assets/delete.png" alt />
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div>
            <ul class="pagination pagination-sm">
              <li class="page-item">
                <a class="page-link" href="#">FIRST</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">&laquo;</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">&raquo;</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">LAST</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Categorias view -->

      <!-- Producto depende de cat view -->
      <div class="col-8">
        <div class=" text-black mb-3" style="max-width: 60rem;">
          <div class="row">
              <h1>Produtos de :  Cafeteria </h1>
            <div class="col-10">
              <label class="sr-only" for="searchcategoria">Username</label>
              <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <div class="input-group-text">🔍</div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="searchcategoria"
                  placeholder="Buscar Producto"
                />
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

      <!-- Producto depende de cat view -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.taller {
  height: 90vh;
}
.icon-crud {
  width: 50%;
}
.iconos {
  text-align: center !important;
}
</style>