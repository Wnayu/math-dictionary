---
title: "Lévy–Itô 分解（Lévy–Itô decomposition）"
aliases: ["Lévy–Itô分解", "Levy-Ito decomposition"]
type: "theorem"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Lévy–Itô 分解把每个 Lévy 过程拆成确定性漂移、连续高斯噪声、补偿小跳和有限次数的大跳。分解中的补偿方式与特征指数的截断一致。

## 命题

设 $L$ 的[Lévy 三元组（Lévy triplet）](Levy-Khintchine-formula.md)为 $(b,A,\nu)$，截断采用 $z1_{\{|z|<1\}}$。可选择协方差为 $tA$ 的 Brownian 运动 $B_A$ 和与之独立、强度为 $ds\nu(dz)$ 的 Poisson 随机测度 $N$，使
$$
L_t=bt+B_A(t)+\int_{(0,t]\times\{0<|z|<1\}}z\widetilde N(ds,dz)+\int_{(0,t]\times\{|z|\ge1\}}zN(ds,dz).
$$
前一积分按[补偿 Poisson 积分（Compensated Poisson integral）](Compensated-Poisson-integral.md)定义，后一积分在有限时间内是几乎必然有限项的跳跃和。$N$ 可取过程的实际跳跃计数测度。[^1]

## 小跳极限的准确含义

令 $M_t^{(\varepsilon)}=\int_{(0,t]\times\{\varepsilon\le|z|<1\}}z\widetilde N(ds,dz)$。对每个有限 $T$，它在平方可积极大范数中收敛，即存在 $M$ 使 $E\sup_{t\le T}|M_t^{(\varepsilon)}-M_t|^2\to0$。特别地，紧时间区间上一致依概率收敛，并可沿适当序列取得几乎必然一致收敛。

> [!proof]- 小跳部分的构造
> 当 $0<\delta<\varepsilon<1$，补偿积分的等距及[Doob 极大不等式（Doob maximal inequality）](Doob-maximal-inequality.md)给出
> $$
> E\sup_{t\le T}|M_t^{(\delta)}-M_t^{(\varepsilon)}|^2\le4T\int_{\delta\le|z|<\varepsilon}|z|^2\nu(dz).
> $$
> 右侧随 $\varepsilon\downarrow0$ 趋零，因 $\nu$ 满足 Lévy 二阶小跳条件。故得到平方可积鞅极限及其 càdlàg 版本。大跳区域的强度有限，不需对跳幅加矩条件就能逐路径求有限和。给定三元组时将上述各项独立组合，计算其特征函数即得所需过程。对于一个已给定 Lévy 过程，证明其扣去跳跃项后的连续独立增量部分必为高斯，是分解定理的另一关键步骤；完整论证见所引第2.4节，本块不把这一识别步骤当作已证明。

## 漂移不等于均值

小跳补偿项均值为零，但大跳项可能没有一阶矩。因此 $b$ 总是三元组参数，却不总能写成 $EL_1$。若大跳一阶可积，则 $EL_t=t(b+\int_{|z|\ge1}z\nu(dz))$。

**注**：只要求 $\int_{|z|<1}|z|^2\nu(dz)<\infty$，并不保证无补偿小跳和绝对收敛。是否可以去掉小跳补偿，见[Lévy 过程的路径变差（Path variation of Lévy processes）](Levy-path-variation.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §2.4，特别是定理2.4.16及推论2.4.20。
