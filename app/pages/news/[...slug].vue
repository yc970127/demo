<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, localeProperties } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData(
  () => `page-${locale.value}-${slug.value}`,
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollection(collection).path(slug.value).first()
    return content
  },
  { watch: [locale] }
)


if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta(page.value.seo)
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-10 d-flex flex-column mx-auto">
       <h1 class="text-center py-3">{{ page?.title }}</h1>
       <NuxtLinkLocale class="col-sm-6 my-1" to="/news">News
						</NuxtLinkLocale>
       <NuxtLinkLocale class="col-sm-6 my-1" to="/news/01">News01
						</NuxtLinkLocale>
            <NuxtLinkLocale class="col-sm-6 my-1" to="/news/02">News02
						</NuxtLinkLocale>
        <ContentRenderer v-if="page" :value="page" />
        <div v-else>
          <h1>Page not found</h1>
          <p>This page doesn't exist in {{ locale }} language.</p>
        </div>
      </div>
    </div>
  </div>
</template>