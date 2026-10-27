---
title: "简单函数逼近定理（Simple function approximation theorem）"
aliases:
  - "简单函数逼近定理"
  - "Simple function approximation theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



简单函数逼近把一般可测函数的积分问题化为有限个可测集的测度问题。它也是[单调收敛定理（Monotone convergence theorem）](Monotone-convergence-theorem.md)最常用的入口。

## 定理

对任意非负扩展实值可测函数 $f$，存在非负简单函数 $s_n$，使
$$
0\le s_n\uparrow f
$$
逐点成立，即每个 $x$ 上都有 $s_n(x)\le s_{n+1}(x)$ 且 $s_n(x)\to f(x)$。若 $f$ 有界，可取[一致收敛（uniform convergence）](Metric-space.md)的逼近，即 $\sup_{x\in X}|s_n(x)-f(x)|\to0$。[^1]

> [!proof]- 二进制截断构造
> 定义
> $$
> s_n=\sum_{k=0}^{n2^n-1}\frac{k}{2^n}
> 1_{\{k2^{-n}\le f<(k+1)2^{-n}\}}
> +n1_{\{f\ge n\}}.
> $$
> 这里 $1_E$ 是集合 $E$ 的[指示函数（indicator function）](Measurable-function.md)。每个水平集可测，故 $s_n$ 是非负简单函数。截断高度增大、二进制网格加细，给出 $s_n\le s_{n+1}\le f$。在 $f(x)<\infty$ 处，最终 $n>f(x)$，误差小于 $2^{-n}$；在 $f(x)=\infty$ 处，$s_n(x)=n\to\infty$。若 $f\le M$，则当 $n>M$ 时误差界对所有 $x$ 同时成立。

## 可积逼近

使用 [Lp 空间（Lp space）](Lp-space.md)的记号，$L^1(\mu)$ 为可积函数按几乎处处相等形成的[等价类（Equivalence classes）](Equivalence-relation.md)，$\|u\|_1=\int|u|\,d\mu$。如果 $f\in L^1(\mu)$，可以找到可积简单函数 $s_n$ 满足
$$
\|s_n-f\|_1\longrightarrow0.
$$
这是 [Lp 中的稠密逼近（Density in Lp）](Lp-density.md)在 $p=1$ 时的情形；有限测度支撑的截断、实部与虚部的逼近及范数误差估计在该词条中详细证明。[^2]

例。在 $[0,1]$ 上对 $f(x)=x$ 取二进制向下取整，每一阶是有限级台阶，误差不超过 $2^{-n}$。对 $f(x)=1/x$（$x>0$），仍有逐点逼近，但不能由此断言 $L^1(0,1)$ 收敛，因为目标函数对一维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)不可积；这里 $L^1(0,1)$ 默认采用该测度。

## 相关词条

[简单函数（Simple function）](Simple-function.md) · [Lebesgue积分（Lebesgue integral）](Lebesgue-integral.md) · [L1收敛（Convergence in L1）](Convergence-in-L1.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Proposition 5.14。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Theorem 1.30(7)。
