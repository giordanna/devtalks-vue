<!-- template HTML -->
<template>
  <main>
    <header>
      <!-- 1) print na tela -->
      <h1 class="text-lg font-bold">Olá {{ variavel }}! Altere o texto abaixo para ver mudanças</h1>
    </header>

    <section>
      <!-- 2) two-way data binding -->
      <input
        type="text"
        v-model.trim="$v.variavel.$model"
        :class="{ 'border-red-300': $v.variavel.$error }"
        class="border-2 border-gray-700 rounded p-3"
      />
      <!-- 9) validações de formulário -->
      <!-- OBS: é possível utilizar condições sem precisar adicionar mais tags HTML -->
      <!-- utilizando template. só o que tiver dentro que será renderizado -->
      <div v-if="$v.variavel.$error" class="text-red-600">
        <template v-if="!$v.variavel.required">
          *Obrigatório
        </template>
        <template v-else-if="!$v.variavel.minLength">
          *Mínimo {{ $v.variavel.$params.minLength.min }} caracteres
        </template>
      </div>
    </section>

    <!-- 3) condições, computed e watch -->
    <section>
      <div v-if="variavel.includes('dev')">
        :)
      </div>
      <!-- variável computada -->
      <div v-else-if="ehInspiring">
        :D
      </div>
      <span v-else>
        :(
      </span>
    </section>

    <!-- 4) loops e eventos de clique -->
    <section>
      <button @click="adicionar" class="border border-black rounded p-1 bg-green-300">
        adicionar
      </button>

      <button @click="remover" class="ml-1 border border-black rounded p-1 bg-green-300">
        remover
      </button>

      <!-- outra forma de condição, porém não removendo o elemento do html, só escondendo -->
      <ul v-show="false">
        <!-- key é igual ao trackBy do angular -->
        <!-- usando isso ao alterar o array a lista inteira não será renderizada novamente, apenas o elemento alterado -->
        <!-- 5) classes e estilos dinâmicos -->
        <li
          :class="{ 'bg-green-200': index >= 4 }"
          class="bg-red-200 p-1"
          v-for="(item, index) in itens"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <!-- 8) transições -->
    <section>
      <transition
        enter-active-class="transition transition-all"
        leave-active-class="transition transition-all"
        enter-class="transform translate-x-4 opacity-0"
        leave-to-class="transform translate-x-4 opacity-0"
      >
        <!-- 6) componentes -->
        <Lista v-if="ehInspiring" :itens="itens"></Lista>
      </transition>
    </section>

    <!-- 11) estado global -->
    <section class="my-3">
      <p>Contador: {{ contador }}</p>
      <button @click="increment" class="ml-1 border border-black rounded p-1 bg-green-300">
        incrementar
      </button>
    </section>
  </main>
</template>

<!-- variáveis, métodos, imports, etc -->
<script>
// aqui pode ser feito imports de componentes e métodos de libs
// e executado qualquer JS
import Lista from "@/components/Lista";
import { required, minLength } from "vuelidate/lib/validators";
import { mapState, mapMutations } from "vuex";

// aqui dentro são os métodos e variáveis do componente
export default {
  // registra os componentes usados em Home
  // se for necessário você pode dar "alias" pros componentes, por exemplo: { 'listaManeira': Lista }
  // e aí no template você usa <listaManeira /> ao invés de <Lista />
  components: { Lista },
  data() {
    // variáveis
    return {
      variavel: "inspiring",
      itens: [1, 2, 3, 4],
    };
  },
  // validações
  validations: {
    variavel: {
      required,
      minLength: minLength(2),
    },
  },
  // variáveis computadas
  computed: {
    // estado global
    ...mapState({
      contador: "count",
    }),
    ehInspiring() {
      return this.variavel.toLowerCase().includes("inspiring");
    },
  },
  // escutando mudanças de variável
  watch: {
    ehInspiring() {
      console.log("mudou!", this.ehInspiring);
    },
    variavel() {
      console.log("mudou!!!", this.variavel);
    },
  },
  // métodos/funções
  methods: {
    // mapeando as mutações do estado global pra ser usada como método
    ...mapMutations({
      increment: "increment",
    }),
    adicionar() {
      this.increment();

      // forçar validação de formulário de forma programática
      this.$v.variavel.$touch();
      this.itens.push(this.itens.length + 1);
    },
    remover() {
      this.itens.pop();
    },
  },
};
</script>

<!-- estilos de folha -->
<style scoped></style>
