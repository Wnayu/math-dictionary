---
title: "转移核（Transition kernel）"
aliases: ["转移核", "Transition kernel", "概率核", "Probability kernel", "次概率核", "Subprobability kernel"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



转移核把当前位置或条件参数映射为一个概率分布，同时保留参数上的可测性。它是一般状态空间条件分布和 Markov 转移的共同语言。[^1][^2]

## 定义

从 $(E,\mathcal E)$ 到 $(F,\mathcal H)$ 的概率核（probability kernel）是映射 $K:E\times\mathcal H\to[0,1]$，满足：对固定 $x$，$A\mapsto K(x,A)$ 是概率测度；对固定 $A$，$x\mapsto K(x,A)$ 是 $\mathcal E$-可测函数。当 $E=F$ 时常称转移核。总质量允许不超过 $1$ 时称次概率核（subprobability kernel），总质量缺损可解释为被杀死的概率。

写 $K(x,dy)$ 是把 $A\mapsto K(x,A)$ 当作积分测度，不是关于 $y$ 的普通函数。对有界可测 $f$ 和概率测度 $\mu$，定义
$$
Kf(x)=\int_Ff(y)K(x,dy),\qquad
(\mu K)(A)=\int_EK(x,A)\mu(dx).
$$
$Kf$ 可测；先对指标函数核验，再用简单函数逼近与单调收敛推广。

## 核的复合

若 $K:E\to F$、$L:F\to G$ 是概率核，则
$$
(KL)(x,A)=\int_F L(y,A)K(x,dy)
$$
也是概率核，并有 $(KL)f=K(Lf)$。这里先按照 $K$ 从 $x$ 到 $y$，再按照 $L$ 转移；运算一般不交换。

> [!proof]- 证明
> 对固定 $A$，$L(\cdot,A)$ 可测，所以积分对 $x$ 可测。对两两不交的 $A_n$，由非负单调收敛将可数和移出积分，得到可列可加性；总质量为 $1$。算子等式先对指标函数成立，再通过积分逼近推广。

## 例

有限或可数状态空间上的核是随机矩阵 $p(x,y)\ge0$、$\sum_yp(x,y)=1$。确定映射 $T:E\to E$ 产生 $K(x,A)=1_A(Tx)$。有密度的核形如 $K(x,dy)=k(x,y)\nu(dy)$，须检查联合可测性及 $\int k(x,y)\nu(dy)=1$。

[正则条件分布（Regular conditional distribution）](Regular-conditional-distribution.md)给出概率核的另一用途；[Chapman–Kolmogorov 方程（Chapman–Kolmogorov equations）](Chapman-Kolmogorov-equations.md)则描述转移核随时间的复合。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，第151–152页。

[^2]: Chen Wang，*Notes on GTM 274*，个人笔记，Definition 1.1、Remark 1.2。
