---
title: "稳定分布（Stable distribution）"
aliases: ["稳定分布", "Stable distribution"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



稳定分布是在独立求和后，仅通过缩放和平移即可保持分布类型的一类分布。它包含正态和 Cauchy 分布，并出现在某些重尾和的极限中。[^1]

## 定义

非退化实值随机变量 $X$ 的分布称为稳定分布，若对每个整数 $n\ge2$，其独立同分布副本满足
$$
X_1+\cdots+X_n\stackrel d=a_nX+b_n,
\qquad a_n>0,\quad b_n\in\mathbb R.
$$
若可取所有 $b_n=0$，称为严格稳定（strictly stable）。一般稳定分布的缩放常数为 $a_n=n^{1/\alpha}$，其中 $0<\alpha\le2$ 称为稳定指数（stability index）；这是分类定理的结论，不是从两个有限矩的比较得出的普遍公式。

## 对称稳定分布

以零为对称中心的严格稳定分布可由[特征函数（Characteristic function）](Characteristic-function.md)
$$
\varphi(t)=\exp(-c|t|^\alpha),\qquad c>0,\quad0<\alpha\le2,
$$
刻画。$\alpha=2$ 给出方差 $2c$ 的中心正态分布；$\alpha=1$ 给出尺度为 $c$ 的中心 Cauchy 分布。

> [!proof]- 对称形式的稳定性验证
> 独立求和把特征函数变成 $\varphi(t)^n=e^{-nc|t|^\alpha}$，而 $n^{1/\alpha}X$ 的特征函数为 $\varphi(n^{1/\alpha}t)=e^{-nc|t|^\alpha}$，由特征函数唯一性得到严格稳定性。这里以该函数确为特征函数为前提，其存在性见 Durrett §3.3.4 与 §3.8。

## 极限中的归一化

处于稳定吸引域（domain of attraction）的含义是：存在 $a_n>0,b_n\in\mathbb R$，使 $(\sum_{k\le n}X_k-b_n)/a_n\Rightarrow Z$，其中 $Z$ 为非退化稳定变量。一般归一化为 $n^{1/\alpha}$ 乘一个缓慢变化因子，而不必恰好是纯幂。缓慢变化（slow variation）指正函数 $L$ 满足对每个 $c>0$，$L(cx)/L(x)\to1$。

例如若 $0<\alpha<2$，尾概率为 $P(|X|>x)=x^{-\alpha}L(x)$，并且 $P(X>x)/P(|X|>x)\to p\in[0,1]$、$P(X<-x)/P(|X|>x)\to1-p$，就进入经典稳定吸引域判据；这两个极限是左右尾比例的准确含义。具体尺度与中心化必须按所用定理选择。尤其 $\alpha=1$ 时的截断中心化不能简单写成 $n\mathbb EX$，因为均值可能不存在。

稳定分布是[无限可分分布（Infinitely divisible distribution）](Infinitely-divisible-distribution.md)的一类；相应过程见[Lévy 过程（Lévy process）](Levy-process.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§3.3.4、3.8。
