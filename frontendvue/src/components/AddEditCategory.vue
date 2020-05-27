<template>
  <div
    class="animate__animated animate__fadeInLeft animate__faster container formularioCategorias col-5"
  >
    <h1 v-if="!isEdit">AGREGAR CATEGORIA</h1>
    <h1 v-if="isEdit">EDITAR CATEGORIA</h1>

    <form @submit.prevent="enviarformulario">
      <div class="form-group has-success">
        <label class="form-control-label">Nombre</label>
        <input
          type="text"
          v-model.trim="$v.categoria.nombre.$model"
          class="form-control"
          :class="{'is-valid':!$v.categoria.nombre.$invalid,
          'is-invalid':$v.categoria.nombre.$invalid}"
          id="inputValid"
        />
        <div class="invalid-feedback">El Campo debe tener mas de dos caracteres</div>
      </div>
      <div class="form-group has-success">
        <label class="form-control-label">Descripcion</label>
        <textarea
          class="form-control is-valid"
          :class="{'is-valid':!$v.categoria.descripcion.$invalid,
          'is-invalid':$v.categoria.descripcion.$invalid}"
          id="inputValid"
          v-model.trim="$v.categoria.descripcion.$model"
        ></textarea>
        <div class="invalid-feedback">El Campo debe tener mas de dos caracteres</div>
      </div>
      <button
        v-if="!isEdit"
        class="btn btn-block btn-success"
        :disabled="$v.categoria.$invalid"
      >AGREGAR</button>
      <button
        v-if="isEdit"
        class="btn btn-block btn-danger"
        :disabled="$v.categoria.$invalid"
      >EDITAR</button>
      <!-- {{$v.categoria.$invalid}} -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength } from "vuelidate/lib/validators";
import { Global } from "../Global";
import swal from "sweetalert";

export default {
  mame: "AddEditCategory",
  data() {
    return {
      isEdit: false,
      id: null,
      categoria: {
        id: "",
        nombre: "",
        descripcion: ""
      },
      url: Global.url
    };
  },
  validations: {
    categoria: {
      nombre: {
        required,
        minLength: minLength(2)
      },
      descripcion: {
        required,
        minLength: minLength(2)
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.isEdit = true;
      this.getCategorybyID();
    }
  },
  methods: {
    getCategorybyID() {
      axios.get(`${this.url}categoria/${this.id}`).then(res => {
        console.log(res);
        console.log(res.data.data[0]);
        this.categoria = res.data.data[0];
      });
    },
    enviarformulario() {
      // Aca hubo un error de names
      // Hay que tener cuidad con eso lo voy a machetiar

      // No no pero hay que tener claro una estructura
      if (this.isEdit) {
        // console.log("EDIATAR");

        axios.put(`${this.url}/update_categoria/${this.categoria.id}`,this.categoria)
        .then(res=>{
          console.log(res);
          if(res.data.status == 'success'){
             swal( {
                title: "Categoria Actualizada",
                icon: "success"
               })

               this.$router.push('/categorias/')
          }
          
        })
      } else {
        // console.log("Agregar");
        this.categoria.id = new Date().valueOf()
        console.log(this.categoria);

        axios.post(`${this.url}/save_categoria`, this.categoria)
        .then(res=>{
          if(res.data.status == 'success'){
            // TODO ERROR ???
             swal( {
                title: "Categoria Agregada",
                icon: "success"
               })
          }
        })
        
      }
    }
  }
};
</script>

<style>
.formularioCategorias {
  padding-top: 30px;
}
</style>