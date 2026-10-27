---
title: "有界线性泛函（Bounded linear functional）"
aliases:
  - "bounded linear functional"
  - "连续线性泛函"
  - "有界线性泛函"
  - "共轭线性"
  - "Conjugate-linear"
  - "连续对偶"
  - "Continuous dual"
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



有界线性泛函（bounded linear functional）把函数空间中的元素连续地映为一个标量。在积分论中，$f\mapsto\int fg\,d\mu$ 是基本例子；[Lp 对偶定理（Lp duality theorem）](Lp-duality.md)描述何时全部连续线性泛函都有这种形式。[^1]

## 定义

设 $V$ 为实或复[赋范空间（Normed space）](Normed-space.md)，标量域相应记作 $\mathbb K=\mathbb R$ 或 $\mathbb C$，$\|f\|$ 表示所选的 $V$ 上范数。称 $\Lambda:V\to\mathbb K$ 为线性泛函（linear functional），是指它取标量值，且对所有 $f,g\in V$、$a,b\in\mathbb K$ 满足 $\Lambda(af+bg)=a\Lambda(f)+b\Lambda(g)$。这样的映射有界，指存在 $C<\infty$ 使
$$
|\Lambda(f)|\le C\|f\|\quad(f\in V).
$$
其算子范数定义为 $\|\Lambda\|=\sup_{\|f\|\le1}|\Lambda(f)|$。全部有界线性泛函组成的空间记为 $V^*$，称为 $V$ 的连续对偶空间（continuous dual space）；其运算按点定义，即 $(a\Lambda+b\Gamma)(f)=a\Lambda(f)+b\Gamma(f)$。

**注**：这里“有界”指单位球上的有界性，不是整个空间上取值有界。

> [!proof]- 有界等价于连续
> 有界性立即给出 $|\Lambda(f)-\Lambda(g)|\le C\|f-g\|$。反之，若在零点连续，存在 $\delta>0$ 使 $\|h\|<\delta$ 时 $|\Lambda(h)|<1$。对非零 $f$ 代入 $h=\delta f/(2\|f\|)$，得 $|\Lambda(f)|\le(2/\delta)\|f\|$。线性性又使零点连续等价于处处连续。

## 积分与点值

在同一测度空间上，取 $1\le p\le\infty$，以 $p'$ 表示其[共轭指数（Conjugate exponent）](Conjugate-exponent.md)。若 $g\in L^{p'}$，由[Hölder 不等式（Hölder inequality）](Holder-inequality.md)，$\Lambda_g(f)=\int f\overline g\,d\mu$ 是 $L^p$ 上的有界线性泛函。这里 $L^p$ 及其范数见 [Lp 空间（Lp space）](Lp-space.md)，$\overline g$ 是逐点复共轭，见[可测函数（Measurable function）](Measurable-function.md)。复数情形关于 $f$ 线性，关于 $g$ 共轭线性（conjugate-linear）：$\Lambda_{ag_1+bg_2}=\overline a\Lambda_{g_1}+\overline b\Lambda_{g_2}$。一般地，复向量空间间的映射 $T$ 共轭线性，是指 $T(au+bv)=\overline aT(u)+\overline bT(v)$ 对所有向量和复标量成立。

**注**：Lebesgue [Lp 空间（Lp space）](Lp-space.md)中的点值 $f(x_0)$ 通常连定义都不良好，因为[代表元（Representative）](Equivalence-relation.md)可在零集上修改。对连续函数空间采用一致范数 $\|f\|_{\sup}=\sup_x|f(x)|$ 时，点值才是自然的有界泛函；底层空间和范数必须写明。

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记，第2章。该章整理自 Terence Tao, An Epsilon of Room, I, §1.3；此处按笔记及其文末勘误重述。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
