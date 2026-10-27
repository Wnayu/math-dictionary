---
title: "测度微分（Differentiation of measures）"
aliases:
  - "测度微分"
  - "Differentiation of measures"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



测度微分用越来越小的邻域比较两个测度的质量。在欧氏空间中，相对于 Lebesgue 测度的小球质量比几乎处处恢复绝对连续部分的 [Radon–Nikodym 密度（Radon–Nikodym density）](Radon-Nikodym-derivative.md)，而奇异部分的贡献几乎处处为零。[^1]

## 相对于 Lebesgue 测度的导数

以下 $m$ 表示 $d$ 维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$B(x,r)$ 是以 $x$ 为中心、半径 $r$ 的欧氏开球。设 $\nu$ 为 $\mathbb R^d$ 上的非负、有符号或复 Borel 测度，并假定其[全变差（Total variation）](Total-variation-measure.md)在[紧集（Compact set）](Topological-space.md)上有限且[外正则（Outer regular）](Regularity-of-measures.md)。写 Lebesgue 分解
$$
d\nu=f\,dm+d\nu_s,\qquad\nu_s\perp m.
$$
这里分解记号见 [Lebesgue 分解定理（Lebesgue decomposition theorem）](Lebesgue-decomposition-theorem.md)：$\nu_s\perp m$ 表示[相互奇异（Mutual singularity）](Mutually-singular-measures.md)，$f\,dm$ 表示以 $f$ 为密度的[加权测度（Weighted measure）](Weighted-measure.md)。此时 $f\in L^1_{\mathrm{loc}}(m)$，即在每个紧集上绝对可积，空间记号见 [Lp 空间（Lp space）](Lp-space.md)。并且对 $m$-几乎每个 $x$，
$$
\lim_{r\downarrow0}\frac{\nu(B(x,r))}{m(B(x,r))}=f(x).
$$
同一个结论对每族规则收缩到 $x$ 的集合成立，其含义见 [Lebesgue 微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md)。这里的正则性采用 Folland §3.4 的欧氏 Borel 测度约定。[^1]

## 测度微分与绝对连续部分

将上述极限存在时的值记作 $D\nu(x)$；它是本词条相对于 Lebesgue 测度的几何微分记号。若 $\nu=\delta_0$，其中 $\delta_0$ 是原点的 [Dirac 测度（Dirac measure）](Dirac-measure.md)，则每个 $x\ne0$ 在足够小的球中没有 $\nu$ 质量，所以导数等于零；在 $x=0$，质量比趋于无穷。这与 $\nu\ne0$ 并不矛盾：结论是对 Lebesgue 测度几乎处处成立，而奇异质量正好可以集中在其零集上。

**注**：因此不能由 $D\nu=0$ 几乎处处推出 $\nu=0$；还需要 $\nu\ll m$，即[测度的绝对连续性（Absolute continuity of measures）](Absolute-continuity-of-measures.md)。同样，若测度不绝对连续，$D\nu$ 通常应理解为 $d\nu_{\mathrm{ac}}/dm$，其中 $\nu_{\mathrm{ac}}$ 是上述分解的绝对连续部分；不能把它写成整个 $\nu$ 的 RN 导数。

> [!proof]- 证明思路
> 对 $f\,dm$，结论来自 Lebesgue 微分定理。对奇异部分，先用全变差归结为非负测度。取一个具有全 Lebesgue 测度、但奇异测度为零的集合；通过外正则性，把它放进奇异测度任意小的开集。对质量比的上极限大于给定常数的点，选择包含在该开集内的小球，再用覆盖引理得到其 Lebesgue 测度任意小。依次处理可数个阈值，得到奇异部分的导数几乎处处为零。

**注**：这一步同时使用[局部有限性与正则性（Local finiteness and regularity）](Regularity-of-measures.md)和球的几何覆盖性质；抽象 RN 定理本身并没有“小球极限”的结论。

## 相关词条

[RN导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md) · [Lebesgue分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md) · [Lebesgue微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. Theorem 3.22 及前置正则性约定，§3.4，印刷 pp.99–100。
