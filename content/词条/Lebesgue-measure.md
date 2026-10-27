---
title: "Lebesgue 测度（Lebesgue measure）"
aliases:
  - "Lebesgue 测度"
  - "Lebesgue measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue 测度（Lebesgue measure）把区间长度和欧氏空间中的体积扩展到一个对可数运算封闭、包含所有零测集子集的集合族。它是[Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md)的基本几何例子。

## 一维构造

对任意 $E\subseteq\mathbb R$，定义外测度
$$
m^*(E)=\inf\left\{\sum_{j=1}^{\infty}(b_j-a_j):E\subseteq\bigcup_j(a_j,b_j],\ a_j<b_j\right\}.
$$
满足[Carathéodory 可测性（Carathéodory measurability）](Caratheodory-measurability.md)条件的集合构成 Lebesgue $\sigma$-代数 $\mathcal L$；$m=m^*|_{\mathcal L}$ 是 Lebesgue 测度；这里 $m^*|_{\mathcal L}$ 表示把外测度的定义域限制为 $\mathcal L$。它满足 $m((a,b])=b-a$，并且完备。[^1]

## 高维形式

在 $\mathbb R^n$ 中，用半开矩形 $\prod_{k=1}^n(a_k,b_k]$ 覆盖，并以 $\prod_k(b_k-a_k)$ 作为体积，可同样定义 $m_n$。它也等于一维 Lebesgue 测度乘积的完备化。记 $\mathcal L^n$ 为 $\mathbb R^n$ 上全部 Lebesgue 可测集组成的 $\sigma$-代数；这里上标表示空间维数，不表示直接取 $n$ 次乘积 $\sigma$-代数。

维数写成 $d$ 时记测度为 $m_d$；维数由上下文确定时常简写为 $m$。积分中的 $dx$、$dy$ 分别表示关于相应变量的 Lebesgue 测度积分，例如 $\int_E f(x)\,dx=\int_E f\,dm_d$；写“相对于 $dx$”时，也把 $dx$ 用作该测度的简记。微分形式 $f(x)\,dx$ 所定义的测度见[密度定义的测度（Measure defined by a density）](Weighted-measure.md)。

在 $\mathbb R^d$ 中，$|x|=(\sum_{j=1}^d x_j^2)^{1/2}$ 表示[欧氏范数（Euclidean norm）](Normed-space.md)，$B(x,r)=\{y\in\mathbb R^d:|y-x|<r\}$ 表示以 $x$ 为中心、半径 $r>0$ 的开球。

**注**：未经完备化的乘积 $\sigma$-代数通常小于 $\mathcal L^n$。[^2]

## 基本性质

记 $E+a=\{x+a:x\in E\}$、$cE=\{cx:x\in E\}$。平移不改变测度：$m_n(E+a)=m_n(E)$；对非零实数 $c$，$m_n(cE)=|c|^n m_n(E)$。这些等式先在矩形上成立，再由覆盖构造或测度唯一性推广。单点测度为零，因此所有可数集测度为零。

## 测度、基数与拓扑性质

零测不等于可数。[Cantor 集（Cantor set）](Cantor-set.md)不可数，却满足 $m(C)=0$。反过来，有闭的、无内点的集合具有正测度，例如[胖 Cantor 集（fat Cantor set）](Cantor-set.md)。集合是否[稠密（dense）](Topological-space.md)也不决定测度：$\mathbb Q$ 稠密而测度为零；这里的闭集、内点同样采用[拓扑空间（topological space）](Topological-space.md)中的定义。

## 与 Borel 测度的关系

$\mathcal B(\mathbb R^n)$ 是[Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)，$m_B=m|_{\mathcal B(\mathbb R^n)}$ 是长度或体积的 Borel 版本；$m$ 是它的完备化。等价地，$E\in\mathcal L^n$ 当且仅当存在 Borel 集 $B$ 及 Borel 零集 $Z$，使 $E\triangle B\subseteq Z$。这里 $\triangle$ 表示[集合的对称差（symmetric difference of sets）](Set-algebra.md)。因此每个 Lebesgue 可测集都与某个 Borel 集仅相差零集。[^2]

**注**：[选择公理（Axiom of choice）](Equivalence-relation.md)允许构造[Vitali 集（Vitali set）](Vitali-set.md)，说明并非实线的所有子集都可 Lebesgue 测量。外测度 $m^*$ 虽对所有子集有定义，却只保证可数次可加性，不能把它直接当成幂集 $2^{\mathbb R}$（所有实数子集组成的集合，见[集合代数（Algebra of sets）](Set-algebra.md)）上的测度。

**注**：Folland 将实直线上[局部有限（locally finite）](Regularity-of-measures.md) Borel 测度的构造与其完备化放在同一节讨论；上述 Borel／完备版本的区分与该处约定相符。[^3]

## 相关词条

[Borel 测度（Borel measure）](Borel-measure.md) · [外测度（Outer measure）](Outer-measure.md) · [完备测度（complete measure）](Complete-measure.md) · [测度的正则性（Regularity of measures）](Regularity-of-measures.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，式 (4.1)；Example 4.3；Theorems 4.6、4.16；Examples 4.10–4.13；Exercise 4.5。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Exercise 1.22；Theorems 1.27、1.34(3)。

[^3]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorem 1.16；第35页。
