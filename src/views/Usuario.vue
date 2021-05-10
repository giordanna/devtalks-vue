<template>
  <!-- pegando parâmetro de url -->
  <h1>Olá! Você está vendo a página do usuário {{ $route.params.id }}!</h1>
</template>

<script>
export default {
  // já tem acesso ao parâmetro no created
  created() {
    console.log(this.$route.params.id);
  },
};
</script>
