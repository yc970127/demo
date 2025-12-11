<template>
    <div class="container" style="height: 100vh;">
        <div class="d-flex justify-content-center align-items-center h-100">
            <div class="card  text-center p-10  bg-white border-0">
                <h1 class="mb-3 font-bold">Feedback Success!</h1>
                <p class="text-gray-600">感谢您的留言，我们会尽快回复您。</p>

                <p class="mt-3">
                    页面将在 <span class="countdown font-bold text-blue-600">{{ countdown }}</span> 秒后返回…
                </p>
                <!-- 进度条 -->
                <div class="progress mt-3 h-5 bg-gray-200 rounded-lg overflow-hidden">
                    <div class="progress-bar bg-green-500 h-full transition-all duration-30"
                        :style="{ width: progress + '%' }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// 禁用布局
definePageMeta({
  layout: false
})

const totalSeconds = 3
const countdown = ref(totalSeconds)
const progress = ref(0)
const router = useRouter()

onMounted(() => {
    const intervalMs = 30
    const steps = (totalSeconds * 1000) / intervalMs
    let current = 0
    const timer = setInterval(() => {
        current++
        progress.value = (current / steps) * 100
        countdown.value = Math.ceil((steps - current) * intervalMs / 1000)

        if (current >= steps) {
          clearInterval(timer)
          const redirectUrl = document.referrer || '/'
        //   router.push("redirectUrl")
          router.push("/")
        }
    }, intervalMs)
})
</script>

<style scoped>
.progress-bar {
    transition: width 0.03s linear;
}
</style>
