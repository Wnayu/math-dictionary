---
title: "完备化乘积测度（Completed product measure）"
aliases:
  - "完备化乘积测度"
  - "Completed product measure"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



两个完备测度空间的乘积未必完备。完备化乘积测度把所有乘积零集的子集也加入可测集合中，这一步对高维 Lebesgue 测度尤其重要。

## 定义

设 $(X,\mathcal A,\mu)$、$(Y,\mathcal B,\nu)$ 为 σ-有限测度空间，在[乘积 σ-代数（Product sigma-algebra）](Product-sigma-algebra.md) $\mathcal A\otimes\mathcal B$ 上构造[乘积测度（Product measure）](Product-measure.md) $\mu\otimes\nu$ 后，取其[完备化（completion）](Complete-measure.md)，记为
$$
(X\times Y,\overline{\mathcal A\otimes\mathcal B},\overline{\mu\otimes\nu}).
$$
新增可测集都可写成一个原乘积可测集与乘积零集的某个子集的组合，其测度由原可测部分决定。[^1]

## 乘积可测性与完备化

取一维完备 Lebesgue 空间，令 $V\subseteq[0,1]$ 是不可测集。集合 $\{0\}\times V$ 包含于乘积可测零集 $\{0\}\times[0,1]$，所以在二维完备化中可测且测度为零。

记 $\mathcal L=\mathcal L^1$、$\mathcal L^2$ 分别为一维、二维 [Lebesgue 可测集的 σ-代数（Lebesgue sigma-algebra）](Lebesgue-measure.md)；此处的上标 $2$ 表示维数。上述集合不属于 $\mathcal L\otimes\mathcal L$：若属于，则所有截面都一维 Lebesgue 可测，而它在 $x=0$ 的截面恰为 $V$，矛盾。因此
$$
\mathcal L\otimes\mathcal L\subsetneq\mathcal L^2.
$$
完备化后得到的正是二维 Lebesgue 测度；有限维情形同理。[^1]

## Fubini–Tonelli 的完成版本

若两个因子均完备且 σ-有限，非负或绝对可积函数在完备化乘积空间中仍满足 Tonelli 或 Fubini 等式，但截面可测性与可积性只保证对相应坐标几乎处处成立。[^1]

> [!proof]- 还原到原乘积空间
> 对集合 $N\subseteq X\times Y$，记 $N_x=\{y\in Y:(x,y)\in N\}$ 为竖截面，见[集合与函数的截面（sections of sets and functions）](Section-of-a-set.md)。完备化可测函数存在一个对原乘积 σ-代数可测的[版本（Version）](Almost-everywhere.md)，即与原函数几乎处处相等的可测函数。两者的差异包含于原乘积可测零集 $N$；Tonelli 给出 $\nu(N_x)=0$ 对几乎所有 $x$ 成立。因子空间的完备性使这些零截面的任意子集可测，于是几乎所有截面的积分保持不变，再应用原版 Fubini–Tonelli。

**注**：上面的竖线例子说明，不能把结论中的“几乎所有截面”改成“每个截面”。

## 相关词条

[完备测度（complete measure）](Complete-measure.md) · [乘积σ-代数（Product sigma-algebra）](Product-sigma-algebra.md) · [Fubini定理（Fubini theorem）](Fubini-theorem.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Exercise 1.11；Theorem 1.34(3)。
