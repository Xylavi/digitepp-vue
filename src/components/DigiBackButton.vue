<script setup>
function goBack() {
    window.history.back();
}
</script>

<template>
    <button 
        name="" 
        id="" 
        class="btn btn-primary my-5 bg-info-subtle border border-info digi-text-color-blue"
        @click="goBack" 
        role="button">
        <i class="bi bi-arrow-left font-noto-sans-regular"> Kembali</i>
    </button>
</template>
