---
title: "Hardy–Littlewood 极大不等式（Hardy–Littlewood maximal inequality）"
aliases:
  - "Hardy–Littlewood 极大不等式"
  - "Hardy–Littlewood maximal inequality"
  - "弱(1,1)极大估计"
  - "弱型(1,1)"
  - "Weak type (1,1)"
  - "强型(1,1)"
  - "Strong type (1,1)"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



极大不等式控制“某个尺度的局部平均值过大”的点集。这里讨论 [Hardy–Littlewood 极大函数（Hardy–Littlewood maximal function）](Hardy-Littlewood-maximal-function.md)的弱 $(1,1)$ 估计，与概率论中的鞅极大不等式不是同一个命题。[^1]

## 定理

若 $f\in L^1(\mathbb R^d)$，$\|f\|_{L^1}=\int_{\mathbb R^d}|f|\,dm$ 为[Lp 范数（Lp norm）](Lp-space.md)，$m$ 为[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$Mf$ 为[中心球极大函数（centered maximal function）](Hardy-Littlewood-maximal-function.md)，则对每个 $\alpha>0$，
$$
m\{x:Mf(x)>\alpha\}
\leq\frac{3^d}{\alpha}\|f\|_{L^1}.
$$

“弱 $(1,1)$”（weak type $(1,1)$）指存在只依赖维数、与 $f$ 及 $\alpha$ 均无关的常数 $C_d$，使 $\sup_{\alpha>0}\alpha\,m\{Mf>\alpha\}\le C_d\|f\|_1$；即以尾集合测度控制大小，而不要求 $Mf$ 的 $L^1$ 范数有限。

**注**：常数 $3^d$ 是覆盖论证给出的可用常数，此处不讨论最优值。[^1]

**注**：局部可积不等于全局可积。例如 $f\equiv1$ 的极大函数仍为 $1$，但全空间 $L^1$ 范数无限；引用本条弱 $(1,1)$ 不等式时，需要其明确的全局 $L^1$ 假设。

> [!proof]- 证明
> 令 $E_\alpha=\{Mf>\alpha\}$。对每个 $x\in E_\alpha$，选择球 $B_x$ 使其平均 $|f|$ 大于 $\alpha$。这些球覆盖 $E_\alpha$。给定 $0<c<m(E_\alpha)$，由覆盖引理选出两两不交的 $B_1,\ldots,B_k$，使
> $$
> c<3^d\sum_i m(B_i)
> <\frac{3^d}{\alpha}\sum_i\int_{B_i}|f|\,dm
> \leq\frac{3^d}{\alpha}\|f\|_1.
> $$
> 让 $c$ 增大到 $m(E_\alpha)$，即得结论；这也排除了 $m(E_\alpha)=\infty$。

## 推论

令 $\alpha\to\infty$ 得 $m\{Mf=\infty\}=0$，故 $L^1$ 函数的极大函数几乎处处有限。估计也使连续函数逼近中的小 $L^1$ 误差转化为小的例外集，是 [Lebesgue 微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md)的核心。

## 弱型估计与强型有界性

强 $(1,1)$ 有界性（strong type $(1,1)$ boundedness）指存在一个有限常数 $C$，使对所有 $f\in L^1$ 都有 $Mf\in L^1$ 且 $\|Mf\|_1\leq C\|f\|_1$。对这里的极大算子，这一性质一般不成立。在一维取 $f=1_{[0,1]}$ 为区间的[指示函数（indicator function）](Measurable-function.md)，对 $x>1$，以 $x$ 为中心、半径 $x$ 的球几乎包含整个 $[0,1]$，所以
$$
Mf(x)\geq\frac1{2x}.
$$
右侧在 $(1,\infty)$ 上不可积。因此“弱 $(1,1)$”不能误写成强 $L^1$ 有界性。[^1]

## 相关词条

[极大函数（Hardy–Littlewood maximal function）](Hardy-Littlewood-maximal-function.md) · [覆盖引理（Vitali covering lemma）](Vitali-covering-lemma.md) · [Lebesgue微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，Theorem 3.17；第3章 Exercise 22。
