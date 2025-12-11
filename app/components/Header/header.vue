<template>
	<div class="container-fluid sticky-top g-0">
		<header class="d-flex flex-wrap justify-content-around align-items-center transition-bg bg-black"
			style="height: 8vh;">
			<!-- Logo -->
			<div class="d-flex justify-content-center align-items-center h-100">
				<div class="h-100">
					<NuxtLink :to="localePath('/')"
						class="d-flex h-100 align-items-center mb-md-0 me-md-auto text-decoration-none logo-link">
						<img class="logo h-100" src="/images/logo.png" alt="Logo"
							style="width: auto; object-fit: contain;">
					</NuxtLink>
				</div>
				<div class="d-flex flex-column text-white" style="font-size: xx-small;font-weight: bold;">
					<div style="font-size: initial;">{{ $t('header.brand.title') }}</div>
					<div>{{ $t('header.brand.slogan') }}</div>
				</div>
			</div>

			<!-- Navbar -->
			<div class="h-100">
				<nav class="navbar navbar-expand-lg navbar-dark h-100" style="padding: 0rem;">
					<div class="container-fluid h-100">

						<!-- Mobile menu toggler -->
						<div class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
							<span class="navbar-toggler-icon"></span>
						</div>

						<!-- Offcanvas -->
						<div class="offcanvas offcanvas-end text-bg-dark" style="height: 100%!important;" tabindex="-1"
							id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">

							<div class="offcanvas-header">
								<h5 class="offcanvas-title" id="offcanvasNavbar2Label">{{ $t('header.mobile_title') }}
								</h5>
								<button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
									aria-label="Close"></button>
							</div>

							<div class="offcanvas-body h-100">

								<div class="navbar-nav d-flex justify-content-end flex-grow-1 pe-3 align-items-center">
									<!-- Home -->
									<div class="nav-item h-100 d-flex align-items-center">
										<NuxtLink :to="localePath('/')" class="nav-link px-2 mx-2 text-white">
											{{ $t('header.menu.home') }}
										</NuxtLink>
									</div>
									<!-- Product Center -->
									<div class="nav-item h-100 d-flex align-items-center">
										<NuxtLink :to="localePath('/products')" class="nav-link px-2 mx-2 text-white">
											{{ $t('header.menu.products') }}
										</NuxtLink>
									</div>
									<!-- Solution -->
									<div class="nav-item h-100 d-flex align-items-center">
										<NuxtLink :to="localePath('/solution')" class="nav-link px-2 mx-2 text-white">
											{{ $t('header.menu.solution') }}
										</NuxtLink>
									</div>
									<!-- Cases -->
									<div class="nav-item h-100 d-flex align-items-center">
										<NuxtLink :to="localePath('/cases')" class="nav-link px-2 mx-2 text-white">
											{{ $t('header.menu.cases') }}
										</NuxtLink>
									</div>
									<!-- News -->
									<!-- <div class="nav-item h-100 d-flex align-items-center">
										<NuxtLink :to="localePath('/news')" class="nav-link px-2 mx-2 text-white">
											{{ $t('header.menu.news') }}
										</NuxtLink>
									</div> -->
									
									<!-- Contacts -->
									<div class="nav-item h-100 d-flex align-items-center">
										<NuxtLink :to="localePath('/get-quote')" class="nav-link px-2 mx-2 text-white">
											{{ $t('header.menu.contacts') }}
										</NuxtLink>
									</div>

									<!-- About -->
									<div class="nav-item h-100 d-flex align-items-center">
										<NuxtLink :to="localePath('/about-us')" class="nav-link px-2 mx-2 text-white">
											{{ $t('header.menu.about_us') }}
										</NuxtLink>
									</div>

									<!-- Language Selector -->
									<div class="nav-item h-100 dropdown ms-3 d-flex align-items-center">
										<svg t="1764125215399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3552" width="26" height="26"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448-200.6-448-448-448zM362.5 158.1c27.4-11.5 55.8-19.8 84.9-24.7C409.8 162 376.6 196.3 348.7 235.2c-21.8-9.2-43-20.4-63.2-33.4 23.8-17.5 49.6-32.1 77-43.7zM158.2 362.5c19.3-45.7 47-86.7 82.3-122l0.9-0.9C265.7 256.5 291.6 271 318.6 283c-34 61.8-53.7 130.1-57.8 201H129c3-42 12.8-82.7 29.2-121.5z m82.3 421c-35.3-35.3-63-76.3-82.3-122C141.8 622.7 132 582 129 540h131.8c4.1 70.8 23.8 139.2 57.8 200.9-27 12-52.8 26.6-77.2 43.5l-0.9-0.9z m122 82.3c-27.4-11.5-53.1-26.2-76.9-43.6 20.2-13 41.3-24.1 63.1-33.4 27.9 39 61.1 73.2 98.6 101.8-29.1-4.9-57.4-13.2-84.8-24.8zM484 848.3c-30.3-22.6-57.2-49-80-78.4 26-6.8 52.7-11.2 80-13v91.4z m0-308.3v160.8c-38.4 2.2-76.1 9-112.7 20.3-31.1-54.4-50.1-116.1-54.4-181.2H484v0.1z m0-56H316.9c4.3-65 23.3-126.7 54.5-181.1C407.9 314.2 445.6 321 484 323.2V484z m0-216.9c-27.3-1.8-54-6.1-79.9-13 22.8-29.4 49.7-55.8 79.9-78.4v91.4zM783.5 240.6c35.3 35.2 63 76.2 82.3 121.9C882.2 401.3 892 442 895 484H763.2c-4.1-70.9-23.8-139.2-57.8-200.9 27-12 52.8-26.5 77.2-43.4l0.9 0.9zM661.4 158.2c27.5 11.5 53.2 26.2 77 43.6-20.2 13-41.3 24.2-63.2 33.4-26.4-36.9-57.9-69.8-93.6-97.8-1.7-1.4-3.5-2.7-5.2-4 29.1 4.9 57.6 13.2 85 24.8zM540 176.2c29.8 22.5 56.4 48.9 79.1 78.1-25.7 6.7-52.1 11-79.1 12.8v-90.9z m0 147c38.1-2.2 75.5-8.9 111.8-20.1 31.4 54.6 50.8 116.4 55.2 180.9H540V323.2z m0 216.8h167.1c-4.3 65.1-23.3 126.7-54.4 181.2-36.6-11.3-74.3-18.1-112.7-20.3V540z m0 217c27 1.8 53.8 6.3 79.8 13.2-22.8 29.3-49.6 55.7-79.8 78.2V757z m121.6 108.8c-27.5 11.6-55.9 19.9-84.9 24.8 37.4-28.6 70.6-62.7 98.5-101.6 21.9 9.2 43.1 20.3 63.3 33.2-23.8 17.4-49.5 32-76.9 43.6z m204.2-204.3c-19.3 45.7-47 86.7-82.3 122l-0.9 0.9c-24.4-16.9-50.2-31.4-77.2-43.4 34-61.8 53.7-130.1 57.8-201H895c-3 42-12.8 82.7-29.2 121.5z" p-id="3553" fill="#ffffff"></path></svg>
										<NuxtLink class="nav-link dropdown-toggle text-white d-flex align-items-center"
											href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown">
											{{ currentLocale === 'en' ? $t('header.language.en') : $t('header.language.zh') }}
										</NuxtLink>

										<ul class="dropdown-menu dropdown-menu-end m-auto">
											<li>
												<NuxtLink class="dropdown-item" href="#"
													@click.prevent="changeLanguage('en')">
													{{ $t('header.language.en') }}
												</NuxtLink>
											</li>
											<li>
												<NuxtLink class="dropdown-item" href="#"
													@click.prevent="changeLanguage('zh')">
													{{ $t('header.language.zh') }}
												</NuxtLink>
											</li>
										</ul>
									</div>

								</div>
							</div>

						</div>

					</div>
				</nav>
			</div>

		</header>
	</div>
</template>

<script setup>
	import {
		ref,
		watch,
		onMounted,
		onBeforeUnmount
	} from 'vue'
	import {
		useRouter,
		useRoute
	} from 'vue-router'
	const localePath = useLocalePath()
	const router = useRouter() // 用于跳转或导航
	const route = useRoute() // 当前路由信息
	const isLoading = useLoadingIndicator()
	// i18n
	const {
		t,
		locale,
		setLocale
	} = useI18n()
	const currentLocale = ref(locale.value)

	function changeLanguage(lang) {
		setLocale(lang)
		currentLocale.value = lang
	}

	// watch language
	watch(currentLocale, async (newLocale) => {
		isLoading.start()
		try {
			await setLocale(newLocale)
		} finally {
			isLoading.finish()
		}
	})

	// menu UI states
	const showProductsMenu = ref(false)
	const showProdLine = ref(false)
	const defaultImg = '/images/header/rotary_furnace.png'
	const previewImg = ref(defaultImg)

	// mobile check
	const isMobile = ref(false)
	const checkMobile = () => isMobile.value = window.innerWidth < 992

	onMounted(() => {
		checkMobile()
		window.addEventListener("resize", checkMobile)
	})

	onBeforeUnmount(() => {
		window.removeEventListener("resize", checkMobile)
	})

	// reset menu on route change
	watch(() => route.fullPath, () => {
		showProductsMenu.value = false
	})

	// Original productColumns (with keys)
	const productColumns = [{
			title_key: "header.products_menu.category_carbonization",
			items: [{
					name_key: "header.products_menu.carbonization_continuous",
					img: "/images/header/rotary_furnace.png",
					tab: "rotary"
				},
				{
					name_key: "header.products_menu.carbonization_batch",
					img: "/images/header/vertical_furnace.png",
					tab: "vertical"
				}
			],
			tab: "Carbonization"
		},
		{
			title_key: "header.products_menu.category_crusher",
			items: [{
					name_key: "header.products_menu.crusher_grinder",
					img: "/images/header/raymond_mill.png",
					tab: "raymond_mill"
				},
				{
					name_key: "header.products_menu.crusher_crusher",
					img: "/images/header/roller_crusher.png",
					tab: "roller_crusher"
				}
			],
			tab: "Crusher"
		},
		{
			title_key: "header.products_menu.category_mixer",
			items: [{
					name_key: "header.products_menu.mixer_ribbon",
					img: "/images/header/screw_ribbon_mixer.png",
					tab: "screw_ribbon_mixer"
				},
				{
					name_key: "header.products_menu.mixer_heavy_forcing",
					img: "/images/header/screw_ribbon_compactor.png",
					tab: "screw_ribbon_compactor"
				}
			],
			tab: "Mixer"
		},
		{
			title_key: "header.products_menu.category_briquetting",
			items: [{
					name_key: "header.products_menu.briquetting_rotary",
					img: "/images/header/screw_briquette.png",
					tab: "screw"
				},
				{
					name_key: "header.products_menu.briquetting_hydraulic",
					img: "/images/header/hydraulic_press.png",
					tab: "hydraulic"
				}
			],
			tab: "Briquetting"
		},
		{
			title_key: "header.products_menu.category_auxiliary",
			items: [{
					name_key: "header.products_menu.aux_dryer",
					img: "/images/header/heat_pump_dryer.png",
					tab: "heat_pump_dryer"
				},
				{
					name_key: "header.products_menu.aux_auto_weigh",
					img: "/images/header/automatic_weighing.png",
					tab: "automatic_weighing"
				},
				{
					name_key: "header.products_menu.aux_belt_conveyor",
					img: "/images/header/belt_conveyor.png",
					tab: "belt_conveyor"
				},
				{
					name_key: "header.products_menu.aux_hopper",
					img: "/images/header/hopper.png",
					tab: "hopper"
				}
			],
			tab: "Auxiliary"
		}
	]

	// Convert to localized version
	const i18nProductColumns = computed(() =>
		productColumns.map(col => ({
			title: t(col.title_key),
			items: col.items.map(item => ({
				name: t(item.name_key),
				name_key: item.name_key,
				img: item.img,
				tab: item.tab
			}))
		}))
	)

	// Navigation
	async function goToProducts() {
		showProductsMenu.value = false
		await router.push(localePath('products'))
	}

	async function goToProductLine() {
		showProdLine.value = false
		// await router.push(localePath('products'))
	}

	async function goToSubProduct(name_key) {
		showProductsMenu.value = false

		let targetItem = null
		let category = null

		productColumns.forEach(col => {
			col.items.forEach(item => {
				if (item.name_key === name_key) {
					targetItem = item
					category = col
				}
			})
		})

		if (!targetItem || !category) return

		await router.push({
			path: localePath('products'),
			query: {
				category: t(category.tab),
				tab: targetItem.tab
			}
		})
	}
	//解决移动端点击菜单侧边栏不消失的问题
	function closeOffcanvas() {
		const offcanvasEl = document.getElementById('offcanvasNavbar2')
		if (!offcanvasEl) return

		const instance = bootstrap.Offcanvas.getInstance(offcanvasEl)
		if (instance) instance.hide()
	}
</script>


<style scoped>
	.dropdown-menu-full {
		position: fixed !important;
		left: 0;
		top: 8vh;
		width: 100vw;
		background: #fff;
		border-radius: 0;
		border: none;
		padding: 25px 0;
		opacity: 1;
		visibility: visible;
		z-index: 1050;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}

	.category-title {
		font-size: 0.95rem;
		color: #333;
		text-transform: uppercase;
		margin-bottom: 0.75rem;
		font-weight: bold;
		border-bottom: 1px solid #007bff;
		padding-bottom: 0.3rem;
	}

	.link-hover {
		color: #555;
		padding: 6px 0;
		display: block;
		transition: all 0.25s ease;
		font-size: 0.9rem;
	}

	.link-hover:hover {
		color: #007bff;
		transform: translateX(5px);
	}

	/* /productline和products二级菜单的动画效果* 淡入 + 下滑动画 */
	.fade-slide-enter-active,
	.fade-slide-leave-active {
		transition: all 0.3s ease;
	}

	.fade-slide-enter-from,
	.fade-slide-leave-to {
		opacity: 0;
		transform: translateY(-15px);
	}

	.fade-slide-enter-to,
	.fade-slide-leave-from {
		opacity: 1;
		transform: translateY(0);
	}

	.accordion-button {
		font-size: 16px;
		background: transparent !important;
		color: white !important;
		box-shadow: none !important;
		border: none;
	}
</style>