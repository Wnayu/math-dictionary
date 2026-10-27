---
title: "推前测度（Pushforward measure）"
aliases:
  - "推前测度"
  - "Pushforward measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



推前测度沿可测映射把原空间的质量转移到目标空间。概率分布就是概率测度沿随机变量的推前。

## 定义

设 $T:(X,\mathcal A)\to(Y,\mathcal B)$ 可测，$\mu$ 是 $X$ 上的测度。定义
$$
T_*\mu(B)=\mu(T^{-1}(B)),\qquad B\in\mathcal B.
$$
这里 $T^{-1}(B)=\{x\in X:T(x)\in B\}$ 是集合的原像，不要求 $T$ 存在逆映射。所得 $T_*\mu:\mathcal B\to[0,\infty]$ 是目标可测空间 $(Y,\mathcal B)$ 上的测度，也记为 $T_\#\mu$ 或 $\mu\circ T^{-1}$；这些记号表示同一个对象。原像保持空集及不交可数并，因此定义给出测度。[^1]

## 积分变换公式

若 $h:Y\to[0,\infty]$ 可测，则
$$
\int_Y h\,d(T_*\mu)=\int_X h\circ T\,d\mu.
$$
其中 $(h\circ T)(x)=h(T(x))$。对实值或复值可测 $h$，用 [Lp 空间（Lp space）](Lp-space.md)的记号，$h\in L^1(T_*\mu)$ 当且仅当 $h\circ T\in L^1(\mu)$，此时同一等式成立。

**注**：无须 $T$ 为[单射或满射（injective or surjective mapping）](Set-algebra.md)，也无须[可微（differentiable）](Change-of-variables.md)。[^1]

> [!proof]- 证明
> 对[指示函数（indicator function）](Measurable-function.md) $h=1_B$，等式就是定义。用线性性推广到非负简单函数，再用单调收敛推广到所有非负函数。对绝对值使用该结论后，分别处理实部、虚部的正负部分即可。

## 例

对 [Dirac 测度（Dirac measure）](Dirac-measure.md)，$T_*\delta_a=\delta_{T(a)}$；若 $U$ 在 $[0,1]$ 上服从[均匀分布（uniform distribution）](Common-probability-distributions.md)，$T(u)=u^2$，则 $T(U)$ 的[分布函数（distribution function）](Law-of-a-random-variable.md)在 $0\le t\le1$ 上为 $\sqrt t$。

## 复合与有限性

可测映射复合满足 $(S\circ T)_*\mu=S_*(T_*\mu)$。

有限性与概率归一化在推前下保持，因为 $T_*\mu(Y)=\mu(X)$。

**注**：σ-有限性一般不保持：把无限 Lebesgue 测度经常值映射压到一个点，该点质量为无穷，所得单点空间不是 σ-有限。

推前积分公式与带 Jacobian 的[换元公式（Change of variables formula）](Change-of-variables.md)相容；后者进一步识别了推前测度相对于 Lebesgue 测度的密度。

## 相关词条

[可测函数（Measurable function）](Measurable-function.md) · [概率测度（Probability measure）](Probability-measure.md) · [Dirac测度（Dirac measure）](Dirac-measure.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Example 1.20；Theorem 1.30(8)。
