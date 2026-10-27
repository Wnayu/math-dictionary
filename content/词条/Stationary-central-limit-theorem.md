---
title: "平稳序列的中心极限定理（Central limit theorem for stationary sequences）"
aliases: ["平稳序列的中心极限定理", "Central limit theorem for stationary sequences", "Stationary central limit theorem", "平稳序列不变原理", "鞅余边界分解", "Martingale-coboundary decomposition", "长期方差", "Long-run variance"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



依赖平稳序列的中心极限定理需要对远过去的影响作额外控制。本条采用 Durrett Theorems 8.3.2、8.3.7 的条件期望可和条件及其混合系数充分条件；仅有平稳性和遍历性并不够。[^1]

## 条件期望可和的版本

设 $(X_k)_{k\in\mathbb Z}$ 是实值严格[平稳且遍历的序列（Stationary and ergodic sequence）](Stationary-process.md)，满足
$$
EX_0=0,\qquad EX_0^2<\infty.
$$
令自然过去[滤过（Filtration）](Filtration.md) $\mathcal F_j=\sigma(X_k:k\le j)$。假定
$$
\sum_{n=1}^\infty\|E[X_0\mid\mathcal F_{-n}]\|_2<\infty,
\qquad \|Y\|_2=(E|Y|^2)^{1/2}.
$$
定义 $S_0=0$、$S_k=\sum_{j=1}^kX_j$，并在 $[0,1]$ 上作线性插值
$$
W_n(t)=\frac{S_{\lfloor nt\rfloor}+(nt-\lfloor nt\rfloor)X_{\lfloor nt\rfloor+1}}{\sqrt n}.
$$
则在连续路径空间 $C([0,1])$ 的一致范数拓扑下，
$$
W_n\Rightarrow\sigma B,
\qquad
\sigma^2=EX_0^2+2\sum_{k=1}^\infty E(X_0X_k)\ge0,
$$
其中 $B$ 是标准[Brownian 运动（Brownian motion）](Brownian-motion.md)，$\Rightarrow$ 表示[依分布收敛（Convergence in distribution）](Weak-convergence-of-measures.md)。协方差级数绝对收敛，并且 $\sigma^2=\lim_n\operatorname{Var}(S_n)/n$，称长期方差（long-run variance）。特别地，$S_n/\sqrt n\Rightarrow N(0,\sigma^2)$；允许 $\sigma=0$，此时极限退化为零。

本条使用 Theorem 8.3.2 的自然过去滤过版本，并明确列出证明所需的平方可积性。这里的可和性是充分条件，不是必要条件。若要换成包含额外信息的滤过，还须核对其与平稳移位的相容性，不能任意扩大信息集合。

## 鞅与余边界分解

> [!proof]- 从条件期望条件到函数极限定理的证明
> 在双边序列的典范路径空间上，令 $\theta(x)_k=x_{k+1}$，于是 $X_k=X_0\circ\theta^k$。移位保持概率且遍历。平稳性给出
> $$
> \|E[X_j\mid\mathcal F_{-1}]\|_2
> =\|E[X_0\mid\mathcal F_{-j-1}]\|_2.
> $$
> 因而级数
> $$
> Z=\sum_{j=0}^\infty E[X_j\mid\mathcal F_{-1}]
> $$
> 在 $L^2$ 中绝对收敛。移位与条件期望相容，故
> $$
> Z\circ\theta=\sum_{j=1}^\infty E[X_j\mid\mathcal F_0].
> $$
> 令 $D=X_0-Z+Z\circ\theta$。它对 $\mathcal F_0$ 可测且平方可积。塔式性质及上述 $L^2$ 级数给出
> $$
> E[Z\circ\theta\mid\mathcal F_{-1}]
> =Z-E[X_0\mid\mathcal F_{-1}],
> \qquad E[D\mid\mathcal F_{-1}]=0.
> $$
> 所以 $D_k=D\circ\theta^k$ 是平稳遍历的鞅差序列；它自己的自然过去包含于 $\mathcal F_{k-1}$，由塔式性质，对该自然过去的条件均值也为零。分解
> $$
> X_0=D+Z-Z\circ\theta
> $$
> 称鞅与余边界分解（martingale-coboundary decomposition）：这里“余边界”明确指形如 $Z-Z\circ\theta$ 的差，它在部分和中伸缩消去。具体地，若 $M_k=\sum_{j=1}^kD_j$，则
> $$
> S_k=M_k+Z\circ\theta-Z\circ\theta^{k+1}.
> $$
> [鞅中心极限定理（Martingale central limit theorem）](Martingale-central-limit-theorem.md)的平稳遍历鞅差版本给出 $M$ 的线性插值除以 $\sqrt n$ 后趋于 $\sqrt{ED^2}\,B$。这一步使用该专门词条所述函数型鞅定理。
>
> 余边界项在整个区间上一致可忽略。对任意 $c>0$，平稳性与并集界给出
> $$
> P\!\left(\max_{1\le k\le n+1}|Z\circ\theta^k|>c\sqrt n\right)
> \le(n+1)P(|Z|>c\sqrt n)
> \le\frac{n+1}{c^2n}E[Z^2\mathbf1_{\{|Z|>c\sqrt n\}}]\longrightarrow0.
> $$
> 线性插值的最大绝对值不超过端点最大值，因此路径余项的一致范数也依概率趋零。
>
> 为识别方差，先由 Cauchy–Schwarz 得
> $$
> |E(X_0X_k)|
> =|E(X_0E[X_k\mid\mathcal F_0])|
> \le\|X_0\|_2\|E[X_0\mid\mathcal F_{-k}]\|_2.
> $$
> 右侧可和，所以协方差级数绝对收敛。平稳性随后给出
> $$
> \frac{ES_n^2}{n}
> =EX_0^2+2\sum_{k=1}^{n-1}\left(1-\frac{k}{n}\right)E(X_0X_k)
> \longrightarrow EX_0^2+2\sum_{k=1}^\infty E(X_0X_k).
> $$
> 另一方面 $EM_n^2/n=ED^2$，而 $\|S_n-M_n\|_2/\sqrt n\le2\|Z\|_2/\sqrt n\to0$。故该方差极限就是 $ED^2\ge0$，完成识别。

## 混合系数的充分条件

在同样的严格平稳、遍历和零均值假设下，若某个 $\delta>0$ 满足
$$
E|X_0|^{2+\delta}<\infty,
\qquad
\sum_{n=1}^\infty\alpha_1(n)^{\delta/[2(2+\delta)]}<\infty,
$$
其中 $\alpha_1(n)=\alpha(\mathcal F_{-n},\sigma(X_0))$ 为[过去与单点的混合系数（Past-to-single-variable mixing coefficient）](Mixing-processes.md)，则上述函数极限定理及绝对收敛的方差公式成立。这是 Durrett Theorem 8.3.7 的条件。[^1]

> [!proof]- 混合条件推出条件期望可和
> 条件期望的 $L^2$ 范数有对偶表示
> $$
> \|E[X_0\mid\mathcal F_{-n}]\|_2
> =\sup_{Y\in L^2(\mathcal F_{-n}),\,\|Y\|_2\le1}|E(X_0Y)|.
> $$
> 上界来自 Cauchy–Schwarz；若条件期望非零，以它除以自身范数取 $Y$ 即得等号。对 [混合协方差估计（Mixing covariance inequality）](Mixing-processes.md)，取 $p=2+\delta$、$q=2$，注意 $EX_0=0$ 及
> $$
> 1-\frac1{2+\delta}-\frac12=\frac{\delta}{2(2+\delta)},
> $$
> 得到
> $$
> \|E[X_0\mid\mathcal F_{-n}]\|_2
> \le8\|X_0\|_{2+\delta}\alpha_1(n)^{\delta/[2(2+\delta)]}.
> $$
> 对 $n$ 求和即满足前一版本的条件。

若用[强混合系数（Strong mixing coefficient）](Mixing-processes.md) $\alpha(n)$ 替换上述 $\alpha_1(n)$，同样的可和条件也充分，因为 $\alpha_1(n)\le\alpha(n)$；而强混合自动保证遍历性。这里没有把这个充分条件称为最优衰减率。

## 有限依赖与退化方差

若序列严格平稳、$m$-依赖、零均值且平方可积，则 $E[X_0\mid\mathcal F_{-n}]=0$ 对 $n>m$ 成立，故不需要额外的 $2+\delta$ 阶矩条件。方差化为
$$
\sigma^2=EX_0^2+2\sum_{k=1}^mE(X_0X_k).
$$
它可能为零。例如 $X_k=\xi_k-\xi_{k-1}$，其中 $\xi_k$ 独立同分布、零均值、方差 $v<\infty$，则 $EX_0^2=2v$、$E(X_0X_1)=-v$，其余协方差为零。所以 $\sigma^2=0$，而 $S_n=\xi_n-\xi_0$。这是退化极限，不能再除以 $\sigma$ 写成标准正态结论。

## 平稳与遍历不足以保证中心极限定理

令 $1/2<a<1$，$\xi_j$ 为双边独立标准正态变量，取
$$
X_k=\sum_{r=0}^\infty(r+1)^{-a}\xi_{k-r}.
$$
系数平方可和，级数在 $L^2$ 中定义出零均值高斯过程。它是独立序列在移位下的可测函数，因此严格平稳且遍历。这个移动平均例子来自 Durrett Example 8.3.5；以下用高斯创新直接检查 $\sqrt n$ 归一化为什么失效。[^1]

对 $1\le j\le\lfloor n/2\rfloor$，$S_n$ 中 $\xi_j$ 的系数为 $\sum_{r=0}^{n-j}(r+1)^{-a}\ge c n^{1-a}$，其中 $c>0$ 与 $n,j$ 无关。独立性给出
$$
\operatorname{Var}(S_n)\ge c' n^{3-2a},
\qquad
\operatorname{Var}(S_n/\sqrt n)\longrightarrow\infty.
$$
由于 $S_n/\sqrt n$ 本身是中心高斯变量，其落在任意固定有界区间的概率趋于零，因而不[紧（Tight）](Tightness.md)，不可能收敛到有限方差正态分布。这里利用的是高斯分布与方差发散的结合；一般随机变量仅有方差发散不能推出不紧。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 8.3.1–8.3.2、8.3.7；Lemma 8.3.6；Examples 8.3.3、8.3.5。
