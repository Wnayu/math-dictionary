---
title: "次可加遍历定理（Subadditive ergodic theorem）"
aliases: ["次可加遍历定理", "Subadditive ergodic theorem", "Kingman次可加遍历定理", "Kingman subadditive ergodic theorem"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



次可加遍历定理处理不能分解为逐项相加、但满足分段上界的随机量，例如随机游动的不同访问点数。[^1]

## 定义

下述采用 Durrett 的双指标版本。随机变量 $X_{m,n}$，$0\le m<n$，满足

1. $X_{0,n}\le X_{0,m}+X_{m,n}$ 对 $0<m<n$ 几乎必然成立；
2. 对每个 $k\ge1$，块序列 $(X_{nk,(n+1)k})_{n\ge1}$ 严格平稳；
3. 向量序列 $(X_{m,m+k})_{k\ge1}$ 的分布不依赖 $m$；
4. $\mathbb EX_{0,1}^+<\infty$，且存在 $c> -\infty$ 使 $\mathbb EX_{0,n}\ge cn$ 对所有 $n$ 成立。

则存在可积 $X_\infty$，使
$$
\frac{X_{0,n}}n\longrightarrow X_\infty
\quad\text{几乎必然且在 }L^1\text{ 中},
\qquad
\mathbb EX_\infty=\inf_{n\ge1}\frac{\mathbb EX_{0,n}}n.
$$
若第2项中的所有块序列都遍历，极限为上述确定常数。平稳与遍历的定义见[平稳过程（Stationary process）](Stationary-process.md)。

## 分块方法

> [!proof]- 证明思路
> 期望的次可加性先由分块给出 $a_n/n\to\inf_ka_k/k$，其中 $a_n=\mathbb EX_{0,n}$。固定块长 $k$ 后，以 $X_{jk,(j+1)k}$ 的和控制 $X_{0,n}$，再对块序列应用遍历定理，获得上极限估计。
>
> 困难是下极限：需要沿样本路径选择有利长度的块，并控制未覆盖部分；仅使用期望次可加性不能证明随机变量本身收敛。完成该步骤后，线性期望下界与可积正部使正负尾部受控，得到 $L^1$ 收敛。完整四步证明见 Durrett Theorem 6.4.1。

## 例

对具有平稳增量的随机游动 $S_n$，令 $X_{m,n}=|\{S_{m+1},\ldots,S_n\}|$，其中竖线为有限集合的元素个数。分段访问点集合的并给出次可加性，且 $0\le X_{m,n}\le n-m$。定理因此给出单位时间不同访问点数的极限。

**注**：次可加定理不是把所有 $O(n)$ 上界自动升级为极限的原则。平稳性、可积性和期望下界均是定理的一部分；只有上界无法排除振荡。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorem 6.4.1；Example 6.4.3。
