---
title: "单调收敛定理（Monotone convergence theorem）"
aliases:
  - "单调收敛定理"
  - "Monotone convergence theorem"
  - "Beppo Levi 定理"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



单调收敛定理（亦称 Beppo Levi 定理）允许非负函数在单调增加的极限中与积分交换，不要求统一的有限积分上界。

## 定理

在任意测度空间上，若 $f_n$ 为非负可测函数，且 $f_n\uparrow f$ 几乎处处，其中 $f$ 可测，则
$$
\int f\,d\mu=\lim_{n\to\infty}\int f_n\,d\mu.
$$
这里 $f_n\uparrow f$ 表示函数值单调增加到 $f$，记号约定见[可测函数（Measurable function）](Measurable-function.md)；“几乎处处”允许一个共同的可测零集作为例外。两边允许同时为 $+\infty$，无须有限测度或 σ-有限性。[^1][^2]

> [!proof]- 由简单函数定义证明
> 先改在共同的可测零集上取零，使单调性逐点成立。记 $L=\lim_n\int f_n$；由 $f_n\le f$ 得 $L\le\int f$。任取非负简单函数 $s\le f$ 及 $0<c<1$，令 $E_n=\{f_n\ge cs\}$，则 $E_n\uparrow X$，采用[集合极限（Set limits）](Set-limits.md)的递增记号；下式 $1_{E_n}$ 为[指示函数（indicator function）](Measurable-function.md)。由测度的从下连续性，
> $$
> L\ge\lim_n\int f_n1_{E_n}\ge c\lim_n\int s1_{E_n}=c\int s.
> $$
> 先令 $c\uparrow1$，再对所有 $s\le f$ 取上确界，得到 $L\ge\int f$。

## 非负级数

对任意非负可测函数列 $g_n$，应用于部分和可得
$$
\int\sum_{n=1}^{\infty}g_n\,d\mu=\sum_{n=1}^{\infty}\int g_n\,d\mu.
$$
这是计数测度版本的[Tonelli 定理（Tonelli theorem）](Tonelli-theorem.md)。

## 递增与递减序列的积分极限

在 $\mathbb R$ 的[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)下，$f_n=1_{[-n,n]}\uparrow1$，两边积分均趋于无穷，定理仍适用。若改成递减非负序列，通常须另加某项可积：$1_{[n,\infty)}\downarrow0$，但每项积分均无穷。

**注**：若递增函数可能取负值，可在存在可积下界时先减去该下界再应用定理。

## 相关词条

[简单函数逼近（approximation by simple functions）](Simple-function-approximation.md) · [Fatou引理（Fatou lemma）](Fatou-lemma.md) · [测度连续性（Continuity of measures）](Continuity-of-measures.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 定理7.1、命题7.6。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.3，Convergence theorems。
