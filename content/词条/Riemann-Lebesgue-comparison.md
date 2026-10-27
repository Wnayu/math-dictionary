---
title: "Riemann 与 Lebesgue 积分（Riemann and Lebesgue integrals）"
aliases:
  - "Riemann 与 Lebesgue 积分"
  - "Riemann and Lebesgue integrals"
  - "Lebesgue 判别准则"
  - "Darboux上下和"
  - "Darboux sums"
  - "点振幅"
  - "Oscillation"
  - "反常积分"
  - "Improper integral"
  - "条件收敛"
  - "Conditional convergence"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Lebesgue 积分延伸了有界闭区间上的 Riemann 积分，并精确解释了 Riemann 积分对不连续点的限制。讨论反常积分时，则必须重新区分绝对可积与条件收敛。

## 定义

对有界实函数 $f:[a,b]\to\mathbb R$（$a<b$），分割（partition of an interval）是有限严格递增点列 $P=(a=x_0<x_1<\cdots<x_n=b)$。令
$$
m_j=\inf_{x\in[x_{j-1},x_j]}f(x),\qquad
M_j=\sup_{x\in[x_{j-1},x_j]}f(x).
$$
Darboux 下和、上和（lower and upper Darboux sums）分别为
$$
L(f,P)=\sum_{j=1}^n m_j(x_j-x_{j-1}),\qquad
U(f,P)=\sum_{j=1}^n M_j(x_j-x_{j-1}).
$$
如果 $\sup_P L(f,P)=\inf_P U(f,P)$，称 $f$ Riemann 可积（Riemann integrable），共同值就是其 Riemann 积分。等价地，对每个 $\varepsilon>0$，存在分割 $P$ 使 $U(f,P)-L(f,P)<\varepsilon$。细分（refinement）指在原分割中增加点而保留原有点；下和不减，上和不增。对应的下、上阶梯函数在各小区间内部取 $m_j,M_j$，在分割点取 $f$ 的值；分割点不影响积分。[阶梯函数（step function）](Simple-function.md)的定义见基础词条。

$f$ 在点 $x$ 的振幅（oscillation）定义为
$$
\omega_f(x)=\inf_{\delta>0}
\left(\sup_{y\in[a,b]\cap(x-\delta,x+\delta)}f(y)
-\inf_{y\in[a,b]\cap(x-\delta,x+\delta)}f(y)\right).
$$
它为零当且仅当 $f$ 在 $x$ 连续（端点采用区间的相对拓扑）；[连续性（continuity）](Metric-space.md)使用明确的 $\varepsilon$–$\delta$ 条件。下文的“振幅至少为 $\eta$”就是集合 $\{x:\omega_f(x)\ge\eta\}$。

## Lebesgue 判别准则（Lebesgue criterion）

设 $f:[a,b]\to\mathbb R$ 有界。则 $f$ Riemann 可积当且仅当其不连续点集的 Lebesgue 测度为零。在这种情形下，$f$ Lebesgue 可测，两种积分相等。[^1]

> [!proof]- 证明思路
> 对分割 $P$ 构造下、上阶梯函数 $s_P\le f\le t_P$。若 Riemann 可积，可取递增细分使两者积分差趋于零；单调极限与积分零判别给出上下极限几乎处处相等，继而推出可测性、积分相等和几乎处处连续。
>
> 反向用振幅：对每个 $\eta>0$，振幅至少为 $\eta$ 的点形成闭集。若不连续点集为零集，这些闭集可以用总长度任意小的有限区间覆盖；其余紧集上用局部小振幅选取有限分割，使上、下和之差任意小。

## Riemann 可积与 Lebesgue 可积的关系

用 $1_E$ 表示[指示函数（indicator function）](Measurable-function.md)，则 $1_{\mathbb Q\cap[a,b]}$ 的 Lebesgue 积分为零，但处处不连续，所以不 Riemann 可积。单调有界函数的不连续点至多可数，故 Riemann 可积，两种积分一致。

## 反常积分与绝对可积性

若 $f$ 在每个有限区间 $[a,R]$ 上 Riemann 可积，则反常积分（improper integral）
$$
\int_a^\infty f(x)\,dx:=\lim_{R\to\infty}\int_a^R f(x)\,dx
$$
收敛，是指右侧存在有限实数极限；有限端点处的奇性则以相应单侧极限定义。若 $\int_a^\infty |f(x)|\,dx<\infty$，称为绝对收敛；若原积分收敛而绝对值积分发散，称为条件收敛（conditional convergence）。两端均无界时须分别考察两侧反常积分，不用对称截断极限替代。


**注**：以下 $dx$ 表示对一维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)积分。函数 $\sin x/x$ 在 $(1,\infty)$ 的反常 Riemann 积分收敛，但 $\int_1^\infty|\sin x|/x\,dx=\infty$，所以它不 Lebesgue 可积。不能把反常积分的条件收敛自动视为有限 Lebesgue 积分。绝对可积时，借助控制收敛，截断区间上的积分才可安全趋于整个区域的积分。[^2]

## 相关词条

[Lebesgue积分（Lebesgue integral）](Lebesgue-integral.md) · [零集（Null set）](Null-set.md) · [Lusin定理（Lusin theorem）](Lusin-theorem.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Theorem 9.1；第77–78页。

[^2]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，第2章 Exercise 59。
