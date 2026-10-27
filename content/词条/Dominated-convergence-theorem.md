---
title: "控制收敛定理（Dominated convergence theorem）"
aliases:
  - "控制收敛定理"
  - "Dominated convergence theorem"
  - "支配收敛定理"
  - "有界收敛定理"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



控制收敛定理通过一个可积函数同时控制所有函数的大小，使逐点信息转化为积分收敛。

## 定理

在测度空间 $(X,\mathcal A,\mu)$ 上，$L^1(\mu)$ 表示 [Lp 空间（Lp space）](Lp-space.md)中的可积函数空间。设 $f_n:X\to\mathbb C$ 可测，$f_n\to f$ 几乎处处，$f$ 可测。若存在非负 $g\in L^1(\mu)$ 使 $|f_n|\le g$ 几乎处处对所有 $n$ 成立，则 $f\in L^1(\mu)$，且
$$
\int|f_n-f|\,d\mu\longrightarrow0,
\qquad
\int f_n\,d\mu\longrightarrow\int f\,d\mu.
$$

**注**：无需假设 $\mu(X)$ 有限。各个 $n$ 的零集可以不同，因为其可数并仍为零集。[^1][^2]

> [!proof]- 用 Fatou 引理证明
> 以下省略 $d\mu$ 的积分仍关于 $\mu$，$\liminf,\limsup$ 为数列的下极限、上极限，其尾部定义见[可测函数（Measurable function）](Measurable-function.md)。由极限得到 $|f|\le g$ 几乎处处，故 $f$ 可积。对非负函数 $2g-|f_n-f|$ 用 Fatou 引理：
> $$
> 2\int g\le\liminf_n\left(2\int g-\int|f_n-f|\right).
> $$
> 因 $\int g<\infty$，可移项得到 $\limsup_n\int|f_n-f|\le0$。最后由积分三角不等式推出积分值收敛。

## 有界收敛与级数

若 $\mu(X)<\infty$ 且所有 $|f_n|\le M$，可用常数 $M$ 作控制函数，这称为有界收敛定理（bounded convergence theorem）。

若 $\sum_n\int|h_n|<\infty$，则 $\sum_n h_n$ 几乎处处绝对收敛且可积，并可逐项积分；先对 $\sum|h_n|$ 用单调收敛，再对部分和用本定理。[^1]

## 共同可积控制与积分有界性

取 $(0,1)$ 上的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，以 $1_A$ 表示[指示函数（Indicator function）](Measurable-function.md)。$f_n=n1_{(0,1/n)}$ 逐点趋于零，却始终有积分 $1$。它们的积分虽一致有界（uniformly bounded，即存在与 $n$ 无关的 $C<\infty$ 使 $\int|f_n|\,d\mu\le C$），但不存在共同可积控制函数。“各自可积”或“积分一致有界”都不足以代替控制条件。更灵活的条件见[一致可积（Uniform integrability）](Uniform-integrability.md)和[Vitali 收敛定理（Vitali convergence theorem）](Vitali-convergence-theorem.md)。

## 相关词条

[Fatou引理（Fatou lemma）](Fatou-lemma.md) · [L1收敛（Convergence in L1）](Convergence-in-L1.md) · [积分下求导（Differentiation under the integral sign）](Differentiation-under-integral.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 定理7.9，习题7.1、7.2、7.4、7.8。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §1.3，Convergence theorems。
