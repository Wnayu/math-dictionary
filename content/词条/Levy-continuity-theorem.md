---
title: "Lévy 连续性定理（Lévy continuity theorem）"
aliases: ["Lévy 连续性定理", "Lévy continuity theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Lévy 连续性定理把概率分布的弱收敛转换为特征函数的逐点收敛，并指出防止质量逃向无穷所需的连续性条件。[^1]

## 定理

设 $\varphi_n$ 是实轴上概率测度 $\mu_n$ 的[特征函数（Characteristic function）](Characteristic-function.md)。

1. 若 $\mu_n\Rightarrow\mu$，则对每个 $t\in\mathbb R$，$\varphi_n(t)\to\varphi_\mu(t)$。
2. 若对每个 $t$，$\varphi_n(t)\to\varphi(t)$，且 $\varphi$ 在 $0$ 连续，则存在唯一概率测度 $\mu$，其特征函数为 $\varphi$，并且 $\mu_n\Rightarrow\mu$。

> [!proof]- 证明
> 第一点分别对有界连续的 $\cos(tx)$、$\sin(tx)$ 使用弱收敛定义。对第二点，积分计算给出
> $$
> \frac1{2u}\int_{-u}^{u}(1-\Re\varphi_n(t))\,dt
> =\int\left(1-\frac{\sin(ux)}{ux}\right)\mu_n(dx).
> $$
> 当 $|x|>2/u$ 时括号至少为 $1/2$，故
> $$
> \mu_n(|x|>2/u)\le\frac1u\int_{-u}^{u}(1-\Re\varphi_n(t))\,dt.
> $$
> 固定 $u$ 先用控制收敛令 $n\to\infty$，再令 $u\downarrow0$；$\varphi(0)=1$ 及其在零点连续使右侧趋零。有限个首项可另扩大区间，因此 $\{\mu_n\}$ 紧。
>
> 由实直线的 [Prohorov 定理（Prohorov theorem）](Prohorov-theorem.md)可抽取弱收敛子列；第一点说明任一子列极限均有特征函数 $\varphi$。[特征函数反演（Characteristic function inversion）](Characteristic-function-inversion.md)保证唯一性，故每个子列只能趋于同一概率测度，进而全列收敛。

## 零点连续性不能省略

若 $\mu_n=N(0,n)$，则 $\varphi_n(t)=e^{-nt^2/2}\to1_{\{0\}}(t)$。极限在零点不连续，原分布族也不紧，故没有概率测度的弱极限。

本定理是[中心极限定理（Central limit theorem）](Central-limit-theorem.md)与[Poisson 极限定理（Poisson limit theorem）](Poisson-limit-theorem.md)的基本识别工具。向量版本使用 $t\in\mathbb R^d$ 的特征函数及多维紧性结论。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §3.3.2，Theorem 3.3.17。
