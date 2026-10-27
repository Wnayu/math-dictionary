---
title: "带跳 Itô 公式（Itô formula with jumps）"
aliases: ["带跳Itô公式", "Ito formula with jumps", "跳跃修正项", "Jump correction"]
type: "theorem"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



带跳 Itô 公式保留连续部分的二阶项，并对每次实际跳跃加入完整的非线性差。把跳跃只当作 Brownian 微分的二阶修正，会丢失高阶跳幅项。

## Lévy 型过程的公式

在通常滤过下，设实过程
$$
X_t=X_0+\int_0^ta_sds+\int_0^t\sigma_s dB_s+\int_{(0,t]\times\{|z|<1\}}H(s,z)\widetilde N(ds,dz)+\int_{(0,t]\times\{|z|\ge1\}}K(s,z)N(ds,dz).
$$
其中 $B$ 是 Brownian 运动，$N$ 是相容的 Poisson 随机测度，强度为 $ds\nu(dz)$；各系数可预测，对每个 $T<\infty$ 几乎必然有 $\int_0^T(|a_s|+\sigma_s^2+\int_{|z|<1}|H(s,z)|^2\nu(dz))ds<\infty$。另假设小跳系数在紧时间区间和 $|z|<1$ 上局部有界，$K$ 为有限值可测系数；大跳积分是有限和。[^1]

对 $f\in C^2(\mathbb R)$，即具有连续一、二阶导数的函数，
$$
\begin{aligned}
f(X_t)-f(X_0)={}&\int_0^t f'(X_{s-})\,dX_s+\frac12\int_0^t f''(X_{s-})\sigma_s^2ds\\
&+\sum_{0<s\le t}\bigl[f(X_s)-f(X_{s-})-f'(X_{s-})\Delta X_s\bigr].
\end{aligned}
$$
$X_{s-}$ 和 $\Delta X_s$ 见[随机过程（Stochastic process）](Stochastic-process.md)。$\int f'(X_-)dX$ 按上述四项分别积分；补偿项使用[补偿 Poisson 积分（Compensated Poisson integral）](Compensated-Poisson-integral.md)。连续二次变差只有 $\int\sigma_s^2ds$，不能把整个含跳二次变差再放入这里而重复计数。

> [!proof]- 有限跳情形与一般证明思路
> 先把小跳截断到远离零点的有限强度区域。在相邻跳时之间使用[连续 Itô 公式（Itô formula）](Ito-formula.md)；在跳时 $s$，左侧的真实增量为 $f(X_s)-f(X_{s-})$，而一阶积分已计入 $f'(X_{s-})\Delta X_s$，二者之差正是显示的跳跃修正。对各区间和跳时相加得到有限跳公式。一般情形先停住过程及系数，使所需导数与积分受控，再令截断趋零；Taylor 余项由常数乘 $|H|^2$ 控制，随机积分由局部平方可积估计收敛。完整截断极限论证见 Applebaum 定理4.4.7，本段对无限活动部分给的是证明思路。

## 补偿项的展开

将小跳修正与原积分合并后，小跳部分为
$$
\begin{aligned}
&\int_0^t\int_{|z|<1}[f(X_{s-}+H)-f(X_{s-})]\widetilde N(ds,dz)\\
&+\int_0^t\int_{|z|<1}[f(X_{s-}+H)-f(X_{s-})-f'(X_{s-})H]\nu(dz)ds.
\end{aligned}
$$
第二行是由补偿产生的漂移项，是[Lévy 生成元（Generator of a Lévy process）](Levy-generator.md)中的非局部积分来源。

## Poisson 平方的例

取 $X=N$、$f(x)=x^2$，每次跳幅为 $1$，连续二次变差为零。因此
$$
N_t^2=2\int_0^tN_{s-}\,dN_s+N_t.
$$
最后的 $N_t$ 是跳幅平方和。若套用没有跳修正的链式法则，就会漏掉这一整项。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §4.4，定理4.4.7及证明；本条先限于源中Lévy型积分，不将其证明冒充一般半鞅版本。
