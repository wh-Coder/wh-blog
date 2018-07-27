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
        /* overflow-x: hidden
        overflow-y: visible  */
        /* 上面一行多余 */
        display: table-cell
        width: 9999px
        position: relative
        /* transform: translate3d(0, 0, 0) */
        .outer-box
            position: absolute
            /* z-index: 999 */
            /* top: -10px */
            /* right: 0 */
            width: 30px
            height: 30px
            background-color: rgba(0, 255, 0, .4)
            display: inline
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

## 11.1 outline

- 模拟原生的按钮，代理高亮

    ```css
    :focus + label.btn {
       outline: 1px dotted Highlight;
       /* Chrome浏览器下使用浏 览器自带的 focus 外发光 outline 效果 */
       outline: 5px auto -webkit-focus-ring-color;
    }
    ```

    *demo:*

<style lang="stylus">
.11-11-demo
    [type="submit"] {
        position: absolute;
        clip: rect(0 0 0 0);
    }
    .btn {
        display: inline-block;
        padding: 2px 12px;
        background-color: #cd0000;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
    }
    :focus + label.btn {
       outline: 1px dotted Highlight;
       /* Chrome浏览器下使用浏 览器自带的 focus 外发光 outline 效果 */
       outline: 5px auto -webkit-focus-ring-color;
    }
</style>

<template>
<div class="11-11-demo">
    <input class="outline"></input>
    <input id="t" type="submit">
    <label class="btn" for="t">提交</label>
</div>
</template>

- outline: 一个真正意义上的不占据任何空间的属性
    
    - 遮罩效果

    ```css
    .crop-area {
        outline: 256px solid #000;
        outline: 256px solid rgba(0,0,0,.5);
        /*包括 IE10 在内的 IE 浏览器下的镂空 元素会有点击穿透的问题 ↓2*/
        background: url(about:blank);
        background: linear-gradient(to top, transparent, transparent);
        /* IE8 浏览器不支持 rgba 颜色 */
        filter: alpha(opacity=50);   
        cursor: move;
    }
    :root .crop-area {
        filter: none;
    }
    ```

    - 剪裁配合

    ```css
    {
        position: absolute;
        clip: rect(0 9999px 9999px 0);
    }
    ```
