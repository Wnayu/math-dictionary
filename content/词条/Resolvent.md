---
title: "预解算子（Resolvent）"
aliases: ["预解算子", "Resolvent", "预解恒等式", "Resolvent identity", "λ预解算子"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



预解算子是转移半群关于时间的 Laplace 变换；在 Feller 理论中，它把所有 $C_0$ 函数映到生成元定义域。[^1][^2][^3]

## 定义

给定[转移半群（Transition semigroup）](Chapman-Kolmogorov-equations.md) $(P_t)$，对 $\lambda>0$ 与有界可测 $f$ 定义
$$
R_\lambda f(x)=\int_0^\infty e^{-\lambda t}P_tf(x)\,dt.
$$
有 $\|R_\lambda f\|_\infty\le\|f\|_\infty/\lambda$。若为 Feller 半群，则 $R_\lambda$ 把 $C_0(E)$ 映到自身。概率上，$R_\lambda f(x)=\mathbb E_x\int_0^\infty e^{-\lambda t}f(X_t)dt$，即折现的占用积分。

## 预解恒等式

对 $\lambda\ne\mu$，
$$
R_\lambda-R_\mu=(\mu-\lambda)R_\lambda R_\mu,
\qquad R_\lambda P_t=P_tR_\lambda.
$$

> [!proof]- 证明
> Fubini 定理、半群关系及变量 $u=s+t$ 给出
> $$
> \begin{aligned}
> R_\lambda R_\mu f
> &=\int_0^\infty\int_0^\infty e^{-\lambda s-\mu t}P_{s+t}f\,dt\,ds\\
> &=\int_0^\infty P_uf\left(\int_0^u e^{-\lambda s-\mu(u-s)}ds\right)du\\
> &=\frac{R_\lambda f-R_\mu f}{\mu-\lambda}.
> \end{aligned}
> $$
> 所有交换均由 $\|f\|_\infty e^{-\lambda s-\mu t}$ 可积控制。交换 $R_\lambda$ 与 $P_t$ 由同样的 Fubini 及 $P_sP_t=P_tP_s$ 得到。

## 与生成元的逆关系

设 $A$ 为[Feller 生成元（Feller generator）](Infinitesimal-generator.md)。则
$$
R_\lambda(C_0(E))=D(A),\qquad
(\lambda I-A)R_\lambda f=f,\quad
R_\lambda(\lambda I-A)g=g\quad(g\in D(A)).
$$

> [!proof]- 证明
> 由
> $$
> P_hR_\lambda f=e^{\lambda h}\left(R_\lambda f-\int_0^h e^{-\lambda t}P_tf\,dt\right)
> $$
> 及强连续性，差商在一致范数下趋于 $\lambda R_\lambda f-f$，所以 $R_\lambda f\in D(A)$。对 $g\in D(A)$，$\frac d{dt}(e^{-\lambda t}P_tg)=e^{-\lambda t}P_t(A-\lambda I)g$；积分到无穷，边界项为 $-g$，得到另一恒等式及值域结论。

## 一维 Brownian 例子

Brownian 热核的时间 Laplace 积分为
$$
R_\lambda f(x)=\int_{\mathbb R}\frac{e^{-\sqrt{2\lambda}|y-x|}}{\sqrt{2\lambda}}f(y)\,dy.
$$
空间积分必须遍及整个 $\mathbb R$。这是 $(\lambda I-\frac12\frac{d^2}{dx^2})^{-1}$ 在 $C_0(\mathbb R)$ 上的积分表示；不能把时间积分 $[0,\infty)$ 的范围误抄为空间积分范围。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Definition 6.5、Proposition 6.12；第156、161页。

[^2]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，Definition 6.5；第86–87页。

[^3]: Chen Wang，*Notes on GTM 274*，个人笔记，式 (1.5)、(1.6)、(2.2)、(2.3)；Example 2.5。
