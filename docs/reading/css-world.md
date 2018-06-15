# CSS世界

## 5.1 &nbsp; 1ex 对齐的问题

ex 是小写 x 字符的高度单位

因为内联元素默认基线对齐，然后设置图标高 1ex,同时图片居中，文字和图片就天然居中了
  
<style lang="stylus">
.demo
    padding-top: 20px
    padding-bottom: 20px
    text-align: center
    .box
        display inline-block
        width: 200px
        margin: auto
        text-align: left
        // font-size 30px
        .icon-arrow
            display: inline-block
            width: 20px
            height: 1ex
            background: url(./arrow.svg) no-repeat center/20px 20px
</style>

<template>
<div>
    字体大小：
    <el-select v-model="fontSize.current" placeholder="请选择">
        <el-option v-for="item in fontSize.options" :key="item" :label="item" :value="item"></el-option>
    </el-select>
    <div class="demo">
        <div class="box" :style="{'fontSize': fontSize.current}">
            中文字符
            <i class="icon-arrow"></i>
        </div>
        <div class="box" :style="{'fontSize': fontSize.current}">
            English
            <i class="icon-arrow"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            fontSize: {
                current: '16px',
                options: ['16px', '20px', '30px', '40px']
            }
        }
    }
}
</script>


