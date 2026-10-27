---
title: "Skorohod 表示定理（Skorohod representation theorem）"
aliases: ["Skorohod 表示定理", "Skorohod representation theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Skorohod 表示把分布收敛改写为另一个概率空间上适当副本的几乎必然收敛；它不改变边缘分布，但通常改变原来的联合分布。[^1][^2]

## 实值版本

若实值随机变量 $X_n\Rightarrow X$，则在概率空间 $((0,1),\mathcal B,du)$ 上存在 $Y_n,Y$，使
$$
Y_n\stackrel d=X_n,\qquad Y\stackrel d=X,\qquad Y_n\to Y\quad\text{几乎必然}.
$$
$\stackrel d=$ 表示[同分布（Equality in distribution）](Law-of-a-random-variable.md)。

> [!proof]- 证明
> 令 $F_n,F$ 为分布函数，取广义逆 $Q_n(u)=\inf\{x:F_n(x)\ge u\}$、$Q(u)=\inf\{x:F(x)\ge u\}$，$0<u<1$。由 $\{u:Q_n(u)\le x\}$ 的 Lebesgue 测度为 $F_n(x)$，$Q_n(U)$ 具有所需分布，其中 $U(u)=u$。
>
> 在单调函数 $Q$ 的任意连续点 $u$，给定 $\varepsilon>0$，可在 $Q(u)-\varepsilon$ 与 $Q(u)$ 之间选取 $F$ 的连续点 $a$ 满足 $F(a)<u$，并在 $Q(u)$ 与 $Q(u)+\varepsilon$ 之间选取连续点 $b$ 满足 $F(b)>u$；后一选择若不可能，就意味着 $Q$ 在 $u$ 右侧有跳跃。由 $F_n(a)\to F(a)$、$F_n(b)\to F(b)$，充分大时 $a<Q_n(u)\le b$，故 $Q_n(u)\to Q(u)$。单调函数只有至多可数个不连续点，因此该收敛对 Lebesgue 几乎每个 $u$ 成立。

## 与原概率空间的关系

即使原来的 $X_n$ 相互独立，构造的 $Y_n=Q_n(U)$ 一般也不独立。因而不能凭这个定理推断原样本序列几乎必然收敛，也不能自动搬运依赖原联合分布的性质。

**注**：Brownian 运动的 Skorohod 嵌入定理是另一个结论：它在适当停时实现给定均值零的分布。它与这里把一列分布放到同一概率空间上的表示定理不同；[Donsker 定理（Donsker theorem）](Donsker-theorem.md)中会说明前一种嵌入的用途。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorem 3.2.8。

[^2]: Bing-Yi Jing, *Advanced Probability Theory*, lecture notes, July 2012，Theorem 9.2.2。


