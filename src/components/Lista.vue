<template>
  <div class="border-2 rounded p-2 border-gray-700">
    <h2 class="my-3 font-bold">Componente lista</h2>

    <section class="my-3">
      <!-- estado global -->
      <p>Contador: {{ contador }}</p>
      <button @click="increment" class="ml-1 border border-black rounded p-1">
        incrementar
      </button>
    </section>

    <!-- 8) transições (grupo) -->
    <transition-group
      tag="ul"
      name="lista"
      enter-active-class="transition transition-all"
      leave-active-class="transition transition-all"
      enter-class="transform translate-x-4 opacity-0"
      leave-to-class="transform translate-x-4 opacity-0"
    >
      <li
        :class="{ 'bg-green-200': index >= 4 }"
        class="bg-red-200 p-1"
        v-for="(item, index) in itens"
        :key="item"
      >
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Lista",
  props: {
    itens: {
      type: Array,
      required: false,
      default: [1, 2, 3],
    },
  },
  // 7) ciclos de vida
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  destroyed() {
    console.log("destroyed");
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
