---
title: "L1 收敛（Convergence in L1）"
aliases:
  - "L1 收敛"
  - "Convergence in L1"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



$L^1$ 收敛要求绝对误差的总积分趋于零，因此能直接控制积分值的误差。它比单独的[依测度收敛（Convergence in measure）](Convergence-in-measure.md)更强；函数在小集合上取得很大值、而绝对值积分不变的集中现象，见[一致可积性（Uniform integrability）](Uniform-integrability.md)中的尾积分条件。

## 定义

在测度空间 $(X,\mathcal A,\mu)$ 上，$L^1(\mu)$ 表示按几乎处处相等识别的可积函数空间，沿用 [Lp 空间（Lp space）](Lp-space.md)的记号。对 $f_n,f\in L^1(\mu)$，称 $f_n$ 在 $L^1$ 中收敛于 $f$，如果
$$
\|f_n-f\|_1=\int|f_n-f|\,d\mu\longrightarrow0.
$$
可积函数按几乎处处相等识别后，这就是 $L^1$ 空间的[范数收敛（Norm convergence）](Normed-space.md)。[^1]

## 直接后果

下文省略积分后的 $d\mu$ 时，仍对同一个测度 $\mu$ 积分。由积分三角不等式，
$$
\left|\int f_n-\int f\right|\le\|f_n-f\|_1\to0.
$$
它蕴含[依测度收敛（Convergence in measure）](Convergence-in-measure.md)，并因而具有几乎处处收敛子列；积分估计与抽取证明分别见该词条和[子列原理（Subsequence principle）](Subsequence-principle.md)。

**注**：整列不必几乎处处收敛；[打字机序列（typewriter sequence）](Convergence-in-measure.md)就是反例。

## Scheffé 型判据（Scheffé-type criterion）

若 $f_n,f\in L^1$，$f_n\to f$ 几乎处处，且 $\int|f_n|\to\int|f|$，则 $f_n\to f$ 于 $L^1$。[^1]

**注**：不能把这些条件替换成单独的积分值收敛。实值或复值版本的完整证明、非负密度版本及反例，统一见[Scheffé 引理（Scheffé lemma）](Scheffe-lemma.md)。

## 相关词条

[依测度收敛（Convergence in measure）](Convergence-in-measure.md) · [控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md) · [Vitali收敛定理（Vitali convergence theorem）](Vitali-convergence-theorem.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 定义10.1、命题10.5；§7.5，习题7.10（印刷 p.64）给出模长积分判据，习题7.9给出相关的非负函数逐集积分收敛结论。
