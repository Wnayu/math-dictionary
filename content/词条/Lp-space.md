---
title: "Lebesgue 空间（Lp space）"
aliases: ["Lp space", "Lebesgue space", "L^p 空间", "Lp 空间", "勒贝格空间"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue 空间（Lebesgue space）用函数的幂次积分衡量大小，并把[几乎处处（Almost everywhere）](Almost-everywhere.md)相等的函数视为同一个元素。参数 $p$ 改变了对函数高度的敏感程度。[^1]

## 定义

在测度空间 $(X,\mathcal A,\mu)$ 上，对 $0<p<\infty$ 定义
$$
L^p(\mu)=\{f:X\to\mathbb C\text{ 可测}:\int |f|^p\,d\mu<\infty\}/\!\sim,
\qquad f\sim g\iff f=g\quad\mu\text{-a.e.},
$$
这里 $/\!\sim$ 表示按“$\mu$-几乎处处相等”取[等价类（equivalence class）](Equivalence-relation.md)：一个元素 $[f]$ 包含所有与 $f$ 几乎处处相等的可测函数，通常仍简写为 $f$。可将完整空间记为 $L^p(X,\mathcal A,\mu)$，或用 $L^p(\mu;\mathbb C)$、$L^p(\mu;\mathbb R)$ 区分复值、实值情形。固定底层测度时可简记 $L^p$。

定义 $\|f\|_p=(\int|f|^p\,d\mu)^{1/p}$，也写 $\|f\|_{L^p(\mu)}$。$L^\infty(\mu)$ 由本质有界函数的等价类组成，范数为
$$
\|f\|_\infty=\inf\{M\ge0:|f|\le M\quad\mu\text{-几乎处处}\},
$$
见[本质上确界（Essential supremum）](Essential-supremum.md)。当 $\mu(X)>0$ 时，它等于 $\operatorname*{ess\,sup}|f|$；若 $\mu(X)=0$，上面的非负上界定义给出范数为 $0$。它忽略零集上的点值，不是任意代表函数的逐点上确界。

当 $1\le p\le\infty$ 时，$L^p$ 是[Banach 空间（Banach space）](Normed-space.md)，即范数所诱导度量完备的向量空间；[Minkowski 不等式（Minkowski inequality）](Minkowski-inequality.md)给出三角不等式，[完备性定理（completeness theorem for Lp）](Lp-completeness.md)保证[Cauchy 列（Cauchy sequence）](Metric-space.md)有极限。当 $0<p<1$ 时通常只有[拟范数（quasi-norm）](Normed-space.md)，但
$$
d(f,g)=\int |f-g|^p\,d\mu
$$
仍是[完备度量（complete metric）](Metric-space.md)。在全部 $0<p\le\infty$ 情形，写 $f_n\to f$ 于 $L^p$ 都表示 $\|f_n-f\|_p\to0$；$0<p<1$ 时这等价于上述 $d(f_n,f)\to0$，不把拟范数误称为范数。

**注**：不要把此时的 $\|f\|_p$ 当作一般满足三角不等式的范数。

## 例

记 $1_E$ 为 $E$ 的[指示函数（indicator function）](Measurable-function.md)。若 $a\in\mathbb C$ 且 $0<\mu(E)<\infty$，则 $\|a1_E\|_p=|a|\mu(E)^{1/p}$，而 $\|a1_E\|_\infty=|a|$。对 $(0,1)$ 上的 Lebesgue 测度，$x^{-\alpha}\in L^p$ 当且仅当 $\alpha p<1$（$\alpha>0$）。

## 序列空间

对 $\mathbb N$ 上的[计数测度（Counting measure）](Counting-measure.md)，相应空间记为 $\ell^p$：它由序列 $a=(a_n)_{n\ge1}$ 组成，且
$$
\|a\|_{\ell^p}=\left(\sum_{n=1}^\infty|a_n|^p\right)^{1/p}<\infty\quad(0<p<\infty),\qquad
\|a\|_{\ell^\infty}=\sup_{n\ge1}|a_n|<\infty\quad(p=\infty).
$$
在计数测度下没有非空零集，因此序列的几乎处处相等就是逐项相等。

## 局部可积函数空间

写 $L^p(\mathbb R^d)$ 或 $L^p([a,b])$ 且未指明测度时，本百科采用[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)及其在该区域上的限制。$L^1_{\mathrm{loc}}(U)$ 表示开集 $U\subseteq\mathbb R^d$ 上的局部可积函数空间：其元素为 Lebesgue 可测函数的几乎处处等价类，且对每个[紧集（compact set）](Topological-space.md) $K\subset U$ 有 $\int_K|f|\,dx<\infty$；在 $U=\mathbb R^d$ 时，等价于在每个有界可测集合上绝对可积。局部可积不要求全空间上的积分有限。

## 等价类与点值

在 $\mathbb R^d$ 的 Lebesgue 测度下，零函数与 $1_{\{0\}}$ 属于同一等价类。因而点值 $f(0)$ 不是 $L^p$ 元素本身确定的量。

## 与其他概念的联系

[Hölder 不等式（Hölder inequality）](Holder-inequality.md)控制乘积，[稠密性（density in Lp）](Lp-density.md)允许用简单函数逼近，[对偶定理（Lp duality theorem）](Lp-duality.md)描述连续线性泛函。更换为底层测度的[完备化（completion）](Complete-measure.md)不会改变这些空间的自然[等距同构（isometric isomorphism）](Normed-space.md)类型：把原可测函数的等价类送到同一函数在完备化空间中的等价类，得到保持 $\|\cdot\|_p$ 的线性双射；$p<1$ 时这里保持的是拟范数，也保持对应的度量。满射性来自完备化下每个可测函数都有原可测的[几乎处处相等版本（almost-everywhere modification）](Almost-everywhere.md)。

在 $L^2(\mu;\mathbb C)$ 上，[内积（inner product）](Inner-product-space.md)记为 $\langle f,g\rangle=\int_X f\overline g\,d\mu$，对第一个变量线性，对第二个变量[共轭线性（conjugate-linear）](Bounded-linear-functional.md)；$\overline g$ 的含义见[可测函数（Measurable function）](Measurable-function.md)。它满足 $\|f\|_2^2=\langle f,f\rangle$，且乘积可积性由[Cauchy–Schwarz 不等式（Cauchy–Schwarz inequality）](Cauchy-Schwarz-inequality.md)保证。由于该内积诱导的范数正是完备的 $L^2$ 范数，$L^2$ 是[Hilbert 空间（Hilbert space）](Inner-product-space.md)。

不同指数间的包含方向及范数比较见 [Lp 包含关系与插值（Lp inclusions and interpolation）](Lp-inclusions.md)；有限测度和计数测度的结论不能混用。

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，式 (2.2)；Exercises 2.2、2.5(i)；Proposition 2.14；第35、38页。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
