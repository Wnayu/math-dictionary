---
title: "Cameron–Martin 定理（Cameron–Martin theorem）"
aliases:
  - "Cameron–Martin 定理"
  - "Cameron–Martin theorem"
  - "Cameron–Martin space"
  - "Cameron–Martin 空间"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Cameron–Martin 公式给出 Brownian 路径加上一个确定性平移后，其分布相对于原 Wiener 测度的密度。

## 陈述

固定 $T<\infty$，$W$ 为连续路径空间 $C_0([0,T];\mathbb R^d)$ 上的 [Wiener 测度（Wiener measure）](Brownian-motion.md)，即标准 Brownian 运动的分布。定义 Cameron–Martin 空间
$$
\mathcal H_T=\{h:h(0)=0,\ h\text{ 绝对连续},\ \dot h\in L^2([0,T];\mathbb R^d)\},
\qquad \|h\|_{\mathcal H_T}^2=\int_0^T|\dot h(s)|^2ds.
$$
对 $h\in\mathcal H_T$ 及非负 Borel 可测泛函 $F$，
$$
E[F(B+h)]=E\left[F(B)\exp\!\left(\int_0^T\dot h(s)\cdot dB_s-\frac12\|h\|_{\mathcal H_T}^2\right)\right].
$$
因此平移后的路径分布与 $W$ 等价。这里的积分是确定性 $L^2$ 被积函数的 [Itô 积分（Itô integral）](Stochastic-integral.md)，不能把一般 Brownian 路径当可微函数积分。[^1]

> [!proof]- 证明
> 取 $\theta_s=\dot h(s)$，其平方积分是有限确定数，故 [Novikov 条件（Novikov condition）](Novikov-condition.md)成立。以公式中的指数为密度定义 $Q$。由 [Girsanov 定理（Girsanov theorem）](Girsanov-theorem.md)，$B-h$ 在 $Q$ 下为标准 Brownian 运动。因此 $E_QF(B)=E_PF(B+h)$；把左边按密度写回 $P$ 就得到所述公式。密度严格为正，故两分布相互绝对连续。

## 线性平移与适用条件

取 $h(t)=vt$，密度简化为 $\exp(v\cdot B_T-|v|^2T/2)$。这说明在有限时间上，常漂移 Brownian 运动与无漂移 Brownian 运动具有等价的路径分布。

**注**：本条证明的是 $h\in\mathcal H_T$ 的平移公式，不把“任意连续平移”当成定理假设。无限时域的等价性还需 $\int_0^\infty|\dot h|^2<\infty$；常数非零漂移不能由有限时域结论直接推成无限时域等价。Lyons 的讲义给出 Gaussian 方法及换测度方法两种组织方式。[^2]

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Proposition 5.24。

[^2]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，Proposition 5.24；第19、80–81页。
