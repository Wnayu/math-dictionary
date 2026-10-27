---
title: "Ornstein–Uhlenbeck 过程（Ornstein–Uhlenbeck process）"
aliases:
  - "Ornstein–Uhlenbeck 过程"
  - "Ornstein–Uhlenbeck process"
  - "OU process"
  - "OU 过程"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Ornstein–Uhlenbeck 过程是具有线性均值回复漂移的 Gaussian 扩散，也是少数可以显式求解的随机微分方程之一。

## 定义

设 $\theta>0$、$\mu\in\mathbb R$、$\sigma>0$，$B$ 为标准 Brownian 运动。方程
$$
dX_t=\theta(\mu-X_t)dt+\sigma dB_t,\qquad X_0=x,
$$
的唯一强解称为 Ornstein–Uhlenbeck 过程，显式为
$$
X_t=\mu+(x-\mu)e^{-\theta t}+\sigma\int_0^t e^{-\theta(t-s)}dB_s.
$$
Le Gall 使用 $\mu=0,\sigma=1$ 的归一化；此处参数形式由平移与缩放得到。[^1]

> [!proof]- 证明
> 对 $Y_t=X_t-\mu$ 乘确定性积分因子 $e^{\theta t}$。[随机分部积分（Stochastic integration by parts）](Stochastic-integration-by-parts.md)没有协变差修正，因为积分因子为有限变差函数。于是 $d(e^{\theta t}Y_t)=\sigma e^{\theta t}dB_t$。积分后除以 $e^{\theta t}$ 即得公式。系数全局 Lipschitz，故[SDE 存在唯一性（Existence and uniqueness of SDEs）](Existence-and-uniqueness-of-SDEs.md)保证该解唯一。

## 分布与平稳初值

确定初值下，$X$ 是 Gaussian 过程，
$$
EX_t=\mu+(x-\mu)e^{-\theta t},\quad
\operatorname{Var}(X_t)=\frac{\sigma^2}{2\theta}(1-e^{-2\theta t}).
$$
对 $s\le t$，$\operatorname{Cov}(X_s,X_t)=\frac{\sigma^2}{2\theta}(e^{-\theta(t-s)}-e^{-\theta(t+s)})$，由 [Itô 等距（Itô isometry）](Ito-isometry.md)的交叉形式计算。

若初值独立于未来 Brownian 增量且服从 $N(\mu,\sigma^2/(2\theta))$，则 $X$ 是[平稳过程（stationary process）](Stationary-process.md)，协方差为 $\sigma^2e^{-\theta|t-s|}/(2\theta)$。初值固定为均值 $\mu$ 时，均值虽恒定，方差仍随时间变化，所以并不平稳。

其[生成元（infinitesimal generator）](Infinitesimal-generator.md)在光滑测试函数上为 $Lf(x)=\theta(\mu-x)f'(x)+\sigma^2f''(x)/2$。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，第225–226页。
