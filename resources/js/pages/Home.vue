<template>
    <h2>This is the home page</h2>
    <div class="flex justify-center items-center h-screen">
        <h1 class="test text-3xl text-purple-600 font-bold">How to Install Tailwind CSS 3 in Laravel 9 Using Vite 3 - LaraMatic</h1>
        <p class="text-green-500 text-3xl">This text should be green</p>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>
