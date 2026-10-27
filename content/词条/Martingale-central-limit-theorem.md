---
title: "鞅中心极限定理（Martingale central limit theorem）"
aliases: ["鞅中心极限定理", "Martingale central limit theorem", "鞅函数型中心极限定理", "Martingale functional central limit theorem", "条件Lindeberg条件"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



鞅中心极限定理允许增量依赖过去，但要求在已知过去信息后均值仍为零。决定高斯极限的是累计条件方差，而不是只看无条件方差总和。[^1]

## 鞅差阵列与单时刻定理

对每个 $n$，设 $\mathcal F_{n,0}\subseteq\cdots\subseteq\mathcal F_{n,n}$ 为[滤过（Filtration）](Filtration.md)，实变量 $X_{n,k}\in L^2$ 对 $\mathcal F_{n,k}$ 可测，且
$$
E[X_{n,k}\mid\mathcal F_{n,k-1}]=0,\qquad 1\le k\le n.
$$
称其为鞅差阵列（martingale difference array）；每一行的部分和是[鞅（Martingale）](Martingale.md)。不同的行之间不要求独立。定义
$$
S_{n,j}=\sum_{k=1}^jX_{n,k},\qquad
V_{n,j}=\sum_{k=1}^jE[X_{n,k}^2\mid\mathcal F_{n,k-1}],\qquad S_{n,0}=V_{n,0}=0.
$$
这里 $V_{n,j}$ 是累计条件方差；条件均值为零使条件二阶矩等于条件方差。

若 $V_{n,n}\xrightarrow P1$，并且对每个 $\varepsilon>0$，条件 Lindeberg 条件（conditional Lindeberg condition）
$$
L_n(\varepsilon)=\sum_{k=1}^nE[X_{n,k}^2 1_{\{|X_{n,k}|>\varepsilon\}}\mid\mathcal F_{n,k-1}]
\xrightarrow P0
$$
成立，则 $S_{n,n}\Rightarrow N(0,1)$。符号 $\xrightarrow P$、$\Rightarrow$ 分别是[依概率收敛与依分布收敛（Convergence in probability and in distribution）](Convergence-of-random-variables.md)。这是下述鞅嵌入及截断论证的单时刻形式；只需在终点控制时钟，不需要假设中间时刻的方差曲线。

## 函数型定理

若加强为对每个 $t\in[0,1]$ 都有
$$
V_{n,\lfloor nt\rfloor}\xrightarrow P t,
$$
并保留上述条件 Lindeberg 条件，则线性插值过程
$$
W_n(t)=S_{n,k}+(nt-k)X_{n,k+1},\quad
k=\lfloor nt\rfloor<n,\qquad W_n(1)=S_{n,n},
$$
满足 $W_n\Rightarrow B$。这里 $\lfloor u\rfloor$ 是不超过 $u$ 的最大整数，$B$ 为标准[Brownian 运动（Brownian motion）](Brownian-motion.md)；收敛发生在 $C([0,1])$ 的 Borel 概率测度上，使用一致距离 $d(f,g)=\sup_{0\le t\le1}|f(t)-g(t)|$。该路径空间是[Polish 空间（Polish space）](Polish-space.md)。这正是 Durrett Theorem 8.2.4 的线性插值形式。

**注**：只有 $V_{n,n}\to1$ 不能确定路径中的方差分配，所以不能单凭终点条件断言上述函数型结论。若每行独立，条件方差成为确定量；单时刻结论与[Lindeberg–Feller 定理（Lindeberg–Feller theorem）](Lindeberg-Feller-theorem.md)衔接。

> [!proof]- 证明思路
> 先从条件 Lindeberg 收敛选取充分缓慢趋零的确定数 $a_n$，使 $a_n^{-2}L_n(a_n)\to0$ 依概率。把每项截断并重新中心化：
> $$
> \widetilde X_{n,k}=X_{n,k}1_{\{|X_{n,k}|\le a_n\}}
> -E[X_{n,k}1_{\{|X_{n,k}|\le a_n\}}\mid\mathcal F_{n,k-1}].
> $$
> 则 $|\widetilde X_{n,k}|\le2a_n$，其累计条件方差与原来之差被 $2L_n(a_n)$ 控制。对大跳事件 $A_{n,k}=\{|X_{n,k}|>a_n\}$，教材的适应事件估计给出，对任意 $\delta>0$，
> $$
> P\Bigl(\bigcup_{k\le n}A_{n,k}\Bigr)
> \le\delta+P\left(\sum_{k\le n}P(A_{n,k}\mid\mathcal F_{n,k-1})>\delta\right).
> $$
> 右侧条件概率和不超过 $a_n^{-2}L_n(a_n)$，故最大大跳概率趋零；重新中心化造成的部分和误差不超过 $a_n^{-1}L_n(a_n)$。这说明条件 Lindeberg 在概率意义下的收敛已经足够，不能擅自把它改写成未证明的期望收敛。
>
> 对有界鞅差，Durrett Theorem 8.2.1 将部分和嵌入 Brownian 运动的递增停时 $T_{n,j}$。嵌入时间增量的条件均值等于条件方差。先在累计条件方差过大前停止，再用嵌入时间的二阶矩估计和鞅差正交性，使 $T_{n,j}-V_{n,j}$ 在所需时刻趋零。单时刻版本只在 $j=n$ 使用这一步；函数版本对每个 $\lfloor nt\rfloor$ 使用，再借递增时钟与 Brownian 路径连续模控制整条插值路径。
>
> 以上列出截断、适应事件估计和随机时钟三个关键环节；嵌入构造及其矩估计的完整证明见 Durrett §§8.1–8.2，Theorems 8.2.1、8.2.3–8.2.4 和 Lemmas 8.2.5–8.2.7。

## 单序列与平稳遍历鞅差

设 $(D_k,\mathcal F_k)$ 为平方可积鞅差序列，$M_j=\sum_{k=1}^jD_k$，并令 $M(u)$ 在整数时刻等于 $M_j$、在相邻整数间线性插值。若
$$
\frac1n\sum_{k=1}^nE[D_k^2\mid\mathcal F_{k-1}]\xrightarrow P\sigma^2>0,
\qquad
\frac1n\sum_{k=1}^nE[D_k^2 1_{\{|D_k|>\varepsilon\sqrt n\}}]\to0
\quad(\varepsilon>0),
$$
则 $n^{-1/2}M(n\,\cdot)\Rightarrow\sigma B$ 于 $C([0,1])$。第二条件是无条件版本的方便充分条件：其期望控制使归一化阵列的条件 Lindeberg 和依概率趋零；第一条件在 $\lfloor nt\rfloor$ 使用即可得到时间 $t$ 的方差极限。这是 Durrett Theorem 8.2.8。

特别地，若 $(D_k)_{k\in\mathbb Z}$ [严格平稳且遍历（Strictly stationary and ergodic）](Stationary-process.md)，$ED_0^2=\sigma^2<\infty$，并对自然过去滤过 $\mathcal F_k=\sigma(D_j:j\le k)$ 满足鞅差条件，则同一函数型结论成立（Durrett Theorem 8.3.1）。

> [!proof]- 证明：平稳遍历推论
> $U_k=E[D_k^2\mid\mathcal F_{k-1}]$ 可以取为同一个过去序列函数的平移，因而也是平稳遍历序列。由[遍历定理（Ergodic theorem）](Ergodic-theorem.md)，$n^{-1}\sum_{k\le n}U_k\to EU_0=\sigma^2$ 几乎必然。又由同分布及控制收敛，
> $$
> \frac1n\sum_{k\le n}E[D_k^2 1_{\{|D_k|>\varepsilon\sqrt n\}}]
> =E[D_0^2 1_{\{|D_0|>\varepsilon\sqrt n\}}]\to0.
> $$
> 当 $\sigma^2>0$ 时应用单序列定理。若 $\sigma^2=0$，每个 $D_k=0$ 几乎必然，在可数个时刻取共同满测集后过程恒为零，结论退化为零过程。

## 无条件方差不能替代条件方差

令 $Z$ 以相同概率取 $1,2$，$(\xi_k)$ 为独立等概率取 $\pm1$ 的变量，并与 $Z$ 独立。取 $X_{n,k}=Z\xi_k/\sqrt n$、$\mathcal F_{n,k}=\sigma(Z,\xi_1,\ldots,\xi_k)$，则这是鞅差阵列，且各项一致有界趋零，但
$$
V_{n,n}=Z^2,\qquad \sum_kEX_{n,k}^2=EZ^2=5/2.
$$
条件于 $Z$ 使用独立中心极限定理，极限分布是 $\tfrac12N(0,1)+\tfrac12N(0,4)$，并非 $N(0,5/2)$。固定的无条件总方差没有排除随机环境导致的混合极限。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §8.2，Theorems 8.2.1、8.2.3–8.2.4、8.2.8及相关截断引理；§8.3，Theorem 8.3.1。单时刻表述为同一证明在终点的形式，混合正态例为本条补充。
