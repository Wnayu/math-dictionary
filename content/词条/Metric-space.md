---
title: "度量空间（Metric space）"
aliases:
  - "度量空间"
  - "Metric space"
  - "度量"
  - "Cauchy序列"
  - "完备度量空间"
  - "可分空间"
  - "一致连续"
  - "Lipschitz连续"
  - "逐点收敛"
  - "一致收敛"
  - "直径"
  - "Metric"
  - "Cauchy sequence"
  - "Complete metric space"
  - "Separable space"
  - "Uniform continuity"
  - "Lipschitz continuity"
  - "Pointwise convergence"
  - "Uniform convergence"
  - "Diameter"
type: concept
tags: [measure-theory]
draft: false
publish: true
status: needs-review
verified: false
---



度量为两点指定距离，从而给出收敛、连续、Cauchy 序列和完备性的精确定义。[Lp 空间（Lp space）](Lp-space.md)的完备性、[几乎一致收敛（Almost uniform convergence）](Almost-uniform-convergence.md)中的一致收敛，都使用这一层基础语言。[^1]

## 定义

集合 $X$ 上的度量（metric）是函数 $d:X\times X\to[0,\infty)$，对任意 $x,y,z\in X$ 满足
$$
d(x,y)=0\iff x=y,\qquad d(x,y)=d(y,x),\qquad
d(x,z)\le d(x,y)+d(y,z).
$$
最后一个条件称三角不等式（triangle inequality）。$(X,d)$ 称为度量空间（metric space）。

中心为 $x$、半径 $r>0$ 的开球与闭球分别为
$$
B_d(x,r)=\{y:d(x,y)<r\},\qquad
\overline B_d(x,r)=\{y:d(x,y)\le r\}.
$$
开球组成一个[拓扑基（Topological base）](Topological-space.md)：$U$ 开当且仅当每个 $x\in U$ 都有 $r>0$ 使 $B_d(x,r)\subseteq U$。在欧氏空间中，$d(x,y)=|x-y|=(\sum_{j=1}^n|x_j-y_j|^2)^{1/2}$，常省去下标 $d$。

**注**：一般度量空间中，闭球不一定等于开球的闭包；例如只有两点、不同点间距离为 $1$ 的空间，半径为 $1$ 的开球是单点，闭球却是整个空间。

非空集合 $A$ 有界（bounded），指存在 $x_0\in X$ 和有限 $R$ 使 $d(x,x_0)\le R$ 对所有 $x\in A$ 成立；空集约定为有界集。非空集合的直径（diameter）为 $\operatorname{diam}A=\sup_{x,y\in A}d(x,y)$，允许为 $+\infty$；规定空集直径为 $0$。

## 收敛、Cauchy 序列与完备性

$x_n\to x$ 指对每个 $\varepsilon>0$，存在 $N$ 使所有 $n\ge N$ 满足 $d(x_n,x)<\varepsilon$。序列 $(x_n)$ 是 Cauchy 序列（Cauchy sequence），指
$$
\forall\varepsilon>0\ \exists N\ \forall m,n\ge N,
\qquad d(x_m,x_n)<\varepsilon.
$$
$X$ 完备（complete），指 $X$ 中每个 Cauchy 序列都收敛到 $X$ 中的一个点。例如 $\mathbb R$ 完备，$\mathbb Q$ 在通常距离下不完备：收敛到 $\sqrt2$ 的有理数列在 $\mathbb Q$ 中没有极限。

**注**：度量完备性与[测度完备性（Completeness of a measure）](Complete-measure.md)是不同概念；后者要求零测集的任意子集都可测，不是在谈 Cauchy 序列。

$X$ 可分（separable），指存在可数的[稠密子集（Dense subset）](Topological-space.md)。在度量空间中，这等价于存在可数拓扑基：可数稠密集的有理半径球给出一个基；反过来，从可数基的每个非空成员取一点即得到可数稠密集。一般拓扑空间中不能无条件使用这一等价关系。[^2]

## 连续、一致连续与 Lipschitz 连续

设 $f:(X,d_X)\to(Y,d_Y)$。$f$ 在 $x\in X$ 连续，指
$$
\forall\varepsilon>0\ \exists\delta>0\ \forall y\in X,
\quad d_X(x,y)<\delta\Longrightarrow d_Y(f(x),f(y))<\varepsilon.
$$
$f$ 连续指它在每一点连续，$\delta$ 可以依赖于该点。$f$ 一致连续（uniformly continuous），指
$$
\forall\varepsilon>0\ \exists\delta>0\ \forall x,y\in X,
\quad d_X(x,y)<\delta\Longrightarrow d_Y(f(x),f(y))<\varepsilon;
$$
此时同一个 $\delta$ 适用于全体 $x,y$。

$f$ 是 Lipschitz 连续的（Lipschitz continuous），指存在有限常数 $L\ge0$，使
$$
d_Y(f(x),f(y))\le Ld_X(x,y)\qquad(x,y\in X).
$$
这样的 $L$ 称为一个 Lipschitz 常数。Lipschitz 连续推出一致连续。紧区间上与[绝对连续函数（Absolutely continuous function）](Absolute-continuity-of-functions.md)的关系及逆命题的反例，见该专门词条。

## 函数列的逐点收敛与一致收敛

设 $f_n,f:E\to(Y,d)$。逐点收敛（pointwise convergence）指每个 $x\in E$ 都有 $d(f_n(x),f(x))\to0$，即
$$
\forall x\in E\ \forall\varepsilon>0\ \exists N=N(x,\varepsilon)
\ \forall n\ge N,\quad d(f_n(x),f(x))<\varepsilon.
$$
一致收敛（uniform convergence）指
$$
\forall\varepsilon>0\ \exists N=N(\varepsilon)
\ \forall n\ge N\ \forall x\in E,\quad d(f_n(x),f(x))<\varepsilon.
$$
等价地，$\sup_{x\in E}d(f_n(x),f(x))\to0$；对空集规定此处上确界为 $0$。一致收敛中的 $N$ 不依赖 $x$。例如 $f_n(x)=x^n$ 在 $[0,1)$ 上逐点收敛于 $0$，但误差上确界始终为 $1$，所以不一致收敛。

[几乎处处收敛（Almost everywhere convergence）](Almost-everywhere-convergence.md)允许在一个零测集上没有逐点收敛；[几乎一致收敛（Almost uniform convergence）](Almost-uniform-convergence.md)则允许先去掉任意小测度的例外集，再在其补集上一致收敛。两者所允许的例外与量词次序不同。

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. 第1章度量空间、连续性、Cauchy 序列与完备性；第10章收敛方式。
[^2]: Chen Wang, Notes on Real Analysis，个人笔记。第1章可数拓扑基说明；第2章度量结构与函数空间的说明。本卡补写相关预备术语的量词定义。

[测度论导航](../测度论导航.md) · [拓扑空间（Topological space）](Topological-space.md) · [赋范空间（Normed space）](Normed-space.md)
