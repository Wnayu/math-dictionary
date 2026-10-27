---
title: "Carathéodory 可测性（Carathéodory measurability）"
aliases:
  - "Carathéodory 可测性"
  - "Carathéodory measurability"
  - "Carathéodory定理"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Carathéodory 可测性用外测度的分割等式筛选可测集合。它把定义于所有子集的[外测度（Outer measure）](Outer-measure.md)转化为完备测度。

## 定义

给定 $X$ 上外测度 $\mu^*$。集合 $A\subseteq X$ 称为 $\mu^*$-可测，若对每个测试集合 $E\subseteq X$，
$$
\mu^*(E)=\mu^*(E\cap A)+\mu^*(E\setminus A).
$$

**注**：测试集合 $E$ 不要求预先可测。由[外测度的次可加性（Subadditivity of an outer measure）](Outer-measure.md)，等号中的“$\le$”自动成立，所以实际只需验证“$\ge$”。[^1]

这里 $E\setminus A$ 表示差集，$A^c=X\setminus A$ 表示补集，见[集合代数（Set algebra）](Set-algebra.md)。所有 $\mu^*$-可测集合组成 $\sigma$-代数 $\mathcal M_{\mu^*}$，且将 $\mu^*$ 的定义域限制为 $\mathcal M_{\mu^*}$ 所得的 $\mu^*|_{\mathcal M_{\mu^*}}$ 是[完备测度（complete measure）](Complete-measure.md)。

> [!proof]- 证明
> 分割等式对 $A$ 与 $A^c$ 对称，所以可测类对补集封闭。先沿 $A$ 再沿 $B$ 分割任意 $E$，得到四块；合并其中三块并用次可加性，即证 $A\cup B$ 可测。因此该类是代数。
> 若 $A_n$ 是不交可测集，记 $A=\bigcup_nA_n$。逐次分割给出
> $$
> \mu^*(E)\ge\sum_{n=1}^N\mu^*(E\cap A_n)+\mu^*(E\setminus A).
> $$
> 令 $N\to\infty$，再用 $\mu^*(E\cap A)\le\sum_n\mu^*(E\cap A_n)$，得到 $A$ 的可测性。任意可数并可先不交化，故此类是 $\sigma$-代数。令 $E=A$，同一估计与次可加性一起给出可数可加性。
> 若 $\mu^*(N)=0$，则对任意 $E$ 有 $\mu^*(E\cap N)=0$，而 $\mu^*(E\setminus N)\le\mu^*(E)$，故 $N$ 可测。$N$ 的每个子集也有外测度零，因此完备性成立。

## 与扩张定理的关系

这里不要求已存在前测度。若外测度由代数上的[前测度（Premeasure）](Premeasure.md)诱导，则还需证明原代数成员满足上述条件且外测度保留原值；这一步给出[Carathéodory 扩张定理（Carathéodory extension theorem）](Caratheodory-extension-theorem.md)。二者是相连的两个陈述。

## 相关词条

[外测度（Outer measure）](Outer-measure.md) · [完备测度（complete measure）](Complete-measure.md) · [Carathéodory 扩张定理（Carathéodory extension theorem）](Caratheodory-extension-theorem.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §4.1，Definition 4.5 与 Theorem 4.6；印刷 pp.26–28。
