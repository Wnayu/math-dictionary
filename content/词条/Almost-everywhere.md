---
title: "几乎处处（Almost everywhere）"
aliases:
  - "几乎处处"
  - "Almost everywhere"
  - "几乎必然"
  - "Almost surely"
  - "版本"
  - "Version"
  - "修改"
  - "Modification"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



几乎处处（almost everywhere，a.e.）允许一个性质在零测例外集上失败。在概率空间中，同一概念称为几乎必然（almost surely，a.s.）。

## 定义

在测度空间 $(X,\mathcal A,\mu)$ 上，性质 $P(x)$ 对 $\mu$ 几乎处处成立，是指存在可测集 $N$，$\mu(N)=0$，且 $x\notin N$ 时 $P(x)$ 成立。这样定义无需预先假定“失败点集合”本身可测。[^1][^2]

若 $f=g$ 几乎处处，记作 $f=g\ \mu\text{-a.e.}$。对于可测实值函数，这等价于 $\mu(\{f\ne g\})=0$，其中 $\{f\ne g\}=\{x\in X:f(x)\ne g(x)\}$；这种由函数条件指定集合的简写见[可测函数（Measurable function）](Measurable-function.md)。零集的补集称为余零集（co-null set）或全测度集（set of full measure）。

若可测函数 $f,g$ 几乎处处相等，称 $g$ 是 $f$ 的一个版本（version）；例如“Borel 版本”还要求 $g$ 是 [Borel 可测（Borel measurable）](Borel-measurable-function.md)的。在概率空间上，也称 $g$ 为 $f$ 的修改（modification）。本词条所说的版本针对单个函数，不额外断言逐点相等。

## 量词顺序与共同零集

**注**：若每个 $P_n$ 都几乎处处成立，则它们在共同余零集上同时成立，因为可数个例外零集的并仍是零集。但不可数族不能这样处理。

例如在配备 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)的 $[0,1]$ 上令 $P_t(x)$ 为“$x\ne t$”。对每个固定 $t$，$P_t$ 几乎处处成立；却不存在任何 $x$ 能使全部 $P_t(x)$ 同时成立。因而“对每个参数，几乎处处”与“几乎处处，对每个参数”不能直接互换。

## 函数修改与积分

若 $f,g$ 都可测且几乎处处相等，则当两者非负时，它们的非负积分相同；当两者可积时，它们的实或复积分也相同。这是[Lp 空间（Lp space）](Lp-space.md)以几乎处处[等价类（Equivalence class）](Equivalence-relation.md)为元素的原因。

在[完备空间（complete measure space）](Complete-measure.md)中，可测函数在可测零集上的任意修改仍可测。在不完备空间中需额外检查修改后函数的可测性。

**注**：若 $\mu(X)=\infty$，只写 $\mu(E)=\mu(X)$ 不能表示 $E$ 为全测度集。例如 $E=[0,\infty)$ 与 $\mathbb R$ 的 Lebesgue 测度同为无穷，但补集并非零集；正确条件是 $\mu(X\setminus E)=0$。

## 相关词条

[零集（Null set）](Null-set.md) · [完备测度（complete measure）](Complete-measure.md) · [Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md) · [Lp 空间（Lp space）](Lp-space.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Definition 1.16；Exercise 1.22；Theorem 1.30(5)。

[^2]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Definition 5.9。
