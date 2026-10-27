---
title: "更新定理（Renewal theorem）"
aliases: ["更新定理", "Renewal theorem", "初等更新定理", "Elementary renewal theorem", "Blackwell更新定理", "关键更新定理", "Key renewal theorem", "直接Riemann可积"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



更新定理描述长时间内更新次数及更新测度的平均密度。下列计数 $N$ 与测度 $U$ 采用[更新过程（Renewal process）](Renewal-process.md)中的约定。[^1][^2]

## 大数律与初等更新定理

令等待时间严格正，$\mu=\mathbb E\xi_1\in(0,\infty]$，约定 $1/\infty=0$。则
$$
\frac{N(t)}t\longrightarrow\frac1\mu\quad\text{几乎必然},
\qquad \frac{\mathbb EN(t)}t\longrightarrow\frac1\mu.
$$

> [!proof]- 路径结论的证明
> 由 $S_{N(t)}\le t<S_{N(t)+1}$ 及 $N(t)\to\infty$，有
> $$
> \frac{S_{N(t)}}{N(t)}\le\frac t{N(t)}
> <\frac{S_{N(t)+1}}{N(t)+1}\frac{N(t)+1}{N(t)}.
> $$
> 若 $\mu<\infty$，强大数定律使两端趋于 $\mu$。若 $\mu=\infty$，对每个 $K$ 用截断变量 $\xi_k\wedge K$ 的强大数律，得到 $\liminf_nS_n/n\ge\mathbb E(\xi_1\wedge K)$；令 $K\uparrow\infty$ 得 $S_n/n\to\infty$，再由上述不等式得到计数速率为零。

期望收敛不能仅由几乎必然收敛推断。初等更新定理还要使用跨越时刻的 Wald 恒等式与等待时间截断；完整证明见 Durrett Theorem 2.6.3。

## Blackwell 更新定理

若 $\mu<\infty$ 且等待时间分布非算术，即不存在 $h>0$ 使 $P(\xi_1\in h\mathbb Z)=1$，则对每个 $a>0$，
$$
U((t,t+a])\longrightarrow a/\mu.
$$
算术分布需使用相应格点版本；例如 $\xi_1\equiv1$ 时，长度小于 $1$ 的滑动区间所含更新点数振荡，不满足上述连续时间极限。非算术情形的完整证明采用耦合，见 Durrett Theorem 2.6.4。

## 关键更新定理

若上述非算术及有限均值条件成立，$h:[0,\infty)\to[0,\infty)$ 直接 Riemann 可积（directly Riemann integrable），则
$$
\int_{[0,t]}h(t-s)\,U(ds)\longrightarrow\frac1\mu\int_0^\infty h(s)\,ds.
$$
这里直接 Riemann 可积指：令 $I_k^\delta=[k\delta,(k+1)\delta)$，上、下和
$$
S^\delta=\delta\sum_{k\ge0}\sup_{I_k^\delta}h,
\quad s^\delta=\delta\sum_{k\ge0}\inf_{I_k^\delta}h
$$
对充分小的 $\delta$ 有有限上和，且 $S^\delta-s^\delta\to0$。这比单纯 Lebesgue 可积强，控制了无穷远处分散尖峰。

> [!proof]- 证明思路
> 先对有限个区间的阶梯函数使用 Blackwell 定理逐项取极限。再用每个小区间的上、下确界构成夹逼；直接 Riemann 可积保证无穷尾项可以一致控制，最后令网格 $\delta\downarrow0$。无穷尾项所需的更新测度有界性及完整夹逼细节见 Durrett Theorem 2.6.12。

**注**：带符号 $h$ 可在正、负部都满足相应条件时分别处理。年龄、剩余寿命与更新奖励的极限都是这一理论的应用，条件应按具体奖励函数重新检查。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 2.6.1、2.6.3–2.6.4、2.6.12；第 102 页。

[^2]: Chen Wang, *Lecture Notes on Stochastic Processes*，个人笔记，式 (4.2)、(4.4)–(4.5)。


