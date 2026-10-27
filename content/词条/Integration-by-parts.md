---
title: "Lebesgue–Stieltjes 分部积分（Lebesgue–Stieltjes integration by parts）"
aliases:
  - "Lebesgue–Stieltjes 分部积分"
  - "Lebesgue–Stieltjes integration by parts"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue–Stieltjes 分部积分把经典乘积求导公式推广到有界变差函数。由于 Stieltjes 测度能携带原子，区间端点与跳跃项都必须明确。[^1]

## 至少一个连续函数的版本

设 $F,G\in NBV(\mathbb R)$，即二者属于[规范化有界变差函数（Normalized functions of bounded variation）](Bounded-variation.md)类：有界变差、右连续并在 $-\infty$ 的极限为零。若至少一个函数连续，则对 $a<b$，
$$
\int_{(a,b]}F\,dG+\int_{(a,b]}G\,dF
=F(b)G(b)-F(a)G(a).
$$
这里 $dF,dG$ 指[有界变差函数与复测度的对应（Correspondence between bounded variation functions and complex measures）](Bounded-variation.md)给出的测度，满足 $dF((u,v])=F(v)-F(u)$，$dG$ 类似；对单调函数这就是[Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md)。记 $F(x-)=\lim_{t\uparrow x}F(t)$ 为左极限，$G(x-)$ 同理。被积函数有界，而积分区间上的全变差有限，所以积分均存在。[^1]

> [!proof]- 证明思路
> 先利用实虚部及 BV 的单调分解化为 $F,G$ 单调，假设 $G$ 连续。对三角区域 $\{(x,y):a<x\leq y\leq b\}$ 的乘积测度使用 Fubini 定理，两种积分顺序分别产生
> $$
> \int_{(a,b]}[F(y)-F(a)]\,dG(y)
> $$
> 与
> $$
> \int_{(a,b]}[G(b)-G(x)]\,dF(x).
> $$
> 连续性保证 $G(x-)=G(x)$，故边界原子不带来额外项。令两者相等并整理即可。

## 跳跃与端点

若 $F,G$ 在同一点有[跳跃（jump）](Lebesgue-Stieltjes-measure.md)，即这里右连续函数的左、右值之差 $F(x)-F(x-)$、$G(x)-G(x-)$ 均非零，上述公式可能失败。例如取 $F=G=1_{[0,\infty)}$ 为半直线的[指示函数（indicator function）](Measurable-function.md)，并取 $a<0<b$，两个积分各等于 $1$，而右侧等于 $1$。缺少连续性时须加入跳跃修正，或采用左右值的对称版本。

Folland 的对称版本为：对任意 $F,G\in NBV$，
$$
\int_{[a,b]}\frac{F(x)+F(x-)}2\,dG(x)
+\int_{[a,b]}\frac{G(x)+G(x-)}2\,dF(x)
=F(b)G(b)-F(a-)G(a-).
$$

**注**：这里区间是 $[a,b]$，因此左端点对应 $a-$，不可与 $(a,b]$ 公式混用。[^1]

## 绝对连续情形

若 $F,G\in AC([a,b])$，即二者属于[绝对连续函数（Absolutely continuous functions）](Absolute-continuity-of-functions.md)类，则 $FG$ 也绝对连续，且
$$
\int_a^b(FG'+GF')\,dx=F(b)G(b)-F(a)G(a).
$$
这里 $dx$ 表示[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$F',G'$ 是普通导数。这是常见分部积分公式的 Lebesgue 积分版本。[^1]

## 相关词条

[有界变差（bounded variation）](Bounded-variation.md) · [Stieltjes测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md) · [微积分基本定理（Fundamental theorem of calculus for Lebesgue integrals）](Fundamental-theorem-of-Lebesgue-calculus.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorem 3.36；第3章 Exercises 34(a)、35。
