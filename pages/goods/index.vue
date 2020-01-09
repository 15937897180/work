<template>
    <div>
        <h3>Hello----------商品页</h3>
        <p>{{$store.state.count}}</p>
        <!-- $store.state.count -->
        <button @click="$store.commit('add')">+1</button>
        <button @click="subCount">-1</button>
        <p>异步计算</p>
        <button @click="$store.dispatch('asyncAdd')">异步+1</button>
        <button @click="$store.dispatch('asyncSub')">异步-1</button>
    </div>
</template>
<script>
    export default {
        methods: {
            subCount() {
                this.$store.commit('sub')
            }
        }
    }
</script>
<style lang="sass" scoped>

</style>