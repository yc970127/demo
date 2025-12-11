<template>
	<!-- 页脚 -->
	<div class="container-fluid pb-4 mt-4 footer">
		<div class="row">
			<div class="col-sm-12 col-lg-9 d-md-flex m-auto">

				<!-- 联系方式 -->
				<div class="col-12 col-md-4 col-lg-3 pt-4 px-2">
					<h3>{{ $t('footer.contact_us') }}</h3>

					<address>
						<strong>{{ $t('footer.company_name') }}</strong><br>
						{{ $t('footer.address_line1') }}<br>
						<div v-if="$i18n.locale === 'zh'">
							<abbr title="Telephone">微信:</abbr> +86 136 7336 1755 (Hank) <br>
							<abbr title="Mobile">微信:</abbr> +86 136 3371 3237 (Chris)<br>
						</div>
						<div v-else>
							<abbr title="Telephone">WA:</abbr> +86 136 7336 1755 (Hank) <br>
							<abbr title="Mobile">WA:</abbr> +86 136 3371 3237 (Chris)<br>
						</div>
					</address>

					<address>
						<strong>E-mail</strong><br>
						<a href="mailto:sales@ep-machine.com">sale@ep-machine.com</a><br>
					</address>

					<h4>{{ $t('footer.social') }}</h4>
					<div class="row pt-2">
						<div class="col-3"> <a href="https://www.facebook.com/"> <svg t="1761211696650" class="icon"
									viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5589"
									width="48" height="48">
									<path
										d="M511.922276 511.609221m-511.609221 0a511.609221 511.609221 0 1 0 1023.218442 0 511.609221 511.609221 0 1 0-1023.218442 0Z"
										fill="#3A5A98" p-id="5590"></path>
									<path
										d="M873.837341 150.598776c199.795873 199.795873 199.804509 523.742792-0.008636 723.553779-199.804509 199.795873-523.757905 199.795873-723.553778 0L873.837341 150.598776z"
										fill="#345387" p-id="5591"></path>
									<path
										d="M1020.219594 569.232889L650.137037 199.141697l-192.146542 192.146542 11.44701 11.44701-109.398609 109.389973 89.5423 89.542301-11.777336 11.770859 96.941188 96.941188-111.758394 111.758395 190.918072 190.918072c215.291005-43.568588 381.473432-222.312068 406.314868-443.823148z"
										fill="#2E4D72" p-id="5592"></path>
									<path
										d="M422.47713 321.554749v85.800756h-62.859239v104.923006h62.859239v311.763691h129.125378V512.278511h86.649243s8.117834-50.319776 12.045052-105.318102h-98.202043v-71.745677c0-10.71295 14.072352-25.132901 27.991414-25.132901h70.355282V200.853783h-95.656584c-135.505218-0.006477-132.307742 105.013683-132.307742 120.700966z"
										fill="#FFFFFF" p-id="5593"></path>
								</svg> </a> </div>
						<div class="col-3"> <a href="https://www.youtube.com/"> <svg t="1761211504093" class="icon"
									viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5211"
									width="48" height="48">
									<path
										d="M426.666667 682.666667V384l256 149.845333L426.666667 682.666667z m587.093333-355.541334s-10.026667-71.04-40.704-102.357333c-38.954667-41.088-82.602667-41.258667-102.613333-43.648C727.168 170.666667 512.213333 170.666667 512.213333 170.666667h-0.426666s-214.954667 0-358.229334 10.453333c-20.053333 2.389333-63.658667 2.56-102.656 43.648-30.677333 31.317333-40.661333 102.4-40.661333 102.4S0 410.538667 0 493.952v78.293333c0 83.456 10.24 166.912 10.24 166.912s9.984 71.04 40.661333 102.357334c38.997333 41.088 90.154667 39.765333 112.938667 44.074666C245.76 893.568 512 896 512 896s215.168-0.341333 358.442667-10.752c20.053333-2.432 63.658667-2.602667 102.613333-43.690667 30.72-31.317333 40.704-102.4 40.704-102.4s10.24-83.413333 10.24-166.869333v-78.250667c0-83.456-10.24-166.912-10.24-166.912z"
										fill="#FF0000" p-id="5212"></path>
								</svg> </a> </div>
						<div class="col-3"> <a href="https://www.linkedin.com/"> <svg t="1761211638762" class="icon"
									viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4613"
									width="48" height="48">
									<path
										d="M512 1024C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512z m-137.762133-286.378667V397.380267h-102.4V737.621333h102.4z m-51.2-488.448c-33.024 0-54.5792 22.954667-53.9136 53.589334-0.682667 29.218133 20.8896 52.872533 53.248 52.872533 33.672533 0 55.2448-23.6544 55.2448-52.8896-0.682667-30.6176-21.572267-53.572267-54.5792-53.572267z m133.410133 488.448h102.4V541.405867c0-9.728 1.365333-20.1728 4.061867-26.453334 6.724267-19.456 23.569067-39.645867 51.882666-39.645866 37.034667 0 51.882667 29.917867 51.882667 73.762133V737.621333h102.4V535.842133c0-100.181333-50.517333-146.1248-117.9136-146.1248-54.562133 0-88.251733 32.7168-101.7344 54.272h-2.030933l-4.7104-46.609066h-88.9344c1.348267 29.917867 2.696533 66.0992 2.696533 108.544V737.621333z"
										fill="#0073B1" p-id="4614"></path>
								</svg> </a> </div>
						<div class="col-3"> <a href="https://www.x.com/"><svg t="1761211805869" class="icon"
									viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6567"
									width="48" height="48">
									<path
										d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4 35.4-21.1 62.3-54.4 75-94-32.7 19.5-69.7 33.8-108.2 41.2C765.4 194.6 721.1 174 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5-14.8 25.4-23.2 54.4-23.2 86.1 0 59.2 30.1 111.4 76 142.1-28-1.1-54.4-9-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4-14.3 3.7-29.6 5.8-44.9 5.8-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-0.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-0.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"
										fill="#1296DB" p-id="6568"></path>
								</svg> </a>
						</div>
					</div>
				</div>

				<!-- 表单 -->
				<div class="col-12 col-md-8 col-lg-6 pt-4 px-2" id="feedbackFormFootDiv">
					<h3 class="text-center">{{ $t('footer.message') }}</h3>

					<form class="row" id="feedbackFormFoot">

						<div class="form-group col-md-6">
							<label for="cus_name">{{ $t('footer.name') }}<span class="text-danger">*</span></label>
							<input type="text" class="form-control" id="cus_name" name="cus_name" required
								:placeholder="$t('footer.name_placeholder')">
						</div>

						<div class="form-group col-md-6">
							<label for="cus_email">{{ $t('footer.work_email') }}<span
									class="text-danger">*</span></label>
							<input type="email" class="form-control" id="cus_email" name="cus_email" required
								:placeholder="$t('footer.work_email_placeholder')">
						</div>

						<div class="form-group col-md-6" v-if="$i18n.locale === 'zh'">
							<label for="cus_whatsapp">手机号<span class="text-danger">*</span></label>
							<input type="tel" class="form-control" id="cus_whatsapp" name="cus_whatsapp" required
								pattern="[()+-0123456789 ]{7,30}" placeholder="请输入您的手机号">
						</div>

						<div class="form-group col-md-6" v-else>
							<label for="cus_whatsapp">{{ $t('footer.whatsapp') }}<span
									class="text-danger">*</span></label>
							<input type="tel" class="form-control" id="cus_whatsapp" name="cus_whatsapp" required
								pattern="[()+-0123456789 ]{7,30}" :placeholder="$t('footer.whatsapp_placeholder')">
						</div>

						<div class="form-group col-md-6">
							<label for="cus_country">{{ $t('footer.country') }}<span
									class="text-danger">*</span></label>
							<input type="text" class="form-control" id="cus_country" name="cus_country" required
								:placeholder="$t('footer.country_placeholder')">
						</div>

						<div class="form-group col-12">
							<label for="message">{{ $t('footer.message_label') }}<span
									class="text-danger">*</span></label>
							<textarea id="message" name="message" rows="6" class="form-control" required
								:placeholder="$t('footer.message_placeholder')"></textarea>
						</div>
						<input type="text" name="hp_check" style="display:none !important;" tabindex="-1"
							autocomplete="off">
						<div class="text-center col-12 pt-2">
							<button @click="submitForm" type="button" class="btn btn-primary col-md-6"
								:disabled="isSubmitting">
								{{ isSubmitting ? $t('footer.submitting') : $t('footer.submit') }}
							</button>

						</div>

					</form>
				</div>

				<!-- Quick Links -->
				<div class="col-12 col-md-6 col-lg-3 pt-4 px-2">
					<h3>{{ $t('footer.quick_links') }}</h3>
					<h4>{{ $t('footer.services') }}</h4>

					<div class="row">
						<NuxtLinkLocale class="col-sm-6 my-1" to="/shipment">{{ $t('footer.shipment') }}
						</NuxtLinkLocale>
						<NuxtLinkLocale class="col-sm-6 my-1" to="/warranty">{{ $t('footer.warranty') }}
						</NuxtLinkLocale>
					</div>
					<h4>{{ $t('footer.company') }}</h4>
					<div class="row">
						<NuxtLinkLocale class="col-sm-6 my-1" to="/about-us">{{ $t('footer.about_us') }}
						</NuxtLinkLocale>
						<NuxtLinkLocale class="col-sm-6 my-1" to="/news">News
						</NuxtLinkLocale>
					</div>

					<h4>{{ $t('footer.marketing') }}</h4>
					<div class="row">
						<a class="col-sm-12 my-1" href="https://www.ep-machine.com/" target="_blank">
							{{ $t('footer.ep-machine') }}
						</a>
						<a class="col-sm-12 my-1" href="https://hookahcoalplant.com/" target="_blank">
							Hookah Charcoal
						</a>
					</div>
				</div>

			</div>
		</div>
	</div>

	<!-- Bottom Footer -->
	<footer class="bg-dark py-2">
		<div class="container text-center text-white-50">
			{{ $t('footer.copyright') }}
			<span class="ml-2 text-info">{{ $t('footer.version') }}</span>
		</div>
	</footer>
</template>

<script setup>
	import {ref} from 'vue'
	import {useI18n} from 'vue-i18n'
	// 路径和 i18n
	const localePath = useLocalePath()
	const {t, locale, setLocale } = useI18n()
	// 按钮防重复提交
	const isSubmitting = ref(false)
	const lastSubmitTime = ref(0)

	// 提交表单函数
	const submitForm = async () => {
		const now = Date.now()

		// === 节流：10秒只能提交一次 ===
		if (now - lastSubmitTime.value < 10000) {
			alert("Please wait a moment before submitting again.")
			return
		}

		const form = document.getElementById('feedbackFormFoot')
		if (!form.reportValidity()) return

		// === Honeypot 检查（机器人一般会填写） ===
		const hp = form.querySelector("input[name='hp_check']").value
		if (hp && hp.trim() !== '') {
			console.warn("Bot detected, block submission.")
			return
		}

		// === 按钮防重复提交 ===
		if (isSubmitting.value) return
		isSubmitting.value = true

		setTimeout(() => {
			isSubmitting.value = false
		}, 10000)

		// === 获取表单数据 ===
		const formData = Object.fromEntries(new FormData(form).entries())

		const jsonData = {
			cusName: formData.cus_name,
			cusEmail: formData.cus_email,
			cusWhatsapp: formData.cus_whatsapp,
			cusCountry: formData.cus_country,
			message: formData.message,
			source: window.location.href
		}

		try {
			const response = await fetch("http://192.168.1.113:8080/quotes/valid/fromWebsite", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(jsonData)
			})

			if (!response.ok) throw new Error()

			alert(t('footer.submit_success'))
			form.reset()
			lastSubmitTime.value = Date.now()

		} catch {
			alert(t('footer.submit_fail'))
		} finally {
			isSubmitting.value = false
		}
	}
</script>



<style scoped>
	.whatsapp-float {
		position: fixed;
		bottom: 65px;
		right: 25px;
		color: #fff;
		border-radius: 50%;
		text-align: center;
		font-size: 28px;
		z-index: 9999;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		animation: shake 2.5s infinite ease-in-out;
	}

	/* 轻微间歇抖动效果 */
	@keyframes shake {

		0%,
		80%,
		100% {
			transform: rotate(0deg);
		}

		85% {
			transform: rotate(-6deg);
		}

		90% {
			transform: rotate(6deg);
		}

		95% {
			transform: rotate(-4deg);
		}
	}

	/* ✅ 手机端隐藏页面底部小图标 */
	@media (max-width: 768px) {
		.whatsapp-float {
			display: none !important;
		}
	}
</style>