---
title: "有限集序列上的渐近 Lebesgue 分解（Finitary Lebesgue decomposition）"
aliases:
  - "有限集序列上的渐近 Lebesgue 分解"
  - "Finitary Lebesgue decomposition"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



在单个有限集的均匀概率测度下，每个测度都有密度，经典 Lebesgue 分解的奇异部分为零。个人笔记中的有限组合类比针对一列越来越复杂的有限结构，用统一估计和渐近集中区分三种质量行为；这是序列层面的子列定理。[^1]

## 定理

设 $X_n$ 为非空有限集，取幂集为 $\sigma$-代数，$m_n$ 为均匀概率测度，$\mu_n$ 为任意概率测度。这里 $m_n(E)=|E|/|X_n|$，$|E|$ 表示[有限集基数（Finite cardinality）](Counting-measure.md)；此处 $m_n$ 不是 $n$ 维 Lebesgue 测度。可以抽取子列并仍记为 $n$，在各空间上找到非负测度
$$
\mu_n=\mu_{n,\mathrm{ac}}+\mu_{n,\mathrm{sc}}+\mu_{n,\mathrm{pp}},
$$
下标 $\mathrm{ac},\mathrm{sc},\mathrm{pp}$ 分别借用绝对连续、奇异连续、纯点的名称，但在本词条中由下面的序列性质定义，不能按单个空间中的[离散连续分解（Discrete and continuous decomposition of measures）](Discrete-continuous-decomposition.md)直接解释。这三个分量满足以下性质。[^1]

1. 一致绝对连续：对每个 $\varepsilon>0$，存在与 $n$ 无关的 $\delta>0$，使 $m_n(E)\leq\delta$ 推出 $\mu_{n,\mathrm{ac}}(E)\leq\varepsilon$。
2. 渐近奇异连续：存在 $H_n\subseteq X_n$，使 $m_n(H_n)\to0$ 且 $\mu_{n,\mathrm{sc}}(X_n\setminus H_n)=0$，即 $\mu_{n,\mathrm{sc}}$ [集中于（Concentrated on）](Mutually-singular-measures.md) $m_n$-测度趋零的集合上，且 $\sup_{x\in X_n}\mu_{n,\mathrm{sc}}(\{x\})\to0$。
3. 一致纯点性：对每个 $\varepsilon>0$，存在与 $n$ 无关的整数 $N$ 和集合 $E_n\subseteq X_n$，使 $|E_n|\leq N$ 且 $\mu_{n,\mathrm{pp}}(X_n\setminus E_n)\leq\varepsilon$。

**注**：各分量一般是[次概率测度（Subprobability measure）](Probability-measure.md)，即非负测度且总质量不超过 $1$，不要求各自总质量为 $1$。定理不声称分量唯一。

> [!proof]- 证明思路：两次对角抽取
> 对角抽取（diagonal extraction）是依次抽取嵌套子列、再取第 $k$ 条子列的第 $k$ 项，使可数个收敛要求同时成立；规范步骤见[子列原理（Subsequence principle）](Subsequence-principle.md)。这里每个 $\alpha_n(k)$ 或 $\beta_n(j)$ 都落在 $[0,1]$，因此对每个固定指标可以先抽取收敛子列。
> 令 $f_n(x)=\mu_n(\{x\})/m_n(\{x\})=|X_n|\mu_n(\{x\})$，即 $\mu_n$ 关于 $m_n$ 的 [Radon–Nikodym 密度（Radon–Nikodym density）](Radon-Nikodym-derivative.md)；$d\mu_n=f_n\,dm_n$ 的含义为逐集积分，见[加权测度（Weighted measure）](Weighted-measure.md)。对每个整数 $k$，先让尾质量 $\alpha_n(k)=\mu_n\{f_n\geq k\}$ 沿子列收敛为 $c_k$，其中 $c_k\downarrow c$。选缓慢趋于无穷的 $k_n$，使 $\alpha_n(k_n)\to c$。取
> $$
> \mu_{n,\mathrm{ac}}=\mu_n|_{\{f_n<k_n\}}.
> $$
> 此处 $\mu_n|_A(E)=\mu_n(E\cap A)$ 是[限制测度（Restricted measure）](Restricted-measure.md)，花括号 $\{f_n<k_n\}$ 表示满足条件的点集。固定大 $k$ 后，两层尾部之差 $\alpha_n(k)-\alpha_n(k_n)$ 的上极限为 $c_k-c$，故
> $$
> \mu_{n,\mathrm{ac}}(E)\leq k m_n(E)+\alpha_n(k)-\alpha_n(k_n)
> $$
> 对充分大的 $n$ 成立；先令 $k$ 大使 $c_k-c$ 小，再选 $\delta$ 控制 $k m_n(E)$，便得到一致绝对连续性。有限个早期指标通过缩小 $\delta$ 处理。剩余支持 $H_n=\{f_n\geq k_n\}$ 满足 $m_n(H_n)\leq1/k_n\to0$。
>
> 再记点质量 $p_n(x)=\mu_n(\{x\})$，对 $\beta_n(j)=\mu_n\{p_n\geq1/j\}$ 作第二次对角抽取，并选缓慢增加的 $j_n$。把 $H_n$ 上 $p_n<1/j_n$ 的部分归入 $\mathrm{sc}$，其最大点质量趋零；其余归入 $\mathrm{pp}$。对固定 $j$，集合 $\{p_n\geq1/j\}$ 至多有 $j$ 个点，而遗漏的 $\mathrm{pp}$ 质量由 $\beta_n(j_n)-\beta_n(j)$ 控制。
> 先选 $j$ 使极限尾部差足够小，便能对充分大的 $n$ 使用同一个点数上界 $j$。对剩余有限个早期指标取 $E_n=X_n$，再把 $N$ 增大到同时超过它们的基数，就得到对全部 $n$ 一致的纯点性。

## 例

取 $X_n=\{1,\ldots,n^2\}$。[均匀分布（Uniform distribution）](Common-probability-distributions.md)可以全放入 $\mathrm{ac}$；在前 $n$ 个点上的均匀分布可以全放入 $\mathrm{sc}$，因为支持的 $m_n$-测度为 $1/n$、最大点质量为 $1/n$；固定点的 Dirac 分布可以全放入 $\mathrm{pp}$。

**注**：“渐近奇异”不是说每个有限 $n$ 都与 $m_n$ 奇异。对一般无限、非离散空间或有符号测度的推广，在所据笔记中仍作为练习保留，本词条不把它当作已经证明的结论。[^1]

## 相关词条

[Lebesgue分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md) · [一致可积性（Uniform integrability）](Uniform-integrability.md) · [离散连续分解（Discrete and continuous decomposition of measures）](Discrete-continuous-decomposition.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，式 (1.10)–(1.13)（Theorem 1.54）；Exercise 1.55。
