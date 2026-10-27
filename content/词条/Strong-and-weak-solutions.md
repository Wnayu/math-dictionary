---
title: "强解与弱解（Strong and weak solutions）"
aliases:
  - "强解与弱解"
  - "Strong and weak solutions"
  - "Strong solution"
  - "强解"
  - "Weak solution"
  - "弱解"
  - "Pathwise uniqueness"
  - "路径唯一性"
  - "Uniqueness in law"
  - "依分布唯一性"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



SDE 的强弱解描述解与给定噪声之间的关系；这里的“强”“弱”不是指路径更光滑，也不是偏微分方程中弱导数的含义。

## 定义

固定系数与确定初值 $x$，考虑[随机微分方程（stochastic differential equation）](Stochastic-differential-equation.md) $dX=b(t,X)dt+\sigma(t,X)dB$。

- 弱解允许把概率空间、滤过、Brownian 运动 $B$ 和过程 $X$ 一同作为待构造对象。
- 强解在给定 $B$ 后构造，且 $X$ 适应于 $B$ 的完备自然滤过；随机初值情形还应把初值加入初始信息，并保证 Brownian 增量相对于该信息仍独立。
- 路径唯一性（pathwise uniqueness）是指同一空间、同一 Brownian 运动和相同初值上的两个解不可区分。
- 依分布唯一性（uniqueness in law）是指相同初始分布的任意弱解，在连续路径空间上具有相同的 $X$ 分布。[^1]

强解当然给出弱解；反向及两种唯一性的关系需要定理，见 [Yamada–Watanabe 定理（Yamada–Watanabe theorem）](Yamada-Watanabe-theorem.md)。

## 弱唯一而路径不唯一的例子

取 $\operatorname{sgn}_{-}(z)=1$ 当 $z>0$，否则为 $-1$，考虑
$$
dX_t=\operatorname{sgn}_{-}(X_t)dB_t,\qquad X_0=0.
$$
从标准 Brownian 运动 $\beta$ 出发，令 $B_t=\int_0^t\operatorname{sgn}_{-}(\beta_s)d\beta_s$。其二次变差为 $t$，由 [Lévy 刻画（Lévy characterization）](Levy-characterization.md)，$B$ 是 Brownian 运动；积分结合律给出 $\beta=\int\operatorname{sgn}_{-}(\beta)dB$，所以弱解存在。

任何解的二次变差都是 $t$，因此都具有 Brownian 分布，依分布唯一性成立。但是 $\beta$ 和 $-\beta$ 在同一驱动 $B$ 下均为解，且不相同，因此路径唯一性失败。零点处符号不相反的差异不影响积分，因为 Brownian 零点集的 Lebesgue 测度为零，见[占用密度公式（Occupation density formula）](Occupation-density-formula.md)。[^1]

**注**：本例的解不是由给定 $B$ 的自然滤过适应得到的强解；证明这一更强的结论需要比较 $B$ 与 $|\beta|$ 生成的滤过，Le Gall 在此例中给出说明并指向局部时公式。它不能仅从“路径唯一性失败”这一事实一般性推出。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Definition 8.2；第211–212页。
