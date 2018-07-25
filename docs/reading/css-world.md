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
    .float-box
        float: left
        display: inline-block
        width: 50px
        height: 20px
        background-color: red
    .bfc-box
        overflow-x: hidden
        overflow-y: visible /* 多余 */
        /* display: table-cell
        width: 9999px */
        position: relative
        .outer-box
            position: absolute
            top: -10px
            right: 0
            width: 30px
            height: 30px
            background-color: rgba(0, 255, 0, .4)
    .word-break
        display: table
        width: 100%
        table-layout: fixed
        word-break: break-all
    
</style>

<template>
<div class="bfc">
    <span class="float-box">float</span>
    <div class="bfc-box">
        <div class="word-break">
            这个 DEMO 还附带了一个 word-break 的样式类来解决英文过长不能自动换行的的问题
            sadfasdfasdfasdgadsfgkjadfkgjdofngofdngodfingaodfingodfingodfngodfi
        </div>
        <div class="outer-box"></div>
    </div>
</div>
</template>

## 6.4 overflow

- overflow 剪裁界线 border box，即如果容器有padding，会被当做容器内的对象一样剪裁掉

- overflow: auto，有个兼容问题：chrome下，滚动容器的padding-bottom会算在滚动尺寸内

- 除非 overflow-x 和 overflow-y 的属性值都是 visible，否则 visible 会当成 auto 来 解析。

- 单行文字溢出点点点效果

    ```
    .ell {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    ```
- 返回顶部：```<a href="#">返回顶部></a>```

- 元素设置了 overflow: hidden 声明，里面内容高度溢出的时候，滚 动依然存在，仅仅滚动条不存在!

- *6.4.5 ?*