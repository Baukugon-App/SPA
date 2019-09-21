<template>
<<<<<<< HEAD
 <header class="header">
     <h1 class="container">Home</h1>
     <h1 class="container">Cards</h1>
     <h1 class="container">About</h1>
 </header>
=======
  <nav>
    <ul>
      <li>
        <router-link class="links" to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link class="links" to="cards" exact>Cards</router-link>
      </li>
      <li>
        <router-link class="links" to="about" exact>About</router-link>
      </li>
    </ul>
  </nav>
>>>>>>> ceada9c45ac9a305f4c95b160e6f5fc44be050b2
</template>

<style scoped>
nav {
  background-color: #116466;
  height: 10%;
}
ul {
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: row;
  margin: 0 15rem 0 15rem;
}
li {
  display: flex;
  justify-content: center;
  margin: 1.8rem auto;
}
.links {
  display: flex;
  justify-content: center;
  color: #feffff;
  font-size: 2rem;
  font-family: "B612", sans-serif;
  font-display: bold;
  text-decoration: none;
}
.router-link-active {
  color: black;
}
</style>
