<template>
	<div>
		<!-- 表单主体 -->
		<section class="py-5 bg-light">
			<div class="container">
				<div class="row g-4 align-items-center">
					<!-- 左侧文字介绍 -->
					<div class="col-md-6">
						<h2 class="fw-bold mb-3">{{ $t('contact.title') }}</h2>
						<p class="text-muted mb-4">
							{{ $t('contact.description') }}
						</p>
						<ul class="list-unstyled">
							<li class="mb-2">
								<i class="bi bi-check-circle text-success me-2"></i>
								{{ $t('contact.features[0]') }}
							</li>
							<li class="mb-2">
								<i class="bi bi-check-circle text-success me-2"></i>
								{{ $t('contact.features[1]') }}
							</li>
							<li class="mb-2">
								<i class="bi bi-check-circle text-success me-2"></i>
								{{ $t('contact.features[2]') }}
							</li>
						</ul>
					</div>

					<!-- 右侧表单 -->
					<div class="col-md-6">
						<div class="card shadow border-0 rounded-3">
							<div class="card-body p-4">
								<form @submit.prevent="handleSubmit">
									<div class="mb-3">
										<label for="name" class="form-label">{{ $t('form.name.label') }}<span
												class="text-danger">*</span></label>
										<input type="text" id="name" v-model="form.name" class="form-control"
											:placeholder="$t('form.name.placeholder')" required />
									</div>
									<div class="mb-3">
										<label for="email" class="form-label">{{ $t('form.email.label') }}<span
												class="text-danger">*</span></label>
										<input type="email" id="email" v-model="form.email" class="form-control"
											:placeholder="$t('form.email.placeholder')" required />
									</div>
									<div class="mb-3">
										<label for="company" class="form-label">{{ $t('form.company.label') }}</label>
										<input type="text" id="company" v-model="form.company" class="form-control"
											:placeholder="$t('form.company.placeholder')" />
									</div>
									<div class="mb-3" v-if="$i18n.locale === 'zh'">
										<label for="whatsapp" class="form-label">手机号<span
												class="text-danger">*</span></label>
										<input type="text" id="whatsapp" v-model="form.whatsapp" class="form-control"
											placeholder="请输入您的手机号" />

									</div>
									<div class="mb-3" v-else>
										<label for="whatsapp" class="form-label">{{ $t('form.whatsapp.label') }}<span
												class="text-danger">*</span></label>
										<input type="text" id="whatsapp" v-model="form.whatsapp" class="form-control"
											:placeholder="$t('form.whatsapp.placeholder')" />

									</div>
									<div class="mb-3">
										<label for="message" class="form-label">{{ $t('form.message.label') }}<span
												class="text-danger">*</span></label>
										<textarea id="message" v-model="form.message" rows="4" class="form-control"
											:placeholder="$t('form.message.placeholder')"></textarea>
									</div>
									<!-- Honeypot 反机器人字段（隐藏） -->
									<input type="text" v-model="form.hiddenTrap" class="d-none" autocomplete="off" />
									<div class="d-grid">
										<button type="submit" class="btn btn-primary btn-lg" :disabled="loading">
											{{ loading ? $t('form.submitting') : $t('form.submit') }}
										</button>

									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- 提交成功提示 -->
				<div v-if="submitted" class="alert alert-success mt-4" role="alert">
					✅ {{ $t('form.successMessage') }}
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const router = useRouter()
// 响应式数据
const form = ref({
	name: '',
	email: '',
	company: '',
	whatsapp: '',
	message: '',
	hiddenTrap: '' // honeypot 字段
})

const submitted = ref(false)
const loading = ref(false)
let lastSubmitTime = 0

const handleSubmit = async () => {
	router.push('/feedback')
	// 防重复提交（loading）
	if (loading.value) return

	// ⏳ 前端节流：10 秒只能提交一次
	const now = Date.now()
	if (now - lastSubmitTime < 30000) {
		alert("Please wait a moment before submitting again.")
		return
	}
	lastSubmitTime = now

	loading.value = true

	// 🛡️ Honeypot 检查（若机器人填写则拒绝）
	if (form.value.hiddenTrap) {
		console.warn("Bot detected — honeypot field filled:", form.value.hiddenTrap)
		loading.value = false
		return
	}

	try {
		const jsonData = {
			cusName: form.value.name,
			cusEmail: form.value.email,
			cusWhatsapp: form.value.whatsapp,
			cusCompany: form.value.company,
			message: form.value.message,
			source: window.location.href,
		}

		const response = await fetch("https://erp.hookahcoalplant.com/quotes/valid/fromWebsite1", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(jsonData),
		})

		if (!response.ok) throw new Error()

		// 显示成功提示
		// submitted.value = true
		// 提交成功后跳转
		

		// 清空表单
		form.value = {
			name: '',
			email: '',
			company: '',
			whatsapp: '',
			message: '',
			hiddenTrap: '',
		}
		// router.push('/feedback')
		// 5 秒后隐藏提示
		// setTimeout(() => {
		// 	submitted.value = false
		// }, 3000)

	} catch (e) {
		alert("❌ Submission failed")
	} finally {
		loading.value = false
	}
}


// -------- SEO 设置 -------- //
useSeoMeta({
	title: 'Get a Quote - EP Machinery',
	description: 'Contact us for custom hookah charcoal machine quotes and production line solutions.',
	ogTitle: 'Get a Quote for Hookah Charcoal Machines - EP Machinery',
	ogDescription: 'Request a customized quote for your hookah charcoal production needs.',
})

const {
	locale
} = useI18n()
const keywords = computed(() => {
	const map = {
		en: 'hookah charcoal machine quote, charcoal production line price, get quotation, contact manufacturer',
		zh: '水烟炭机器报价, 炭生产线价格, 获取报价, 联系制造商'
	}
	return map[locale.value] || map.en
})

useHead({
	meta: [{
		name: 'keywords',
		content: keywords
	}]
})
</script>


<style scoped>
section {
	scroll-margin-top: 70px;
}

.card {
	border-radius: 1rem;
}

.btn-primary {
	background-color: #007bff;
	border: none;
}

.btn-primary:hover {
	background-color: #0069d9;
}

.bi-check-circle {
	font-size: 1.2rem;
}
</style>