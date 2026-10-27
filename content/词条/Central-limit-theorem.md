---
title: "中心极限定理（Central limit theorem）"
aliases: ["中心极限定理", "Central limit theorem", "Cramér–Wold判据", "Cramér–Wold device"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



中心极限定理描述大量小的随机波动相加后，经适当中心化和归一化形成的高斯极限。各种版本的独立性、矩条件和归一化并不相同。[^1]

## 独立同分布有限方差版本

设 $X_k$ 独立同分布，$\mu=\mathbb EX_1$，$0<\sigma^2=\operatorname{Var}(X_1)<\infty$。则
$$
\frac{\sum_{k=1}^nX_k-n\mu}{\sigma\sqrt n}\Rightarrow N(0,1).
$$
这里 $\Rightarrow$ 是[依分布收敛（Convergence in distribution）](Weak-convergence-of-measures.md)，$N(0,1)$ 为标准正态分布。

> [!proof]- 证明
> 令 $Y_k=(X_k-\mu)/\sigma$。有限二阶矩给出 $\varphi_Y(u)=1-u^2/2+o(u^2)$。由独立性，归一化和的特征函数为
> $$
> \left[\varphi_Y(t/\sqrt n)\right]^n
> =\left[1-\frac{t^2}{2n}+o(n^{-1})\right]^n\to e^{-t^2/2}.
> $$
> 极限是标准正态的特征函数并在零点连续，由 Lévy 连续性定理得到结论。

## 多维版本及其他版本

若 $X_k\in\mathbb R^d$ 独立同分布，均值向量为 $\mu$、协方差矩阵为有限的 $\Sigma$，则 $n^{-1/2}\sum_{k\le n}(X_k-\mu)\Rightarrow N_d(0,\Sigma)$。$\Sigma$ 可以奇异，此时极限集中于一个低维仿射子空间。每个线性组合 $\langle t,X_k-\mu\rangle$ 的一维中心极限定理给出联合特征函数极限。

非同分布独立三角阵列见[Lindeberg–Feller 定理（Lindeberg–Feller theorem）](Lindeberg-Feller-theorem.md)；误差界见[Berry–Esseen 定理（Berry–Esseen theorem）](Berry-Esseen-theorem.md)；路径层面的极限见[Donsker 定理（Donsker theorem）](Donsker-theorem.md)。

## 线性投影判据

Cramér–Wold 判据（Cramér–Wold device）适用于任意 $\mathbb R^d$ 值[随机向量（Random vector）](Random-vector.md)序列：$Z_n\Rightarrow Z$ 当且仅当对每个 $u\in\mathbb R^d$，$\langle u,Z_n\rangle\Rightarrow\langle u,Z\rangle$。必要性来自连续映射；充分性是因为每个投影的特征函数在参数 $1$ 处收敛，给出 $\mathbb Ee^{i\langle u,Z_n\rangle}\to\mathbb Ee^{i\langle u,Z\rangle}$，再用多维 Lévy 连续性定理。该判据解释了上一段如何从一维中心极限定理得到向量结论；不能只检查坐标轴方向，因为各坐标的边缘极限不能确定依赖结构。

**注**：大数定律使用 $n$ 尺度描述均值，中心极限定理使用 $\sqrt n$ 尺度描述中心化波动。无限方差不能直接代入这里的 $\sigma$；某些重尾分布对应[稳定分布（Stable distribution）](Stable-distribution.md)及不同归一化。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§3.4.1、3.10，特别是Theorems 3.10.5–3.10.7。
