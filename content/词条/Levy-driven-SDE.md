---
title: "Lévy 噪声驱动的随机微分方程（Lévy-driven stochastic differential equation）"
aliases: ["Lévy驱动SDE", "Lévy-driven SDE", "跳跃随机微分方程", "Jump stochastic differential equation"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



跳跃随机微分方程既有连续演化，又在随机时刻更新状态。跳幅系数在跳前状态求值，以保证所用信息可预测。

## 定义

设 $B$ 为 $m$ 维 Brownian 运动，$N$ 为与之独立、强度 $dt\nu(dz)$ 的 Poisson 随机测度。考虑 $\mathbb R^d$ 值过程
$$
\begin{aligned}
X_t=X_0&+\int_0^tb(X_{s-})ds+\int_0^t\sigma(X_{s-})dB_s\\
&+\int_{(0,t]\times\{|z|<1\}}F(X_{s-},z)\widetilde N(ds,dz)
+\int_{(0,t]\times\{|z|\ge1\}}G(X_{s-},z)N(ds,dz).
\end{aligned}
$$
上述 Brownian 运动和 Poisson 随机测度均相对于给定滤过相容：未来噪声增量独立于当前信息；仅在某个空间上独立而任意扩大滤过不够。

这里 $b:\mathbb R^d\to\mathbb R^d$，$\sigma:\mathbb R^d\to\mathbb R^{d\times m}$，$F,G$ 为相应 Borel 可测跳幅映射；$X_0$ 为 $\mathcal F_0$-可测。解是使上述积分有定义且等式作为过程成立的适应 càdlàg 过程。[强解、弱解与路径唯一性（Strong and weak solutions）](Strong-and-weak-solutions.md)仍需分别说明。[^1]

## 全局 Lipschitz 的存在唯一性

假设存在常数 $C$，对所有 $x,y$，
$$
|b(x)-b(y)|^2+\|\sigma(x)-\sigma(y)\|_{\mathrm{HS}}^2+\int_{|z|<1}|F(x,z)-F(y,z)|^2\nu(dz)\le C|x-y|^2,
$$
以及
$$
|b(x)|^2+\|\sigma(x)\|_{\mathrm{HS}}^2+\int_{|z|<1}|F(x,z)|^2\nu(dz)\le C(1+|x|^2).
$$
矩阵范数 $\|M\|_{\mathrm{HS}}^2=\sum_{i,j}|M_{ij}|^2$。若先去掉大跳项且 $E|X_0|^2<\infty$，则存在路径唯一的全局强解，并有 $E\sup_{s\le T}|X_s|^2<\infty$。一般有限值初始变量可通过局部化处理。

> [!proof]- 主要估计与构造
> 令 $X^{(0)}_t=X_0$，将第 $n+1$ 次迭代右端的状态替换为 $X^{(n)}$。由确定性积分的 Cauchy–Schwarz 估计、Brownian 积分等距、[补偿 Poisson 积分等距（Compensated Poisson integral isometry）](Compensated-Poisson-integral.md)和 Doob 不等式，对固定 $T$ 有
> $$
> u_{n+1}(t):=E\sup_{r\le t}|X_r^{(n+1)}-X_r^{(n)}|^2\le C_T\int_0^tu_n(s)ds.
> $$
> 线性增长给首个差的有限上界，迭代得到 $u_n(T)\le K_T(C_TT)^n/n!$。其平方根可求和，所以迭代在 $L^2$ 极大范数收敛；选取几乎必然一致收敛子列得到 càdlàg 版本。各积分按相应等距或确定性估计传到极限，故满足方程。对同噪声同初值的两解，差也满足 $u(t)\le C_T\int_0^tu(s)ds$，由[Gronwall 不等式（Gronwall inequality）](Gronwall-inequality.md)得到不可区分。增长估计与相同方法给解的有限区间二阶极大矩。

## 大跳的交错构造

由于 $\nu(|z|\ge1)<\infty$，有限时间内的大跳只有有限次。每两次大跳之间解上面的连续与小跳方程，到标记为 $z$ 的大跳时更新 $X_s=X_{s-}+G(X_{s-},z)$，再继续求解。在上述小跳方程全局可解且 $G$ 为有限值 Borel 映射时，这给出路径唯一的 càdlàg 强解。此构造不自动保证全解二阶矩有限；大跳尾部还可能导致矩发散。

**注**：仅局部 Lipschitz 条件通常只保证爆炸时刻之前的解。若要全局结论，还需线性增长或其他防爆炸条件。把 $X_{s-}$ 改为 $X_s$ 也会改变跳时更新方程及积分含义。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §6.2，定理6.2.3及大跳interlacing构造；条件与估计按本条记号重述。
