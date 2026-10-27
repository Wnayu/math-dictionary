---
title: "Brownian 首达时刻（Brownian hitting times）"
aliases: ["Brownian 首达时刻", "Brownian hitting times", "Brownian首达时间", "Brownian首次通过时间", "First-passage time"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Brownian 首达时刻的分布展示了“几乎必然有限”与“期望有限”的区别，也是可选停止条件的具体检验。[^L][^D]

## 单个水平

令 $B_0=0$，$a>0$，$T_a=\inf\{t\ge0:B_t=a\}$。由[反射原理（Reflection principle）](Reflection-principle.md)，
$$
P(T_a\le t)=2\bigl(1-\Phi(a/\sqrt t)\bigr),\qquad t>0.
$$
其中 $\Phi$ 是[标准正态分布（Standard normal distribution）](Common-probability-distributions.md)的分布函数。所以 $T_a<\infty$ 几乎必然，其密度为
$$
f_{T_a}(t)=\frac{a}{\sqrt{2\pi}t^{3/2}}\exp\left(-\frac{a^2}{2t}\right).
$$
但 $P(T_a>t)\sim\sqrt{2/\pi}\,a\,t^{-1/2}$，由尾积分公式得 $\mathbb ET_a=\infty$。

## Laplace 变换

对 $\lambda\ge0$，
$$
\mathbb E e^{-\lambda T_a}=e^{-a\sqrt{2\lambda}}.
$$

> [!proof]- 证明
> 当 $\lambda>0$，取 $\theta=\sqrt{2\lambda}$。指数鞅 $M_t=\exp(\theta B_t-\theta^2t/2)$ 在 $t\wedge T_a$ 处满足 $\mathbb EM_{t\wedge T_a}=1$。由于停止前 $B_s\le a$，整个停止族被 $e^{\theta a}$ 控制；而 $T_a<\infty$ 几乎必然，故由控制收敛
> $$
> 1=\mathbb E\exp(\theta a-\theta^2T_a/2).
> $$
> 整理即得公式。$\lambda=0$ 由 $T_a<\infty$ 得到。

## 离开有限区间

从 $x\in(a,b)$ 出发，$\tau=\inf\{t:B_t\notin(a,b)\}$ 满足
$$
P_x(B_\tau=b)=\frac{x-a}{b-a},\qquad
\mathbb E_x\tau=(x-a)(b-x).
$$

> [!proof]- 证明
> 停止过程 $B_{t\wedge\tau}$ 有界。对鞅 $B_t^2-t$ 在有界停时 $t\wedge\tau$ 应用停止定理，得到 $\mathbb E_x(t\wedge\tau)=\mathbb E_xB_{t\wedge\tau}^2-x^2$，右侧一致有界。因此 $\tau$ 可积且几乎必然有限。连续性保证 $B_\tau\in\{a,b\}$。对 $B_t$ 取极限得 $\mathbb E_xB_\tau=x$，解出出口概率；再对二次鞅取极限得 $\mathbb E_x\tau=\mathbb E_xB_\tau^2-x^2=(x-a)(b-x)$。

**注**：单边首达的无限期望并不与有限区间退出的有限期望矛盾；两者停止条件不同。随机时刻以后重新开始过程依赖[强 Markov 性（Strong Markov property）](Strong-Markov-property.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^L]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §2.4及相关首达时刻练习。

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§7.4.2、7.5。
