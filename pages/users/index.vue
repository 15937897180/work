<template>
    <div>
        <h3>Hello----------用户管理</h3>
        <ul v-for="item in list" :key="item.id">
            <li>
                <nuxt-link :to="'/default/' + item.id">
                    {{item.name}}---{{item.price}}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [
                    {id: 1, name: '苹果', price: 1300},
                    {id: 2, name: '华为', price: 1200},
                    {id: 3, name: '小米', price: 1100},
                    {id: 4, name: '魅族', price: 1000}
                ]
            }
        }
    }
</script>
<style lang="sass" scoped>

</style>