<template>
 <header class="header">
     <h1 @click=" " class="container">Home</h1>
     <h1 class="container">Cards</h1>
     <h1 class="container">About</h1>
 </header>
</template>

<style scoped>
.header{
    background-color: brown;
    justify-content: center;
    width: 100%;
    height: 10rem;
    display: flex;
    padding: 0 10rem 0 10rem;
}
.container{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    size: 2em;
}

h1 {
    font-size: 3rem;
}
</style>
