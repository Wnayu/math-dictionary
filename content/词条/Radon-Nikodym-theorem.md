---
title: "Radon–Nikodym 定理（Radon–Nikodym theorem）"
aliases:
  - "Radon–Nikodym 定理"
  - "Radon–Nikodym theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Radon–Nikodym 定理说明，在 $\sigma$-有限框架中，[绝对连续性（absolute continuity of measures）](Absolute-continuity-of-measures.md)正是测度具有密度的条件。它把集合函数转化为可测函数。[^1]

## 定理

设 $\mu,\nu$ 是同一可测空间 $(X,\mathcal A)$ 上的 $\sigma$-有限非负测度。若 $\nu\ll\mu$（$\nu$ 相对于 $\mu$ [绝对连续（absolutely continuous）](Absolute-continuity-of-measures.md)），则存在非负可测、$\mu$-几乎处处有限的函数 $f$，使
$$
\nu(E)=\int_Ef\,d\mu\qquad(E\in\mathcal A).
$$
任意两个这样的函数 $\mu$-几乎处处相等，其[Radon–Nikodym 导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md)记为 $d\nu/d\mu$。若 $\nu(X)<\infty$，则 $f\in L^1(\mu)$，其中 $L^1$ 及其指定实数、复数值域的写法见 [Lp 空间（Lp space）](Lp-space.md)；仅有 $\sigma$-有限性时不能推出全局可积。[^1][^2]

更一般地，若 $\nu$ 是 $\sigma$-有限有符号测度，则可取实值可测 $f$，其[正、负部分（positive and negative parts）](Measurable-function.md) $f^+,f^-$ 至少一个可积。若 $\nu$ 是有限有符号或复测度，则可取 $f\in L^1(\mu;\mathbb R)$ 或 $L^1(\mu;\mathbb C)$。[^1]

> [!proof]- 证明思路：密度最大化
> 先假设 $\mu,\nu$ 都有限且非负。考虑
> $$
> \mathcal H=\{h\geq0\text{ 可测}:\ \int_Eh\,d\mu\leq\nu(E)\text{ 对所有 }E\in\mathcal A\}.
> $$
> $\mathcal H$ 对取两函数最大值封闭。取积分趋于上确界的序列，再取逐项最大值，得到递增的 $h_n$；单调收敛给出极限 $f\in\mathcal H$，并使 $\int f\,d\mu$ 达到最大值。
>
> 这里 $f\mu$ 是[由密度定义的测度（measure defined by a density）](Weighted-measure.md)，即 $(f\mu)(E)=\int_Ef\,d\mu$。剩余测度 $\rho=\nu-f\mu$ 非负。Hahn 分解应用于 $\rho-\varepsilon\mu$ 表明：若 $\rho$ 不与 $\mu$ 奇异，就能在一个正 $\mu$ 测度的集合上给 $f$ 增加小正常数，违背最大性。故 $\rho\perp\mu$，其中 $\perp$ 表示[互相奇异（mutual singularity）](Mutually-singular-measures.md)；又 $\rho\ll\mu$，于是 $\rho=0$。
>
> 对 $\sigma$-有限情形，取同时具有有限 $\mu$、$\nu$ 测度的可数不交分块，在各块构造密度后拼接。唯一性也先在有限块以及密度截断集上比较，避免相减两个无限积分。有符号和复情形分别处理 Jordan 部分或实虚部。

## 绝对连续性与密度表示

在 $[0,1]$ 的 Borel 集上，[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $m$ 对[计数测度（Counting measure）](Counting-measure.md) $\#$ 绝对连续，因为计数测度唯一零集是空集。但不存在 $m=f\#$：每个单点应给出 $f(x)=0$，于是总积分也为零。这里参考测度不 $\sigma$-有限。[^1]

## 密度的可积性

相反，$m$ 相对于自身的密度为 $1$，在 $\mathbb R$ 上它不属于 $L^1(m)$。这解释了为何有限 $\nu$ 版本与 $\sigma$-有限版本的可积性结论必须分开。

## 相关词条

[RN导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md) · [Lebesgue分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md) · [Hahn分解（Hahn decomposition）](Hahn-decomposition-theorem.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. Theorem 3.8、Theorem 3.12；§3.2 Exercise 13，印刷 pp.90–93。
[^2]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. Theorem 13.4 给出有限 ν 版本；§13.4 的相关推广。
