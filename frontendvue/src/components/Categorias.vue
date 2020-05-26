<template>
  <div class="row">
    <div class="col-4 categorias">
      <div class="input-group">
        <div class="input-group-text">
          🔍&nbsp;
          <input type="text" placeholder=" Buscar Categoria" class="input-custom" />
        </div>
      </div>

      <div class="content-categoria">
        <img style="width: 40%" src="../assets/add.png" />
        <h1>{{categoria.nombre}}</h1>
        <p>{{categoria.descripcion}}</p>
        <div>
          <ul class="pagination pagination-sm">
            <li class="page-item">
              <router-link :to="'/categorias/'+min" class="page-link">FIRST</router-link>
            </li>
            <li class="page-item active">
              <router-link :to="'/categorias/'+min" class="page-link">&laquo;</router-link>
            </li>
            <li class="page-item">
              <router-link :to="'/categorias/'+min" class="page-link">&raquo;</router-link>
            </li>
            <li class="page-item">
              <router-link :to="'/categorias/'+max" class="page-link">LAST</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row iconos">
        <div class="col bg-success">
          <img class="icon-crud" src="../assets/add.png" alt />
        </div>
        <div class="col bg-warning">
          <img class="icon-crud" src="../assets/edit.png" alt />
        </div>
        <div class="col bg-danger">
          <img class="icon-crud" src="../assets/delete.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Global } from "../Global";
export default {
  name: "Categorias",

  data() {
    return {
      min: 0,
      max: 0,
      poscategoria: null,
      url: Global.url,
      categoria: {
        id: null,
        nombre: "",
        descripcion: ""
      }
    };
  },
  mounted() {
    // Darle un valor a la posicicion
    this.getValueParam()
    
    // console.log('Vale -> ', this.poscategoria);
    this.getValueMaxMin();

    this.getCategoria();
  },

  watch: {
     $route() {
      //  console.log(to);
         this.getValueParam();
         this.getCategoria();
     }
  },

  methods: {
    getValueParam() {
      if (this.$route.params.id != null || this.$route.params.id != undefined) {
        this.poscategoria = this.$route.params.id;
      } else {
        this.poscategoria = 1;
      }
    },
    getValueMaxMin() {
      axios.get(`${this.url}getCategoriaMaxMin`).then(res => {
        this.max = res.data.data.max;
        this.min = res.data.data.min;
      });
    },

    getCategoria() {
      axios.get(`${this.url}categoriabyrank/${this.poscategoria}`).then(res => {
        this.categoria = res.data.data;
        // console.log("ESTA ESA? ", this.categoria);
      });
    }
  }
};
</script>

<style>
.categorias {
  display: flex;
  flex-flow: column wrap;
  padding-top: 30px;
  margin-left: 20px;
  margin-top: 20px;
}
.iconos {
  margin-top: 10px;
  text-align: center;
}
.icon-crud {
  width: 34%;
}
.input-group-text {
  border-radius: 30px !important;
  background-color: white !important;
  width: 100%;
}
.input-custom {
  border: none;
  background: transparent;
}
.input-custom:focus {
  outline: none !important;
}
.content-categoria {
  padding-top: 20px;
  display: flex;
  text-align: center;
  flex-flow: column;
  align-items: center;
}
</style>