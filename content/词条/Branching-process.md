---
title: "分枝过程（Branching process）"
aliases: ["分枝过程", "Branching process", "Galton–Watson过程", "Galton-Watson process", "后代分布", "Offspring distribution"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Galton–Watson 分枝过程用每个个体独立产生后代的机制描述种群代际变化。[^1]

## 定义

令 $\xi_{n,j}$ 为独立同分布的非负整数值变量，后代分布 $p_k=P(\xi_{n,j}=k)$。从 $Z_0=1$ 出发递归定义
$$
Z_{n+1}=\sum_{j=1}^{Z_n}\xi_{n+1,j},
$$
空和规定为 $0$。它是状态空间 $\mathbb N_0$ 上的[Markov 链（Markov chain）](Markov-chain.md)，$0$ 是吸收态。后代均值 $m=\sum_kkp_k$ 小于、等于、大于 $1$ 时分别称次临界、临界、超临界。

## 归一化鞅

若 $0<m<\infty$，相对于截至第 $n$ 代使用的后代变量生成的滤过，
$$
\mathbb E[Z_{n+1}\mid\mathcal F_n]=mZ_n,
\qquad W_n=Z_n/m^n
$$
是非负[鞅（Martingale）](Martingale.md)，所以 $W_n$ 几乎必然收敛。

> [!proof]- 证明
> 在事件 $\{Z_n=k\}$ 上，下一代是 $k$ 个独立于 $\mathcal F_n$、均值为 $m$ 的变量之和，故条件均值为 $km$。归纳得 $\mathbb EZ_n=m^n$，保证每个 $W_n$ 可积，再由[鞅收敛定理（Martingale convergence theorem）](Martingale-convergence-theorem.md)得到极限。

## 灭绝概率

记生成函数 $f(s)=\sum_{k\ge0}p_ks^k$，$0\le s\le1$。灭绝概率 $q=P(\exists n:Z_n=0)$ 是方程 $f(s)=s$ 在 $[0,1]$ 中的最小解。

> [!proof]- 证明
> 到第 $n$ 代已灭绝的概率 $q_n=P(Z_n=0)$ 满足 $q_0=0$、$q_{n+1}=f(q_n)$，因为第一代的每个家系独立灭绝。于是 $q_n\uparrow q$，连续性给出 $q=f(q)$。若 $r=f(r)$，归纳得 $q_n\le r$，故 $q\le r$。

若 $m\le1$ 且 $p_1\ne1$，则 $q=1$；若 $m>1$，则 $q<1$。结论由 $f$ 的凸性、$f(1)=1$ 和左导数 $f'(1-)=m$ 判断其与对角线的交点。退化情形 $p_1=1$ 必须排除：此时 $Z_n\equiv1$，永不灭绝。

**注**：$\mathbb EW_n=1$ 不保证 $\mathbb EW_\infty=1$；一般非负鞅可能损失均值，仍须检查一致可积性，不能自动推出非退化极限。


后代分布所用的[概率生成函数（Probability generating function）](Probability-generating-function.md)集中说明幂级数、复合规则与阶乘矩，避免把导数有限性作为默认条件。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Lemma 4.3.9；Theorems 4.3.10–4.3.12。
