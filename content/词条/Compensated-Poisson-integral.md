---
title: "补偿 Poisson 积分（Compensated Poisson integral）"
aliases: ["补偿Poisson积分", "Compensated Poisson integral", "补偿Poisson随机测度", "Compensated Poisson random measure"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



补偿从跳跃计数中减去其可预测平均，使平方可积的跳跃和成为鞅。无限活动的小跳通常只有补偿后的截断和才收敛。

## 定义

在满足通常条件的[滤过（Filtration）](Filtration.md)概率空间上，设 $N(ds,dz)$ 是强度 $ds\nu(dz)$ 的[Poisson 随机测度（Poisson random measure）](Poisson-random-measure.md)，其未来增量与过去信息独立。对 $\nu(B)<\infty$ 定义 $\widetilde N((0,t],B)=N((0,t]\times B)-t\nu(B)$。

设 $H(\omega,s,z)$ 关于可预测 σ-代数与标记空间 σ-代数的乘积可测，并满足
$$
E\int_0^T\int_E |H(s,z)|^2\nu(dz)ds<\infty.
$$
则 $M_t=\int_{(0,t]\times E}H(s,z)\widetilde N(ds,dz)$ 定义为可预测简单函数积分的 $L^2$ 完备化。简单项 $\xi1_{(a,b]}(s)1_B(z)$ 中 $\xi$ 必须为有界 $\mathcal F_a$-可测，积分是 $\xi\widetilde N((a,b\wedge t],B)$（当 $t\le a$ 为零）。[^1]

## 等距与鞅性质

$M$ 是起点为零的平方可积 càdlàg [鞅（Martingale）](Martingale.md)，且
$$
EM_T=0,\qquad E|M_T|^2=E\int_0^T\int_E|H|^2\nu(dz)ds.
$$

> [!proof]- 简单函数等距与延拓
> 将时间和标记分成不交小块。每块的补偿计数对块开始时的信息条件均值为零，条件二阶矩为块的强度。不同时间块的交叉项经条件期望为零，同一时间段中不交标记块的交叉项由独立散布性质为零。因此平方展开后只剩 $E\int|H|^2ds\nu$。简单函数在此 $L^2$ 空间稠密，所以等距保证积分唯一延拓。Doob 的 $L^2$ 极大不等式进一步给出 $E\sup_{t\le T}|M_t^{(n)}-M_t^{(m)}|^2\le4E\int|H_n-H_m|^2ds\nu$，从而得到一致时间控制和 càdlàg 版本；条件期望在 $L^2$ 中连续，鞅性质保留。

实值积分的[可预测二次变差（Predictable quadratic variation）](Predictable-quadratic-variation.md)为 $\langle M\rangle_t=\int_0^t\int H^2\nu(dz)ds$；[二次变差（Quadratic variation）](Quadratic-variation.md)则为 $[M]_t=\int_0^t\int H^2N(ds,dz)$。前者通常连续，后者累加实际跳跃平方。

## 局部积分与有限截断

若只有 $\int_0^T\int H^2\nu(dz)ds<\infty$ 几乎必然，可由停时局部化构造[局部鞅（Local martingale）](Local-martingale.md)，不自动得到真正的平方可积鞅。对有限强度截断及可积函数，积分等于 $\int H\,dN-\int H\,ds\nu$；无限强度时这两项可能各自发散，不能先分别定义再写作“无穷减无穷”。

## 为什么必须取跳前值

若 $N_t$ 为单位强度 Poisson 过程，按逐跳求和解释 $\int N_s\,dN_s$，则
$$
\int_0^tN_s\,d(N_s-s)-\int_0^tN_{s-}\,d(N_s-s)=N_t.
$$
因为每次单位跳跃贡献 $\Delta N_s=1$，而跳时集合的 Lebesgue 测度为零。第二个积分的被积函数可预测，第一种跳后取值会多出非零均值项；所以“适应”不能无条件替代[可预测性（Predictability）](Predictable-process.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §§4.2、4.3.2，尤其练习4.3.3与定理4.3.4。
