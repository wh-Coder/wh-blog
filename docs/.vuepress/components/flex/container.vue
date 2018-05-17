<style lang="stylus" scoped>
.wrap
    display flex
    .container
        background-color #eeeeee
        width 300px
        height 300px
        display inline-flex
        margin-right 20px
        .item
            width 50px
            height 50px
            border 1px solid #aaaaaa
            line-height 50px
            text-align center
            &:nth-child(1)
                background-color #e5e6f6
                font-size 12px            
            &:nth-child(2)
                background-color #EB8660
                font-size 14px                        
            &:nth-child(3)
                background-color #6dc753
                font-size 16px                        
            &:nth-child(4)
                background-color #85c9ad
                font-size 18px                        
            &:nth-child(5)
                background-color #eeab47
                font-size 20px
            &:nth-child(6)
                background-color #FF0200
                font-size 20px   
            &:nth-child(7)
                background-color #FF9902
                font-size 20px   
            &:nth-child(8)
                background-color #FFD902
                font-size 20px   
            &:nth-child(9)
                background-color #30D385
                font-size 20px        
    .selectgroup
        display inline-block
</style>

<template lang="pug">
.wrap
    .container(:style="containerStyle")
        .item(v-for="item in itemNumber" :key="item") {{item}}
    .selectgroup
        el-form(label-position="left" label-width="100px" :model="styleSelect")
            el-form-item(label="数量")
                el-input-number(size="small" v-model="itemNumber" :min="1" :max="9" label="描述文字")
            template(v-for="(value, key) in styleSelect")
                el-form-item(:label="key" :key="key")
                    el-select(v-model="value.current" placeholder="请选择" size="small")
                        el-option(v-for="item in value.options" :key="item" :label="item" :value="item")
</template>

<script>
export default {
    name: 'flexContainer',
    data() {
        return {
            itemNumber: 5,
            styleSelect: {
                flexDirection: {
                    current: 'row',
                    options: [
                        'row', 'row-reverse', 'column', 'column-reverse'
                    ]
                },
                flexWrap: {
                    current: 'nowrap',
                    options: [
                        'nowrap', 'wrap', 'wrap-reverse'
                    ]
                },
                justifyContent: {
                    current: 'flex-start',
                    options: [
                        'flex-start', 'flex-end', 'center', 'space-between', 'space-around'
                    ]
                },
                alignItems: {
                    current: 'flex-start',
                    options: [
                        'flex-start', 'flex-end', 'center', 'baseline', 'stretch'
                    ]
                },
                alignContent: {
                    current: 'stretch',
                    options: [
                        'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'
                    ]
                }
            }
        }
    },
    computed: {
        containerStyle() {
            let obj = {}
            for (let key in this.styleSelect) {
                obj[key] = this.styleSelect[key].current
            }
            return obj
        }
    }
}
</script>
