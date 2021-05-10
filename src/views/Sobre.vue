<template>
  <div>
    <h1>Olá sobre</h1>

    <router-link
      class="font-bold text-green-600 p-1"
      :to="'/usuario/' + idAleatorio"
    >
      Ir para /usuario/{{ idAleatorio }}
    </router-link>

    <!-- 11) estado global -->
    <section class="my-3">
      <p>Contador global: {{ contador }}</p>
      <button @click="increment" class="ml-1 border border-black rounded p-1">
        incrementar
      </button>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      idAleatorio: Math.ceil(Math.random() * 100),
    };
  },
  computed: {
    ...mapState({
      contador: "count",
    }),
  },
  methods: {
    ...mapMutations({
      increment: "increment",
    }),
  },
};
</script>
