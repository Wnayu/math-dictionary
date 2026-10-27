---
title: 条件期望（Conditional expectation）
aliases:
- conditional expectation
- 条件期望
tags:
- measure-theory
- probability
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



条件期望（conditional expectation）在保留某个子 σ-代数所表达信息的前提下，替代原随机变量，并保持所有可见事件上的积分。其存在性来自 [Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)。[^1]

## 定义

设 $(\Omega,\mathcal F,P)$ 为[概率空间（Probability space）](Probability-measure.md)，$\mathcal G\subseteq\mathcal F$ 为[子 σ-代数（Sub-sigma-algebra）](Sigma-algebra.md)，$X\in L^1(P)$。条件期望 $Y=\mathbb E[X\mid\mathcal G]$ 满足：$Y$ 是 $\mathcal G$-可测且可积，并且
$$
\int_A Y\,dP=\int_A X\,dP\quad(A\in\mathcal G).
$$
这里 $\mathbb E Z=\int_\Omega Z\,dP$ 是[期望（Expectation）](Expectation.md)，竖线 $\mid\mathcal G$ 表示以子 σ-代数 $\mathcal G$ 为条件；$L^1(P)$ 的元素与可积性约定见 [Lp 空间（Lp space）](Lp-space.md)。条件期望存在且在几乎必然意义下唯一。

> [!proof]- 存在性的测度构造
> 记 $P|_{\mathcal G}$ 为仅在 $\mathcal G$ 上取值的定义域限制，见[限制测度（Restricted measure）](Restricted-measure.md)；$dQ/d(P|_{\mathcal G})$ 为 [Radon–Nikodym 导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md)。对 $X\ge0$，令 $Q(A)=\int_A X\,dP$，$A\in\mathcal G$。这是相对于 $P|_{\mathcal G}$ 绝对连续的有限测度，故 $Y=dQ/d(P|_{\mathcal G})$。一般实值 $X$ 分别处理正负部，复值再处理实虚部。Radon–Nikodym 的唯一性给出结论。

## 可数分割下的条件期望

若 $\mathcal G$ 由可数[划分（Partition）](Set-algebra.md) $(A_k)$ 生成，即各 $A_k$ 两两不交、可测且其并为 $\Omega$，在 $P(A_k)>0$ 的块上
$$
Y=\sum_{k:P(A_k)>0}\frac{\mathbb E[X1_{A_k}]}{P(A_k)}1_{A_k};
$$
其中 $1_{A_k}$ 是[指示函数（Indicator function）](Measurable-function.md)。零概率块上可以任取一个常数；选择的[版本（Version）](Almost-everywhere.md)仍须保持 $\mathcal G$-可测。它是每个信息块上的平均值。

## 基本性质

以下是概要；各性质的条件、证明、条件收敛与因子提出规则集中在[条件期望的性质（Properties of conditional expectation）](Conditional-expectation-properties.md)。


条件期望线性、保持非负性，且 $\mathbb E Y=\mathbb EX$。若 $\mathcal H\subseteq\mathcal G$ 也是子 σ-代数，则有塔式性质 $\mathbb E[\mathbb E(X\mid\mathcal G)\mid\mathcal H]=\mathbb E(X\mid\mathcal H)$。对 $1\le p\le\infty$，它是 $L^p$ [收缩算子（Contraction operator）](Normed-space.md)，即 $\|\mathbb E[X\mid\mathcal G]\|_p\le\|X\|_p$（当 $X\in L^p(P)$）；$p=2$ 时为到 $L^2(\mathcal G)$ 的[正交投影（Orthogonal projection）](Inner-product-space.md)：$Y\in L^2(\mathcal G)$，且 $\mathbb E[(X-Y)\overline Z]=0$ 对每个 $Z\in L^2(\mathcal G)$ 成立。这里 $L^p(\mathcal G)=L^p(\Omega,\mathcal G,P|_{\mathcal G})$ 表示具有 $\mathcal G$-可测代表的子空间，范数仍由 $P$ 计算，见 [Lp 空间（Lp space）](Lp-space.md)。

若 $X$ [独立于（Independent of）](Independence.md) $\mathcal G$，即 $\sigma(X)$ 与 $\mathcal G$ 独立，则 $Y=\mathbb EX$；若 $X$ 已经 $\mathcal G$-可测，则 $Y=X$。

**注**：本卡采用概率空间版本：一般 $\sigma$-有限测度限制到任意子 σ-代数后未必仍 $\sigma$-有限，不能直接把上面的存在性论证照搬过去。另见 [Doob–Dynkin 引理（Doob–Dynkin lemma）](Doob-Dynkin-lemma.md)。

## 参考文献

[^1]: Chen Wang, Notes on Lévy Processes and Stochastic Calculus，个人笔记，附录 Review of measure and probability。

[测度论导航](../测度论导航.md) · [概率论导航](../概率论导航.md) · [测度（Measure）](Measure.md)
