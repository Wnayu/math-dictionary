---
title: "无穷小生成元（Infinitesimal generator）"
aliases: ["无穷小生成元", "Infinitesimal generator", "生成元定义域", "Generator domain", "正最大值原理", "Positive maximum principle"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



生成元是 Markov 半群在零时刻的强导数；它由算子公式与定义域共同组成，只给微分表达式并不能完全指定生成元。[^1][^2]

## 定义

设 $(P_t)$ 为 $C_0(E)$ 上的[Feller 半群（Feller semigroup）](Feller-semigroup.md)。定义
$$
D(A)=\left\{f\in C_0(E):\lim_{t\downarrow0}\frac{P_tf-f}{t}\text{ 在 }\|\cdot\|_\infty\text{ 下存在}\right\},
\qquad Af=\lim_{t\downarrow0}\frac{P_tf-f}{t}.
$$
这是一种强极限，不是逐点极限。$D(A)$ 中的 $f$ 满足 $P_tf\in D(A)$、$AP_tf=P_tAf$，以及
$$
P_tf-f=\int_0^tP_sAf\,ds.
$$
因为 $t\mapsto P_tf$ 在范数中可微，导数为 $P_tAf$，积分式由 Banach 空间中的微积分得到；可先用一致收敛的差商及 Riemann 和理解。

## Brownian 生成元及完整定义域

标准 $d$ 维 Brownian 半群在 $C_c^\infty(\mathbb R^d)$ 上有 $Af=\frac12\Delta f$，其中 $C_c^\infty$ 为光滑且紧支集函数，$\Delta f=\sum_{j=1}^d\partial_{jj}f$。完整定义域为
$$
D(A)=\{f\in C_0(\mathbb R^d):\Delta f=g\text{ 在分布意义下，某 }g\in C_0(\mathbb R^d)\},
\qquad Af=g/2.
$$
这里“分布意义”明确指对每个 $\varphi\in C_c^\infty$，$\int f\Delta\varphi\,dx=\int g\varphi\,dx$。它允许 $f$ 没有所有经典二阶偏导数，尤其在高维时不能把定义域直接写成所有二阶光滑且消失的函数。

> [!proof]- Brownian 定义域的证明
> 设 $f\in D(A)$。高斯卷积的对称性给出 $\int P_tf\,\varphi=\int fP_t\varphi$。对光滑紧支集 $\varphi$，热核计算给出 $(P_t\varphi-\varphi)/t\to\frac12\Delta\varphi$ 在 $L^1$ 中；左侧差商则在一致范数下趋于 $Af$。因此 $\int Af\,\varphi=\frac12\int f\Delta\varphi$，即 $\Delta f=2Af$。
>
> 反过来，若 $\Delta f=g\in C_0$ 在上述意义下，热核平滑给出 $\partial_tP_tf=\frac12P_tg$。把紧支集截断的热核代入分布等式，再利用热核及其导数的可积尾部，可以严格得到该恒等式。对 $0<\varepsilon<t$ 积分，令 $\varepsilon\downarrow0$，由强连续性得
> $$
> P_tf-f=\tfrac12\int_0^tP_sg\,ds.
> $$
> 于是 $\|(P_tf-f)/t-g/2\|_\infty\le\frac1{2t}\int_0^t\|P_sg-g\|_\infty ds\to0$，即 $f\in D(A)$。

## 正最大值原理

若 $f\in D(A)$ 在 $x$ 取得非负全局最大值，则 $P_tf(x)\le f(x)$，从而 $Af(x)\le0$。这个必要条件约束哪些算子能够成为 Markov 生成元；存在性还需要额外条件，不能只据此断言某算子生成半群。

生成元与[预解算子（Resolvent）](Resolvent.md)的逆关系，以及[随机微分方程（Stochastic differential equation）](Stochastic-differential-equation.md)的微分生成元，应分别在相应假设下使用。


生成元与偏微分方程解的概率表示之间的具体联系见[Feynman–Kac 公式（Feynman–Kac formula）](Feynman-Kac-formula.md)；使用该公式仍需核对解的正则性及期望的可积性。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Chen Wang，*Notes on GTM 274*，个人笔记，式 (2.1)；Theorem 1.13、Theorem 2.6。

[^2]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Definition 6.9、Propositions 6.10、6.11；第161–162页。
