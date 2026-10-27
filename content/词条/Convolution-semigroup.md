---
title: "卷积半群（Convolution semigroup）"
aliases: ["卷积半群", "Convolution semigroup", "弱连续卷积半群", "Weakly continuous convolution semigroup"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



卷积半群描述独立增量过程随时间累加的分布。它只记录分布族，尚未指定样本空间或路径版本。

## 定义

$\mathbb R^d$ 上概率测度族 $(\mu_t)_{t\ge0}$ 称弱连续卷积半群，若 $\mu_0=\delta_0$，$\mu_{s+t}=\mu_s*\mu_t$，且 $\mu_t\Rightarrow\delta_0$ 当 $t\downarrow0$。其中 $*$ 是[测度卷积（Convolution of measures）](Convolution-of-measures.md)，$\Rightarrow$ 是[弱收敛（Weak convergence）](Weak-convergence-of-measures.md)。[^1]

## 对应的转移半群

令 $P_tf(x)=\int f(x+y)\mu_t(dy)$。对于有界可测 $f$，$P_{s+t}f=P_s(P_tf)$，$P_0f=f$；它保非负且 $P_t1=1$。

> [!proof]- 半群性质
> 利用[Fubini 定理（Fubini theorem）](Fubini-theorem.md)和卷积定义，$P_sP_tf(x)=\int\int f(x+y+z)\mu_t(dz)\mu_s(dy)=\int f(x+w)(\mu_s*\mu_t)(dw)=P_{s+t}f(x)$。

在 $C_0(\mathbb R^d)$（连续且在无穷远消失的函数空间）上，这形成[Feller 半群（Feller semigroup）](Feller-semigroup.md)。例如强连续性可由 $f$ 的一致连续性估计：给定 $\delta>0$，
$$
\sup_x|P_tf(x)-f(x)|\le\sup_{|y|\le\delta,x}|f(x+y)-f(x)|+2\|f\|_\infty\mu_t(|y|>\delta),
$$
先令 $t\downarrow0$ 再令 $\delta\downarrow0$。范数与生成元的精确定义见对应词条。

## 与 Lévy 过程的对应

Lévy 过程的时刻分布形成这样的半群。反过来，用这些增量分布构造相容的有限维分布，再通过[Kolmogorov 扩张定理（Kolmogorov extension theorem）](Kolmogorov-extension-theorem.md)及路径正则化可得到一个[Lévy 过程（Lévy process）](Levy-process.md)。单有卷积代数等式而没有零时刻弱连续性，不能直接得到随机连续的过程。

## 例

高斯半群 $\mu_t=N(bt,tA)$ 与 Poisson 分布族 $\mu_t=\operatorname{Poisson}(\lambda t)$ 分别对应连续噪声和计数噪声。独立两个 Lévy 过程相加对应逐时刻卷积两个半群；其特征指数相加。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §1.4、§3.3；强连续性估计为本条展开。
