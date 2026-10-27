---
title: "特征函数（Characteristic function）"
aliases: ["特征函数", "Characteristic function"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



特征函数把概率分布表示为复值函数，并把独立随机变量之和变成函数乘积。与矩母函数不同，它对每个概率分布都存在。[^1]

## 定义

实值[随机变量（Random variable）](Random-variable.md) $X$ 的特征函数为
$$
\varphi_X(t)=\mathbb E[e^{itX}]=\int_{\mathbb R}e^{itx}\,P_X(dx),\qquad t\in\mathbb R,
$$
其中 $i^2=-1$，$P_X$ 是[分布（Law of a random variable）](Law-of-a-random-variable.md)。因 $|e^{itX}|=1$，该复积分总有定义。对 $\mathbb R^d$ 值随机向量，定义 $\varphi_X(t)=\mathbb E e^{i\langle t,X\rangle}$，$\langle t,x\rangle=\sum_{j=1}^dt_jx_j$。

## 基本性质

$\varphi_X(0)=1$，$|\varphi_X(t)|\le1$，$\varphi_X(-t)=\overline{\varphi_X(t)}$，且 $\varphi_X$ 在实轴上一致连续。若 $X,Y$ [独立（Independent）](Independence.md)，则
$$
\varphi_{X+Y}(t)=\varphi_X(t)\varphi_Y(t),\qquad
\varphi_{aX+b}(t)=e^{itb}\varphi_X(at).
$$
> [!proof]- 证明
> 前三条直接来自积分与复共轭。对任意 $t,h$，
> $$
> |\varphi_X(t+h)-\varphi_X(t)|\le\mathbb E|e^{ihX}-1|.
> $$
> 右侧与 $t$ 无关；$h\to0$ 时，被积函数逐点趋于零且不超过 $2$，由控制收敛定理趋于零。独立时，$e^{itX}$ 与 $e^{itY}$ 独立且可积，故乘积期望分解。仿射变换公式直接代入定义。

## 与矩及分布识别的关系

若 $\mathbb E|X|^k<\infty$，则 $\varphi_X^{(k)}(t)=\mathbb E[(iX)^ke^{itX}]$，特别地 $\varphi_X^{(k)}(0)=i^k\mathbb E[X^k]$。有限二阶矩给出
$$
\varphi_X(t)=1+it\mathbb EX-\tfrac12t^2\mathbb EX^2+o(t^2).
$$
这里 $o(t^2)$ 表示误差除以 $t^2$ 在 $t\to0$ 时趋于零。可积性是交换微分与积分的依据，不能仅根据形式 Taylor 展开断言矩存在。

特征函数唯一决定分布，详见[特征函数反演（Characteristic function inversion）](Characteristic-function-inversion.md)；逐点极限何时仍为特征函数，见[Lévy 连续性定理（Lévy continuity theorem）](Levy-continuity-theorem.md)。例如 $N(m,\sigma^2)$ 的特征函数是 $e^{imt-\sigma^2t^2/2}$，Poisson$(\lambda)$ 的特征函数是 $\exp\{\lambda(e^{it}-1)\}$；这些分布的定义见[常见概率分布（Common probability distributions）](Common-probability-distributions.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，第 125 页；Theorems 3.3.1–3.3.2、3.3.18、3.3.20；Examples 3.3.4–3.3.5。
