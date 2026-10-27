---
title: "复合 Poisson 过程（Compound Poisson process）"
aliases: ["复合Poisson过程", "Compound Poisson process", "复合Poisson分布", "Compound Poisson distribution"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



复合 Poisson 过程给每次 Poisson 到达附加一个随机增量，因而把单位计数扩展为随机跳跃。

## 定义

设 $N$ 是强度 $\lambda\ge0$ 的[Poisson 过程（Poisson process）](Poisson-process.md)，$(Z_j)_{j\ge1}$ 是与整个 $N$ 独立的独立同分布 $\mathbb R^d$ 值随机向量，公共分布为 $\rho$。定义
$$
X_t=\sum_{j=1}^{N_t}Z_j,
$$
空和约定为零。固定 $t$ 的分布称复合 Poisson 分布。[^1]

## 特征函数与 Lévy 测度

记 $\widehat\rho(u)=\int e^{iu^Tz}\rho(dz)$。条件于计数可得
$$
E e^{iu^TX_t}=\exp\{\lambda t(\widehat\rho(u)-1)\}.
$$

> [!proof]- 证明
> 给定 $N_t=n$ 时，独立性给出条件特征函数 $\widehat\rho(u)^n$。对 $n$ 求和为 $e^{-\lambda t}\sum_{n\ge0}(\lambda t\widehat\rho(u))^n/n!=e^{\lambda t(\widehat\rho(u)-1)}$。互不相交时间段的计数及所用标记独立，故 $X$ 具有独立平稳增量。

它的[Lévy 测度（Lévy measure）](Levy-measure.md)是 $\nu(B)=\lambda\rho(B)$，$B\subseteq\mathbb R^d\setminus\{0\}$。若 $\rho(\{0\})>0$，零标记不产生实际跳跃，真实跳跃速率为 $\lambda(1-\rho(\{0\}))$。在截断 $z1_{\{|z|<1\}}$ 的[Lévy–Khintchine 约定（Lévy–Khintchine convention）](Levy-Khintchine-formula.md)下，三元组是 $(\int_{|z|<1}z\nu(dz),0,\nu)$，不能不加说明地把标准漂移参数写成零。

## 矩与路径

若 $E|Z_1|<\infty$，则 $EX_t=\lambda t EZ_1$。若实向量 $Z_1$ 平方可积，则
$$
\operatorname{Cov}(X_t)=\lambda t\,E[Z_1Z_1^T].
$$
右侧是未中心化的二阶矩；计数本身的波动贡献了均值的平方。条件方差公式见[方差与协方差（Variance and covariance）](Covariance.md)。[^2]

有限时间内只有有限次到达，故每条路径在紧区间上有界变差，即使跳幅分布没有一阶矩，仍可逐路径有限求和。这种路径有限性不推出 $E|X_t|<\infty$。

## 与一般 Lévy 过程的关系

Lévy 测度有限、Gaussian 部分为零的 Lévy 过程可写成确定性线性漂移加复合 Poisson 过程。无限跳跃强度不能用一个有限速率 Poisson 计数表示。一般用[补偿 Poisson 积分（Compensated Poisson integral）](Compensated-Poisson-integral.md)处理小跳；若小跳一阶绝对可积，也可直接作绝对收敛的跳跃和，见[Lévy 过程的路径变差（Path variation of Lévy processes）](Levy-path-variation.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，式 (1.22)；Proposition 1.2.11、Proposition 1.3.11。

[^2]: Rick Durrett，*Probability: Theory and Examples*，Version 5，2019年1月11日，Theorem 3.7.3。
