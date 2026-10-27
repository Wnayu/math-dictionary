---
title: "Lp 完备性（Completeness of Lp）"
aliases: ["Riesz-Fischer theorem", "Riesz–Fischer theorem", "Lp completeness", "Lp 完备性"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Lp 完备性意味着：只要一列函数在积分范数下彼此足够接近，就存在同一空间中的极限。这里的“完备”是函数空间的[度量完备性（metric completeness）](Metric-space.md)，与[测度空间完备性（completeness of a measure space）](Complete-measure.md)含义不同。[^1]

## 定理

任意测度空间上，$1\le p\le\infty$ 时 [Lp 空间（Lp space）](Lp-space.md)是[Banach 空间（Banach space）](Normed-space.md)，即在其范数度量下完备；下文 $\|\cdot\|_p$、$L^p$ 均相对于该空间的测度 $\mu$。

**注**：底层测度无需 $\sigma$-有限，也无需完备。

> [!proof]- 证明
> 对 $1\le p<\infty$，从[Cauchy 列（Cauchy sequence）](Metric-space.md) $(f_n)$ 中选子列使 $\|f_{n_{k+1}}-f_{n_k}\|_p\le2^{-k}$。令
> $$
> G_N=\sum_{k=1}^N|f_{n_{k+1}}-f_{n_k}|.
> $$
> Minkowski 给出 $\|G_N\|_p\le1$；单调收敛得 $G=\lim G_N\in L^p$，故差分级数几乎处处绝对收敛。于是 $f=f_{n_1}+\sum_{k\ge1}(f_{n_{k+1}}-f_{n_k})$ 几乎处处有定义，并且
> $$
> \|f-f_{n_K}\|_p\le\sum_{k\ge K}2^{-k}\longrightarrow0.
> $$
> 零集上赋值为零即可选出可测代表；原列由 Cauchy 性也收敛到 $f$。
> 对 $p=\infty$，同样选子列，并在可数个异常零集的并以外逐点满足差分上界 $2^{-k}$，故[一致收敛（uniformly convergent）](Metric-space.md)到本质有界可测函数；再用 Cauchy 性恢复全列。

## 范数收敛与逐点极限

范数收敛一般只保证存在[几乎处处收敛子列（almost everywhere convergent subsequence）](Subsequence-principle.md)，不保证原列逐点收敛。简单函数稠密并不表示简单函数空间完备：例如 $[0,1]$ 在[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)下，函数 $x\mapsto x$ 的分层简单逼近在 $L^p$ 中收敛，而极限不是简单函数。

## 拟范数情形

$0<p<1$ 时，用 $d(f,g)=\int_X|f-g|^p\,d\mu$ 的度量仍有完备性，证明将差分的 $p$ 次积分取可求和子列即可。

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记，第2章。该章整理自 Terence Tao, An Epsilon of Room, I, §1.3；此处按笔记及其文末勘误重述。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
