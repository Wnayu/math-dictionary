---
title: "Girsanov 定理（Girsanov theorem）"
aliases:
  - "Girsanov 定理"
  - "Girsanov theorem"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Girsanov 定理说明，在用适当密度改变概率测度后，连续局部鞅会获得可计算的漂移修正；Brownian 运动的扩散结构保持不变。

## 陈述

固定 $T<\infty$。设 $B$ 是 $d$ 维标准 [Brownian 运动（Brownian motion）](Brownian-motion.md)，$\theta$ 是可预测的 $\mathbb R^d$ 值过程，$\int_0^T|\theta_s|^2ds<\infty$ 几乎必然。假定
$$
Z_t=\exp\!\left(\int_0^t\theta_s\cdot dB_s-\frac12\int_0^t|\theta_s|^2ds\right),\quad 0\le t\le T,
$$
是真鞅，$E_PZ_T=1$。在 $\mathcal F_T$ 上定义 $Q(A)=E_P[Z_T\mathbf1_A]$。则
$$
W_t=B_t-\int_0^t\theta_sds
$$
是 $Q$ 下相对于同一滤过的标准 Brownian 运动。$Z_T>0$ 还使 $P,Q$ 在 $\mathcal F_T$ 上等价。[^1]

更一般地，若 $Z=\mathcal E(L)$，$L_0=0$ 是连续局部鞅，且 $Z$ 为上述密度鞅，则每个连续 $P$-局部鞅 $M$ 对应一个连续 $Q$-局部鞅
$$
\widetilde M=M-[M,L].
$$

> [!proof]- 证明
> 先以 $M-M_0$ 代替 $M$，归约到 $M_0=0$；协变差不受这个替换影响。证明结束后加回 $\mathcal F_0$-可测的有限初值，按[局部鞅（local martingale）](Local-martingale.md)的约定即可恢复一般情形。
> 由 $dZ=Z\,dL$、[随机分部积分（stochastic integration by parts）](Stochastic-integration-by-parts.md)与协变差规则，
> $$
> d(Z\widetilde M)=\widetilde M\,dZ+Z\,dM-Z\,d[M,L]+d[Z,M]
> =\widetilde M\,dZ+Z\,dM,
> $$
> 因为 $d[Z,M]=Z\,d[L,M]$。取递增停时 $\tau_n$，使 $\widetilde M^{\tau_n}$ 有界，并将上式用于停止后的 $\widetilde M$。过程 $Z\widetilde M^{\tau_n}$ 仍是局部鞅：停止前的漂移相消，停止后只剩 $\widetilde M_{\tau_n}\,dZ$。又 $|Z\widetilde M^{\tau_n}|\le C_nZ$，而 $Z$ 是由可积终值封闭的鞅，所以该乘积具有一致可积的停止值族，从而是真鞅。由 Bayes 条件期望公式
> $$
> E_Q[Y\mid\mathcal F_s]=\frac{E_P[Z_tY\mid\mathcal F_s]}{Z_s},\qquad Y\in L^1(Q),\ Y\text{ 为 }\mathcal F_t\text{ 可测},
> $$
> 停止后的 $\widetilde M$ 为 $Q$-鞅；解除局部化给出一般局部鞅结论。对 $M=B^i$ 和 $L=\int\theta\cdot dB$，修正量为 $\int\theta^i ds$。有限变差修正不改变二次协变差，因此 $[W^i,W^j]_t=\delta_{ij}t$，再用 [Lévy 刻画（Lévy characterization）](Levy-characterization.md)得到 Brownian 性。

## 漂移的符号与适用时间

若 $P$ 下 $dX_t=b_tdt+\sigma_t dB_t$，则 $Q$ 下 $dX_t=(b_t+\sigma_t\theta_t)dt+\sigma_t dW_t$。要消除漂移，应选择满足 $\sigma_t\theta_t=-b_t$ 的过程，并核查密度条件。

**注**：本条结论限定在 $\mathcal F_T$。每个有限时域可换测度，并不自动给出无限时域上的等价性。[Novikov 条件（Novikov condition）](Novikov-condition.md)可保证有限时域密度是真鞅；只有局部鞅性不足以定义总质量为 $1$ 的 $Q$。Lyons 讲义的相关附录也使用先检查密度、再改写漂移的顺序。[^2]

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §5.5 Theorem 5.22；§5.6 的漂移变换。

[^2]: Russell Lyons, Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall, 讲义, 2025-08-10. 第5章附录 The Cameron–Martin and Girsanov Theorems，印刷页80–82。
