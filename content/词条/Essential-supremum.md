---
title: "本质上确界（Essential supremum）"
aliases: ["essential supremum", "本质有界", "L∞", "L-infinity"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



本质上确界（essential supremum）忽略零集上的例外，给出函数几乎处处成立的最小上界；它与逐点上确界可以不同。[^1]

## 定义

固定测度空间 $(X,\mathcal A,\mu)$。对实值可测函数 $f$，定义
$$
\operatorname*{ess\,sup}_{x\in X}f(x)
=\inf\{a\in\mathbb R:\mu(\{f>a\})=0\},
$$
允许值为 $\pm\infty$；$\{f>a\}=\{x\in X:f(x)>a\}$ 是[可测函数（Measurable function）](Measurable-function.md)的水平集简写。对实值或复值 $f$，
$$
\|f\|_\infty=\inf\{M\ge0:|f|\le M\ \mu\text{-a.e.}\}.
$$
这里 $\mu$-a.e. 表示[几乎处处（Almost everywhere）](Almost-everywhere.md)，$\|f\|_\infty$ 是 [Lp 空间（Lp space）](Lp-space.md)中 $p=\infty$ 的本质上确界范数。称 $f$ 本质有界（essentially bounded），是指 $\|f\|_\infty<\infty$，等价于存在一个有限 $M$ 使 $|f|\le M$ 几乎处处。本质下确界定义为 $\operatorname{ess\,inf} f=-\operatorname{ess\,sup}(-f)$。[零集（Null set）](Null-set.md)可以随候选上界改变；用可数个逼近上界并取零集之并，就能在一个共同余零集上取得有限的最小本质上界。

**注**：按上述允许任意实数上界的定义，若 $\mu(X)=0$，则 $\operatorname{ess\,sup}f=-\infty$；但范数只在非负上界中取下确界，故 $\|f\|_\infty=0$。因此 $\|f\|_\infty=\operatorname{ess\,sup}|f|$ 的常用等式在这里以 $\mu(X)>0$ 为前提。

## 逐点上确界与本质上确界

在配备 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)的 $[0,1]$ 上令 $f(0)=100$，其余点 $f=1$。则逐点上确界为 $100$，本质上确界为 $1$。计数测度下没有非空零集，因此本质上确界等于逐点上确界。

## 本质范数与收敛

$\|f_n-f\|_\infty\to0$ 等价于存在一个固定零集 $N$，使 $f_n\to f$ 在 $X\setminus N$ 上[一致收敛（Uniform convergence）](Metric-space.md)。这里可先为每个 $n$ 选择逼近本质范数的上界，再取可数个异常零集的并。

这比[几乎一致收敛（Almost uniform convergence）](Almost-uniform-convergence.md)强。例如 $x^n$ 在 $[0,1]$ 上几乎一致收敛到 $0$，但 $\|x^n\|_\infty=1$。其中 $L^{p_0}\cap L^\infty$ 表示同时属于两个 [Lp 空间（Lp space）](Lp-space.md)的函数类。若 $f\in L^{p_0}\cap L^\infty$，$0<p_0<\infty$，则 $\lim_{p\to\infty}\|f\|_p=\|f\|_\infty$。

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Exercise 2.9；第38页。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
