---
title: Lévy 测度（Lévy measure）
aliases:
- Lévy measure
- Levy measure
- 列维测度
tags:
- measure-theory
- probability
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



Lévy 测度（Lévy measure）是描述跳跃大小强度的一类 Borel 测度。它通常具有无限总质量，却在远离原点的区域上有限，因此是[σ-有限测度（Sigma-finite measure）](Sigma-finite-measure.md)的一个重要实例。[^1]

## 定义

$\mathbb R^d\setminus\{0\}$ 上的非负 Borel 测度 $\nu$ 称为 Lévy 测度，若
$$
\int_{\mathbb R^d\setminus\{0\}}(1\wedge|x|^2)\,\nu(dx)<\infty.
$$

这里 $1\wedge|x|^2=\min(1,|x|^2)$，$\wedge$ 采用[最小值记号（minimum notation）](Measurable-function.md)；$|x|$ 是欧氏范数，见[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。$\nu(dx)$ 与 $d\nu(x)$ 都表示按 $\nu$ 积分，见[Lebesgue 积分（Lebesgue integral）](Lebesgue-integral.md)。

**注**：也常在整个 $\mathbb R^d$ 上定义并要求 $\nu(\{0\})=0$。可用 $|x|^2/(1+|x|^2)$ 替换权函数，因为两者相差至多常数因子 $2$。

## 跳跃强度的含义

有限总质量情形可以直接说明“强度”（intensity）的含义。取 $N$ 服从参数 $c>0$ 的[Poisson 分布（Poisson distribution）](Common-probability-distributions.md)，取[独立同分布（independent and identically distributed）](Independence.md)的向量 $Z_1,Z_2,\ldots$，公共分布为 $Q$，并假设整个序列与 $N$ 独立。把 $N$ 解释为单位时间内的到达次数、$Z_i$ 为第 $i$ 次到达所带来的增量。对 Borel 集 $B\subseteq\mathbb R^d\setminus\{0\}$，非零增量落入 $B$ 的次数是
$$
K_B=\sum_{i=1}^{N}1_B(Z_i),\qquad
\mathbb E K_B=\mathbb E[N]Q(B)=cQ(B).
$$
因此 $\nu(B)=cQ(B)$ 表示每单位时间内这类跳跃次数的期望；$B$ 描述的是增量的大小和方向。若将测度扩到原点，则设 $\nu(\{0\})=0$，因为零增量不产生实际跳跃，即使 $Q(\{0\})>0$ 也如此。这里 $1_B$ 是[指示函数（indicator function）](Measurable-function.md)，$\mathbb E$ 是[期望（expectation）](Expectation.md)。这个有限模型给出术语的准确概率含义；一般 Lévy 测度允许原点附近的总质量无限，仍以本条的可积条件为定义。[^1]

本条以 $1$ 为截断阈值，称 $0<|x|<1$ 区域的增量为小跳（small jumps），称 $|x|\ge1$ 区域的增量为大跳（large jumps）。因此“小跳二阶可积”准确指 $\int_{0<|x|<1}|x|^2\,d\nu<\infty$，“大跳质量有限”指 $\nu\{|x|\ge1\}<\infty$；两者合起来等价于定义中的积分有限。

## 局部有限与 σ-有限

若上述积分为 $M$，则对每个 $\varepsilon>0$，
$$
\nu(\{|x|\ge\varepsilon\})\le\frac{M}{1\wedge\varepsilon^2}<\infty.
$$
集合 $\{|x|\ge1/n\}$ 递增覆盖去心空间，故 $\nu$ 是 σ-有限的。它在去心空间上还[局部有限（locally finite）](Regularity-of-measures.md)：每个 $x\ne0$ 都可取 $r<|x|/2$，此时邻域 $B(x,r)$ 远离原点，故有有限测度。

**注**：其质量可以在原点附近无限集中；若延伸为 $\mathbb R^d$ 上零点无质量的测度，也不意味着原点的每个邻域质量有限。

## 例

每个去心空间上的有限测度都是 Lévy 测度。一维对称例（symmetric measure）为 $\nu(dx)=c|x|^{-1-\alpha}\,dx$；这里 $dx$ 是 Lebesgue 测度，等式表示以该函数为密度的[测度（Measure defined by a density）](Weighted-measure.md)，$c>0$、$0<\alpha<2$：小跳部分积分为 $2c\int_0^1x^{1-\alpha}dx<\infty$，大跳质量为 $2c\int_1^\infty x^{-1-\alpha}dx<\infty$，但总质量无穷。这里“对称”指对每个去心空间中的 Borel 集 $B$，$\nu(-B)=\nu(B)$，其中 $-B=\{-x:x\in B\}$；它是测度在反射 $x\mapsto-x$ 下不变的精确含义。

## 小跳的一阶与二阶可积性

对 $\nu(dx)=1_{(0,1)}x^{-2}dx$（$1_{(0,1)}$ 为[指示函数（indicator function）](Measurable-function.md)），$\int x^2\,d\nu=1$，而 $\int x\,d\nu=\infty$。因此二次加权可积不推出小跳的一阶绝对可积。

**注**：它与[概率分布（probability distribution）](Law-of-a-random-variable.md)的密度不是同一对象；测度总质量不要求为 $1$。过程构造由[Lévy–Itô 分解（Lévy–Itô decomposition）](Levy-Ito-decomposition.md)承接，特征指数由[Lévy–Khintchine 公式（Lévy–Khintchine formula）](Levy-Khintchine-formula.md)说明。

## 参考文献

[^1]: Chen Wang, Notes on Lévy Processes and Stochastic Calculus，个人笔记，第一章 Lévy 测度定义 (ch1:eq-1-10) 前关于有限跳跃强度与期望计数的说明、该定义、引理 ch1:result-1-2-13 及小跳补偿的例子。

[测度论导航](../测度论导航.md) · [概率论导航](../概率论导航.md) · [测度（Measure）](Measure.md)
