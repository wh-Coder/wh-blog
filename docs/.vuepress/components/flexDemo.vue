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
            font-size 20px
            // &:nth-child(1)
            //     background-color #e5e6f6
            //     font-size 12px            
            // &:nth-child(2)
            //     background-color #EB8660
            //     font-size 14px                        
            // &:nth-child(3)
            //     background-color #6dc753
            //     font-size 16px                        
            // &:nth-child(4)
            //     background-color #85c9ad
            //     font-size 18px                        
            // &:nth-child(5)
            //     background-color #eeab47
            //     font-size 20px
            // &:nth-child(6)
            //     background-color #FF0200
            //     font-size 20px   
            // &:nth-child(7)
            //     background-color #FF9902
            //     font-size 20px   
            // &:nth-child(8)
            //     background-color #FFD902
            //     font-size 20px   
            // &:nth-child(9)
            //     background-color #30D385
            //     font-size 20px        
    .selectgroup
        margin-left 20px
        display inline-block
</style>

<template lang="pug">
.wrap
    .container(:style="containerStyle")
        .item(v-for="sty,index in itemGroup" :key="index" :style="sty" @click="onFlexItem(index)") {{index + 1}}
    .selectgroup
        el-form(label-position="left" label-width="100px" :model="containerStyleSelect")
            el-form-item(label="数量")
                el-input-number(v-model="itemCount" :min="1" :max="9" label="描述文字")
            template(v-for="(value, key) in containerStyleSelect")
                el-form-item(:label="key" :key="key")
                    el-select(v-model="value.current" placeholder="请选择")
                        el-option(v-for="item in value.options" :key="item" :label="item" :value="item")
    el-dialog(title="flex-item" :visible.sync="dialogVisible" width="30%")
        el-form(label-position="left" label-width="100px" :model="itemActiveStyle")
            template(v-for="(value, key) in itemStyleSelect")
                el-form-item(:label="key" :key="key")
                    el-select(v-model="itemActiveStyle[key]" placeholder="请选择")
                        el-option(v-for="item in value" :key="item" :label="item" :value="item")
        span(slot="footer" class="dialog-footer")
            el-button(type="primary" @click="dialogVisible = false") 确 定
</template>

<script>
const itemStyleInit = {
    order: 0,
    flexBasis: 'auto',
    flexGrow: 0,
    flexShrink: 1,
    alignSelf: 'auto'
}
export default {
    name: 'flex-demo',
    data() {
        return {
            dialogVisible: false,
            itemActiveIndex: null,
            itemGroup: [],
            itemCount: 0,
            containerStyleSelect: {
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
            },
            itemStyleSelect: {
                order: [0, 1, 2],
                flexBasis: ['auto', '0%', '100%'],
                flexGrow: [0, 1, 2],
                flexShrink: [0, 1, 2],
                alignSelf: ['auto','flex-start','flex-end','center','baseline','stretch']
            }
        }
    },
    methods: {
        onFlexItem(index) {
            this.itemActiveIndex = index
            this.dialogVisible = true
        },
        getRandomColor() {
            return '#' + Math.floor(Math.random() * 16777215 / 2 + 16777215 / 2).toString(16) 
        }
    },
    computed: {
        containerStyle() {
            let obj = {}
            for (let key in this.containerStyleSelect) {
                obj[key] = this.containerStyleSelect[key].current
            }
            return obj
        },
        itemActiveStyle() {
            return this.itemGroup[this.itemActiveIndex] || {}
        }
    },
    watch: {
        itemCount(newCount, oldCount) {
            console.log('itemCount')
            if ( newCount > oldCount ) {
                this.itemGroup.push( Object.assign({ backgroundColor: this.getRandomColor()}, itemStyleInit) )
            } else {
                this.itemGroup.pop()
            }
        }
    }
}
</script>
