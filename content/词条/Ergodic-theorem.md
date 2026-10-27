---
title: "遍历定理（Ergodic theorem）"
aliases: ["遍历定理", "Ergodic theorem", "Birkhoff遍历定理", "Birkhoff ergodic theorem", "最大遍历引理", "Maximal ergodic lemma"]
type: theorem
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Birkhoff 遍历定理把平稳系统的时间平均识别为不变信息下的条件均值。[^1]

## 定义

设 $\theta$ 是概率空间上的[保测变换（Measure-preserving transformation）](Stationary-process.md)，$f\in L^1(P)$，$\mathcal I$ 为其不变 $\sigma$-代数。则
$$
A_nf=\frac1n\sum_{k=0}^{n-1}f\circ\theta^k
\longrightarrow \mathbb E[f\mid\mathcal I]
\quad\text{几乎必然且在 }L^1\text{ 中}.
$$
若系统遍历，右侧等于常数 $\mathbb Ef$。无需假定独立，也不要求 $\theta$ 可逆。

## 最大遍历估计与证明

> [!proof]- 证明
> 先证明最大遍历引理。对可积 $g$，令 $S_k=\sum_{j=0}^{k-1}g\circ\theta^j$、$M_n=\max(0,S_1,\ldots,S_n)$、$E_n=\{M_n>0\}$。逐点有 $g+M_n\circ\theta\ge\max_{1\le k\le n}S_k$。在 $E_n$ 上右侧是 $M_n$，在其补集上 $M_n=0$、$M_n\circ\theta\ge0$，故
> $$
> \int_{E_n}g\,dP\ge\int_{E_n}(M_n-M_n\circ\theta)\,dP
> \ge\int(M_n-M_n\circ\theta)\,dP=0.
> $$
>
> 记 $h=\mathbb E[f\mid\mathcal I]$，则 $h\circ\theta=h$ 几乎必然，只须证明 $\mathbb E[f\mid\mathcal I]=0$ 时 $A_nf\to0$。由 $f\in L^1$，$\sum_nP(|f\circ\theta^n|>\varepsilon n)<\infty$；Borel–Cantelli 给出 $f\circ\theta^n/n\to0$。因此 $\limsup A_nf$ 在模零意义下不变。
>
> 固定 $\varepsilon>0$，令 $D=\{\limsup A_nf>\varepsilon\}\in\mathcal I$，$g=(f-\varepsilon)1_D$。上面的 $E_n$ 对此 $g$ 递增，且 $\bigcup_nE_n=D$ 模零成立。由控制收敛及最大遍历引理，
> $$
> 0\le\int_Dg\,dP=\int_Df\,dP-\varepsilon P(D)
> =-\varepsilon P(D).
> $$
> 所以 $P(D)=0$。令 $\varepsilon\downarrow0$ 得 $\limsup A_nf\le0$；对 $-f$ 使用同样论证，得到几乎必然收敛。
>
> 为证 $L^1$ 收敛，令 $f_K=f1_{\{|f|\le K\}}$。有界情形由控制收敛已成立，而保测性与条件期望压缩性给出
> $$
> \|A_n(f-f_K)\|_1+\|\mathbb E[f-f_K\mid\mathcal I]\|_1
> \le2\|f-f_K\|_1.
> $$
> 先令 $n\to\infty$，再令 $K\to\infty$，即得结论。

## 访问频率与限制

取 $f=1_A$，时间平均就是路径落在 $A$ 中的比例。遍历时它趋于 $P(A)$；一般情况下则趋于 $\mathbb E[1_A\mid\mathcal I]$，可能随样本路径改变。平稳但不遍历的常值随机序列见[平稳过程（Stationary process）](Stationary-process.md)。


若累加结构变为满足次可加关系的过程，结论与假设应改用[次可加遍历定理（Subadditive ergodic theorem）](Subadditive-ergodic-theorem.md)，不能只把普通遍历平均的公式换一个名称。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorem 6.2.1；Lemma 6.2.2。
