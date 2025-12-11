<template>
	<div>
		<!--页眉 -->
		<HeaderComponent />
		<!-- 页面内容 <NuxtPage />或者<slot />，注意区别
		 在 Nuxt.js 中使用，<NuxtPage /> 会自动渲染当前页面，而 <slot /> 是用于插入动态内容的插槽，两者的侧重点不同
		 网站仅有一个布局，建议使用<NuxtPage />
		 -->
		<NuxtPage />
		<!-- <slot /> -->
		<!-- 右侧固定图标栏 -->
		<IconBar />
		<!--页脚-->
		<FooterComponent />
	</div>


</template>

<script setup>
import HeaderComponent from '~/components/Header/header.vue'
import FooterComponent from '~/components/Footer/footer.vue'
</script>

<style></style>