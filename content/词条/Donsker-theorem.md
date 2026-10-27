---
title: "Donsker 定理（Donsker theorem）"
aliases: ["Donsker 定理", "Donsker theorem", "函数型中心极限定理", "Functional central limit theorem", "不变性原理", "Invariance principle"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Donsker 定理把独立同分布和的中心极限定理提升为整条路径的弱收敛，也称函数型中心极限定理或不变性原理。[^1]

## 定理

设 $X_k$ 独立同分布，$\mathbb EX_1=0$，$\mathbb EX_1^2=\sigma^2\in(0,\infty)$，$S_0=0$、$S_k=\sum_{j=1}^kX_j$。定义线性插值过程
$$
W_n(t)=\frac{S_{\lfloor nt\rfloor}+(nt-\lfloor nt\rfloor)X_{\lfloor nt\rfloor+1}}{\sigma\sqrt n},\qquad0\le t\le1,
$$
其中 $\lfloor x\rfloor$ 是不超过 $x$ 的最大整数；在 $t=1$ 处插值项系数为零。则 $W_n\Rightarrow B$，收敛在连续函数空间 $C([0,1])$ 上，使用一致距离 $d(f,g)=\sup_{0\le t\le1}|f(t)-g(t)|$ 及其 Borel $\sigma$-代数。该连续路径空间是[Polish 空间（Polish space）](Polish-space.md)；$B$ 是标准[Brownian 运动（Brownian motion）](Brownian-motion.md)。

## 从嵌入到路径收敛

以下论证采用 Durrett §8.1 的 Skorohod 嵌入：在适当扩充的概率空间上，可取 Brownian 运动和递增停时 $T_k$，使整组 $(B(T_k)-B(T_{k-1}))_k$ 与 $(X_k/\sigma)_k$ 同分布，且时间增量 $T_k-T_{k-1}$ 独立同分布、均值为 $1$。该嵌入定理的构造见所引教材，和[弱收敛的 Skorohod 表示定理（Skorohod representation theorem）](Skorohod-representation-theorem.md)不同。

> [!proof]- 基于 Skorohod 嵌入的证明
> 时间增量的强大数定律给出 $T_k/k\to1$ 几乎必然，进而
> $$
> \Delta_n=\max_{0\le k\le n}|T_k-k|/n\to0\quad\text{几乎必然}.
> $$
> 后一结论由有限首段除以 $n$ 趋零、后段满足 $|T_k-k|\le\varepsilon k$ 得出。
>
> 令 $B_n(t)=B(nt)/\sqrt n$；由 Brownian 缩放，$B_n$ 与标准 Brownian 运动同分布。嵌入后的插值过程在节点等于 $B_n(T_k/n)$。在 $\Delta_n\le\delta$、$\delta<1/2$ 时，对 $t\in[k/n,(k+1)/n]$，两端节点的时间与 $t$ 的距离均不超过 $\delta+1/n$，且都位于 $[0,2]$。故
> $$
> \sup_{t\le1}|W_n(t)-B_n(t)|
> \le\omega(B_n,\delta+1/n;[0,2]),
> $$
> 其中 $\omega(f,h;[0,2])=\sup\{|f(s)-f(t)|:s,t\in[0,2],|s-t|\le h\}$ 为连续模。对固定 $\varepsilon>0$，概率上界是 $P(\Delta_n>\delta)$ 加上 $P(\omega(B,2\delta;[0,2])>\varepsilon)$。先令 $n\to\infty$，再令 $\delta\downarrow0$，Brownian 路径一致连续使后者趋零。于是两过程的一致距离依概率趋零；因 $B_n$ 的分布恒定，得到 $W_n\Rightarrow B$。

## 路径拓扑与泛函

映射 $f\mapsto\max_{t\le1}f(t)$ 在一致距离下连续，因此
$$
\frac{\max_{0\le k\le n}S_k}{\sigma\sqrt n}\Rightarrow\max_{0\le t\le1}B_t.
$$
这类路径泛函的收敛不能只凭有限维分布收敛推出。若改用阶梯路径，则它不属于 $C([0,1])$，需要在有右连续左极限路径的空间中说明所用拓扑；本卡陈述采用线性插值避免混淆。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §8.1，Theorems 8.1.1–8.1.4。
