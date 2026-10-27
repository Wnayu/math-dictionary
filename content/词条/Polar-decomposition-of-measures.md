---
title: "测度的极分解（Polar decomposition of measures）"
aliases:
  - "测度的极分解"
  - "Polar decomposition of measures"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



测度的极分解是复数表示 $z=|z|e^{i\theta}$ 的测度版本：把[复测度（Complex measure）](Complex-measure.md)分为非负的大小和模长为一的[相位函数（phase function）](Complex-measure.md)。相位角 $\theta$ 与相位因子 $e^{i\theta}$ 的区别见该基础词条；本条的 $h$ 取值为相位因子。[^1]

## 定理

设 $\nu$ 为 $(X,\mathcal A)$ 上的复测度，$|\nu|$ 为其[全变差测度（Total variation measure）](Total-variation-measure.md)，它与复数 $\nu(E)$ 的模 $|\nu(E)|$ 不同。则存在可测函数 $h:X\to\mathbb C$ 使
$$
d\nu=h\,d|\nu|,\qquad |h|=1\quad|\nu|\text{-a.e.}
$$
这里 $d\nu=h\,d|\nu|$ 表示对每个 $E\in\mathcal A$ 有 $\nu(E)=\int_Eh\,d|\nu|$，即[密度记号（density notation）](Weighted-measure.md)；$|h|$ 是函数逐点的复数模。$h=d\nu/d|\nu|$ 是 [Radon–Nikodym 导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md)，在 $|\nu|$-几乎处处意义下唯一。

**注**：若 $\nu=0$，模长条件在零测度意义下自动成立。[^1]

> [!proof]- 证明
> 由 $|\nu(E)|\leq|\nu|(E)$，有 $\nu\ll|\nu|$，即相对于全变差[绝对连续（absolutely continuous）](Absolute-continuity-of-measures.md)。因为复测度的全变差有限，复值 RN 定理给出 $d\nu=h\,d|\nu|$。密度的全变差公式给出
> $$
> d|\nu|=|h|\,d|\nu|.
> $$
> 两边相对于 $|\nu|$ 的密度分别为 $1$ 和 $|h|$，由密度唯一性，$|h|=1$ 几乎处处。

## 相位函数的表示

在 $|\nu|$-几乎每个 $x$，$h(x)$ 位于复平面的单位圆上，可以写为 $h(x)=e^{i\theta(x)}$。$\theta(x)$ 表示方向角，$h(x)$ 是对应的单位复数；例如 $h=1,-1,i$ 分别对应正实轴、负实轴、正虚轴方向，可取角度 $0,\pi,\pi/2$。所以相位函数是实数正负符号在复数情形的推广。

**注**：相位函数是相对于 $|\nu|$ 的逐点密度，不是给每个集合 $E$ 指定复数 $\nu(E)$ 的辐角。应通过 $\nu(E)=\int_Eh\,d|\nu|$ 先求和，得到的复数还可能因抵消而为零。

对有限有符号测度，若 $(P,N)$ 是 [Hahn 划分（Hahn decomposition）](Hahn-decomposition-theorem.md)，可取 $h=1_P-1_N$，其中 $1_P,1_N$ 是相应的[指示函数（indicator functions）](Measurable-function.md)，这正是正负符号函数。例如取
$$
\nu=2\delta_a+3i\delta_b\qquad(a\ne b),
$$
其中 $\delta_a,\delta_b$ 是点 $a,b$ 处的 [Dirac 测度（Dirac measures）](Dirac-measure.md)。则 $|\nu|=2\delta_a+3\delta_b$，可取 $h(a)=1$、$h(b)=i$；其余点的取值不影响测度。

若已知 $d\nu=f\,d\mu$，则在 $f\ne0$ 处可写 $h=f/|f|$，在 $f=0$ 处任取模长为一的值。这些零点不带 $|\nu|$ 质量。

## 相关词条

[复测度（Complex measure）](Complex-measure.md) · [全变差测度（Total variation measure）](Total-variation-measure.md) · [RN导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. Proposition 3.13(b) 及其证明，印刷 p.94。
