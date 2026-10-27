---
title: "Slutsky 定理（Slutsky theorem）"
aliases: ["Slutsky 定理", "Slutsky theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Slutsky 定理允许把依概率趋于常数的误差、尺度或中心化项代入分布极限。[^1][^2]

## 定理

设同一概率空间上的实值变量满足 $X_n\Rightarrow X$、$Y_n\xrightarrow Pc$，其中 $c$ 为常数。则
$$
(X_n,Y_n)\Rightarrow(X,c),\qquad X_n+Y_n\Rightarrow X+c,
\qquad X_nY_n\Rightarrow cX.
$$
若 $c\ne0$，且 $Y_n=0$ 时对比值作任意可测定义，则 $X_n/Y_n\Rightarrow X/c$。不要求 $X_n,Y_n$ 独立。

> [!proof]- 证明
> 由 $X_n\Rightarrow X$，$X_n$ 的分布族紧。对任意有界连续 $f:\mathbb R^2\to\mathbb R$，在紧矩形 $[-M,M]\times[c-1,c+1]$ 上一致连续。因此给定 $\varepsilon>0$，可先选 $M$ 控制 $P(|X_n|>M)$，再选 $\delta$ 控制当 $|Y_n-c|\le\delta$ 时的函数差。于是
> $$
> |\mathbb Ef(X_n,Y_n)-\mathbb Ef(X_n,c)|
> \le\varepsilon+2\|f\|_\infty\{P(|X_n|>M)+P(|Y_n-c|>\delta)\}
> \to\text{任意小}.
> $$
> 而 $x\mapsto f(x,c)$ 有界连续，故 $\mathbb Ef(X_n,c)\to\mathbb Ef(X,c)$，得联合弱收敛。加法、乘法连续，除法在 $y\ne0$ 连续，用连续映射定理即可。

## 常数极限为什么关键

若仅有 $X_n\Rightarrow X$、$Y_n\Rightarrow Y$ 而 $Y$ 非常数，边缘分布不足以决定联合极限。取标准正态 $Z$，令 $X_n=Z$、$Y_n=(-1)^nZ$；两列边缘分布都不变，但 $X_n+Y_n$ 在 $2Z$ 与 $0$ 间交替，没有统一的分布极限。

若 $a_n>0$、$R_n/a_n\xrightarrow P0$，则称 $R_n=o_P(a_n)$。若 $Z_n/a_n\Rightarrow Z$，本定理给出 $(Z_n+R_n)/a_n\Rightarrow Z$；这里必须比较同一个归一化 $a_n$。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Exercises 3.2.13–3.2.14；Theorem 3.10.1(vi)。

[^2]: Bing-Yi Jing, *Advanced Probability Theory*, lecture notes, July 2012，Theorem 6.6.4。


