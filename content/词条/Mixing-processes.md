---
title: "混合过程（Mixing processes）"
aliases: ["混合过程", "Mixing processes", "强混合", "Strong mixing", "α混合", "Alpha mixing", "强混合系数", "Strong mixing coefficient", "m依赖", "m-dependence"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



混合条件量化相隔较远的两组信息偏离独立性的程度。不同混合系数比较的对象不同；在中心极限定理中，必须同时写明系数定义和衰减条件。[^D]

## 定义

在同一[概率空间（Probability space）](Probability-measure.md)上，对两个子 $\sigma$-代数 $\mathcal G,\mathcal H$，定义
$$
\alpha(\mathcal G,\mathcal H)
=\sup_{A\in\mathcal G,\,B\in\mathcal H}
|P(A\cap B)-P(A)P(B)|.
$$
它属于 $[0,1/4]$，且等于零当且仅当这两个 $\sigma$-代数[独立（Independent）](Independence.md)。上界由指标变量的 Cauchy–Schwarz 不等式及 $P(A)(1-P(A))\le1/4$ 得到。

对双边严格[平稳序列（Stationary sequence）](Stationary-process.md) $(X_k)_{k\in\mathbb Z}$，令
$$
\mathcal F_j=\sigma(X_k:k\le j),\qquad
\mathcal G_j=\sigma(X_k:k\ge j).
$$
本条的强混合系数为
$$
\alpha(n)=\alpha(\mathcal F_0,\mathcal G_n)
=\alpha(\mathcal F_{-n},\mathcal G_0),\qquad n\ge1.
$$
等号来自严格平稳性。$\alpha(n)$ 随 $n$ 不增；若 $\alpha(n)\to0$，称序列强混合（strongly mixing），也称 $\alpha$-混合（alpha mixing）。本条只讨论上述严格平稳的离散参数情形。

另定义过去与单个观测之间的系数
$$
\alpha_1(n)=\alpha(\mathcal F_{-n},\sigma(X_0))
=\alpha(\mathcal F_0,\sigma(X_n))\le\alpha(n).
$$
这里第二个信息集合仅由一个随机变量生成，不能把它与整个未来的信息集合混同。

**注**：Durrett §8.3.1 把本条的 $\alpha_1(n)$ 记作 $\alpha(n)$，把本条的强混合系数记作 $\bar\alpha(n)$。引用该节的定理时，要先核对这项记号差异。[平稳序列的中心极限定理（Central limit theorem for stationary sequences）](Stationary-central-limit-theorem.md)按这里的记号区分两者。

## 强混合与遍历性

严格平稳且强混合的序列必然[遍历（Ergodic）](Stationary-process.md)，反向不成立。

> [!proof]- 强混合推出遍历性的证明
> 在双边路径空间上写移位 $\theta(x)_k=x_{k+1}$。令 $A$ 为模零不变事件。给定 $\varepsilon>0$，有限坐标的 $\sigma$-代数递增生成整个路径 $\sigma$-代数，所以可取某个 $m$ 及 $C\in\sigma(X_{-m},\ldots,X_m)$，使 $P(A\triangle C)<\varepsilon$。
>
> 当 $n>2m$，事件 $C$ 与 $\theta^{-n}C$ 分别使用坐标 $[-m,m]$、$[n-m,n+m]$。平稳性及混合系数给出
> $$
> |P(C\cap\theta^{-n}C)-P(C)^2|\le\alpha(n-2m).
> $$
> 又 $A=\theta^{-n}A$ 模零，而移位保持概率，因此
> $$
> |P(A)-P(A)^2|\le4\varepsilon+\alpha(n-2m).
> $$
> 先令 $n\to\infty$，再令 $\varepsilon\downarrow0$，得 $P(A)\in\{0,1\}$。

反向的例子是随机初始符号的交替序列：令 $U$ 以相同概率取 $-1,1$，$X_k=(-1)^kU$。它的路径分布只包含两条路径，移位互换二者，所以严格平稳且遍历。但是相距任意远的观测仍完全确定同一个初始符号 $U$，故 $\alpha(n)=1/4$，并不强混合。

## 协方差估计

设 $U,V$ 为实值随机变量，$U$ 对 $\mathcal G$ 可测，$V$ 对 $\mathcal H$ 可测。若 $p,q\in(1,\infty)$ 且 $1/p+1/q<1$，则
$$
|\operatorname{Cov}(U,V)|
\le8\|U\|_p\|V\|_q
\alpha(\mathcal G,\mathcal H)^{1-1/p-1/q}.
$$
这里 $\|U\|_p=(E|U|^p)^{1/p}$，并假设两项范数有限；[协方差（Covariance）](Covariance.md)为 $E(UV)-EU\,EV$。这是 Durrett Lemma 8.3.6 在本条所需指数范围内的形式。[^D]

> [!proof]- 截断证明
> 记 $a=\alpha(\mathcal G,\mathcal H)$。$a=0$ 时独立性给出结论，以下设 $a>0$。若 $|U|\le u$、$|V|\le v$，将 $U+u,V+v$ 写成指标函数的层积分，并对协方差使用 Fubini，得到
> $$
> |\operatorname{Cov}(U,V)|\le4uv\,a.
> $$
> 对一般 $U\in L^p$ 和有界 $V$，令 $c=\|U\|_p a^{-1/p}$，分解 $U=U_1+U_2$，其中 $U_1=U1_{\{|U|\le c\}}$。有
> $$
> E|U_2|\le c^{1-p}\|U\|_p^p,
> \qquad
> |\operatorname{Cov}(U_2,V)|\le2\|V\|_\infty E|U_2|.
> $$
> 与有界情形合并得
> $$
> |\operatorname{Cov}(U,V)|\le6\|U\|_p\|V\|_\infty a^{1-1/p}.
> $$
> 最后令 $d=\|V\|_q a^{-1/q}$，分解 $V=V_1+V_2$，其中 $V_1=V1_{\{|V|\le d\}}$。记共轭指数 $p'=p/(p-1)$；由假设 $q>p'$，
> $$
> \|V_2\|_{p'}
> \le d^{1-q/p'}\|V\|_q^{q/p'}
> =\|V\|_q a^{1/p'-1/q}.
> $$
> 用前一步控制 $\operatorname{Cov}(U,V_1)$，用 Hölder 控制 $\operatorname{Cov}(U,V_2)$，得到
> $$
> |\operatorname{Cov}(U,V)|
> \le6\|U\|_p\|V\|_q a^{1-1/p-1/q}
> +2\|U\|_p\|V\|_q a^{1-1/p-1/q},
> $$
> 即所需不等式。若某个范数为零，直接得到协方差为零，不必进行截断。

## 有限依赖范围

固定非负整数 $m$，若对每个整数 $j$，$\sigma(X_k:k\le j)$ 与 $\sigma(X_k:k\ge j+m+1)$ 独立，称序列 $m$-依赖（$m$-dependent）。对平稳序列，这等价于 $\alpha(n)=0$ 对所有 $n>m$ 成立，因此它强混合且遍历。

例如，若 $(\xi_k)_{k\in\mathbb Z}$ 独立同分布，$f$ 可测，则 $X_k=f(\xi_k,\ldots,\xi_{k+m})$ 严格平稳且 $m$-依赖。独立同分布序列是 $m=0$ 的情形。有限二阶矩下的相应极限定理见[平稳序列的中心极限定理（Central limit theorem for stationary sequences）](Stationary-central-limit-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^D]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §8.3，Example 8.3.3、Lemma 8.3.6、Theorem 8.3.7 及其后关于 strong mixing 的注；强混合推出遍历性的逼近证明、交替序列的比较由本条展开。
