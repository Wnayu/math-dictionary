---
title: "局部极限定理（Local limit theorem）"
aliases: ["局部极限定理", "Local limit theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



局部极限定理直接估计单个格点或短区间的概率，比仅比较分布函数的中心极限定理更精细。[^1]

## 格点版本

设 $X_k$ 独立同分布，$\mathbb EX_1=\mu$，$\sigma^2=\operatorname{Var}(X_1)\in(0,\infty)$，且分布支撑在 $a+h\mathbb Z$ 上，$h>0$ 为最大格距：不存在更大的 $h'$ 及某个 $a'$ 使分布仍支撑于 $a'+h'\mathbb Z$。令 $S_n=\sum_{k\le n}X_k$，$\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$。则
$$
\sup_{x\in na+h\mathbb Z}\left|
\frac{\sigma\sqrt n}{h}P(S_n=x)
-\phi\left(\frac{x-n\mu}{\sigma\sqrt n}\right)\right|\to0.
$$
特别地，单点概率的主阶为 $h/(\sigma\sqrt n)$。

> [!proof]- 证明思路
> 先平移缩放成整数格点、最大格距 $1$。傅里叶反演写为
> $$
> P(S_n=k)=\frac1{2\pi}\int_{-\pi}^{\pi}e^{-itk}\varphi_X(t)^n\,dt.
> $$
> 在零点附近用二阶展开 $\varphi_X(t)e^{-i\mu t}=1-\sigma^2t^2/2+o(t^2)$，将 $t$ 缩放为 $u/(\sigma\sqrt n)$，得到高斯傅里叶积分。最大格距条件保证在任何远离 $0$ 的紧子区间内 $|\varphi_X(t)|<1$，所以该部分的 $n$ 次幂积分指数衰减。小频率区域再用 $|\varphi_X(t)|\le e^{-ct^2}$ 控制尾部。这些积分误差的界与 $k$ 无关，因而得到一致结论。完整分区估计见所引教材。

## 格距与周期性

若 $P(X_1=\pm1)=1/2$，最大格距为 $2$，且 $S_n$ 只能取与 $n$ 同奇偶的整数。把格距误写为 $1$ 会将可达点上的主项缩小一半，也无法正确处理不可达点。局部定理必须保留这种格点结构。

**注**：一般的非格点分布不一定有密度，因此不能直接把这个公式改写成逐点密度收敛。非格点的区间版本需另外陈述条件。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §3.5，格点局部中心极限定理。
