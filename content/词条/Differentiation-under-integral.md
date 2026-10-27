---
title: "积分号下求导（Differentiation under the integral sign）"
aliases:
  - "积分号下求导"
  - "Differentiation under the integral sign"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



积分号下求导把含参数积分的导数化为被积函数的导数积分。关键是用同一个可积函数控制一段参数区间内的差商。

## 定理

在测度空间 $(X,\mathcal A,\mu)$ 上，设 $I\subseteq\mathbb R$ 是开区间，$f:X\times I\to\mathbb R$。假设对每个 $t\in I$，$f(\cdot,t)$ 可测且可积；对几乎所有 $x$，$t\mapsto f(x,t)$ 在 $I$ 上可微。若对每个紧区间 $J\subset I$ 存在 $g_J\in L^1(\mu)$，使在同一个[余零集（Co-null set）](Almost-everywhere.md)上
$$
|\partial_t f(x,t)|\le g_J(x)\qquad(t\in J),
$$
这里 $\partial_t f$ 表示仅对参数 $t$ 求[偏导数（Partial derivative）](Change-of-variables.md)，即极限 $\lim_{h\to0}[f(x,t+h)-f(x,t)]/h$，$f(\cdot,t)$ 表示固定 $t$ 后作为 $x$ 的函数；$L^1(\mu)$ 为 [Lp 空间（Lp space）](Lp-space.md)中的可积函数空间。在这些假设下，$F(t)=\int_Xf(x,t)d\mu(x)$ 可微，且
$$
F'(t)=\int_X\partial_t f(x,t)\,d\mu(x).
$$
这是 Folland 的有界参数区间版本的局部形式。复值函数可对实部、虚部分别应用。[^1]

> [!proof]- 控制差商
> 固定 $t_0\in I$，选其紧邻域 $J\subset I$。对每个固定的 $x$，一元中值定理给出位于 $t,t_0$ 之间的 $\xi$，使 $f(x,t)-f(x,t_0)=(t-t_0)\partial_t f(x,\xi)$，因此
> $$
> \left|\frac{f(x,t)-f(x,t_0)}{t-t_0}\right|\le g_J(x).
> $$
> 对任意 $t_k\to t_0$，差商逐点几乎处处趋于 $\partial_t f(x,t_0)$。差商是可测函数，因此其极限可选为可测[版本（Version）](Almost-everywhere.md)。控制收敛定理允许积分与此极限交换，得到所需导数公式。

## 连续性版本

如果 $f(x,t)\to f(x,t_0)$ 几乎处处，且 $t_0$ 附近有 $|f(x,t)|\le g(x)\in L^1$，则 $F(t)\to F(t_0)$。连续性控制的是函数，求导控制的是导数或差商，二者条件不同。[^1]

例。以下 $dx$ 表示对实直线 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)积分。$F(t)=\int_0^\infty e^{-tx}dx$，$t>0$。固定 $t_0>0$，在 $[t_0/2,3t_0/2]$ 上，导数绝对值被 $xe^{-t_0x/2}$ 控制，该函数可积。因此 $F'(t)=-\int_0^\infty xe^{-tx}dx=-t^{-2}$。

**注**：不能只验证每个固定 $t$ 的导数可积便交换操作；还需要上述局部统一控制，或其他足以保证极限交换的条件。

## 相关词条

[控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md) · [可积函数（Integrable function）](Integrable-function.md) · [Lebesgue积分（Lebesgue integral）](Lebesgue-integral.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. §2.3，定理2.27，印刷第56页（PDF第69页）。
