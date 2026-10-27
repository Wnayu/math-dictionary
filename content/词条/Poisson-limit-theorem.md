---
title: "Poisson 极限定理（Poisson limit theorem）"
aliases: ["Poisson 极限定理", "Poisson limit theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Poisson 极限定理描述大量独立、稀少事件的总发生次数。每个事件的概率趋小，而总期望保留有限极限。[^1]

## 定理

对每个 $n$，设 $X_{n1},\ldots,X_{nk_n}$ 是独立 Bernoulli 变量，$P(X_{nj}=1)=p_{nj}$。若
$$
\max_jp_{nj}\to0,\qquad \sum_jp_{nj}\to\lambda\in[0,\infty),
$$
则 $S_n=\sum_jX_{nj}\Rightarrow\operatorname{Poisson}(\lambda)$，其中 $\lambda=0$ 时为集中于零的退化分布。

> [!proof]- 证明
> 令 $z=e^{it}-1$，则 $\mathbb Ee^{itS_n}=\prod_j(1+p_{nj}z)$。因最大 $p_{nj}$ 趋零，零附近的对数展开给出
> $$
> \sum_j\log(1+p_{nj}z)=z\sum_jp_{nj}+O_t\!\left(\sum_jp_{nj}^2\right).
> $$
> 误差不超过常数乘 $(\max_jp_{nj})\sum_jp_{nj}\to0$，故特征函数趋于 $\exp\{\lambda(e^{it}-1)\}$，这是 Poisson 分布的特征函数。由 Lévy 连续性定理得结论。

## 二项分布近似

若 $X_n\sim\operatorname{Binomial}(n,p_n)$，$np_n\to\lambda$，则上面的条件自动成立。极限概率为 $P(Z=k)=e^{-\lambda}\lambda^k/k!$，$k=0,1,\ldots$，相应分布定义见[常见概率分布（Common probability distributions）](Common-probability-distributions.md)。

若总期望趋于无穷，通常应重新中心化和缩放，不能继续使用有限参数的 Poisson 极限。若稀少事件存在强依赖，也可能成簇出现，对应[复合 Poisson 过程（Compound Poisson process）](Compound-Poisson-process.md)的跳跃和。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorem 3.6.1。
