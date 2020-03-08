<template>
    <div>
        <h3>Hello----------揭秘商品id值</h3>
        {{$route.params.id}}
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log(this.$route.params)
        }
    }
</script>
<style lang="sass" scoped>

</style>