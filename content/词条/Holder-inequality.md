---
title: "Hölder 不等式（Hölder inequality）"
aliases: ["Holder inequality", "Hölder inequality", "赫尔德不等式"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Hölder 不等式控制两个函数乘积的积分，是[乘积可积性（integrability of a product）](Integrable-function.md)、[Lp 空间（Lp space）](Lp-space.md)包含关系及对偶理论的基本估计。[^1]

## 定理

在任意测度空间上，若 $1\le p\le\infty$，$p'$ 为[共轭指数（Conjugate exponent）](Conjugate-exponent.md)，则
$$
\int|fg|\,d\mu\le\|f\|_p\|g\|_{p'},\qquad f\in L^p,\ g\in L^{p'}.
$$
所有空间与范数均相对于同一测度 $\mu$，采用[Lp 空间（Lp space）](Lp-space.md)的约定。更一般地，若 $0<p,q\le\infty$，$1/r=1/p+1/q$，则
$$
\|fg\|_r\le\|f\|_p\|g\|_q.
$$

**注**：无需假设全空间有限或 $\sigma$-有限。

> [!proof]- 证明
> 若 $1<p<\infty$ 且两范数非零，令 $F=|f|/\|f\|_p$、$G=|g|/\|g\|_{p'}$。Young 数值不等式给出
> $$
> FG\le F^p/p+G^{p'}/p'.
> $$
> 积分后右端为 $1$。范数为零时函数几乎处处为零，结论直接成立；端点 $p=1$ 或 $\infty$ 用本质上界即可。一般乘积式在 $p,q<\infty$ 时对 $|f|^r,|g|^r$ 应用共轭指数 $p/r,q/r$ 的结论；含无穷端点时直接使用本质上界。

当 $1<p<\infty$，且 $f,g$ 的范数均非零，第一式等号成立当且仅当 $|f|^p=c|g|^{p'}$ 几乎处处，某个 $c>0$。

**注**：这里是绝对值的幂；不能对一般复函数写成 $f^p=cg^{p'}$。

## 小集合上的积分估计

取 $g=1_E$ 为集合 $E$ 的[指示函数（indicator function）](Measurable-function.md)，$0<\mu(E)<\infty$，得到
$$
\int_E|f|\,d\mu\le\mu(E)^{1-1/p}\|f1_E\|_p.
$$
因此控制高阶积分可以控制小集合上的积分；这也是[一致可积（Uniform integrability）](Uniform-integrability.md)判据的来源之一。

这一估计也可从[凸性（convexity）](Convex-function.md)角度理解，参见 [Jensen 不等式（Jensen inequality）](Jensen-inequality.md)。

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记，第2章。该章整理自 Terence Tao, An Epsilon of Room, I, §1.3；此处按笔记及其文末勘误重述。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
