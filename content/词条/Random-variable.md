---
title: "随机变量（Random variable）"
aliases: ["随机变量", "Random variable", "随机元素", "Random element"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



随机变量把样本结果转化为可以取概率的数值；“随机”不代替可测性要求。它与其[分布（Law of a random variable）](Law-of-a-random-variable.md)是不同对象：前者是映射，后者是取值空间上的测度。

## 定义

设 $(\Omega,\mathcal F,P)$ 是[概率空间（Probability space）](Probability-measure.md)。实值随机变量是可测映射 $X:(\Omega,\mathcal F)\to(\mathbb R,\mathcal B(\mathbb R))$，即对每个 Borel 集 $B$，事件 $\{X\in B\}=\{\omega:X(\omega)\in B\}$ 属于 $\mathcal F$。取值在任意可测空间 $(S,\mathcal S)$ 的可测映射称随机元素（random element）；取值在 $\mathbb R^d$ 的情形见[随机向量（Random vector）](Random-vector.md)。[^1]

允许 $\pm\infty$ 时须明确称为扩展实值随机变量，并对 $[-\infty,\infty]$ 采用其 Borel 结构。$X^{-1}(B)$ 表示集合逆像，不要求 $X$ 可逆，详见[可测函数（Measurable function）](Measurable-function.md)。

## 可测性的判据

实值函数 $X$ 是随机变量，当且仅当 $\{X\le q\}\in\mathcal F$ 对所有有理数 $q$ 成立。

> [!proof]- 证明
> 必要性由半直线为 Borel 集得到。反过来，所有使 $X^{-1}(B)\in\mathcal F$ 成立的 $B\subseteq\mathbb R$ 构成一个 σ-代数。它包含有理端点半直线，而这些半直线生成 $\mathcal B(\mathbb R)$，所以包含每个 Borel 集。

若 $g:S\to T$ 可测，则 $g(X)$ 是随机元素。随机变量的可数上确界、下确界及存在的逐点极限也可测；其测度论证明保留在[可测函数（Measurable function）](Measurable-function.md)。

## 随机变量所生成的信息

$\sigma(X)=\{X^{-1}(B):B\in\mathcal S\}$ 是使 $X$ 可测的最小 σ-代数，见[生成的 σ-代数（Generated sigma-algebra）](Generated-sigma-algebra.md)。它不是 $X$ 的值域；两个点若给出相同的 $X$ 值，就不能被 $\sigma(X)$ 中的事件区分。在实值情形，$\sigma(X)$-可测的实随机变量可以写成 $g(X)$，详见[Doob–Dynkin 引理（Doob–Dynkin lemma）](Doob-Dynkin-lemma.md)。

## 例

对事件 $A\in\mathcal F$，指示函数 $1_A$ 是随机变量，且 $\sigma(1_A)=\{\varnothing,A,A^c,\Omega\}$。若 $\Omega$ 有限且 $\mathcal F=2^\Omega$，任意实函数都可测；若 $\mathcal F=\{\varnothing,\Omega\}$，可测实函数只能是常数。这说明随机变量的概念依赖给定的信息结构。

**注**：随机变量“几乎必然相等”允许在零概率集上不同；它与“同分布”不可互换。前者的版本约定见[几乎处处（Almost everywhere）](Almost-everywhere.md)，后者见[随机变量的分布（Law of a random variable）](Law-of-a-random-variable.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§1.2–1.3。
