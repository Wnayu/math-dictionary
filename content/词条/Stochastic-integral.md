---
title: "随机积分（Stochastic integral）"
aliases:
  - "随机积分"
  - "Stochastic integral"
  - "Itô integral"
  - "Itô 积分"
  - "随机积分器"
  - "Stochastic integrator"
type: concept
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



随机积分 $\int H\,dM$ 从“在区间起点确定系数、乘随后增量”的和开始构造。对于 Brownian 运动，路径总变差无限，普通 Lebesgue–Stieltjes 积分不能承担这一构造。

## 定义

设 $M_0=0$ 是连续平方可积[鞅（martingale）](Martingale.md)，先在 $[0,T]$ 上取阶梯过程
$$
H_s=\sum_{i=0}^{n-1}H_i\mathbf1_{(t_i,t_{i+1}]}(s),\qquad H_i\in L^\infty(\mathcal F_{t_i}).
$$
定义 $(H\cdot M)_t:=\sum_i H_i(M_{t\wedge t_{i+1}}-M_{t\wedge t_i})$。利用 [Itô 等距（Itô isometry）](Ito-isometry.md)，将此映射唯一连续延拓到可预测 $H$ 满足
$$
E\int_0^T H_s^2\,d[M]_s<\infty
$$
的等价类，记 $(H\cdot M)_t=\int_0^tH_s\,dM_s$。这里两个被积过程按 $E\int|H-K|^2d[M]=0$ 认同。[^1]

对连续[局部鞅（local martingale）](Local-martingale.md)，只需每个 $T<\infty$ 有 $\int_0^T H_s^2d[M]_s<\infty$ 几乎必然；通过停止使二次变差与积分能量有界，再把停止后的积分拼合。记这类被积过程为 $L^2_{\mathrm{loc}}(M)$，所得积分为从零出发的连续局部鞅。

**注**：Le Gall 使用渐进可测过程构造连续鞅积分；它与可预测版本在 $dP\,d[M]$ 等价类中一致。定义与不同可测类别的区别见[可预测过程（Predictable process）](Predictable-process.md)。

## 连续半鞅积分

若 $X=X_0+M+A$ 为连续[半鞅（semimartingale）](Semimartingale.md)，且 $H\in L^2_{\mathrm{loc}}(M)$、每个 $T$ 上 $\int_0^T|H_s|\,d\operatorname{Var}(A)_s<\infty$ 几乎必然，定义
$$
\int_0^tH_s\,dX_s=\int_0^tH_s\,dM_s+\int_0^tH_s\,dA_s.
$$
第二项是逐路径的 Lebesgue–Stieltjes 积分。$\operatorname{Var}(A)_t$ 为路径在 $[0,t]$ 上的总变差。这给出本专题使用的标准充分条件。

## 左端点与右端点

若 $H$ 连续适应，沿确定性分割的左端点和收敛到 $\int H\,dX$，收敛为依概率。右端点求和可能改变结果，例如
$$
\int_0^t B_s\,dB_s=\tfrac12(B_t^2-t),
$$
而右端点和趋于 $\tfrac12(B_t^2+t)$，因为两种和的差是增量平方和。这也引出 [Stratonovich 积分（Stratonovich integral）](Stratonovich-integral.md)。

## 停止与结合律

若积分均有定义，则
$$
(H\cdot M)^\tau=(\mathbf1_{[0,\tau]}H)\cdot M=H\cdot M^\tau,
\qquad K\cdot(H\cdot M)=(KH)\cdot M.
$$
等式先对阶梯被积过程直接验证，再由等距延拓及局部化得到。结合律仍须检查 $K\in L^2_{\mathrm{loc}}(H\cdot M)$，等价于 $KH\in L^2_{\mathrm{loc}}(M)$。[^1]

带跳跃的积分器需要另行处理跳前值与 Poisson 随机测度，见[补偿 Poisson 积分（Compensated Poisson integral）](Compensated-Poisson-integral.md)。


随机积分的平方估计可扩展到更一般的极大矩比较，见[Burkholder–Davis–Gundy 不等式（Burkholder–Davis–Gundy inequalities）](Burkholder-Davis-Gundy-inequalities.md)。至于哪些鞅可反过来表示为 Brownian 积分，见[鞅表示定理（Martingale representation theorem）](Martingale-representation-theorem.md)，其中滤过条件不可省略。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，式 (5.11)、(5.12)；Theorems 5.4、5.6、5.10、Propositions 5.8、5.9；第110、116页。
