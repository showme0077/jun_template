<template>
    <ul id="menu_top">
        <li
            v-for="(item, index) in menu"
            :key="index"
            v-bind:style="{width: width_size}">
            <router-link :to="item.path">{{item.name}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "menu_top",
        data() {
            return {
                menu: [
                    {name: "Home", path: "/"},
                    {name: "Work", path: "/work"},
                    {name: "About", path: "/about"},
                    {name: "Contact", path: "/contact"}
                ],
                width_size: 0
            }
        },
        methods: {
            list_width() {
                this.width_size = 100 / this.menu.length + '%'
            }
        },
        created() {
            this.list_width ()
        }
    }
</script>

<style lang="scss" scoped>

</style>