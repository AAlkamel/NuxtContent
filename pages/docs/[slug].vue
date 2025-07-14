<template>
  <article>
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <ContentRenderer :value="article" />
  </article>
</template>

<script setup>
const route = useRoute()

const { data: article } = await useAsyncData('article', () =>
  queryCollection(`/blog/${route.params.slug}`).findOne()
)
</script>