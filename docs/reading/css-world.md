# CSS世界

## 5.1 1ex 对齐的问题

- ex 是小写 x 字符的高度单位，因为内联元素默认基线对齐，然后设置图标高 1ex,同时图片居中，文字和图片就天然居中了

*demo:*

<style lang="stylus">
.demo
    padding-top: 20px
    padding-bottom: 20px
    text-align: center
    .box
        display: inline-block
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


## 5.2 line-height

- 对于非替换元素的纯内联元素，其可视高度完全由 line-height 决定


## 6.3 BFC

> block formatting context “块级格式化上下文”

- 触发 BFC 的条件：
    - \<html\>根元素;
    - float 的值不为 none;
    - overflow 的值为 auto、scroll 或 **hidden**;
    - display 的值为 **table-cell**、table-caption 和 inline-block 中的任何一个;
    - position 的值不为 relative 和 static。

- 最后，我们可以提炼出两套 IE7 及以上版本浏览器适配的自适应解决方案。
    - 借助 overflow 属性，如下: 
    ```
    .lbf-content { overflow: hidden; }
    ```
    - 融合 display:table-cell 和 display:inline-block，如下:
    ```
    .lbf-content {
        display: table-cell; width: 9999px; 
        /* 如果不需要兼容 IE7，下面样式可以省略 */ 
        *display: inline-block; *width: auto;
    }
    ```
*demo:*

<style lang="stylus">
.bfc
    .float-item
        float: left
        display: inline-block
        width: 50px
        height: 20px
        background-color: red
    .bfc-item
        overflow: hidden
        /* display: table-cell
        width: 9999px */
    .word-break
        display: table
        width: 100%
        table-layout: fixed
        word-break: break-all
</style>

<template>
<div class="bfc">
    <span class="float-item">float</span>
    <div class="bfc-item">
        <div class="word-break">
            这个 DEMO 还附带了一个 word-break 的样式类来解决英文过长不能自动换行的的问题
            sadfasdfasdfasdgadsfgkjadfkgjdofngofdngodfingaodfingodfingodfngodfi
        </div>
    </div>
</div>
</template>