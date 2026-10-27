---
title: "Lp 包含关系与插值（Lp inclusions and interpolation）"
aliases: ["Lp inclusion", "Lp interpolation", "Lp 包含关系", "Lp 插值"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



不同指数的 [Lp 空间（Lp space）](Lp-space.md)之间是否包含，取决于底层测度。有限总质量与离散计数的包含方向恰好不同。[^1]

## 有限测度上的包含

若 $0<\mu(X)<\infty$ 且 $0<p<q\le\infty$，则
$$
L^q\subseteq L^p,\qquad\|f\|_p\le\mu(X)^{1/p-1/q}\|f\|_q.
$$
所有 $L^p$ 与 $\|\cdot\|_p$ 均按同一测度 $\mu$ 解释，并约定 $1/\infty=0$。这由[Hölder 不等式（Hölder inequality）](Holder-inequality.md)应用于 $|f|^p\cdot1$ 得到。若 $\mu(X)=0$，所有[等价类（Equivalence classes）](Equivalence-relation.md)都为零，另行理解即可。概率空间上常数为 $1$。

## 计数测度上的包含

记 $\ell^p$ 为 $\mathbb N$ 上计数测度对应的序列空间，其逐项级数范数见[Lp 空间（Lp space）](Lp-space.md)。对 $0<p<q\le\infty$，$\ell^p\subseteq\ell^q$，且 $\|a\|_q\le\|a\|_p$。因为每项 $|a_n|\le\|a\|_p$，在 $q<\infty$ 时有 $\sum|a_n|^q\le\|a\|_p^{q-p}\sum|a_n|^p$；$q=\infty$ 时直接取上确界即可。

## 一般无限测度空间的包含关系

一般无限测度空间没有统一包含关系。以下实线例子采用[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$1_E$ 为[指示函数（indicator function）](Measurable-function.md)。对 $p<q<\infty$，$x^{-1/q}1_{(0,1)}$ 属于 $L^p(\mathbb R)$ 而不属于 $L^q$；$x^{-1/p}1_{(1,\infty)}$ 属于 $L^q$ 而不属于 $L^p$。

## 插值不等式

这里的插值（interpolation）是用同一函数在两个端点指数 $p_0,p_1$ 下的积分大小，控制中间指数 $p$ 下的积分大小；中间指数及其估计由下面的两式准确规定。

若 $f\in L^{p_0}\cap L^{p_1}$，$0<p_0<p_1\le\infty$，$0\le\theta\le1$，且
$$
\frac1p=\frac{1-\theta}{p_0}+\frac\theta{p_1},
$$
则 $\|f\|_p\le\|f\|_{p_0}^{1-\theta}\|f\|_{p_1}^{\theta}$，零范数情形直接处理。对有限 $p_1$，把 $|f|^p$ 分为 $|f|^{p(1-\theta)}|f|^{p\theta}$ 后应用 Hölder；$p_1=\infty$ 使用[本质上界（essential upper bound）](Essential-supremum.md)。

**注**：两个端点对应 $\theta=0,1$，不能只写严格不等式 $0<\theta<1$ 却声称包含端点。

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记，第2章。该章整理自 Terence Tao, An Epsilon of Room, I, §1.3；此处按笔记及其文末勘误重述。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
