---
title: "Fatou 引理（Fatou lemma）"
aliases:
  - "Fatou 引理"
  - "Fatou lemma"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Fatou 引理说明非负函数的积分对于逐点收敛具有下半连续性（lower semicontinuity）：当非负可测函数 $f_n\to f$ 逐点成立时，$\int f\,d\mu\le\liminf_n\int f_n\,d\mu$。这正是本条在收敛情形下所说的下半连续性；一般函数的下半连续定义见[可测函数（Measurable function）](Measurable-function.md)。即使不能交换极限与积分，也常能保留一个方向的不等式。

## 定理

在任意测度空间 $(X,\mathcal A,\mu)$ 上，$\liminf_n f_n$ 表示逐点下极限，即 $x\mapsto\sup_N\inf_{n\ge N}f_n(x)$，见[可测函数（Measurable function）](Measurable-function.md)。若 $f_n\ge0$ 可测，则
$$
\int\liminf_{n\to\infty}f_n\,d\mu
\le\liminf_{n\to\infty}\int f_n\,d\mu.
$$
若所有 $f_n$ 有共同的可积下界 $h$，则对 $f_n-h$ 应用非负版本也得到同样结论。[^1][^2]

> [!proof]- 尾部下确界
> 以下函数的上下确界按点计算，$g_n\uparrow g$ 表示逐点单调递增至 $g$，见[单调收敛定理（Monotone convergence theorem）](Monotone-convergence-theorem.md)；省略 $d\mu$ 的积分仍关于 $\mu$。令 $g_n=\inf_{k\ge n}f_k$。则 $g_n\uparrow\liminf_n f_n$，且 $g_n\le f_k$ 对每个 $k\ge n$ 成立。由单调收敛定理，
> $$
> \int\liminf_n f_n=\lim_n\int g_n
> \le\lim_n\inf_{k\ge n}\int f_k
> =\liminf_n\int f_n.
> $$

## 积分界与 Lp 收敛

在配备 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)的 $(0,1)$ 上取 $f_n=n1_{(0,1/n)}$，其中 $1_A$ 是[指示函数（Indicator function）](Measurable-function.md)。则 $f_n\to0$ 逐点，但 $\int f_n=1$，所以不等式可严格。

若 $f_n\to f$ 几乎处处，且 $\sup_n\int|f_n|^p\le C$（$p>0$），则
$$
\int|f|^p\le C.
$$

**注**：这只给出极限的积分界，不能单独推出 $\int|f_n-f|^p\to0$。

**注**：在没有非负性或共同可积下界时，结论可能失败：对 $-n1_{(0,1/n)}$，左边为 $0$，右边为 $-1$。[控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md)正是通过同时控制上下两侧，把 Fatou 的单边界提升为等式。

## 相关词条

[单调收敛定理（Monotone convergence theorem）](Monotone-convergence-theorem.md) · [控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md) · [Lp空间（Lp space）](Lp-space.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Theorem 7.8。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Theorem 1.31(2)。
