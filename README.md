<p align="center">
  <a href="https://travis-ci.org/ohhoney1/Vue.js-Source-Code-line-by-line" rel="nofollow">
    <img src="https://travis-ci.org/ohhoney1/Vue.js-Source-Code-line-by-line.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.17-brightgreen.svg" alt="vue">
  </a>
</p>

## 逐行级分析 Vue 源码

[在线查看](https://ohhoney1.github.io/Vue.js-Source-Code-line-by-line/)

这个仓库翻译自“逐行级深入探究 Vue.js 源码”系列文章，地址：[文章地址](https://medium.com/@oneminutejs/a-deep-dive-in-the-vue-js-source-code-0-table-of-contents-170dcc3c8ec)，已经过作者本人同意。目的也是为了巩固、学习 `JavaScript` 和 `Vue` 相关的知识点。

> 这个系列的文章都是详细地分析 `Vue.js` 的源码，以说明一些基本的 `JavaScript` 概念。文章讲述一些 `JavaScript` 概念时，尽量以一种对初学者友好的方式。查看这篇[更新计划](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/05-update-plan.md)，获取本系列文章的后续计划和方向等更多信息。

## 目录

1. [Vue 构造函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/01-the-vue-object-constructor-function.md)
2. [initMixin 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/02-the-initMixin-function.md)
3. [mergeOptions 函数（1）](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/03-the-mergeOptions-function-1.md)
4. [dedupe 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/04-the-dedupe-function.md)
5. [更新计划](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/05-update-plan.md)
6. [mergeOptions 函数（2）](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/06-the-mergeOptions-function-2.md)
7. [mergeOptions 函数（3）](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/07-the-mergeOptions-function-3.md)
8. [cached 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/08-the-cached-function.md)
9. [camelize 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/09-the-camelize-function.md)
10. [normalizeProps 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/10-the-normalizeProps-function.md)
11. [warn 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/11-the-warn-function.md)
12. [generateComponentTrace 函数（1）](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/12-the-generateComponentTrace-function-1.md)
13. [generateComponentTrace 函数（2）](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/13-the-generateComponentTrace-function-2.md)
14. [repeat 函数）](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/14-the-repeat-function.md)
15. [generateComponentTrace 函数（3）](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/15-the-generateComponentTrace-function-3.md)
16. [formatComponentName 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/16-the-formatComponentName-function.md)
17. [classify 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/17-the-classify-function.md)
18. [warn 函数（回顾）](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/18-the-warn-function.md)
19. [props 和 normalizeProps](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/19-props-and-normalizeProps.md)
20. [isPlainObject 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/20-the-isPlainObject-function.md)
21. [toRawType 函数](https://github.com/ohhoney1/Vue.js-Source-Code-line-by-line/blob/master/docs/21-the-toRawType-function.md)
