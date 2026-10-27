---
title: "测度的弱收敛（Weak convergence of measures）"
aliases: ["weak convergence of measures", "依分布收敛", "弱收敛"]
tags: [measure-theory, probability]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



测度的弱收敛（weak convergence）通过有界连续测试函数的积分收敛描述测度逼近。它只要求对连续观测稳定，不要求每个可测集合的质量都逐一收敛。[^1]

## 定义

对 $\mathbb R^d$ 上的 Borel 概率测度，记 $\mu_n\Rightarrow\mu$，若
$$
\int f\,d\mu_n\longrightarrow\int f\,d\mu\qquad(f\in C_b(\mathbb R^d)).
$$
这里 $C_b(\mathbb R^d)$ 表示有界连续函数空间，见[可测函数（Measurable function）](Measurable-function.md)中的函数空间记号。随机变量 $X_n$ 依分布收敛于 $X$，指 $P_{X_n}\Rightarrow P_X$，其中 $P_X$ 是 $X$ 的[分布（Law of a random variable）](Law-of-a-random-variable.md)，$P_X(B)=P(X\in B)$；这些随机变量不必定义在同一个概率空间。有限测度也可采用同一定义，此时测试 $f=1$ 可知总质量收敛。

## 与逐集收敛的关系

对 [Dirac 测度（Dirac measure）](Dirac-measure.md)，$\delta_{1/n}\Rightarrow\delta_0$，因为 $f(1/n)\to f(0)$。但 $\delta_{1/n}(\{0\})=0$，而 $\delta_0(\{0\})=1$，所以弱收敛不推出[逐集收敛（Setwise convergence）](Setwise-convergence.md)。

## 与依概率收敛的关系

若同一概率空间上 $X_n\to X$ [依概率（in probability）](Convergence-in-measure.md)，则依分布收敛。可用子列原则：任取子列，再抽出几乎必然收敛子列；对每个有界连续 $f$ 应用控制收敛，迫使全列的期望收敛。反向不成立：一个[关于零对称且非退化的随机变量（symmetric and nondegenerate random variable）](Random-variable.md) $X$ 与 $-X$ 同分布，但常值序列 $X_n=-X$ 不必依概率收敛到 $X$。

## 与分布函数收敛的关系

在实直线上，依分布收敛等价于分布函数在极限分布函数的每个连续点收敛。[开集、闭集（open and closed sets）](Topological-space.md)及连续集（指边界的极限测度为零的 Borel 集）的判据见 [Portmanteau 定理（Portmanteau theorem）](Portmanteau-theorem.md)；紧区间上有限测度的对应版本见 Bass Exercise 7.29。[^2]

**注**：本卡的“弱收敛”针对测度，不是把 [Lp 空间（Lp space）](Lp-space.md)中的元素作为向量讨论的[弱收敛（weak convergence in a normed space）](Normed-space.md)；后者要求每个连续线性泛函在该向量列上的取值收敛。


## 度量空间上的概率分布

在[度量空间（Metric space）](Metric-space.md) $S$ 上，同样可用所有有界连续实函数 $f:S\to\mathbb R$ 定义 Borel 概率测度的弱收敛；记其函数类为 $C_b(S)$。空间及其拓扑是定义的一部分。例如连续路径空间 $C([0,1])$ 通常取一致距离，不能只比较有限多个时刻的分布便宣称路径弱收敛。[^3]

实值变量的四种主要收敛方式及反向失败的例子见[随机变量的收敛（Convergence of random variables）](Convergence-of-random-variables.md)。[紧性（Tightness）](Tightness.md)负责控制质量逃逸，[Prohorov 定理（Prohorov theorem）](Prohorov-theorem.md)在本库陈述的实值版本中保证弱收敛子列；[Lévy 连续性定理（Lévy continuity theorem）](Levy-continuity-theorem.md)则用特征函数识别极限。

**注**：对一般空间提出更强的表示或紧性结论时，还须检查底空间条件。[Polish 空间（Polish space）](Polish-space.md)指可由完备可分度量给出其拓扑的空间；这一条件不能由“具有某个可测结构”替代。

## 参考文献

[^1]: Chen Wang, *Notes on Lévy Processes and Stochastic Calculus*，个人笔记，第 82 页。

[^2]: Richard F. Bass, *Real Analysis for Graduate Students*, Version 4.3, 2022，Exercise 7.29。

[^3]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 3.2.9–3.2.11、3.10.1–3.10.2；第 391 页。


[概率论导航](../概率论导航.md) · [测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
