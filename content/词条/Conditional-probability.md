---
title: "条件概率与 Bayes 公式（Conditional probability and Bayes formula）"
aliases: ["条件概率", "Conditional probability", "Bayes公式", "Bayes formula", "全概率公式", "Law of total probability"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



条件概率把一个正概率事件当作已知信息，重新归一化剩余结果的概率。对随机变量取值这样的零概率事件，需要[正则条件分布（Regular conditional distribution）](Regular-conditional-distribution.md)而不是直接相除。

## 定义

对事件 $A,B\in\mathcal F$ 且 $P(B)>0$，定义 $P(A\mid B)=P(A\cap B)/P(B)$。固定 $B$ 后，映射 $A\mapsto P(A\mid B)$ 是原可测空间上的概率测度，且给 $B$ 概率 $1$。[^1]

更一般地，对子 σ-代数 $\mathcal G$，记 $P(A\mid\mathcal G)=\mathbb E[1_A\mid\mathcal G]$。它是一个 $\mathcal G$-可测随机变量，取值于 $[0,1]$，只在几乎必然意义下确定。其存在性与版本问题见[条件期望（Conditional expectation）](Conditional-expectation.md)。

## 全概率与 Bayes 公式

若 $(B_j)_{j\ge1}$ 为可数可测划分，略去零概率块，则
$$
P(A)=\sum_j P(A\mid B_j)P(B_j).
$$
若另有 $P(A)>0$，则对 $P(B_i)>0$，
$$
P(B_i\mid A)=\frac{P(A\mid B_i)P(B_i)}{\sum_jP(A\mid B_j)P(B_j)}.
$$

> [!proof]- 证明
> $A$ 是互不相交的 $A\cap B_j$ 的可数并。由可列可加性及条件概率定义得到第一式。第二式把分子 $P(A\cap B_i)$ 和分母 $P(A)$ 分别改写；分母为正是定义本身的要求。

## 例

设疾病事件为 $D$，$P(D)=0.01$，阳性事件为 $T$。若 $P(T\mid D)=0.99$、$P(T\mid D^c)=0.05$，则
$$
P(D\mid T)=\frac{0.99\times0.01}{0.99\times0.01+0.05\times0.99}=\frac16.
$$
这只是在给定数学模型中的计算；它说明 $P(T\mid D)$ 与 $P(D\mid T)$ 是两个不同条件概率，不能交换条件和事件。

## 零概率条件

若 $Y$ 有连续分布，则单点事件 $\{Y=y\}$ 通常概率为零，比例定义没有意义。写 $P(X\in A\mid Y=y)$ 时，应先说明选取的条件概率核及其适用版本；密度比公式仅在边缘密度正且有限的点直接适用。

**注**：独立事件满足 $P(A\mid B)=P(A)$（当 $P(B)>0$）；条件化以后是否仍独立是另一问题，见[条件独立（Conditional independence）](Conditional-independence.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §4.1及练习4.1.1；事件比例、全概率公式与数值例由概率公理展开。
