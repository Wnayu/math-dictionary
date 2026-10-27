---
title: "半有限测度（Semifinite measure）"
aliases: ["semifinite measure", "semi-finite measure", "半有限测度"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



半有限性（semifiniteness）保证无限质量不会完全躲藏在所有有限测度集合之外；它弱于 [σ-有限性（sigma-finiteness）](Sigma-finite-measure.md)。[^1]

## 定义

测度 $\mu$ 半有限，指每个 $\mu(E)=\infty$ 的可测集 $E$ 都包含可测子集 $F$，使 $0<\mu(F)<\infty$。等价地，对每个可测 $E$，
$$
\mu(E)=\sup\{\mu(F):F\subseteq E,\ F\text{ 可测},\ \mu(F)<\infty\}.
$$
等价式说明无限测度集合内部可以找到任意大的有限质量。

> [!proof]- σ-有限性蕴含半有限性
> 将全空间写成递增有限测度集合 $X_n$ 的并。若 $\mu(E)=\infty$，则 $\mu(E\cap X_n)\uparrow\infty$，所以某一项为有限正数。

## 与有限性和 σ-有限性的关系

不可数集合 $X$ 的[幂集（power set）](Set-algebra.md) $2^X$ 上，[计数测度（Counting measure）](Counting-measure.md)是半有限的：无限集包含任意多有限个点。但它不是 $\sigma$-有限的，因为可数个有限集的并仍然至多可数。

相反，单点空间上设非空集的测度为 $\infty$，这是测度，却不半有限。不能仅凭可数可加性排除这种测度。

有限测度自动半有限。

**注**：半有限性是讨论一般测度与积分之间关系时的有用中间条件，但它本身不能直接替代 [Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)或乘积定理中所写的 $\sigma$-有限假设。

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999，§1.3，习题13–15，印刷第27页。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
