<template>
	<!-- ===================== Hero Banner ===================== -->
	<div class="text-white d-flex justify-content-center align-items-center index-hero">
		<div class="container m-auto">
			<div class="row d-flex align-items-center">
				<!-- 文字区域：手机端放下面，PC 左侧 -->
				<div class="col-12 col-md-5 text-center text-md-start order-2 order-md-1">
					<h2 class="display-4 fw-bold">智能压球机生产线制造商</h2>
					<p class="lead mt-3">专注矿粉压球、成型与环保设备的研发与生产，让压球更高效、更稳定、更省成本。</p>
					<div class="mt-4">
						<NuxtLink href="/products" class="btn btn-outline-light btn-md me-3">
							介绍
						</NuxtLink>
						<NuxtLink href="/get-quote" class="btn btn-outline-light btn-md">
							留言
						</NuxtLink>
					</div>
				</div>
				<!-- 图片区域：手机端放上面，PC 右侧 -->
				<div class="col-12 col-md-7 order-1 order-md-2 text-center">
					<img src="/images/index/bg-hero.png" alt="Hero Image" class="img-fluid" />
					
				</div>

			</div>
		</div>
	</div>

	<!-- ===================== 产品分类 添加点击图片跳转到相应的产品信息 ===================== -->
	<section class="container py-5">
		<h2 class="text-center mb-5">主要产品</h2>
		<div class="row g-4">
			<div class="col-6 col-md-3" v-for="item in productCategories" :key="item.id">
				<div class="h-100 shadow-sm">
					<img :src="item.img" class="card-img-top img-fluid" alt="productname" loading="lazy">
					<div class="card-body text-center py-2">
						<h5 class="card-title">{{item.name}}</h5>
					</div>
				</div>
			</div>
		</div>
	</section>


	<!-- 公司信息与新闻 -->
	<div class="container py-5">
		<div class="row g-4">
			<div class="col-12 col-md-6">
				<div class="card h-100 company-card">
					<img src="/images/index/company.jpg" class="card-img-top img-fluid" alt="公司实力图片" loading="lazy"
						style="height: inherit;">

				</div>
			</div>
			<div class="col-12 col-md-6">
				<div class="card h-100 border-0">
					<div class="card-body d-flex flex-column">
						<div class="card-body">
							<h4 class="card-title">关于我们</h4>
							<p class="card-text text-muted">
								EP是一家专业从事机械设备制造的公司。我们拥有一支成熟的销售团队，成员均为经验丰富的专业人士。此外，EP还拥有一支实力雄厚的研发团队，致力于设备的改进和升级。自2000年以来，EP机械一直专注于机械设备的制造和研发。多年的技术经验和知识积累，使我们能够更好地为全球客户提供合适的解决方案。同时，EP还能提供全面的技术支持。
							</p>
						</div>
						<div class="card-body">
							<h4 class="card-title">新闻中心</h4>
							<ul class="list-unstyled my-2 news-list" aria-label="新闻列表">
								<li v-for="post in data?.data" :key="post.post_id" class="mb-2">
									<a class="text-decoration-none" href="#">[ {{ post.post_date }}]
										{{ post.post_title }}</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--  ===================== 公司实力（Why Choose Us） ===================== -->
	<div class="d-flex align-items-center justify-content-center text-white text-center py-5"
		style="background: rgb(245, 247, 250);">
		<div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
			<div class="container">
				<h2 class="fw-bold mb-5 text-dark">Why Choose Us</h2>
				<div class="row">
					<div class="col-3">
						<img src="/images/index/experience.png" />
						<p class="industry-name text-dark">20+ Years Manufacturing Experience</p>
					</div>
					<div class="col-3">
						<img src="/images/index/iso.png" />
						<p class="industry-name text-dark">ISO / CE International Certifications</p>
					</div>
					<div class="col-3">
						<img src="/images/index/customized.png" />
						<p class="industry-name text-dark">Customized Briquetting Solutions</p>
					</div>
					<div class="col-3">
						<img src="/images/index/installation.png" />
						<p class="industry-name text-dark">Global Installation & After-sales</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- ===================== 应用行业applications ===================== -->
	<div class="industry-section text-center py-5">
		<div class="container">
			<h2 class="mb-3">应用行业</h2>
			<p class="text-secondary mb-5">用心服务，追求更高品质，以服务为核心，为客户持续创造价值</p>

			<div class="row justify-content-center g-4">
				<div class="col-4 col-md-2" v-for="(item, index) in applications" :key="index">
					<div class="icon-card">
						<img :src="item.icon" alt="" class="industry-icon">
						<p class="industry-name text-dark">{{ item.name }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 解决方案 -->
	<div class="container py-5">
		<div class="row align-items-center">

			<h2 class="text-center mb-3">解决方案</h2>
			<p class="text-center text-muted mb-5">
				打造国际贸易场景下的全流程解决方案，为你的业务赋能
			</p>

			<!-- 左侧文案区域 -->
			<div class="col-md-6">
				<div v-for="(item, index) in solutions" :key="index" class="d-flex mb-3 align-items-center">
					<div class="icon-box me-3">
						<i :class="['bi', item.icon, 'fs-3', 'text-primary']"></i>
					</div>
					<p class="mb-0">{{ item.text }}</p>
				</div>
			</div>
			<!-- 右侧图片区域 -->
			<div class="col-md-6 text-center">
				<img src="/images/index/case01.jpg" alt="solutions" class="img-fluid rounded-4 shadow">
			</div>
		</div>
	</div>

	<!-- ===================== 客户案例 ===================== -->
	<div class="container text-center py-5">
		<h2 class="mb-4 text-custom-color fw-bold">客户案例</h2>
		<p class="text-muted mb-5">描述.......................</p>
		<client-only>
			<Swiper :modules="[Autoplay, Pagination]" :slides-per-view="3" :space-between="30" :loop="true"
				:autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="{ clickable: true }"
				:breakpoints="{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }"
				class="cases-swiper">
				<SwiperSlide v-for="(caseItem, index) in cases" :key="index">
					<div class="card h-100 shadow-sm border-0">
						<img :src="caseItem.image" class="card-img-top img-fluid" :alt="`case-${index + 1}`"
							loading="lazy" />
						<div class="card-body">
							<h5>小标题</h5>
							<p class="text-muted">描述</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</client-only>
	</div>

	<!-- end部分 -->
	<div class="container-fluid py-5" style="background: rgb(245, 247, 250); ">
		<div class="row">
			<article class="text-center mx-auto">
				<h3 style="text-align: center;">
					<span style="color: #000000;">
						<img loading="lazy" decoding="async" src="/images/logo.png" alt="logo" width="84" height="94">
					</span>
				</h3>
				<h3 style="text-align: center;">
					<span style="color: #000000;">Start Your Briquetting Project with E.P Machinery</span>
				</h3>
				<p style="text-align: center;">Get professional briquetting solutions from our powder forming
					experts.</p>
				<p>
					Request a customized briquetting proposal and discover why E.P Machinery is the trusted
					manufacturer of briquetting machines and complete production lines worldwide.
				</p>
			</article>

			<div class="mt-5 mt-lg-7 text-center">
				<a href="/get-quote" class="btn btn-primary mx-3">
					<span>Get A Quote</span>
				</a>
				<a href="/about-us" class="btn btn-primary mx-3">
					<span>About Us</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
const { data, error } = await useFetch('/api/posts');


// 样式（必须）
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const { t } = useI18n({
	useScope: 'local'
})



// 产品分类示例
const productCategories = [
	{ id: 1, name: "机器压压球机", desc: "products.desc", img: "/images/index/Hydraulic.png", link: "/" },
	{ id: 2, name: "液压压球机", desc: "products.desc", img: "/images/index/Mechanical.png", link: "/" },
	{ id: 3, name: "高压压球机", desc: "products.desc", img: "/images/index/Double-shaft.png", link: "/" },
	{ id: 4, name: "双轴高压压球机", desc: "products.desc", img: "/images/index/High Pressure.png", link: "/" }
]

// 12 个应用行业
const applications = [{
	name: '冶金',
	icon: '/images/index/metallurgy.png'
},
{
	name: '钢铁厂',
	icon: '/images/index/steel.png'
},
{
	name: '煤炭',
	icon: '/images/index/coal.png'
},
{
	name: '生物质能源',
	icon: '/images/index/biomass.png'
},
{
	name: '耐火材料',
	icon: '/images/index/refractory_materials.png'
},
{
	name: '化工行业',
	icon: '/images/index/chemical_industry.png'
},
{
	name: '建材行业',
	icon: '/images/index/building_materials.png'
},
{
	name: '环保与废物回收',
	icon: '/images/index/environmental_protection.png'
},
{
	name: '稀有金属冶炼',
	icon: '/images/index/rare_metals.png'
},
{
	name: '电解猛与电解镍行业',
	icon: '/images/index/electrolytic_nickel.png'
},
{
	name: '发电与锅炉行业',
	icon: '/images/index/power_generation.png'
},
{
	name: '更多类型',
	icon: '/images/index/more.png'
}
]

// 客户案例
const solutions = [
	{
		icon: "bi-gem",
		text: "根据物料特性定制压球成型解决方案，帮助企业提升产能与成型效率。"
	},
	{
		icon: "bi-check2-circle",
		text: "优化压球工艺流程，降低能耗与人工成本，提升设备稳定性与使用寿命。"
	},
	{
		icon: "bi-robot",
		text: "为生产线提供智能化改造方案，实现压球过程监控、故障预警和数据分析。"
	},
	{
		icon: "bi-cpu",
		text: "结合企业生产场景，提供整套压球设备配置方案，使产线更高效、更可靠。"
	}
]
// 案例数据
const cases = [
	{ image: '/images/index/case01.jpg' },
	{ image: '/images/index/case02.jpg' },
	{ image: '/images/index/case04.jpg' },
	{ image: '/images/index/case06.jpg' },
	{ image: '/images/index/case05.jpg' }
]
//环境变量
// const config = useRuntimeConfig()
// console.log('apiBase2:', config.STUDIO_GITHUB_CLIENT_ID)
// console.log('apiBase1:', config.STUDIO_GITHUB_CLIENT_SECRET)


const appConfig = useAppConfig()
console.log('标题:', appConfig.title)





</script>

<style scoped>
.slide-box {
	height: 300px;
	background: #eee;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 50px;
}

/* 行业应用样式 */
.industry-section {
	position: relative;
	z-index: 1;
	background: rgb(245, 247, 250);
}

.industry-section h2,
.container h2 {
	font-weight: 700;
	letter-spacing: 1px;
	text-shadow: 0 0 20px rgba(120, 245, 150, 0.3);
}

.icon-card {
	position: relative;
	z-index: 1;
	backdrop-filter: blur(8px);
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(120, 245, 150, 0.1);
	border-radius: 20px;
	padding: 25px 10px;
	transition: all 0.35s ease;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.icon-card:hover {
	transform: translateY(-8px) scale(1.05);
	box-shadow: 0 0 25px rgba(120, 245, 150, 0.3);
	border-color: rgba(120, 245, 150, 0.5);
	animation: glowPulse 2s infinite;
}

.industry-icon {
	width: 70px;
	height: 70px;
	transition: all 0.3s ease;
	filter: drop-shadow(0 0 4px rgba(120, 245, 150, 0.3));
}

.icon-card:hover .industry-icon {
	filter: drop-shadow(0 0 10px rgba(120, 245, 150, 0.8));
}

@keyframes glowPulse {

	0%,
	100% {
		box-shadow: 0 0 15px rgba(120, 245, 150, 0.2);
	}

	50% {
		box-shadow: 0 0 25px rgba(120, 245, 150, 0.4);
	}
}

p.industry-name {
	margin-top: 10px;
	font-size: 0.95rem;
	letter-spacing: 0.5px;
	color: #e3e3e3;
}

/* 响应式调整 */
@media (max-width: 767px) {
	.industry-icon {
		width: 55px;
		height: 55px;
	}

	.icon-card {
		padding: 18px 6px;
	}


}

.index-hero {
	height: 92vh;
	background-image: url(/images/index/bg.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}



/* 行业应用样式 */
</style>

<i18n lang="json">{
	"en": {
		"hello": "hello world!"
	},
	"ja": {
		"hello": "こんにちは、世界!"
	}
}</i18n>

<!-- <i18n lang="json" locale="en" src="~/locales/index/index.en.json"></i18n>
<i18n lang="json" locale="zh" src="~/locales/index/index.zh.json"></i18n> -->