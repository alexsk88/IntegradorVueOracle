<template>
  <nav class="container navigat  navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/categorias" >
        <img src="../assets/LogoCon.png" 
        width="28%"
        alt="">
        Market App</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <router-link to="/categorias" class="nav-link">
            Categorias
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
           <router-link to="/categorias" class="nav-link">
            Consultas
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style>
.navigat{
  height: 10vh;
}
</style>