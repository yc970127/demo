<template>
    <div class="container mt-5">
        <div class="row">
            <!-- Left Column: Solutions -->
            <div class="col-md-9">
                <div v-for="(solution, index) in solutions" :key="index" class="mb-4">
                    <div class="card">
                        <div class="row g-0">
                            <!-- Image Left -->
                            <div class="col-md-2">
                                <img :src="solution.image" class="img-fluid h-100" style="object-fit: cover;"
                                    alt="Solution Image">
                            </div>
                            <!-- Text Right -->
                            <div class="col-md-10 d-flex align-items-center">
                                <div class="card-body">
                                    <h5 class="card-title">{{ solution.title }}</h5>
                                    <p class="card-text">{{ solution.description }}</p>
                                    <a :href="solution.link" class="">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column: Popular Solutions -->
            <div class="col-md-3">
                <div class="sticky-right">
                    <div class="card">
                        <div class="card-header py-2">
                            <h5 class="m-0">Popular Solutions</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li v-for="(popular, index) in popularSolutions" :key="index" class="list-group-item">
                                <a :href="popular.link">{{ popular.title }}</a>
                            </li>
                        </ul>
                    </div>
                    <!-- 我们的案例 -->
                    <div class="card mt-4">
                        <div class="card-header py-2">
                            <h5 class="m-0">Cases</h5>
                        </div>
                        <div id="caseCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                            <!-- 指示器 -->
                            <div class="carousel-indicators">
                                <button v-for="(caseItem, index) in caseStudies" :key="'indicator-' + index"
                                    type="button" data-bs-target="#caseCarousel" :data-bs-slide-to="index"
                                    :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : undefined"
                                    :aria-label="'Slide ' + (index + 1)">
                                </button>
                            </div>

                            <!-- 轮播项 -->
                            <div class="carousel-inner">
                                <div v-for="(caseItem, index) in caseStudies" :key="index"
                                    :class="['carousel-item', { active: index === 0 }]">
                                    <a :href="caseItem.link">
                                        <img :src="caseItem.image" class="d-block w-100" :alt="caseItem.title">
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const headers = useRequestHeaders(['cookie'])
console.log('Fetched data:', headers);

const solutions = ref([
    {
        title: 'Solution 1',
        description: 'Description for solution 1',
        image: '/images/solution/news01.jpg',
        link: '/'
    },
    {
        title: 'Solution 2',
        description: 'Description for solution 2',
        image: '/images/solution/news02.jpg',
        link: '/'
    },
    {
        title: 'Solution 3',
        description: 'Description for solution 3',
        image: '/images/solution/news03.jpg',
        link: '/'
    },
    {
        title: 'Solution 1',
        description: 'Description for solution 1',
        image: '/images/solution/news01.jpg',
        link: '/'
    },
    {
        title: 'Solution 2',
        description: 'Description for solution 2',
        image: '/images/solution/news02.jpg',
        link: '/'
    },
    {
        title: 'Solution 3',
        description: 'Description for solution 3',
        image: '/images/solution/news03.jpg',
        link: '/'
    }
]);

const popularSolutions = ref([
    {
        title: '还原铁粉解决方案',
        link: '/'
    },
    {
        title: '煤粉压球解决方案',
        link: '/'
    },
    {
        title: '矿类压球解决方案',
        link: '/'
    }
]);

const caseStudies = ref([
    {
        title: 'Case Study 1',
        image: '/images/solution/news03.jpg',
        link: '/cases'
    },
    {
        title: 'Case Study 2',
        image: '/images/solution/news03.jpg',
        link: '/cases'
    },
    {
        title: 'Case Study 3',
        image: '/images/solution/news03.jpg',
        link: '/cases'
    }
]);
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.card-header {
    background-color: #1e8cbe;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: bold;
}

.sticky-right {
    position: sticky;
    top: 5rem;
}
</style>