---
title: "Itô 公式（Itô formula）"
aliases:
  - "Itô 公式"
  - "Itô formula"
  - "Itô lemma"
  - "伊藤公式"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Itô 公式是连续半鞅的变量替换公式。与普通链式法则相比，它增加由二次协变差决定的二阶项。

## 陈述

设 $X=(X^1,\ldots,X^d)$ 的各分量为连续[半鞅（semimartingales）](Semimartingale.md)，$f\in C^2(\mathbb R^d)$。则几乎必然，对所有 $t\ge0$ 同时有
$$
f(X_t)=f(X_0)+\sum_i\int_0^t\partial_i f(X_s)\,dX_s^i
+\frac12\sum_{i,j}\int_0^t\partial_{ij}f(X_s)\,d[X^i,X^j]_s.
$$
$[X^i,X^j]$ 是[二次协变差（quadratic covariation）](Quadratic-covariation.md)。局部化使导数在所需紧集上有界，故不要求 $f$ 或其导数全局有界。[^1]

若 $f=f(t,x)$ 属于 $C^{1,2}$，即一次连续时间导数与二次连续空间导数存在，则右边另加 $\int_0^t\partial_s f(s,X_s)ds$，并把空间导数改在 $(s,X_s)$ 处取值。[^1][^2]

> [!proof]- 证明：一维二阶余项的控制
> 固定有限时域；若 $X_0$ 只是几乎必然有限，先在 $\mathcal F_0$-可测事件 $\{|X_0|\le N\}$ 上论证，最后令 $N\uparrow\infty$。再停止使 $X$ 的取值、局部鞅二次变差和有限变差部分总变差有界。在确定性分割上，Taylor 展开给出
> $$
> f(X_t)-f(X_0)=\sum_i f'(X_{t_i})\Delta X_i+\tfrac12\sum_i f''(X_{t_i})(\Delta X_i)^2+R_n.
> $$
> 在所取紧集上，$f''$ 一致连续。设其连续模为 $\omega(\delta)$，则
> $$
> |R_n|\le\tfrac12\omega\!\left(\max_i|\Delta X_i|\right)\sum_i(\Delta X_i)^2.
> $$
> 连续路径使最大增量趋零；二次变差近似使平方和依概率有界，因此 $R_n\to0$ 依概率。第一和趋向随机积分。第二和的加权二次变差极限为 $\int f''(X_s)d[X]_s$：可先把连续权重按较粗分割逼近为阶梯，再用无权二次变差极限，最后控制权重误差。故固定 $t$ 的等式成立。两端过程连续，先在可数有理时刻取共同零集，再延伸到所有时刻。最后解除停止。多维情形使用多元 Taylor 展开及同样的协变差近似；时间变量的有限变差部分不产生二次修正。

## Brownian 运动的例子

若 $B_0=0$，取 $f(x)=x^2$，得到
$$
B_t^2=2\int_0^tB_s\,dB_s+t.
$$
取 $f(t,x)=\exp(\theta x-\theta^2t/2)$，漂移项相消，得到[指数鞅（exponential martingale）](Stochastic-exponential.md)。

**注**：连续性是本版公式的假设；带跳跃过程必须补上跳跃余项，见[含跳跃的 Itô 公式（Itô formula with jumps）](Jump-Ito-formula.md)。$|x|$ 不是 $C^2$，对应的修正项由 [Tanaka 公式（Tanaka formula）](Tanaka-formula.md)与局部时描述。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Theorem 5.10；第117页。

[^2]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，Theorem 5.10；第71–72页。
