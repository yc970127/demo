<template>
  <!-- 主标题区域 -->
  <section class="hero-section">
    <div class="container text-center my-3">
      <h1>{{ $t('about-us.hero.title') }}</h1>
      <p class="lead">{{ $t('about-us.hero.description') }}</p>
    </div>
  </section>

  <!-- 公司介绍 -->
  <section class="company-intro">
    <div class="container py-3">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-lg-0">
          <h3 class="fw-bold text-primary">{{ $t('about-us.companyIntro.title') }}</h3>
          <p>{{ $t('about-us.companyIntro.paragraph1') }}</p>
          <p>{{ $t('about-us.companyIntro.paragraph2') }}</p>
        </div>
        <div class="col-md-6" data-aos="fade-left" data-aos-delay="200">
          <img 
            class="py-1" 
            src="/images/about-us/about-us.jpg" 
            :alt="$t('about-us.companyIntro.imageAlt')"
            style="width: 100%; object-fit: cover;"
          >
        </div>
      </div>
    </div>
  </section>

  <!-- 研发与技术实力 -->
  <section class="rd-section pb-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-12" data-aos="fade-up" data-aos-delay="200">
          <h3 class="fw-bold mb-3 text-primary">{{ $t('about-us.rdStrength.title') }}</h3>
          <p>{{ $t('about-us.rdStrength.paragraph1') }}</p>
          <p>{{ $t('about-us.rdStrength.paragraph2') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 全球服务与合作 -->
  <section class="pb-5">
    <div class="container" data-aos="fade-up">
      <h3 class="fw-bold mb-4 text-primary">{{ $t('about-us.globalPresence.title') }}</h3>
      <p class="mb-4">{{ $t('about-us.globalPresence.paragraph1') }}</p>
      <p>{{ $t('about-us.globalPresence.paragraph2') }}</p>
    </div>
  </section>
</template>

<script setup>
// 设置页面 SEO
useSeoMeta({
  title: 'About Us - EP Machinery',
  description: 'Learn about EP Machinery - professional manufacturer of hookah charcoal machines with years of experience and global presence.',
  ogTitle: 'About EP Machinery - Professional Charcoal Machine Manufacturer',
  ogDescription: 'Discover our company history, R&D capabilities, and global service network.',
})

// 设置关键词
const { locale } = useI18n()
const keywords = computed(() => {
  const keywordsMap = {
    en: 'about EP Machinery, charcoal machine manufacturer, company introduction, R&D team',
    zh: '关于EP机械, 炭机器制造商, 公司介绍, 研发团队'
  }
  return keywordsMap[locale.value] || keywordsMap.en
})

useHead({
  meta: [
    { name: 'keywords', content: keywords }
  ]
})
</script>

<script>
</script>

<style>
</style>