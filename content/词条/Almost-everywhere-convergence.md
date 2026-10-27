---
title: "几乎处处收敛（Almost everywhere convergence）"
aliases:
  - "几乎处处收敛"
  - "Almost everywhere convergence"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



几乎处处收敛只允许在一个固定[零集（Null set）](Null-set.md)上忽略[逐点收敛（Pointwise convergence）](Metric-space.md)失败。在概率空间中，同一概念称为[几乎必然收敛（Almost sure convergence）](Almost-everywhere.md)。

## 定义

在测度空间 $(X,\mathcal A,\mu)$ 上，可测函数列 $f_n$ 几乎处处收敛于可测函数 $f$，是指存在可测零集 $N$，使得
$$
\lim_{n\to\infty}f_n(x)=f(x)\qquad(x\notin N).
$$
记为 $f_n\to f$ a.e.；概率论中记为 a.s.，分别沿用[几乎处处（Almost everywhere）](Almost-everywhere.md)与几乎必然的缩写。零集可以包含所有不收敛点，但不能随 $n$ 改变收敛命题的含义。[^1]

## 与其他收敛的关系

若 $\mu(X)<\infty$，几乎处处收敛蕴含[依测度收敛（Convergence in measure）](Convergence-in-measure.md)，并由[Egorov 定理（Egorov theorem）](Egorov-theorem.md)蕴含[几乎一致收敛（Almost uniform convergence）](Almost-uniform-convergence.md)。若再有共同可积控制函数，便得到 [L1 收敛（Convergence in L1）](Convergence-in-L1.md)，即绝对误差的积分趋于零。

**注**：无穷测度空间上，几乎处处收敛未必蕴含依测度收敛；没有积分控制时，也未必蕴含 $L^1$ 收敛。证明和反例分别见[依测度收敛（Convergence in measure）](Convergence-in-measure.md)与[控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md)。

**注**：可数多个几乎处处成立的条件可以放到同一余零集上处理；不可数参数族须额外检查。共同例外集的处理与量词反例见[几乎处处（Almost everywhere）](Almost-everywhere.md)。

## 相关词条

[几乎处处（Almost everywhere）](Almost-everywhere.md) · [控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md) · [L1收敛（Convergence in L1）](Convergence-in-L1.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 定义10.1、命题10.2、例10.3及10.6。
