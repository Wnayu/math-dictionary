---
title: "Lp 中的稠密逼近（Density in Lp）"
aliases: ["Lp density", "简单函数稠密性", "Lp 稠密性"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



稠密逼近（density）把任意 [Lp 函数（Lp function）](Lp-space.md)近似为易于积分的简单函数，使许多恒等式可以先在简单函数上证明再取极限。[^1]

本条“$D$ 在 $L^p$ 中稠密”指：对每个 $f\in L^p$ 和 $\varepsilon>0$，存在 $g\in D$ 使 $\|f-g\|_p<\varepsilon$；等价地，能从 $D$ 中选一列 $g_n$ 使 $\|f-g_n\|_p\to0$。这是[稠密子集（dense subset）](Topological-space.md)在 $L^p$ 度量中的具体含义，$0<p<1$ 时使用[拟范数（Quasi-norm）](Normed-space.md)所对应的[度量（Metric）](Lp-space.md)。

## 定理

任意测度空间上，对 $0<p<\infty$，具有有限测度非零集合的[简单函数（Simple function）](Simple-function.md)在 $L^p$ 中稠密。对 $p=\infty$，所有简单函数在 $L^\infty$ 中稠密，但通常不能再要求非零集合具有有限测度。

> [!proof]- 证明
> 本证明 $1_E$ 为集合 $E$ 的[指示函数（indicator function）](Measurable-function.md)，$\|\cdot\|_p$ 采用[Lp 空间（Lp space）](Lp-space.md)的记号。设 $f\in L^p$，令 $E_n=\{1/n\le|f|\le n\}$。由 $\mu(E_n)\le n^p\|f\|_p^p<\infty$，且 $f1_{E_n}\to f$ 几乎处处、$|f-f1_{E_n}|^p\le|f|^p$，控制收敛给出 $L^p$ 逼近。在 $E_n$ 上把实部、虚部按网格离散，得简单函数 $s$ 满足 $|s-f1_{E_n}|\le\delta1_{E_n}$，从而 $\|s-f1_{E_n}\|_p\le\delta\mu(E_n)^{1/p}$。先选 $n$ 再选 $\delta$。
> 对本质有界函数，只需在一个固定有界值域上离散，就得到本质一致逼近。

**注**：在无限测度空间，常数 $1$ 与任何有限测度非零集合的函数之间的 $L^\infty$ 距离至少为 $1$，故端点限制不同。

## 连续逼近与可分性

对 $\mathbb R^d$ 的 Lebesgue 测度，紧支撑连续函数类 $C_c(\mathbb R^d)$（见[可测函数（Measurable function）](Measurable-function.md)）在 $L^p$（$1\le p<\infty$）中也稠密，可由[正则性（Regularity of measures）](Regularity-of-measures.md)和[Lusin 定理（Lusin theorem）](Lusin-theorem.md)建立。

若测度 $\sigma$-有限且可测结构[可数生成（countably generated）](Generated-sigma-algebra.md)，$L^p$（$1\le p<\infty$）[可分（separable）](Metric-space.md)，即存在一个可数集合 $D\subset L^p$ 满足上述稠密性条件。

**注**：完备化后的 $\sigma$-代数即使不可数生成，也可利用几乎处处等价关系得到相同的可分性；不要把“可数生成”误写成可分性的必要条件。

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记，第2章。该章整理自 Terence Tao, An Epsilon of Room, I, §1.3；此处按笔记及其文末勘误重述。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
