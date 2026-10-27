---
title: 概率测度（Probability measure）
aliases:
- 概率测度
- Probability measure
- 概率空间
- Probability space
- 次概率测度
- Subprobability measure
- 归一化
- Normalization
- 概率密度
- Probability density
type: concept
tags:
- measure-theory
- probability
draft: false
publish: true
status: needs-review
verified: false
---



概率测度（probability measure）是总质量为 $1$ 的测度。它把测度论中的可测集解释为事件，使积分、几乎处处和收敛理论进入概率语言。

## 定义

若 $(\Omega,\mathcal F,P)$ 是测度空间且 $P(\Omega)=1$，就称其为概率空间（probability space）。其中 $\Omega$ 称为样本空间，$\mathcal F$ 是可测事件组成的 $\sigma$-代数，$P$ 是概率测度。$A\in\mathcal F$ 是事件，$P(A)\in[0,1]$ 是其概率。[^1][^2]

所有概率测度都是有限测度，因此也 $\sigma$-有限。有限总质量给出
$$
P(A^c)=1-P(A),\qquad P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
任意递增或递减事件序列都满足相应[测度连续性（Continuity of measures）](Continuity-of-measures.md)，无需再单列首项有限条件；证明见该专门词条。

若非负测度 $\nu$ 满足 $\nu(\Omega)\le1$，称为次概率测度（subprobability measure）。对任意非零有限测度 $\mu$，令 $P(A)=\mu(A)/\mu(\Omega)$，就得到概率测度；这称为归一化（normalization）。分母必须严格正且有限。

## 例

若 $\Omega$ 非空有限，$P(A)=|A|/|\Omega|$ 是均匀概率，这里的 $|A|$、$|\Omega|$ 表示有限集合的[元素个数（cardinality）](Set-algebra.md)。一般离散分布为 $P=\sum_np_n\delta_{x_n}$，$\delta_{x_n}$ 是点 $x_n$ 处的 [Dirac 测度（Dirac measure）](Dirac-measure.md)，其中 $p_n\ge0$、$\sum_np_n=1$。

以 $m$ 表示实直线上的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。若 $f\ge0$ 是 Lebesgue 可测函数且 $\int_{\mathbb R}f\,dm=1$，则 $P(A)=\int_A f\,dm$ 定义[绝对连续概率分布（absolutely continuous probability distribution）](Absolute-continuity-of-measures.md)。一般地，相对于指定参考测度 $\mu$ 的概率密度（probability density）是满足 $f\ge0$、$\int f\,d\mu=1$ 的可测函数，并通过 $P(A)=\int_A f\,d\mu$ 定义概率；它是[由密度定义测度（measure defined by a density）](Weighted-measure.md)的特例。[Cantor 概率测度（Cantor probability measure）](Cantor-function.md)则没有[点原子（point atom）](Atoms.md)，却不具有 Lebesgue 密度；离散分布与有密度分布并未穷尽所有情况。

## 与随机变量的关系

随机变量是从概率空间到目标可测空间的[可测映射（measurable mapping）](Measurable-function.md)。其[分布（Law of a random variable）](Law-of-a-random-variable.md)为 $P_X(B)=P(X\in B)=P(\{\omega\in\Omega:X(\omega)\in B\})$，其中 $B$ 是目标空间中的可测集；$P_X$ 也就是[推前测度（Pushforward measure）](Pushforward-measure.md) $X_*P$。期望记为 $E[X]$ 或 $\mathbb E[X]$，定义为 $\int_\Omega X(\omega)\,dP(\omega)$：非负 $X$ 允许值 $+\infty$；实值 $X$ 要求正、负部积分不同时无穷，复值 $X$ 则要求绝对可积。

**注**：概率为 $1$ 的事件称为几乎必然事件，不必等于整个样本空间。例如[均匀分布（uniform distribution）](Common-probability-distributions.md)于 $[0,1]$ 时，事件 $\{X\ne1/2\}$ 的概率为 $1$，但仍排除了一个可能取值。

## 矩、方差与尾概率

[期望与矩（Expectation and moments）](Expectation.md)详细定义了 $\mathbb EX$、$\mathbb E|X|^p$、中心矩和尾概率，并说明存在性、有限性及尾积分公式。非负变量的期望允许无穷；有符号变量不能把无穷减无穷当作定义。

[方差与协方差（Variance and covariance）](Covariance.md)集中说明二阶矩、协方差矩阵及复值变量的共轭约定。独立且平方可积的变量不相关，反向一般不成立。同分布、对称分布和退化分布仍由[随机变量的分布（Law of a random variable）](Law-of-a-random-variable.md)解释。

## 相关词条

[有限测度（Finite measure）](Finite-measure.md) · [Dirac 测度（Dirac measure）](Dirac-measure.md) · [几乎处处（Almost everywhere）](Almost-everywhere.md) · [Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md)


概率测度是[概率论（Probability theory）](Probability.md)的基础对象；随机过程和随机积分继续在同一可测与积分框架中组织。

[测度论导航](../测度论导航.md) · [概率论导航](../概率论导航.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. §3.1 末尾的 probability measure 定义。

[^2]: Chen Wang, Notes on Real Analysis, 个人笔记。 §§1.2–1.3，概率测度、推前测度与积分。
