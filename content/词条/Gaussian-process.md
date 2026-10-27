---
title: "高斯过程（Gaussian process）"
aliases: ["高斯过程", "Gaussian process", "高斯向量", "Gaussian vector", "中心高斯空间", "Gaussian space", "高斯白噪声", "Gaussian white noise"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



高斯过程的全部有限维分布由均值函数与协方差函数决定，但每个坐标单独正态并不足以保证联合高斯。[^L][^Y]

## 定义

实向量 $X=(X_1,\ldots,X_d)$ 为高斯向量（Gaussian vector），指每个线性组合 $\sum_ja_jX_j$ 都服从一维正态分布，允许方差为零的退化情形。它的特征函数为
$$
\mathbb E e^{i\langle u,X\rangle}
=\exp\left(i\langle u,m\rangle-\tfrac12u^T\Sigma u\right),
$$
其中 $u\in\mathbb R^d$，$m=\mathbb EX$，$\Sigma_{jk}=\operatorname{Cov}(X_j,X_k)$。协方差与正态分布参数见[协方差（Covariance）](Covariance.md)和[常见概率分布（Common probability distributions）](Common-probability-distributions.md)。$\Sigma$ 只要求半正定，不必可逆；奇异时不能使用非退化多元正态密度。

实值随机过程 $X=(X_t)_{t\in T}$ 为高斯过程，如果每个有限向量 $(X_{t_1},\ldots,X_{t_n})$ 都高斯。记 $m(t)=\mathbb EX_t$、$K(s,t)=\operatorname{Cov}(X_s,X_t)$；$K$ 对称且正半定，即对任意有限组 $t_1,\ldots,t_n$ 与实数 $a_1,\ldots,a_n$，$\sum_{j,k}a_ja_kK(t_j,t_k)\ge0$。反之，任意这样的 $m,K$ 决定一个高斯过程的有限维分布，并可由[Kolmogorov 扩张定理（Kolmogorov extension theorem）](Kolmogorov-extension-theorem.md)实现。

## 不相关与独立

联合高斯向量的两个分块独立，当且仅当它们之间所有协方差为零。

> [!proof]- 证明
> 独立推出协方差为零。反过来，交叉协方差为零使协方差矩阵分块对角，因此联合特征函数分解为两个分块特征函数的乘积。由特征函数唯一性，联合分布等于乘积分布，即独立。

**注**：联合高斯不能删去。令 $Z\sim N(0,1)$，$\varepsilon$ 为独立的对称正负号，$X=Z$、$Y=\varepsilon Z$。$X,Y$ 分别正态且不相关，但 $|X|=|Y|$，因而不独立，也不联合高斯。

## 高斯空间与白噪声

中心高斯空间（centered Gaussian space）是 $L^2(P)$ 的闭线性子空间，其中每个元素都是均值零的高斯变量。给定测度空间 $(E,\mathcal E,\mu)$，强度为 $\mu$ 的高斯白噪声（Gaussian white noise）是从实 $L^2(\mu)$ 到某中心高斯空间的线性等距映射 $W$，所以
$$
\mathbb E[W(f)W(g)]=\int_Efg\,d\mu.
$$
当 $\mu(A)<\infty$，记 $W(A)=W(1_A)$。不交集合对应独立高斯变量，且 $\operatorname{Cov}(W(A),W(B))=\mu(A\cap B)$。可数不交并的可加性先在 $L^2$ 意义下成立；不能自动认为每个样本都给出有符号测度。

例如 $E=[0,\infty)$、$\mu$ 为 Lebesgue 测度时，$B_t=W(1_{[0,t]})$ 的协方差为 $\min(s,t)$，连续修改就是[Brownian 运动（Brownian motion）](Brownian-motion.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. 第1章，尤其§§1.2–1.4。

[^Y]: Russell Lyons, Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall, August 10, 2025，课程讲义。 第1章，Gaussian Variables and Gaussian Processes。
