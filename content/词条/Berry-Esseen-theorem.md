---
title: "Berry–Esseen 定理（Berry–Esseen theorem）"
aliases: ["Berry–Esseen 定理", "Berry–Esseen theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Berry–Esseen 定理为中心极限定理给出对所有阈值同时有效的误差界，并明确误差如何依赖三阶绝对矩。[^1][^2]

## 定理

设 $X_1,X_2,\ldots$ 独立同分布，$\mathbb EX_1=\mu$，$0<\sigma^2=\operatorname{Var}(X_1)<\infty$，$\rho=\mathbb E|X_1-\mu|^3<\infty$。令
$$
F_n(x)=P\left(\frac{\sum_{k=1}^nX_k-n\mu}{\sigma\sqrt n}\le x\right),
\qquad \Phi(x)=\int_{-\infty}^x\frac{e^{-u^2/2}}{\sqrt{2\pi}}\,du.
$$
存在与分布及 $n$ 无关的常数 $C$，使
$$
\sup_{x\in\mathbb R}|F_n(x)-\Phi(x)|\le\frac{C\rho}{\sigma^3\sqrt n}.
$$
Durrett 所给版本可取 $C=3$；这里不声称该常数最优。

> [!proof]- 证明思路
> 中心化并标准化后记 $\beta=\rho/\sigma^3\ge1$。三阶 Taylor 余项给出 $|\varphi(u)-1+u^2/2|\le\beta|u|^3/6$。结合乘积差分恒等式，可在 $|t|\le c\sqrt n/\beta$ 上控制
> $$
> |\varphi(t/\sqrt n)^n-e^{-t^2/2}|
> \le\frac{C\beta|t|^3}{\sqrt n}e^{-ct^2}.
> $$
> Esseen 平滑不等式把分布函数距离控制为该特征函数差除以 $|t|$ 在 $[-T,T]$ 的积分，加上 $C/T$。取 $T=c\sqrt n/\beta$，积分 $\int_{\mathbb R}t^2e^{-ct^2}dt$ 有限，得到 $C\beta/\sqrt n$ 的阶。
>
> 这里展示证明结构；特征函数乘积估计及平滑不等式的证明见 Durrett §3.4.4 或 Jing §§10.7、11.2，不据此声称已经在本卡推导出数值常数 $3$。

## 与普通中心极限定理的区别

[中心极限定理（Central limit theorem）](Central-limit-theorem.md)只要求二阶矩有限；该一致误差界增加了三阶绝对矩条件。即使三阶矩无穷，中心极限定理仍可能成立，但不能套用这个界。

对对称 $\pm1$ 变量，偶数项和在零点有约 $n^{-1/2}$ 大小的原子，而正态分布函数连续。因此一般分布类别下的误差阶不能统一优于 $n^{-1/2}$。区间单点概率的更细近似属于[局部极限定理（Local limit theorem）](Local-limit-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §3.4.4，Theorem 3.4.17。

[^2]: Bing-Yi Jing, Advanced Probability Theory, 讲义, July 2012. §§10.7、11.2。
