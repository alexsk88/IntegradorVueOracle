<template>
  <div class="row animate__animated animate__zoomIn animate__faster" v-if="categoria">
    <div class="col-4 categorias">
      <div class="input-group">
        <div class="input-group-text">
          🔍&nbsp;
          <input type="text" placeholder=" Buscar Categoria" class="input-custom" />
        </div>
      </div>

      <div class="content-categoria">
        <img class="img-category" src="../assets/add.png" />
        <h1>
          {{categoria.nombre}}
          <!-- <b>{{categoria.id}}</b> -->
        </h1>
        <p>{{categoria.descripcion}}</p>
        <div>
          <ul class="pagination pagination-sm">
            <li class="page-item" :class="{'active': min == poscategoria}">
              <router-link :to="'/categorias/'+min" class="page-link">FIRST</router-link>
            </li>
            <li class="page-item" :class="{'disabled': min == poscategoria}">
              <router-link :to="'/categorias/'+ant" class="page-link">&laquo;</router-link>
            </li>
            <li class="page-item" :class="{'disabled': max == poscategoria}">
              <router-link :to="'/categorias/'+sig" class="page-link">&raquo;</router-link>
            </li>
            <li class="page-item" :class="{'active': max == poscategoria}">
              <router-link :to="'/categorias/'+max" class="page-link">LAST</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row iconos">
        <div class="col bg-success" @click="guardar">
          <img class="icon-crud" src="../assets/add.png" alt />
        </div>
        <div class="col bg-warning" @click="editar">
          <img class="icon-crud" src="../assets/edit.png" alt />
        </div>
        <div class="col bg-danger" @click="eliminar">
          <img class="icon-crud" src="../assets/delete.png" alt />
        </div>
      </div>
    </div>
    <Productos :name="categoria.nombre" :productos="productos" />
  </div>

  <div style="text-align:center; padding-top:60px" v-else>
    <h1>Lo siento, la categoria no existe !!!</h1>
  </div>
</template>

<script>
import axios from "axios";
import Productos from "./Productos.vue";
import swal from "sweetalert";

import { Global } from "../Global";
export default {
  name: "Categorias",
  components: {
    Productos
  },
  data() {
    return {
      min: 0,
      max: 0,
      poscategoria: null,
      url: Global.url,
      categoria: null,
      sig: null,
      ant: null,
      productos: null
    };
  },
  mounted() {
    // Darle un valor a la posicicion
    this.getValueParam();
    // console.log('Vale -> ', this.poscategoria);
    this.getValueMaxMin();
    this.getCategoria();
    this.valuesSigAnt();
  },

  watch: {
    $route() {
      //  console.log(to);
      this.getValueParam();
      this.getCategoria();
      this.valuesSigAnt();
    }
  },

  methods: {
    valuesSigAnt() {
      this.sig = +this.poscategoria + 1;
      this.ant = +this.poscategoria - 1;
    },
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

        // console.log("MAX: ", this.max);
        // console.log("MIN: ", this.min);
      });
    },

    getCategoria() {
      axios.get(`${this.url}categoriabyrank/${this.poscategoria}`).then(res => {
        if (res.data.status == "success") {
          this.categoria = res.data.data;
          let id = res.data.data.id;

          // Get productos de la categoria
          axios.get(`${this.url}getproductobyidcategoria/${id}`).then(resp => {
            if (res.data.status == "success") {
              this.productos = resp.data.data;
              // console.log(this.productos);
            }
          });
        }
        // console.log(res);
        // console.log("RES ES ", res.data.data.id);
      });
    },
    guardar() {
      this.$router.push("/savecategoria");
    },
    editar() {
      this.$router.push("/editcategoria/" + this.categoria.id);
    },
    eliminar() {
      swal({
        title: "Estas seguro de elimnar?",
        text: this.categoria.nombre,
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          axios
            .delete(`${this.url}delete_categoria/${this.categoria.id}`)
            .then(res => {
              console.log(res);
              console.log("-> ", res.data.status);

              if (res.data.status == "success") {
                swal({
                  title: "Categoria boorado",
                  icon: "success"
                });
                this.getValueMaxMin();
                this.getCategoria();
                this.valuesSigAnt();
              }
            });
        } else {
          swal("Has cancelado la eliminacion");
        }
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
  margin-top: 20px;
}
.img-category {
}
.iconos {
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}
.icon-crud {
  width: 34%;
}

.content-categoria {
  padding-top: 20px;
  display: flex;
  text-align: center;
  flex-flow: column;
  align-items: center;
}
</style>