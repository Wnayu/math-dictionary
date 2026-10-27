---
title: "Vitali 收敛定理（Vitali convergence theorem）"
aliases:
  - "Vitali 收敛定理"
  - "Vitali convergence theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Vitali 收敛定理用一致可积代替共同控制函数，把依测度收敛提升为 $L^1$ 收敛。有限测度空间上的这一版本同时控制了尖峰与积分的整体大小。

## 定理

设 $\mu(X)<\infty$，以 [Lp 空间（Lp space）](Lp-space.md)的约定记 $L^1(\mu)$、$\|u\|_p$，并省略同一参考测度 $\mu$ 的积分记号。设 $f_n\in L^1(\mu)$，$f$ 为有限实值或复值可测函数。则
$$
f_n\to f\text{ 于 }L^1
\quad\Longleftrightarrow\quad
\begin{cases}
f_n\to f\text{ 依测度},\\
\{f_n:n\ge1\}\text{ 一致可积}.
\end{cases}
$$
这里“于 $L^1$ 收敛”指 $\|f_n-f\|_1=\int|f_n-f|\,d\mu\to0$，参见 [L1 收敛（Convergence in L1）](Convergence-in-L1.md)。右边成立时，也自动得到 $f\in L^1$。这里的一致可积采用[尾部积分定义（tail-integral definition of uniform integrability）](Uniform-integrability.md)。Bass 习题先陈述几乎处处收敛版本；依测度版本可由子列原理得到，也可直接作下面的证明。[^1]

> [!proof]- 充分性
> 由子列原理选出几乎处处趋于 $f$ 的子列，再由 Fatou 引理及一致 $L^1$ 有界性得 $f\in L^1$。给定 $\varepsilon>0$，利用[积分族的一致绝对连续性（uniform absolute continuity of integrals）](Uniform-integrability.md)和 $f$ 的[积分绝对连续性（absolute continuity of the integral）](Integrable-function.md)，取 $\delta>0$，使测度小于 $\delta$ 的 $E$ 满足 $\sup_n\int_E|f_n|+\int_E|f|<\varepsilon$。取 $a>0$ 使 $a\mu(X)<\varepsilon$。由依测度收敛，$E_n=\{|f_n-f|>a\}$ 最终满足 $\mu(E_n)<\delta$。于是
> $$
> \int|f_n-f|\le a\mu(X)+\int_{E_n}(|f_n|+|f|)<2\varepsilon.
> $$
>
> 必要性中，$L^1$ 收敛蕴含依测度收敛和范数一致有界。对充分靠后的项，$\int_E|f_n|\le\|f_n-f\|_1+\int_E|f|$；有限个前项也各有积分绝对连续性，合起来得到一致小集控制，因而一致可积。

## Lp 有界性与 L1 收敛

若 $f_n\to f$ 依测度且某个 $p>1$ 满足 $\sup_n\|f_n\|_p<\infty$，则在有限测度空间上 $f_n\to f$ 于 $L^1$。下面的实直线例子均使用 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$1_E$ 是[指示函数（indicator function）](Measurable-function.md)。仅有 $L^1$ 有界性不足够，尖峰序列 $n1_{(0,1/n)}$ 即为反例。

## 尾部积分控制与 L1 收敛

在无穷测度空间上，仅有尾部一致可积并不能保证 $L^1$ 收敛。例如 $f_n=1_{(n,n+1)}$ 满足尾部条件，且逐点趋于零，但 $\|f_n\|_1=1$。这个平移例子说明函数值尾部条件不保证[空间尾部的一致控制（uniform control of spatial tails）](Uniform-integrability.md)；它并不满足全局依测度收敛。[^1]

**注**：无穷测度空间不能原样套用本定理：在 $\mathbb R$ 上取 $f_n=n^{-1}1_{(0,n)}$。它甚至[一致趋于零（uniform convergence to zero）](Metric-space.md)，即 $\sup_x|f_n(x)|=1/n\to0$，因而全局依测度趋于零；各项绝对值不超过 $1$，所以满足尾部一致可积，且 $L^1$ 范数恒为 $1$。质量摊薄到越来越大的区域，未被尾部高度条件排除。

## 相关词条

[依测度收敛（Convergence in measure）](Convergence-in-measure.md) · [L1收敛（Convergence in L1）](Convergence-in-L1.md) · [子列原理（Subsequence principle）](Subsequence-principle.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Exercises 7.21–7.24；Proposition 10.2。
