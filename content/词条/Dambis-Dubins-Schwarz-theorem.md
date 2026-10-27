---
title: "Dambis–Dubins–Schwarz 定理（Dambis–Dubins–Schwarz theorem）"
aliases:
  - "Dambis–Dubins–Schwarz 定理"
  - "Dambis–Dubins–Schwarz theorem"
  - "DDS theorem"
  - "时间变换"
  - "Time change"
type: theorem
tags:
  - probability
  - stochastic-calculus
draft: false
publish: true
status: needs-review
verified: false
---



Dambis–Dubins–Schwarz 定理说明，连续局部鞅可以视为用其二次变差重新计时的 Brownian 运动。

## 陈述

设 $M_0=0$ 为连续[局部鞅（local martingale）](Local-martingale.md)，且 $[M]_\infty=\infty$ 几乎必然。令
$$
\tau_u=\inf\{t\ge0:[M]_t>u\},\qquad W_u=M_{\tau_u}.
$$
则 $W$ 相对于时间变换后的滤过 $\mathcal G_u=\mathcal F_{\tau_u}$ 是标准 Brownian 运动，并且
$$
M_t=W_{[M]_t}\quad\text{对所有 }t\ge0\text{ 几乎必然成立}.
$$
这里 $\mathcal F_\tau$ 是[停时 σ-代数（stopping-time sigma-algebra）](Stopping-time.md)。[^1]

> [!proof]- 证明思路
> 连续递增的 $[M]$ 使逆时钟为停时，并满足 $[M]_{\tau_u}=u$。还需要证明一个实质引理：$M$ 在某个时间区间恒定，当且仅当其二次变差在该区间恒定。该引理保证逆时钟跳过平台时，$M_{\tau_u}$ 仍连续。对局部化后的 $M$ 和 $M^2-[M]$ 使用可选停止，得到 $W$ 和 $W^2-u$ 是局部鞅；[Lévy 刻画（Lévy characterization）](Levy-characterization.md)于是识别出 Brownian 运动。平台引理与可选停止的完整细节见来源 Theorem 5.13、Lemma 5.14。

## 有限终端二次变差

若 $[M]_\infty$ 可能有限，逆时钟不再为每个 $u$ 提供有限时刻。可在适当扩大的概率空间补接独立 Brownian 运动，仍得到 $M_t=W_{[M]_t}$ 的表示，但不能无条件声称原空间上已有覆盖全部时间的 $W$。

## 例

对 $M_t=\int_0^t\sigma_s\,dB_s$，时钟为 $[M]_t=\int_0^t\sigma_s^2ds$。若 $\sigma$ 为确定函数，这是确定时间变化；若 $\sigma$ 随机，时钟和表示中的 $W$ 一般有关联，不能把结论误读成独立随机时钟表示。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall, Brownian Motion, Martingales, and Stochastic Calculus, Graduate Texts in Mathematics 274, Springer, 2016. §5.3.2，Theorem 5.13、Lemma 5.14 及有限二次变差的讨论。
