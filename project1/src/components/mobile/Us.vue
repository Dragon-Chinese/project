<template>
    <div class="mobile">
 <Header />

        关于我们
    </div>
</template>
<script>
import Header from './headerApp.vue'
export default {
    mounted() {
        this.rem()
    },
     components: {
        Header
     }
}
</script>
<style lang="scss" scoped>
    
   .mobile{height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: .26rem;
        overflow: hidden;
}

</style>
