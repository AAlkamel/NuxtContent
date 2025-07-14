<template>
  <div>
    <h1>المدونة</h1>
    {{ allPosts.length === 0 ? 'لا توجد مقالات' : '' }}
    <div v-for="article in allPosts" :key="article._path">
      <NuxtLink :to="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        {{ article._path }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const allPosts = await queryCollection('docs')
  .all()
</script>