# Flex

![](http://ww1.sinaimg.cn/large/a75caef7gy1frc2u8ymlsj20fn0993z4.jpg)

轴线概念：主轴，副轴

## 容器属性

| 属性 | flex-direction | flex-wrap | justify-content | align-items | align-content |
| :--- | :------------- | :----- | :----- | :----- | :----- |
| 理解 | 主轴方向 | 换行 | 主轴对齐 | 副轴对齐 | 多轴对齐 |
| 默认 | row | nowrap | flex-start | flex-start | stretch |

缩写：flex-flow: flex-direction flex-wrap


<style lang="stylus" scoped>
.wrap
    display flex
    .container
        background-color #eeeeee
        width 200px
        height 200px
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

<template>
<div class="wrap">
    <div class="container" :style="containerStyle">
        <div class="item" v-for="item in itemNumber" :key="item">{{ item }}</div>
    </div>
    <div class="selectgroup">
        <el-form label-position="left" label-width="100px" :model="styleSelect">
            <el-form-item label="数量">
                <el-input-number size="small" v-model="itemNumber" :min="1" :max="9" label="描述文字"></el-input-number>
            </el-form-item>
            <template v-for="(value, key) in styleSelect">
                <el-form-item :label="key" :key="key">
                    <el-select v-model="value.current" placeholder="请选择" size="small">
                        <el-option v-for="item in value.options" :key="item" :label="item" :value="item"></el-option>
                    </el-select>
                </el-form-item>
            </template>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            itemNumber: 5,
            styleSelect: {
                alignContent: {
                    current: 'stretch',
                    options: [
                        'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'
                    ]
                },
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


## 子项属性

| 属性 | order | flex-grow | flex-shrink | flex-basis | align-self |
| :--- | :------------- | :----- | :----- | :----- | :----- |
| 理解 | 顺序 | 放大比例 | 缩小比例 | 自身大小 | 自身对齐 |
| 默认 | 0 | 0 | 1 | auto | 继承 |

缩写：flex: flex-grow flex-shrink flex-basis

常见的几种：
- flex: none => 0 0 
- flex: auto => 1 1 auto
- flex: 1 => 1 1 0%
- flex: 24px => 1 1 24px

可以理解为，如果是一个数字，则依次赋值，如果是带单位或百分比则赋值给 flex-basis

### 对 flex-basis 的理解

规定的是子元素的基准值

auto：主尺寸 | content

content：px | auto

百分比：相对于父容器 | auto

## 参考

[30 分钟学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)
