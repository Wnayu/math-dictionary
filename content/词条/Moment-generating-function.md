---
title: "矩母函数（Moment-generating function）"
aliases: ["矩母函数", "Moment-generating function"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



矩母函数在存在时编码全部矩，并为指数尾界和大偏差提供工具；与特征函数相比，它有更严格的可积性要求。[^1][^2]

## 定义

实值变量 $X$ 的矩母函数为 $M_X(t)=\mathbb Ee^{tX}$，$t\in\mathbb R$，允许值 $+\infty$。其有效定义域为 $D_X=\{t:M_X(t)<\infty\}$。若 $0$ 位于 $D_X$ 内部，即存在 $\delta>0$ 使 $M_X(t)<\infty$ 对 $|t|<\delta$ 成立，通常称矩母函数在零附近存在。

对非负 $X$，Laplace 变换（Laplace transform）常写成 $L_X(s)=\mathbb Ee^{-sX}$，$s\ge0$；它总有限，但不等于要求正向的 $M_X(s)$ 有限。

## 矩与唯一性

在零附近存在时，$M_X^{(k)}(0)=\mathbb EX^k$。由于
$$
|x|^ke^{t x}\le C_{k,\eta}\{e^{(t+\eta)x}+e^{(t-\eta)x}\},
$$
只要 $t\pm\eta$ 仍处于有效定义域内部，就可用[积分号下微分（Differentiation under the integral sign）](Differentiation-under-integral.md)证明。零附近相同的矩母函数唯一确定概率分布。

## 指数尾界

对 $t>0$ 且 $M_X(t)<\infty$，Markov 不等式给出
$$
P(X\ge x)\le e^{-tx}M_X(t).
$$
可以对允许的 $t$ 取下确界。独立和满足 $M_{X+Y}(t)=M_X(t)M_Y(t)$；取对数后得到可加的[累积量生成函数（Cumulant generating function）](Cumulant.md)，从而导向[大偏差（Large deviations）](Large-deviations.md)。

**注**：所有代数阶矩有限不保证矩母函数在零附近存在。若 $Z\sim N(0,1)$、$X=e^Z$，则 $\mathbb EX^k=e^{k^2/2}$ 对每个 $k$ 有限，但任意 $t>0$ 时 $\mathbb Ee^{tX}=\infty$。因此不能只凭矩逐项有限就把幂级数与期望交换。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §2.7。

[^2]: Bing-Yi Jing, Advanced Probability Theory, 讲义, July 2012. §11.6。
