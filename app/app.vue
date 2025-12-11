<template>
  <!-- <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout> -->
  <Html :lang="currentLocale">
    <Body>
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>


<script setup>
const { locale } = useI18n()
const currentLocale = computed(() => locale.value)
</script>

<style>

</style>
