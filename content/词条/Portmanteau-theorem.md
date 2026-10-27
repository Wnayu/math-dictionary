---
title: "Portmanteau 定理（Portmanteau theorem）"
aliases: ["Portmanteau theorem", "弱收敛的等价判据"]
tags: [measure-theory, probability]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Portmanteau 定理把[弱收敛（Weak convergence of measures）](Weak-convergence-of-measures.md)的连续测试函数定义转换为开集、闭集和边界零测度集合的质量判据。本卡保留紧区间上的有限测度版本，并给出概率论中使用的度量空间概率版本。[^1][^2]

## 紧区间有限测度版本

设 $\mu_n,\mu$ 是 $[0,1]$ 上有限非负 Borel 测度，且 $\mu_n([0,1])\to\mu([0,1])$。以下条件等价：

1. 对每个 $f\in C([0,1])$，$\int f\,d\mu_n\to\int f\,d\mu$。
2. 对每个相对闭集 $F$，$\limsup_n\mu_n(F)\le\mu(F)$。
3. 对每个相对开集 $G$，$\liminf_n\mu_n(G)\ge\mu(G)$。
4. 对每个 Borel 集 $A$ 满足 $\mu(\partial A)=0$，有 $\mu_n(A)\to\mu(A)$。

$C([0,1])$ 是该区间上的[连续函数空间（space of continuous functions）](Measurable-function.md)。$\partial A=\overline A\setminus A^\circ$ 表示边界，其中 $\overline A$ 为闭包、$A^\circ$ 为内部；这些[Borel 与拓扑记号（Borel and topological notation）](Borel-sigma-algebra.md)均在 $[0,1]$ 的[相对拓扑（subspace topology）](Topological-space.md)中计算。相对开集具体为 $[0,1]\cap U$，其中 $U$ 在 $\mathbb R$ 中开；相对闭集为相对开集在 $[0,1]$ 中的补集。满足 $\mu(\partial A)=0$ 的 Borel 集称为 $\mu$-连续集（$\mu$-continuity set）。

**注**：这里开集与闭集不要求质量直接收敛，正确方向是不等式。

## 度量空间概率版本

设 $S$ 是[度量空间（Metric space）](Metric-space.md)，$\mu_n,\mu$ 为其 Borel 概率测度。以下四项等价：

1. $\mu_n\Rightarrow\mu$，即所有 $f\in C_b(S)$ 的积分收敛。
2. 对每个闭集 $F$，$\limsup_n\mu_n(F)\le\mu(F)$。
3. 对每个开集 $G$，$\liminf_n\mu_n(G)\ge\mu(G)$。
4. 对每个 $\mu$-连续 Borel 集 $A$，$\mu_n(A)\to\mu(A)$。

其中 $C_b(S)$ 是有界连续实函数集合，连续集仍指 $\mu(\partial A)=0$。实直线和一般度量空间的概率版本分别见 Durrett Theorems 3.2.11、3.10.1；下面用距离函数给出共同证明。对于紧区间上的连续函数，$\|f\|_\infty=\max_{x\in[0,1]}|f(x)|$ 可作为下文使用的有界常数。

> [!proof]- 两个版本的共同证明
> 以 $M_n=\mu_n(S)$、$M=\mu(S)$ 表示总质量。概率版本均等于 $1$；紧区间版本另有假设 $M_n\to M$。以下测试函数始终有界。
>
> 从1到2，空集情形直接成立；非空闭集取 $f_k(x)=(1-k\operatorname{dist}(x,F))_+$，其中 $\operatorname{dist}(x,F)=\inf_{y\in F}d(x,y)$，$a_+=\max(a,0)$，$1_F$ 是 $F$ 的[指示函数（Indicator function）](Measurable-function.md)。它们连续、有界，满足 $1_F\le f_k\downarrow1_F$。先对 $n$ 取极限上界，再对 $k$ 取极限，得到 $\limsup_n\mu_n(F)\le\mu(F)$。
>
> 从2到3，对闭集 $S\setminus G$ 用补集恒等式 $\mu_n(G)=M_n-\mu_n(S\setminus G)$。从2、3到4，用 $A^\circ\subseteq A\subseteq\overline A$，并用 $\mu(\partial A)=0$ 夹逼。
>
> 由3到1，先设 $0\le f\le L$ 连续。其超水平集 $\{f>u\}$ 为开集；由层蛋糕公式及 Fatou 引理，
> $$
> \liminf_n\int f\,d\mu_n
> =\liminf_n\int_0^L\mu_n(f>u)\,du
> \ge\int_0^L\mu(f>u)\,du=\int f\,d\mu.
> $$
> 对 $L-f$ 使用同一结论，并用 $M_n\to M$，得到积分的上界，故积分收敛。
>
> 为证明4到1，注意有限测度下至多可数个 $u$ 满足 $\mu\{f=u\}>0$，而连续性给出 $\partial\{f>u\}\subseteq\{f=u\}$。因此对几乎每个 $u$，$\mu_n(f>u)\to\mu(f>u)$。在有限区间 $[0,L]$ 上，$\mu_n(f>u)\le\sup_nM_n<\infty$，控制收敛及层蛋糕公式给出1。
>
> 一般有界实值连续 $f$ 加上常数后化为非负情形；复值连续函数分别对实部和虚部使用同一论证。在 $[0,1]$ 上每个连续函数自动有界，故原有限测度版本也全部得到。

## 弱收敛与集合质量收敛

对 [Dirac 测度（Dirac measures）](Dirac-measure.md)，$\delta_{1/n}\Rightarrow\delta_0$ 表示[弱收敛（Weak convergence of measures）](Weak-convergence-of-measures.md)。此时，集合 $\{0\}$ 的边界具有极限质量 $1$，故不在第4条保证收敛的范围内。

**注**：若忽略总质量条件，就不能通过补集相减得到所需等价关系。

相关工具：[测度正则性（Regularity of measures）](Regularity-of-measures.md)、[层蛋糕公式（Layer-cake formula）](Layer-cake-formula.md)、[Fatou 引理（Fatou lemma）](Fatou-lemma.md)。

## 参考文献

[^1]: Richard F. Bass, *Real Analysis for Graduate Students*, Version 4.3, 2022，Exercise 7.29。

[^2]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 3.2.11、3.10.1。


[概率论导航](../概率论导航.md) · [测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
