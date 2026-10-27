---
title: "随机微分方程（Stochastic differential equation）"
aliases:
  - "随机微分方程"
  - "Stochastic differential equation"
  - "SDE"
  - "Itô diffusion"
  - "扩散系数"
  - "Diffusion coefficient"
  - "漂移系数"
  - "Drift coefficient"
  - "爆炸时刻"
  - "Explosion time"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



随机微分方程（SDE）用漂移与随机积分描述过程的演化。符号 $dX_t=b(t,X_t)dt+\sigma(t,X_t)dB_t$ 是积分方程的简写，不要求 Brownian 路径具有普通导数。

## 定义

设 $b:[0,\infty)\times\mathbb R^d\to\mathbb R^d$、$\sigma:[0,\infty)\times\mathbb R^d\to\mathbb R^{d\times m}$ 为 Borel 函数。Itô 型 SDE 的一个解由滤过概率空间、相对于该滤过的 $m$ 维标准 [Brownian 运动（Brownian motion）](Brownian-motion.md) $B$，以及连续适应的 $\mathbb R^d$ 值过程 $X$ 组成，使对每个 $T<\infty$，
$$
\int_0^T|b(s,X_s)|ds+\int_0^T\|\sigma(s,X_s)\|_{\mathrm{HS}}^2ds<\infty\quad\text{几乎必然},
$$
并且几乎必然对所有 $t$，
$$
X_t=X_0+\int_0^t b(s,X_s)ds+\int_0^t\sigma(s,X_s)dB_s.
$$
$\|\sigma\|_{\mathrm{HS}}^2=\sum_{i,j}\sigma_{ij}^2$ 是矩阵元素平方和；第 $i$ 个随机积分分量为 $\sum_j\int\sigma_{ij}dB^j$。[^1]

## 漂移、扩散与生成元

$b$ 称漂移系数，$\sigma$ 称扩散系数。扩散矩阵 $a=\sigma\sigma^{\mathsf T}$ 决定
$$
[X^i,X^j]_t=\int_0^t a_{ij}(s,X_s)ds.
$$
对 $f\in C^2$，由 [Itô 公式（Itô formula）](Ito-formula.md)得到漂移算子
$$
L_tf(x)=\sum_i b_i(t,x)\partial_i f(x)+\frac12\sum_{i,j}a_{ij}(t,x)\partial_{ij}f(x).
$$
在时间齐次情形及适当存在唯一性条件下，这与解过程的[无穷小生成元（infinitesimal generator）](Infinitesimal-generator.md)对应；一般时变方程使用转移族而非单参数齐次半群。

## 解的不同含义

[强解与弱解（Strong and weak solutions）](Strong-and-weak-solutions.md)区分驱动 Brownian 运动及概率空间是否预先给定；路径唯一性与依分布唯一性也不相同。[存在唯一性定理（Existence and uniqueness of SDEs）](Existence-and-uniqueness-of-SDEs.md)给出 Lipschitz 条件下的结论。

若只在爆炸时刻 $\zeta$ 之前定义解，则用 $\tau_n=\inf\{t:|X_t|\ge n\}$ 等退出时刻逐步构造，$\zeta=\lim_n\tau_n$；全局解要求 $\zeta=\infty$ 几乎必然。局部 Lipschitz 本身不保证这一点。

## 例

$dX_t=\mu dt+\sigma dB_t$ 的解为 $X_t=x+\mu t+\sigma B_t$。乘法噪声与均值回复的具体计算分别见[几何 Brownian 运动（Geometric Brownian motion）](Geometric-Brownian-motion.md)、[Ornstein–Uhlenbeck 过程（Ornstein–Uhlenbeck process）](Ornstein-Uhlenbeck-process.md)。带跳跃驱动的版本见 [Lévy 驱动的随机微分方程（Lévy-driven SDE）](Levy-driven-SDE.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §8.1 Definitions 8.1、8.2；§8.3，解过程与生成元。
