---
title: "几何 Brownian 运动（Geometric Brownian motion）"
aliases:
  - "几何 Brownian 运动"
  - "Geometric Brownian motion"
  - "GBM"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



几何 Brownian 运动以状态自身为噪声强度。它的对数具有独立平稳 Gaussian 增量，而过程本身通常没有独立的加法增量。

## 定义

给定 $r\in\mathbb R$、$\sigma\ge0$、$x>0$，方程
$$
dX_t=rX_tdt+\sigma X_tdB_t,\qquad X_0=x,
$$
的解为
$$
X_t=x\exp\!\left(\sigma B_t+(r-\tfrac12\sigma^2)t\right).
$$
因此所有有限时刻都严格为正，$\log(X_t/x)$ 为漂移 $(r-\sigma^2/2)t$ 加 Brownian 噪声。[^1]

> [!proof]- 证明
> 对右端定义的过程应用 [Itô 公式（Itô formula）](Ito-formula.md)：指数的一阶漂移为 $r-\sigma^2/2$，二阶修正补回 $\sigma^2/2$，得到 $dX=rXdt+\sigma XdB$。这样先验证显式过程，再用 Lipschitz 存在唯一性识别解，避免在尚未证明正性时直接使用 $\log X$。

## 矩与独立比值

Gaussian 矩母函数给出
$$
EX_t=xe^{rt},\qquad \operatorname{Var}(X_t)=x^2e^{2rt}(e^{\sigma^2t}-1).
$$
对不相交区间，$X_t/X_s=\exp(\sigma(B_t-B_s)+(r-\sigma^2/2)(t-s))$ 相互独立，并且分布只依赖区间长度。这是乘法增量的性质，不是 $X_t-X_s$ 的独立增量性质。

贴现过程 $e^{-rt}X_t/x=\mathcal E(\sigma B)_t$ 是每个有限时域上的真鞅，见[随机指数（Stochastic exponential）](Stochastic-exponential.md)。$x=0$ 时唯一解恒为零；$x<0$ 时同一公式成立且保持负号，但不再是正值过程。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §8.4.2，Geometric Brownian Motion。
