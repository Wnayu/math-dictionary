---
title: "密度定义的测度（Measure defined by a density）"
aliases: ["weighted measure", "density measure", "密度测度", "加权测度"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



给定一个测度和一个非负可测函数，可以用积分定义新的测度。它把“空间中不同位置赋予不同权重”变为严格的测度构造。[^1]

## 定义

设 $(X,\mathcal A,\mu)$ 为测度空间，$w:X\to[0,\infty]$ 可测。由权函数 $w$ 定义的测度记作 $w\mu$，即
$$
(w\mu)(E):=\int_Ew\,d\mu,\qquad E\in\mathcal A.
$$
$w\mu$ 是一个新的集合函数，不是把两个数相乘；它对集合 $E$ 的取值，是 $w$ 在 $E$ 上相对于 $\mu$ 的 [Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md)。若令 $\nu=w\mu$，也写成 $d\nu=w\,d\mu$；这个微分形式仍表示上面的集合积分恒等式。把权函数改名为 $f$，同一记法就是 $f\mu$，满足 $(f\mu)(E)=\int_Ef\,d\mu$。[^1]

对任意非负可测 $g$，有换测度积分公式
$$
\int g\,d\nu=\int gw\,d\mu.
$$
对复值函数则在 $\int |g|w\,d\mu<\infty$ 时成立。非负积分中采用 $0\cdot\infty=0$。

> [!proof]- 证明
> 这里 $1_E$ 表示集合 $E$ 的[指示函数（indicator function）](Measurable-function.md)。不交集合列满足 $1_{\cup E_n}=\sum_n1_{E_n}$，对 $w\sum_{n\le N}1_{E_n}$ 用单调收敛即得可数可加性。换测度公式先由定义对指示函数成立，再线性推广到简单函数，最后单调逼近非负可测函数。
>
> 将非负函数的公式用于 $|g|$，得到 $\int|g|\,d\nu=\int|g|w\,d\mu$。此值有限时，对实值 $g$ 分解正部与负部；对复值 $g$ 再分别处理实部与虚部，即得到可积实值和复值函数的换测度积分公式。所有相减项的绝对积分均有限。

**注**：记号 $f\mu$ 也用于有符号或复值权函数，但须先保证积分有定义。实值 $f$ 的[正部与负部（positive and negative parts）](Measurable-function.md)为 $f^+=\max(f,0)$、$f^-=\max(-f,0)$；若 $\int f^+\,d\mu$ 与 $\int f^-\,d\mu$ 至少一个有限，则
$$
(f\mu)(E)=\int_Ef^+\,d\mu-\int_Ef^-\,d\mu
$$
定义[有符号测度（Signed measure）](Signed-measure.md)。若 $f$ 为复值，要求 $\int|f|\,d\mu<\infty$，即 $f\in L^1(\mu)$，这时 $f\mu$ 是有限[复测度（Complex measure）](Complex-measure.md)。这里的可积性与 $L^1$ 记号见[可积函数（Integrable function）](Integrable-function.md)及[Lebesgue 空间（Lp space）](Lp-space.md)。两种延伸都不能把未定义的 $\infty-\infty$ 当作测度值。

## 有限性与绝对连续性

对于上面非负权函数的构造，恒有 $\nu\ll\mu$；符号 $\ll$ 表示[测度的绝对连续性（Absolute continuity of measures）](Absolute-continuity-of-measures.md)。若 $w\in L^1(\mu)$，则 $\nu$ 有限；若 $\mu$ 为 $\sigma$-有限且 $w<\infty$ 几乎处处，则 $\nu$ 为 $\sigma$-有限。可用原有限测度块与 $\{w\le n\}$ 的交来覆盖。

例如 $w(x)=2x1_{[0,1]}(x)$ 对 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)产生概率测度。反过来哪些测度具有密度，由 [Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)回答；密度的唯一性也需要相应条件，不能单凭形式记号断言。另见[绝对连续测度（absolutely continuous measure）](Absolute-continuity-of-measures.md)与[随机变量的分布（Law of a random variable）](Law-of-a-random-variable.md)。

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, Version 4.3, 2022，习题7.27；构造推广到非负可测权重由单调收敛直接给出。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
