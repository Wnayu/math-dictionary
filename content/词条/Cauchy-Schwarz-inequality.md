---
title: "Cauchy–Schwarz 不等式（Cauchy–Schwarz inequality）"
aliases: ["Cauchy-Schwarz inequality", "柯西施瓦茨不等式"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Cauchy–Schwarz 不等式是 [Hölder 不等式（Hölder inequality）](Holder-inequality.md)的 $p=2$ 情形，控制两个平方可积函数之间的[内积（Inner product）](Inner-product-space.md)。[^1]

## 定理

在测度空间 $(X,\mathcal A,\mu)$ 上，$L^2(\mu)$ 及范数 $\|\cdot\|_2$ 见 [Lp 空间（Lp space）](Lp-space.md)，$\overline g$ 表示逐点复共轭，见[可测函数（Measurable function）](Measurable-function.md)。若 $f,g\in L^2(\mu)$，则
$$
\left|\int f\overline g\,d\mu\right|
\le\int|fg|\,d\mu\le\|f\|_2\|g\|_2.
$$
若两函数在 $L^2$ 中非零（即各自的 $L^2$ 范数大于零），则最左端等于最右端当且仅当 $f=cg$ 几乎处处，某个复常数 $c$。

**注**：若讨论的只是 $\int|fg|$ 等号，则仅要求绝对值成比例，不能忽略这一区别。

> [!proof]- 证明
> 若 $g\ne0$，取 $c=\langle f,g\rangle/\|g\|_2^2$，其中 $\langle f,g\rangle=\int f\overline g\,d\mu$ 是 [L2 空间（L2 space）](Lp-space.md)的内积，约定对第一变量线性。展开非负量，得
> $$
> 0\le\|f-cg\|_2^2=\|f\|_2^2-\frac{|\langle f,g\rangle|^2}{\|g\|_2^2}.
> $$
> 等号等价于 $f=cg$ 在 $L^2$ 中成立。$g=0$ 时直接成立。

## 应用

有限测度空间上，取 $g=1$，得 $\|f\|_1\le\mu(X)^{1/2}\|f\|_2$。概率空间上，以 $\mathbb E Z=\int Z\,dP$ 表示[期望（Expectation）](Expectation.md)；$\operatorname{Cov}(X,Y)=\mathbb E[(X-\mathbb EX)\overline{(Y-\mathbb EY)}]$ 为[协方差（Covariance）](Covariance.md)，$\operatorname{Var}(X)=\mathbb E|X-\mathbb EX|^2$ 为[方差（Variance）](Covariance.md)。平方可积随机变量满足 $|\operatorname{Cov}(X,Y)|^2\le\operatorname{Var}(X)\operatorname{Var}(Y)$。相关的积分表示见 [Lp 对偶（Duality of Lp）](Lp-duality.md)和[条件期望（Conditional expectation）](Conditional-expectation.md)。

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记，第2章。该章整理自 Terence Tao, An Epsilon of Room, I, §1.3；此处按笔记及其文末勘误重述。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
