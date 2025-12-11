<template>
    <!-- 右侧固定图标栏 -->
    <div class="icon-bar position-fixed end-0 top-50 translate-middle-y d-flex flex-column">

        <!-- Email -->
        <div class="icon-wrapper">
            <a href="mailto:y913586788@gmail.com" class="btn-icon" title="Send Email">
                <img src="/images/index/mail.png" alt="Email">
            </a>
            <span class="icon-text">y913586788@gmail.com</span>
        </div>

        <!-- WhatsApp -->
        <div class="icon-wrapper">
            <a href="https://wa.me/8615836885280" target="_blank" class="btn-icon" title="WhatsApp">
                <img src="/images/index/whatsapp.png" alt="WhatsApp">
            </a>
            <span class="icon-text">+86 15836885280</span>
        </div>

        <!-- Get a Quote -->
        <div class="icon-wrapper">
            <a href="/get-quote" class="btn-icon" title="Get A Quote">
                <img src="/images/index/quote.png" alt="Get a Quote">
            </a> 
        </div>
    </div>
</template>

<style scoped>
/* 右侧图标栏 */
.icon-bar {
    z-index: 1050;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* 外层包装，方便控制 hover 显示文字 */
.icon-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

/* 图标按钮 */
.btn-icon {
    background-color: #ffb600;
    border-radius: 8px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .25s ease, box-shadow .25s ease;
}

.btn-icon img {
    width: 28px;
    height: 28px;
}

/* 悬停图标效果：轻微放大 */
.btn-icon:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

/* 悬停显示文字 */
.icon-text {
    position: absolute;
    right: 100%;
    margin-right: 10px;
    background: #333;
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    white-space: nowrap;
    font-size: 14px;
    opacity: 0;
    transform: translateX(10px);
    transition: all 0.3s ease;
    pointer-events: none; /* 避免挡住鼠标事件 */
}

/* 当鼠标移到 icon-wrapper 时文字出现 */
.icon-wrapper:hover .icon-text {
    opacity: 1;
    transform: translateX(0);
}
</style>
