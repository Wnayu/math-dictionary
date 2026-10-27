---
title: "重对数律（Law of the iterated logarithm）"
aliases: ["重对数律", "Law of the iterated logarithm", "LIL"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



重对数律描述中心化部分和在单条典型路径上的最大振荡尺度；这个尺度比中心极限定理中的 $\sqrt n$ 多一个 $\sqrt{\log\log n}$ 因子。[^1]

## 独立同分布版本

设 $X_k$ 独立同分布，$\mathbb EX_1=0$，$\operatorname{Var}(X_1)=\sigma^2\in(0,\infty)$。则
$$
\limsup_{n\to\infty}\frac{\sum_{k=1}^nX_k}{\sqrt{2\sigma^2n\log\log n}}=1,
\qquad
\liminf_{n\to\infty}\frac{\sum_{k=1}^nX_k}{\sqrt{2\sigma^2n\log\log n}}=-1
\quad\text{几乎必然}.
$$
这里 $n$ 足够大，使分母中的重对数为正。定理只要求有限二阶矩，不额外要求三阶矩。

## Brownian 运动版本

对标准 [Brownian 运动（Brownian motion）](Brownian-motion.md)，
$$
\limsup_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=1,
\qquad\liminf_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=-1
\quad\text{几乎必然}.
$$

> [!proof]- 证明思路
> 取几何时刻 $t_k=\alpha^k$。上界用 Brownian 反射原理把区间上最大值的尾概率化为正态尾概率；选略大于目标的阈值后，概率之和有限，Borel–Cantelli 引理给出最终上界，再令 $\alpha\downarrow1$。
>
> 下界在相邻几何时刻之间使用独立增量。取略低于目标的阈值，可使对应正态尾概率之和发散，于是独立 Borel–Cantelli 引理给出无限多次越界。选择较大的 $\alpha$ 控制前一时刻的贡献，再逼近常数 $1$。对 $-B$ 应用相同论证得到下极限。
>
> 独立同分布和的版本通过 Skorohod 嵌入把部分和写成 $B(T_n)$，以时间增量的强大数定律控制 $T_n/n$，并补充时间区间中的路径误差估计。完整估计见 Durrett §8.5；仅有 $T_n/n\to1$ 这一句还不足以直接替换所有路径极限。

## 与中心极限定理的关系

[中心极限定理（Central limit theorem）](Central-limit-theorem.md)陈述 $S_n/(\sigma\sqrt n)$ 的分布极限；重对数律陈述同一无限序列上的极限上界与下界。两者使用不同量词，不能把路径上无限多次出现的大波动误解为分布不收敛。

**注**：公式中的 $\sigma^2$ 是有限方差。无限方差序列的类似定理需另行选择归一化，不能沿用本卡分母。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §8.5，Theorems 8.5.1–8.5.2。
