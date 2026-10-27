---
title: "Kolmogorov 三列级数定理（Kolmogorov three-series theorem）"
aliases: ["Kolmogorov 三列级数定理", "Kolmogorov three-series theorem"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



三列级数定理给出独立随机级数几乎必然收敛的充要条件，分别控制大跳跃、截断后的均值漂移和中心化波动。[^1]

## 定理

设 $X_n$ 相互独立。固定 $A>0$，令 $Y_n=X_n1_{\{|X_n|\le A\}}$。则 $\sum_nX_n$ 几乎必然收敛到有限实数，当且仅当
$$
\sum_nP(|X_n|>A)<\infty,\qquad
\sum_n\mathbb EY_n\ \text{收敛},\qquad
\sum_n\operatorname{Var}(Y_n)<\infty.
$$
只要对一个 $A>0$ 成立，就对每一个 $A>0$ 成立。第二个级数允许条件收敛。

> [!proof]- 充分性的证明
> 第三个条件及 [Kolmogorov 极大不等式（Kolmogorov maximal inequality）](Kolmogorov-maximal-inequality.md)的级数推论给出 $\sum_n(Y_n-\mathbb EY_n)$ 几乎必然收敛。加上第二个级数，得 $\sum_nY_n$ 收敛。第一个条件与 Borel–Cantelli 引理说明 $X_n=Y_n$ 最终成立，因此原级数也收敛。

> [!proof]- 证明：必要性
> 设 $\sum_nX_n$ 几乎必然收敛，则 $X_n\to0$ 几乎必然。若 $\sum_nP(|X_n|>A)=\infty$，独立版本的 [Borel–Cantelli 引理（Borel–Cantelli lemma）](Borel-Cantelli-lemma.md)会给出 $|X_n|>A$ 无限多次发生，矛盾。因此第一条件成立，且 $\sum_nY_n$ 也几乎必然收敛。
>
> 若 $c_n=\sum_{k\le n}\operatorname{Var}(Y_k)\to\infty$，则中心化三角阵 $Z_{nk}=(Y_k-\mathbb EY_k)/\sqrt{c_n}$ 的总方差为 $1$，并有 $|Z_{nk}|\le2A/\sqrt{c_n}$。故每个固定阈值的 Lindeberg 和最终为零。由 [Lindeberg–Feller 定理（Lindeberg–Feller theorem）](Lindeberg-Feller-theorem.md)，
> $$
> U_n=\frac{\sum_{k\le n}(Y_k-\mathbb EY_k)}{\sqrt{c_n}}\Rightarrow N(0,1).
> $$
> 另一方面，$V_n=\sum_{k\le n}Y_k/\sqrt{c_n}\to0$ 几乎必然。由 [Slutsky 定理（Slutsky theorem）](Slutsky-theorem.md)，确定数列 $U_n-V_n=-\sum_{k\le n}\mathbb EY_k/\sqrt{c_n}$ 也应依分布趋于 $N(0,1)$，不可能：确定数的特征函数模恒为 $1$，而标准正态特征函数在非零点的模小于 $1$。故第三条件成立。
>
> 再由 Kolmogorov 级数收敛判据，$\sum_n(Y_n-\mathbb EY_n)$ 几乎必然收敛。它与已知收敛的 $\sum_nY_n$ 作差，得到确定级数 $\sum_n\mathbb EY_n$ 收敛，即第二条件。此论证对应 Durrett §3.4.2 Example 3.4.12。

## 随机调和级数

令 $\varepsilon_n$ 独立且各以概率 $1/2$ 取 $\pm1$。对 $X_n=\varepsilon_n/n^\alpha$、$\alpha>0$，均值级数为零，固定阈值的大跳跃最终消失，方差级数是 $\sum_n n^{-2\alpha}$。因此该随机级数几乎必然收敛当且仅当 $\alpha>1/2$；绝对收敛则当且仅当 $\alpha>1$。

**注**：独立性保证尾部事件与方差论证成立。任意相关序列不能套用这个充要判据。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §2.5，Theorem 2.5.8；§3.4.2，Example 3.4.12。
