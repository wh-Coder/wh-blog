![frp](../images/flex.jpg)

# Flex

轴线概念：主轴，副轴

## 容器属性

| 属性 | flex-direction | flex-wrap | justify-content | align-items | align-content |
| :--- | :------------- | :----- | :----- | :----- | :----- |
| 理解 | 主轴方向 | 换行 | 主轴对齐 | 副轴对齐 | 多轴对齐 |
| 默认 | row | nowrap | flex-start | flex-start | stretch |

缩写：flex-flow: flex-direction flex-wrap

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

## DEMO

<flex-demo />

## 参考

[30 分钟学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)
