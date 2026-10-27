---
title: 测度（Measure）
aliases:
  - Measure
  - 测度
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



测度（measure）给[可测集（measurable set）](Measurable-space.md)赋予非负数值，并要求两两不交（pairwise disjoint）集合的可数并（countable union）的测度等于各项测度之和。[计数测度（Counting measure）](Counting-measure.md)按元素（element）的个数计量集合，[Dirac 测度（Dirac measure）](Dirac-measure.md)则把测度集中在指定的一点。[^1]

## 定义

设 $X$ 为集合（set），$\mathcal X\subseteq 2^X$ 是一个 $\sigma$-代数（$\sigma$-algebra），其中 $2^X$ 表示 $X$ 的幂集（power set），即所有子集组成的集合，相关集合记法见[集合代数（Algebra of sets）](Set-algebra.md)。这意味着 $\varnothing,X\in\mathcal X$，且 $\mathcal X$ 对相对于 $X$ 的补集（complement）、可数并和可数交（countable intersection）封闭。称 $(X,\mathcal X)$ 为可测空间（measurable space），$\mathcal X$ 中的集合为可测集。[^1]

可测空间 $(X,\mathcal X)$ 上的非负测度（nonnegative measure）是集合函数（set function）
$$
\mu:\mathcal X\longrightarrow[0,+\infty]
$$
满足以下两个条件：

1. $\mu(\varnothing)=0$；
2. 对任意两两不交的可测集序列（sequence of measurable sets）$(E_n)_{n\geq1}$，有
   $$
   \mu\!\left(\bigcup_{n=1}^{\infty}E_n\right)
   =\sum_{n=1}^{\infty}\mu(E_n).
   $$

第二个条件称为可数可加性（countable additivity）。三元组 $(X,\mathcal X,\mu)$ 称为测度空间（measure space）。下文的“测度”均指非负测度。[^1]

**注**：测度的值域为扩展非负实数（nonnegative extended real numbers），允许取 $+\infty$；非负级数（nonnegative series）按有限部分和（finite partial sum）的极限（limit）理解。因此不能通过消去无穷量来推导等式，也不能仅由 $\mu(\varnothing)=\mu(\varnothing)+\mu(\varnothing)$ 推出空集（empty set）的测度为零。

## 例

以下保留典型测度的定义方式；构造细节、性质和例子见各专门词条。[^1][^2][^3]

### Borel 测度与 Lebesgue 测度（Borel and Lebesgue measures）

定义在[拓扑空间（topological space）](Topological-space.md)的 [Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)上的测度称为 [Borel 测度（Borel measure）](Borel-measure.md)。它不自动具有[完备性（completeness of a measure）](Complete-measure.md)或[局部有限性（local finiteness）](Regularity-of-measures.md)。实直线上的 Borel 长度测度满足 $m_B((a,b])=b-a$，其完备化为 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $m$；二者的定义域不同。零集子集与完备化的详细区别见这两个词条。

### Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）

递增右连续实值函数 $F$ 决定 [Lebesgue–Stieltjes 测度（Lebesgue–Stieltjes measure）](Lebesgue-Stieltjes-measure.md)，满足
$$
\mu_F((a,b])=F(b)-F(a).
$$
$F(x)=x$ 给出长度测度；区间端点、单点质量与连续性之间的关系见专门词条。

### Dirac 测度与计数测度（Dirac and counting measures）

在可测空间 $(X,\mathcal X)$ 上，[Dirac 测度（Dirac measure）](Dirac-measure.md)把单位质量集中在一点 $a$，即 $\delta_a(E)=\mathbf1_E(a)$；这里 $\mathbf1_E$ 为[指示函数（indicator function）](Measurable-function.md)，在 $E$ 内取 $1$、在外取 $0$。[计数测度（Counting measure）](Counting-measure.md)在有限集上取元素个数，在无限集上取 $+\infty$。它们的可测性、积分与有限性条件在各自词条中展开。

### 有限集上的均匀概率（Uniform probability on a finite set）

若 $X$ 非空有限，在 $(X,2^X)$ 上令 $\mu(E)=|E|/|X|$，就得到总质量为 $1$ 的[概率测度（Probability measure）](Probability-measure.md)。这里 $|E|$、$|X|$ 分别表示有限集合的元素个数；这种基数记号见[集合代数（Algebra of sets）](Set-algebra.md)。更一般的离散分布与有密度分布见该词条。

## 相关概念

- [有限测度（Finite measure）](Finite-measure.md)满足 $\mu(X)<\infty$；[概率测度（Probability measure）](Probability-measure.md)进一步满足 $\mu(X)=1$。
- [σ-有限测度（Sigma-finite measure）](Sigma-finite-measure.md)要求存在可测集 $X_n$，使 $X=\bigcup_nX_n$ 且每个 $\mu(X_n)<\infty$。它允许 $\mu(X)=\infty$；覆盖中的集合必须可测。
- [零集（Null set）](Null-set.md)是满足 $\mu(N)=0$ 的可测集；某性质在一个零集以外成立时，称其[几乎处处（Almost everywhere）](Almost-everywhere.md)成立。对概率测度，也称几乎必然成立。
- [完备测度（complete measure）](Complete-measure.md)要求每个零集的所有子集都可测。一般测度空间不能默认具有这一性质。

这些概念的例子、相互关系及约定差异见相应词条。[^1]

## 基本性质

以下性质可由可数可加性推出；[测度的连续性（Continuity of measures）](Continuity-of-measures.md)单独汇总了递增、递减集合的极限关系及有限性条件。

以下设 $(X,\mathcal X,\mu)$ 为测度空间。证明中的 $A\sqcup B$、$\bigsqcup_n A_n$ 表示所列集合两两不交的并，集合运算记号统一见[集合代数（Algebra of sets）](Set-algebra.md)。

### 单调性（Monotonicity）

若 $E,F\in\mathcal X$ 且 $E\subseteq F$，则
$$
\mu(E)\leq\mu(F).
$$
特别地，零集的可测子集仍为零集。[^1]

> [!proof]- 证明
> 因为 $F=E\sqcup(F\setminus E)$，其中 $E$ 与 $F\setminus E$ 是两两不交的可测集，由可数可加性，
> $$
> \mu(F)=\mu(E)+\mu(F\setminus E)\geq\mu(E).
> $$
> 若再有 $\mu(F)=0$，则由非负性（nonnegativity）可得 $\mu(E)=0$。

### 可数并与交的测度（Measures of countable unions and intersections）

#### 可数次可加性（Countable subadditivity）

对任意可测集序列 $(E_n)_{n\geq1}$，有
$$
\mu\!\left(\bigcup_{n=1}^{\infty}E_n\right)
\leq\sum_{n=1}^{\infty}\mu(E_n).
$$
特别地，可数个零集的并仍为零集。[^1]

> [!proof]- 证明
> 令 $E=\bigcup_{n=1}^{\infty}E_n$。将这个并写为不交并（disjoint union）：
> $$
> E=E_1
> \sqcup(E_2\setminus E_1)
> \sqcup\bigl(E_3\setminus(E_1\cup E_2)\bigr)
> \sqcup\cdots.
> $$
> 各项均可测，且第 $n$ 项包含在 $E_n$ 中。因此，由可数可加性和单调性，
> $$
> \begin{aligned}
> \mu(E)
> &=\mu(E_1)+\mu(E_2\setminus E_1)
>   +\mu\bigl(E_3\setminus(E_1\cup E_2)\bigr)+\cdots\\
> &\leq\sum_{n=1}^{\infty}\mu(E_n).
> \end{aligned}
> $$
> 当每个 $E_n$ 都是零集时，右侧为零，故它们的并也是零集。

#### 测度的连续性（Continuity of measures）

对可测集列，$E_n\uparrow E$ 表示 $E_n$ 递增且并集为 $E$，$E_n\downarrow E$ 表示递减且交集为 $E$；记号定义见[集合列的上下极限（Limits of sets）](Set-limits.md)。递增时有
$$
E_n\uparrow E\quad\Longrightarrow\quad\mu(E_n)\to\mu(E),
$$
不需要有限性假设。当 $E_n\downarrow E$ 时，若存在某一项 $\mu(E_{n_0})<\infty$（特别地，$\mu(E_1)<\infty$），同样有 $\mu(E_n)\to\mu(E)$；不能完全省去这一有限性条件。详细证明、条件解释与反例统一见[测度的连续性（Continuity of measures）](Continuity-of-measures.md)。[^1]

## 测度的构造与比较

零测度（zero measure）是对每个可测集 $E$ 都取值 $0$ 的测度，记为 $0$。因此 $\nu=0$ 表示 $\nu(E)=0$ 对全部可测集成立，而非仅在某一个集合上为零。

同一可测空间上的非负测度可按集合逐一比较：$\nu\le\mu$ 表示对每个可测集 $E$ 都有 $\nu(E)\le\mu(E)$。测度的加法与非负数乘也逐集定义，即 $(a\mu+b\nu)(E)=a\mu(E)+b\nu(E)$（$a,b\ge0$，采用 $0\cdot\infty=0$）；这是 Dirac 测度的加权和等写法的含义。

许多测度先在区间或矩形代数上定义[前测度（Premeasure）](Premeasure.md)，再由[外测度（Outer measure）](Outer-measure.md)和 [Carathéodory 扩张定理（Carathéodory extension theorem）](Caratheodory-extension-theorem.md)扩张；$\sigma$-有限性保证生成的 $\sigma$-代数上的唯一性。测度不必在所有子集上有定义，[Vitali 集（Vitali set）](Vitali-set.md)解释了为什么长度测度需要限制定义域。[^3]

同一个可测空间上的不同测度还可通过[绝对连续性（absolute continuity of measures）](Absolute-continuity-of-measures.md)、[Radon–Nikodym 导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md)与[Lebesgue 分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md)比较。允许正负或复数值时，进入[符号测度（Signed measure）](Signed-measure.md)的理论，需要另外规定可加性与积分的有限性。

## 相关词条

[可测空间（Measurable space）](Measurable-space.md) · [Borel 测度（Borel measure）](Borel-measure.md) · [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) · [Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md) · [乘积测度（Product measure）](Product-measure.md)

[测度论导航](../测度论导航.md)

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Definitions 1.1、1.16；Examples 1.17–1.19；Exercise 1.21；式 (1.6)–(1.8)。

[^2]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Proposition 1.15；Theorem 1.16。

[^3]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Examples 4.3–4.4、4.10–4.11；Theorems 4.6、4.16–4.17。
