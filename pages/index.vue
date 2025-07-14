<script setup >
const fooPost = await queryCollection('docs').path('/docs/home').first()
// useSeoMeta({
//   title: fooPost.value?.title,
//   description: fooPost.value?.description
// })
</script>

<template>
  <div>
    <h1>{{ fooPost?.title }}</h1>
    <p>{{ fooPost?.description }}</p>
    <ContentRenderer v-if="fooPost" :value="fooPost" />
    <div v-else>Home not found</div>
  </div>
</template>