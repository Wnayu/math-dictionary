---
title: "集合代数（Algebra of sets）"
aliases:
  - "集合代数"
  - "Algebra of sets"
  - "集合环"
  - "半环"
  - "单射"
  - "Injection"
  - "满射"
  - "Surjection"
  - "双射"
  - "Bijection"
  - "等势"
  - "基数"
  - "Cardinality"
  - "至多可数"
  - "不可数"
  - "Uncountable"
  - "连续统势"
  - "余有限"
  - "Cofinite"
  - "余可数"
  - "Cocountable"
  - "集合划分"
  - "Partition"
  - "不交化"
  - "Disjointification"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



集合代数（algebra of sets）对有限集合运算封闭。它常由区间或矩形等简单集合组成，再借助[测度扩张定理（Carathéodory extension theorem）](Caratheodory-extension-theorem.md)生成完整的测度空间。

## 定义

这里 $2^X=\mathcal P(X)=\{E:E\subseteq X\}$ 是 $X$ 的幂集（power set），即所有子集组成的集合。补集总是相对于当前全集 $X$ 而言：$A^c=X\setminus A$；差集 $A\setminus B=\{x\in A:x\notin B\}$，对称差（symmetric difference）$A\triangle B=(A\setminus B)\cup(B\setminus A)$。记号 $A\sqcup B$ 表示 $A\cap B=\varnothing$ 时的并，$\bigsqcup_j E_j$ 表示所列集合两两不交时的并；普通 $\bigcup_jE_j$ 不附带不交要求。对有限集合 $E$，$|E|$ 表示元素个数，与实数或复数的绝对值记号按对象区分。

对映射 $T:A\to B$，单射（injective）指 $T(x)=T(y)$ 必有 $x=y$；满射（surjective）指每个 $b\in B$ 都有 $a\in A$ 使 $T(a)=b$；同时单射且满射称为双射（bijective）。两个集合 $A,B$ 等势（equipotent），指存在从 $A$ 到 $B$ 的双射，即一一对应；集合的基数（cardinality）记录这一等势类型。有限集的基数是其元素个数，无限集的基数不是这里的实数绝对值。集合至多可数（at most countable），指存在到 $\mathbb N$ 的单射，等价于它有限或可与 $\mathbb N$ 一一对应；后一种无限情形称为可数无限（countably infinite），其基数记为 $\aleph_0$。本文不另加“无限”时，“可数”通常包含有限情形。非至多可数的集合称为不可数（uncountable）；连续统势（cardinality of the continuum）指与 $\mathbb R$ 等势，其基数记为 $\mathfrak c$。若 $X\setminus A$ 有限，称 $A$ 在 $X$ 中余有限（cofinite）；若 $X\setminus A$ 至多可数，称 $A$ 余可数（cocountable）。

集合 $E$ 的分割或划分（partition）是两两不交、并为 $E$ 的非空子集族；若各部分均可测，称可测分割。对任意可数覆盖 $E=\bigcup_n E_n$，令 $D_1=E_1$、$D_n=E_n\setminus\bigcup_{j<n}E_j$，则 $E=\bigsqcup_nD_n$；删去空项后就是分割。这一操作称为不交化（disjointification）。集合的分割与 [Riemann 积分中的区间分割（partition of an interval）](Riemann-Lebesgue-comparison.md)应按对象区分。

De Morgan 公式（De Morgan's laws）是 $(\bigcup_i A_i)^c=\bigcap_i A_i^c$ 与 $(\bigcap_i A_i)^c=\bigcup_i A_i^c$，对任意指标集成立。集合族对某运算封闭（closed under an operation），指其成员作该运算后的结果仍属于这个集合族。

$\mathcal A_0\subseteq2^X$ 称为代数，若 $X\in\mathcal A_0$，且对补集与有限并封闭。于是空集、有限交与差集也在 $\mathcal A_0$ 中。若进一步对可数并封闭，就是[σ-代数（Sigma-algebra）](Sigma-algebra.md)。[^1]

## 与 σ-代数的关系

$\mathbb N$ 上所有有限集及其补集构成有限—余有限代数。它不是 $\sigma$-代数：偶数集是单点集合的可数并，却既非有限也非余有限。

## 例

把实直线划分成有限个半开区间后取它们的有限并，可得到区间代数。处理全实线时还应允许无界区间并包含 $\mathbb R$，否则得到的可能只是环（ring）而不是包含全集的代数。

## 环与半环

集合环对有限并和差集封闭，但未必包含 $X$。半环（semiring）包含空集，对有限交封闭，且 $A\setminus B$ 可分成有限个两两不交的半环成员。例如半开矩形形成半环。把半环成员作有限不交并，便可进入环上的可加性构造。

**注**：Folland 还使用初等集合族（elementary family）：它包含空集，对有限交封闭，并要求每个成员的补集为有限个成员的不交并。后一条件比半环的差集条件更强，保证有限不交并所形成的是包含 $X$ 的代数。不要把这两种生成集合族的定义直接混同。[^2]

## 前测度与可数可加性

**注**：在代数上定义[前测度（Premeasure）](Premeasure.md)时，有限可加性并不足够；还要检查并仍属于该代数的不交集合列的可数可加性。准确条件及有限—余有限代数上的反例集中在前测度词条。

## 相关词条

[前测度（Premeasure）](Premeasure.md) · [单调类定理（Monotone class theorem）](Monotone-class-theorem.md) · [生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Definition 2.1；第36页。

[^2]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Proposition 1.7；第1章 Exercise 1；第23页。
