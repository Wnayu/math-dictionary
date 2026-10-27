---
title: "Hardy–Littlewood 极大函数（Hardy–Littlewood maximal function）"
aliases:
  - "Hardy–Littlewood 极大函数"
  - "Hardy–Littlewood maximal function"
  - "次线性"
  - "Sublinearity"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Hardy–Littlewood 极大函数在每一点考察所有尺度的局部平均值，是把积分控制转化为点态控制的工具。它通过[极大不等式（Hardy–Littlewood maximal inequality）](Maximal-inequality.md)支撑 Lebesgue 微分理论。[^1]

## 定义

设 $f\in L^1_{\mathrm{loc}}(\mathbb R^d)$，即 $f$ 在每个有界可测集合上绝对可积（见[Lp 空间（Lp space）](Lp-space.md)中的局部可积约定）。以下 $m$、$dy$ 表示 $d$ 维 Lebesgue 测度，$B(x,r)$ 为欧氏开球，详见[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)。记
$$
A_rf(x)=\frac1{m(B(x,r))}\int_{B(x,r)}f(y)\,dy.
$$
中心 Hardy–Littlewood 极大函数定义为
$$
Mf(x)=\sup_{r>0}A_r|f|(x).
$$
其值可以是 $+\infty$。Folland 使用符号 $Hf$；这里使用常见的 $Mf$。[^1]

## 可测性与基本性质

固定 $r>0$ 时 $A_r|f|(x)$ 连续。事实上，球心与半径趋近时，球的示性函数在极限球的边界之外逐点收敛；球面具有零 Lebesgue 测度，并可在一个固定有界球中以局部可积函数控制。因此支配收敛给出连续性。于是
$$
\{Mf>\alpha\}=\bigcup_{r>0}\{A_r|f|>\alpha\}
$$
是开集，故 $Mf$ 满足[下半连续（lower semicontinuous）](Measurable-function.md)的定义，因而可测。[^1]

它满足 $M(cf)=|c|Mf$、$M(f+g)\leq Mf+Mg$；前者称绝对齐次性（absolute homogeneity），后者称次可加性（subadditivity），两者合称这里的次线性（sublinearity）。此外，$f=g$ 几乎处处时 $Mf=Mg$ 处处。采用[Lp 空间（Lp space）](Lp-space.md)的范数约定，若 $f\in L^\infty$，则 $Mf\leq\|f\|_\infty$；若 $f\in L^1$，则 $Mf<\infty$ 几乎处处，后一个性质由[极大不等式（Hardy–Littlewood maximal inequality）](Maximal-inequality.md)推出。

## 中心与非中心版本

非中心版本定义为
$$
M^*f(x)=\sup_{B\ni x}\frac1{m(B)}\int_B|f|\,dm.
$$
这里上确界遍历所有包含 $x$ 的欧氏开球 $B$，并不要求以 $x$ 为中心。二者满足 $Mf\leq M^*f\leq2^dMf$：若半径为 $r$ 的球 $B$ 包含 $x$，则 $B\subseteq B(x,2r)$。[^1]

**注**：定义只需局部可积，[弱 $(1,1)$ 估计（weak type (1,1) estimate）](Maximal-inequality.md)则要求全局 $L^1$ 假设；条件说明和例子见[极大不等式（Hardy–Littlewood maximal inequality）](Maximal-inequality.md)。

## 相关词条

[极大不等式（Hardy–Littlewood maximal inequality）](Maximal-inequality.md) · [Lebesgue点（Lebesgue point）](Lebesgue-point.md) · [Lebesgue微分定理（Lebesgue differentiation theorem）](Lebesgue-differentiation-theorem.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. Lemma 3.16、Theorem 3.17、Exercise 23，§3.4，印刷 pp.96、100。
