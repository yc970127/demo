<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Cases</h1>
    <div class="row col-10 mx-auto">
      <div class="col-md-4" v-for="(article, index) in articles" :key="index">
        <div class="card mb-4">
          <img :src="article.image" class="card-img-top" alt="Article Image">
          <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <p class="card-text">{{ article.summary }}</p>
            <a :href="article.link" class="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const articles = ref([
  {
    title: 'Case 1',
    summary: 'Summary of Case 1',
    image: '/images/news/news03.jpg',
    link: '/news'
  },
  {
    title: 'Case 2',
    summary: 'Summary of Case 2',
    image: '/images/news/news02.jpg',
    link: '/news'
  },
  {
    title: 'Case 3',
    summary: 'Summary of Case 3',
    image: '/images/news/news03.jpg',
    link: '/news'
  },
   {
    title: 'Article 1',
    summary: 'Summary of article 1',
    image: '/images/news/news03.jpg',
    link: '/news'
  },
  {
    title: 'Article 2',
    summary: 'Summary of article 2',
    image: '/images/news/news02.jpg',
    link: '/news'
  },
  {
    title: 'Article 3',
    summary: 'Summary of article 3',
    image: '/images/news/news03.jpg',
    link: '/news'
  }
]);
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}
</style>