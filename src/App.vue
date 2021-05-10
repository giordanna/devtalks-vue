<template>
  <div id="app" class="container mx-auto">
    <header>
      <h1 class="text-xl mt-3 font-bold">
        Olá inspiring devs!
      </h1>

      <!-- 10) rotas -->
      <nav class=" my-3 font-bold">
        <router-link
          to="/"
          exact
          class="text-green-400"
          active-class="text-green-800"
        >
          Home
        </router-link>
        |
        <router-link
          to="/sobre"
          class="text-green-400"
          active-class="text-green-800"
        >
          Sobre
        </router-link>
      </nav>
    </header>
    <!-- rota atual renderizada -->
    <router-view />
  </div>
</template>
