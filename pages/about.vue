<template>
    <div>

        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta unde iusto neque, 
            saepe praesentium nesciunt reiciendis itaque! At cumque laboriosam dolorum magni qui tempore, 
            nostrum reiciendis labore sed porro.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta unde iusto neque, 
            saepe praesentium nesciunt reiciendis itaque! At cumque laboriosam dolorum magni qui tempore, 
            nostrum reiciendis labore sed porro.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/MXN')
</script>

<style scoped>

h2
{
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>