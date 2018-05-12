# Flex

轴线概念：主轴，副轴



display: flex

flex-wrap: wrap

到容器的宽度小于子元素的宽度的时候，会压缩子元素



容器：

理解：方向 | 换行 | 主轴对齐 | 副轴对齐 | 多轴对齐 

属性：flex-direction | flex-wrap | justify-content | align-items | align-content 

默认：row | nowrap | flex-start | flex-start | flex-start | stretch 

缩写：flex-flow: flex-direction flex-wrap



项目：

理解：顺序 | 放大比例 | 缩小比例 | 自身大小 | 自身对齐

属性：order | flex-grow | flex-shrink | flex-basis | align-self

默认：0 | 0 | 1 | auto | 继承

缩写：flex: flex-grow flex-shrink flex-basis; ***none***: 0 0 auto; ***auto***: 1 1 auto

flex: 1 => 1 1 0%

flex: 24px => 1 1 24px

可以理解为，如果是一个数字，则依次赋值，如果是带单位或百分比则赋值给 flex-basis



对 flex-basis 的理解：

规定的是子元素的基准值

auto：主尺寸 | content

content：px | auto

百分比：相对于父容器 | auto