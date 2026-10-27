---
title: "Brownian 桥（Brownian bridge）"
aliases: ["Brownian 桥", "Brownian bridge", "布朗桥", "标准Brownian桥", "Standard Brownian bridge"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Brownian 桥是固定两个端点的高斯路径模型。它与把 Brownian 运动直接条件于一个概率为零的事件有关，但必须通过条件分布的版本严格解释。[^1][^2]

## 定义

标准 Brownian 桥是 $[0,1]$ 上的中心连续[高斯过程（Gaussian process）](Gaussian-process.md) $\beta$，协方差
$$
\mathbb E[\beta_s\beta_t]=\min(s,t)-st.
$$
特别地 $\beta_0=\beta_1=0$ 几乎必然。若 $B$ 为标准 Brownian 运动，定义 $\beta_t=B_t-tB_1$ 就得到该过程。

> [!proof]- 协方差及独立性的证明
> 线性变换保持联合高斯，且
> $$
> \operatorname{Cov}(B_s-sB_1,B_t-tB_1)
> =\min(s,t)-st-st+st=\min(s,t)-st.
> $$
> 又 $\operatorname{Cov}(\beta_t,B_1)=t-t=0$；联合高斯的零交叉协方差给出任意有限桥坐标与 $B_1$ 独立，再由柱集生成可测结构推出整个连续桥与 $B_1$ 独立。

## 条件路径与一般端点

分解 $B_t=\beta_t+tB_1$ 表明：可以选择给定 $B_1=y$ 的[正则条件分布（Regular conditional distribution）](Regular-conditional-distribution.md)，使路径分布等于 $(\beta_t+ty)_{0\le t\le1}$ 的分布。这才是“Brownian 运动条件于 $B_1=0$”的明确含义，不是用 $P(A\cap\{B_1=0\})/P(B_1=0)$ 定义。

在 $[0,T]$ 上从 $x$ 到 $y$ 的桥可写为
$$
x+\frac tT(y-x)+\sqrt T\,\beta_{t/T}.
$$
其均值为线性插值，协方差为 $\min(s,t)-st/T$。

## 与独立增量的区别

桥的增量通常不独立。例如 $0<s<t<1$ 时
$$
\operatorname{Cov}(\beta_s,\beta_t-\beta_s)=-s(t-s)\ne0.
$$
桥终点被固定，导致早期偏移与后续修正相联系。它是经验分布过程极限中的基本对象，见[Donsker 定理（Donsker theorem）](Donsker-theorem.md)所述路径收敛框架。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Exercise 2.27。

[^2]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，第103页，未编号 Exercise “Brownian bridges”。
