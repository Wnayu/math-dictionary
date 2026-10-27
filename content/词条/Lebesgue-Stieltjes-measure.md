---
title: "Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）"
aliases:
  - "Lebesgue–Stieltjes 测度"
  - "Lebesgue–Stieltjes measure"
  - "分布函数"
  - "Stieltjes measure"
  - "单调不减"
  - "Nondecreasing"
  - "右连续"
  - "Right-continuous"
  - "左极限"
  - "Left limit"
  - "跳跃量"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue–Stieltjes 测度把递增函数的增量解释为区间的质量。它统一了长度测度、点质量、连续概率分布和 Cantor 型奇异测度。

## 构造

设 $F:\mathbb R\to\mathbb R$ 单调不减（nondecreasing），即 $x\le y\Rightarrow F(x)\le F(y)$，且右连续（right-continuous），即每个 $x$ 都满足 $\lim_{h\downarrow0}F(x+h)=F(x)$。存在唯一的 Borel 测度 $\mu_F$，使任意有限 $a<b$ 都满足
$$
\mu_F((a,b])=F(b)-F(a).
$$
在积分中常把 $d\mu_F(x)$ 记为 $dF(x)$，或把整个测度 $\mu_F$ 简记为 $dF$；它由上式的区间增量确定，不能在未证明绝对连续时直接替换成 $F'(x)\,dx$。有符号、复数情形的对应约定见[有界变差函数（Functions of bounded variation）](Bounded-variation.md)。它在[紧集（compact set）](Topological-space.md)上有限，因此 $\sigma$-有限。两个这样的函数生成相同测度，当且仅当它们相差一个常数。[^1]

**注**：本文用 $\mu_F$ 首先表示 Borel 版本，讨论所有外测度可测集时明确称为其完备化。Folland 在构造后通常也用同一记号表示完备版本；Bass 亦通过外测度构造较大的完备定义域。[^1][^2]

## 端点与原子

记 $F(a-)=\lim_{x\uparrow a}F(x)$ 为左极限（left limit），$F(a+)=\lim_{x\downarrow a}F(x)$ 为右极限（right limit）；单调性保证二者存在且有限。若 $F(a+)\ne F(a-)$，称 $a$ 为跳跃点（jump discontinuity），跳跃量是 $F(a+)-F(a-)$。本条 $F$ 右连续，故该量等于 $F(a)-F(a-)$。由[测度连续性（Continuity of measures）](Continuity-of-measures.md)，
$$
\mu_F(\{a\})=F(a)-F(a-),\qquad
\mu_F([a,b])=F(b)-F(a-),\qquad
\mu_F((a,b))=F(b-)-F(a).
$$
跳跃大小就是该点的质量。因此 $F$ 连续当且仅当每个单点质量为零；这不意味着 $\mu_F$ 对 Lebesgue 测度绝对连续。

## 例

以下 $m$、$dt$ 指[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$\mathbf1_E$ 为[指示函数（indicator function）](Measurable-function.md)，$\delta_a$ 为[Dirac 测度（Dirac measure）](Dirac-measure.md)。$F(x)=x$ 给出 Lebesgue 测度；$F(x)=\mathbf1_{[a,\infty)}(x)$ 给出 $\delta_a$；若 $F(x)=\int_0^x f(t)\,dt$、$f\ge0$ [局部可积（locally integrable）](Lp-space.md)，则 $d\mu_F=f\,dm$，即 $\mu_F=fm$，按[密度定义的测度（Measure defined by a density）](Weighted-measure.md)解释。把[Cantor 函数（Cantor function）](Cantor-function.md)在 $[0,1]$ 外延拓为常数，则得到无点原子、却集中在零测 Cantor 集上的奇异概率测度。

## 逆向表示

若 $\mu$ 是实直线上在紧集上有限的 Borel 测度，令
$$
F(x)=\begin{cases}\mu((0,x]),&x>0,\\0,&x=0,\\-\mu((x,0]),&x<0,\end{cases}
$$
则 $F$ 单调不减且右连续，并且 $\mu=\mu_F$。对于概率测度，更常用 $F(x)=\mu(( -\infty,x])$，其两端极限为 $0$ 和 $1$，即[累积分布函数（cumulative distribution function）](Law-of-a-random-variable.md)。[^1]

## 相关词条

[Borel 测度（Borel measure）](Borel-measure.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) · [Cantor 函数（Cantor function）](Cantor-function.md) · [绝对连续测度（absolutely continuous measure）](Absolute-continuity-of-measures.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Proposition 1.15；Theorem 1.16；第35页。

[^2]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Example 4.4；Propositions 4.8–4.9；Exercises 4.1、4.4。
