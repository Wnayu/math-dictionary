---
title: 独立性（Independence）
aliases:
- independence
- 相互独立
- 独立性
- 两两独立
- Pairwise independence
- 独立同分布
- Independent and identically distributed
tags:
- measure-theory
- probability
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



独立性（independence）表示不同可测信息的联合概率可以分解为概率之积。用 σ-代数表达后，它直接连接[乘积测度（Product measure）](Product-measure.md)与随机变量的联合分布。[^1]

## 定义

在[概率空间（probability space）](Probability-measure.md) $(\Omega,\mathcal F,P)$ 上，子 σ-代数族 $(\mathcal G_i)_{i\in I}$ 相互独立，指对每个有限集合 $J\subset I$ 和任意 $A_j\in\mathcal G_j$，都有
$$
P\!\left(\bigcap_{j\in J}A_j\right)=\prod_{j\in J}P(A_j).
$$
指标须互异。随机变量族 $(X_i)$ 独立，指其[生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)族 $(\sigma(X_i))$ 独立。只要求每两个不同指标对应的 $\sigma$-代数独立称为两两独立（pairwise independence）。事件族 $(A_i)$ 的独立性定义为 $(\sigma(A_i))$ 的独立性，其中 $\sigma(A_i)=\{\varnothing,A_i,A_i^c,\Omega\}$（重复集合只计一次）。若一个随机变量 $X$ 独立于子 $\sigma$-代数 $\mathcal G$，其含义是 $\sigma(X)$ 与 $\mathcal G$ 独立。若随机变量既相互独立又具有相同分布，称为独立同分布（independent and identically distributed，i.i.d.）。

## 分布与积分判据

记 $P_{X_j}$ 为 $X_j$ 的[分布（Law of a random variable）](Law-of-a-random-variable.md)，$P_{(X_1,\ldots,X_n)}$ 为联合分布，$\bigotimes_jP_{X_j}$ 为这些分布的[乘积测度（Product measure）](Product-measure.md)，$\mathbb E$ 为关于 $P$ 的[期望（expectation）](Expectation.md)。实随机变量 $X_1,\ldots,X_n$ 独立等价于 $P_{(X_1,\ldots,X_n)}=\bigotimes_jP_{X_j}$；也等价于对任意有界 Borel 函数 $f_j$，
$$
\mathbb E\prod_jf_j(X_j)=\prod_j\mathbb Ef_j(X_j).
$$


> [!proof]- 积分判据的证明
> 联合分布等于乘积分布时，[Fubini 定理（Fubini theorem）](Fubini-theorem.md)把乘积函数的积分拆为各边缘积分的乘积。反方向先取 $f_j=1_{B_j}$，得到所有Borel矩形上的测度相等；由[测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)推广到整个乘积Borel结构，即联合分布等于乘积测度。[^1]

若 $X\in L^1(P)$，即 $X$ 关于 $P$ 可积，且独立于 $\mathcal G$，则[条件期望（Conditional expectation）](Conditional-expectation.md)满足 $\mathbb E[X\mid\mathcal G]=\mathbb EX$ 几乎必然。

## 两两独立与相互独立

令 $U,V$ 为独立的[公平 Bernoulli 随机变量（fair Bernoulli random variables）](Common-probability-distributions.md)，即二者均以概率 $1/2$ 取 $0$、以概率 $1/2$ 取 $1$，$W=U+V\pmod2$，即把 $U+V$ 除以 $2$ 取余数。三者两两独立，但 $P(U=V=W=0)=1/4$，不等于 $1/8$，因此不相互独立。有关“无穷多次发生”的应用见 [Borel–Cantelli 引理（Borel–Cantelli lemma）](Borel-Cantelli-lemma.md)。

无穷独立序列的尾事件满足[零一律（Zero-one laws）](Zero-one-laws.md)。该结论所用的尾 σ-代数及其与有限首段独立的证明由专门词条给出。

## 参考文献

[^1]: Chen Wang，*Notes on Lévy Processes and Stochastic Calculus*，个人笔记，Theorem A.2.7；第 80–81 页。

[测度论导航](../测度论导航.md) · [概率论导航](../概率论导航.md) · [测度（Measure）](Measure.md)
