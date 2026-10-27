---
title: "有界变差函数（Functions of bounded variation）"
aliases:
  - "有界变差函数"
  - "Functions of bounded variation"
  - "BV"
  - "NBV"
  - "规范化有界变差函数"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



有界变差要求函数沿区间的总振动量有限。它同时容纳光滑变化、跳跃和[奇异连续变化（Singular continuous variation）](Discrete-continuous-decomposition.md)，并与一维有符号或复测度建立直接联系。[^1]

## 定义

设 $F:[a,b]\to\mathbb C$，定义总变差
$$
V_a^b(F)=\sup_{a=x_0<\cdots<x_k=b}
\sum_{j=1}^k|F(x_j)-F(x_{j-1})|.
$$
上确界遍历端点为 $a,b$ 的所有有限分割；若此值有限，记 $F\in BV([a,b])$，其中 $BV$ 是 bounded variation 的缩写。变差函数 $T(x)=V_a^x(F)$ [单调不减（Nondecreasing）](Lebesgue-Stieltjes-measure.md)，并满足
$$
|F(y)-F(x)|\leq T(y)-T(x)\qquad(a\leq x<y\leq b).
$$
上述一维分割是有序端点列 $a=x_0<\cdots<x_k=b$，不同于一般集合的[划分（Partition）](Set-algebra.md)。在 $\mathbb R$ 上，$BV(\mathbb R)$ 要求对所有有限分割的总和有统一有限上界；仅在每个紧区间上有界变差是局部性质，两者不同。[^1]

## Jordan 型分解与基本性质

实值 $F\in BV([a,b])$ 当且仅当它是两个有界单调不减函数之差。可具体取
$$
F=\frac{T+F}{2}-\frac{T-F}{2}.
$$
两项单调性来自上面的增量不等式。复值情形等价于实部和虚部均有界变差。BV 函数的[左右极限（One-sided limits）](Lebesgue-Stieltjes-measure.md)存在，不连续点至多可数，并且几乎处处可微。[^1]

## 与测度的对应

若 $F\in BV(\mathbb R)$ [右连续（Right-continuous）](Lebesgue-Stieltjes-measure.md)且 $F(-\infty):=\lim_{x\to-\infty}F(x)=0$，称其为规范化有界变差函数，其全体记作 $NBV$（normalized bounded variation）。此时存在唯一的复 Borel 测度 $\mu_F$ 使
$$
\mu_F((a,b])=F(b)-F(a),\qquad
F(x)=\mu_F(( -\infty,x]).
$$
反过来，每个复 Borel 测度给出这样的 $F$。积分中常以 $dF$ 简写 $d\mu_F$，即 $\int g\,dF:=\int g\,d\mu_F$；实值 $F$ 对应有限有符号测度，复值 $F$ 对应复测度，而非降 $F$ 对应非负测度。定义全局变差函数
$$
T_F(x)=V_{-\infty}^x(F):=\lim_{a\to-\infty}V_a^x(F).
$$
它是右连续、非降且在负无穷趋于零的函数；相应的测度满足 $|\mu_F|=\mu_{T_F}$。这里 $|\mu_F|$ 为[全变差测度（Total variation measure）](Total-variation-measure.md)，不同于逐集取数值绝对值 $|\mu_F(E)|$；$\mu_{T_F}$ 按上面的增量公式由 $T_F$ 定义。非降实函数的情形也见 [Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md)。[^1]

## 变差与导数积分的关系

单调不减 $F$ 在 $[a,b]$ 上有 $V_a^b(F)=F(b)-F(a)$。若 $F$ 绝对连续，则 $V_a^b(F)=\int_a^b|F'(t)|\,dt$，其中 $dt$ 表示对 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)积分。[Cantor 函数（Cantor function）](Cantor-function.md)变差为 $1$，但导数积分为零，说明 BV 不足以保证这一积分公式。

## 局部有界变差与全局有界变差

$\sin x$ 在每个有限区间上有界变差，但不属于 $BV(\mathbb R)$。

## 与连续性的关系

连续性也不足以推出 BV：令 $F(0)=0$、$F(x)=x\sin(1/x)$，其在零附近的振荡导致总变差无限。[^1]

## 相关词条

[函数绝对连续（absolute continuity of functions）](Absolute-continuity-of-functions.md) · [单调函数微分（Almost-everywhere differentiability of monotone functions）](Monotone-function-differentiation.md) · [全变差测度（Total variation measure）](Total-variation-measure.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，式 (3.24)；Examples 3.25；Theorems 3.27、3.29；第107页。
