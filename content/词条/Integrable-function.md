---
title: "可积函数（Integrable function）"
aliases:
  - "可积函数"
  - "Integrable function"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



可积性（integrability）要求函数的绝对值具有有限总积分。它控制了正负抵消，使积分成为有限数，并允许应用[Fubini 定理（Fubini theorem）](Fubini-theorem.md)等结果。

## 定义

测度空间 $(X,\mathcal A,\mu)$ 上的可测函数 $f:X\to\mathbb R$ 或 $\mathbb C$ 称为可积，如果
$$
\int_X|f|\,d\mu<\infty.
$$
实值函数可积当且仅当其[正部与负部（positive and negative parts）](Measurable-function.md) $f^+$、$f^-$ 都有有限积分。把几乎处处相等的函数归入同一[等价类（equivalence class）](Equivalence-relation.md)后，得到[可积函数空间（Lp space）](Lp-space.md) $L^1(\mu)$。[^1][^2]

## 例

Lebesgue 测度下，$x^{-\alpha}$ 在 $(0,1)$ 上可积当且仅当 $\alpha<1$；在 $(1,\infty)$ 上可积当且仅当 $\alpha>1$。

## 有限测度与本质有界函数的可积性

有限测度空间上的有界可测函数可积，因为
$$
\int|f|\,d\mu\le\|f\|_\infty\mu(X).
$$
这里 $\|f\|_\infty$ 是[本质上确界范数（essential supremum norm）](Lp-space.md)，按非负本质上界的下确界定义。无穷测度空间上，这一推论不成立，例如常数 $1$ 在 $\mathbb R$ 上不可积。

## 积分的绝对连续性

对每个 $f\in L^1(\mu)$ 及 $\varepsilon>0$，存在 $\delta>0$，使得
$$
\mu(E)<\delta\quad\Longrightarrow\quad\int_E|f|\,d\mu<\varepsilon.
$$
这里 $E\in\mathcal A$，无须假设 $\mu(X)<\infty$；下文省略的积分测度均为 $\mu$。[^2]

> [!proof]- 截断证明
> 取 $M>0$ 使 $\int_{\{|f|>M\}}|f|<\varepsilon/2$，再令 $\delta=\varepsilon/(2M)$。于是
> $$
> \int_E|f|\le M\mu(E)+\int_{\{|f|>M\}}|f|<\varepsilon.
> $$

可积函数有限几乎处处，且除一个零集外，其非零集合是 σ-有限的：集合 $\{|f|>1/n\}$ 的测度不超过 $n\int|f|$。这一事实解释了为什么许多可积函数论证可以局限于有限测度的水平集。

## 相关词条

[Lebesgue积分（Lebesgue integral）](Lebesgue-integral.md) · [一致可积（Uniform integrability）](Uniform-integrability.md) · [Lp空间（Lp space）](Lp-space.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 定义6.2；第8章。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.3，Standard facts about integration及其后的绝对连续性练习。
