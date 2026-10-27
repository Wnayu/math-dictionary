---
title: "强大数定律（Strong law of large numbers）"
aliases: ["强大数定律", "Strong law of large numbers"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



强大数定律控制样本平均在几乎每一条无限样本路径上的长期行为。[^1]

## 独立同分布可积版本

若 $X_n$ 独立同分布，$\mathbb E|X_1|<\infty$，则
$$
\frac{X_1+\cdots+X_n}{n}\longrightarrow\mathbb EX_1\quad\text{几乎必然}.
$$
[几乎必然（Almost surely）](Almost-everywhere.md)指存在一个概率为 $1$ 的事件，在该事件上通常数列极限成立。以下证明使用随机级数与[Kronecker 引理（Kronecker lemma）](Kronecker-lemma.md)。

> [!proof]- 证明
> 令 $Y_k=X_k1_{\{|X_k|\le k\}}$。由尾积分公式，
> $$
> \sum_{k\ge1}P(X_k\ne Y_k)=\sum_{k\ge1}P(|X_1|>k)\le\mathbb E|X_1|<\infty.
> $$
> [Borel–Cantelli 引理（Borel–Cantelli lemma）](Borel-Cantelli-lemma.md)说明几乎必然只有有限项发生截断，故两组部分和之差除以 $n$ 趋零。
>
> 再证明方差可求和。非负项交换求和后，
> $$
> \sum_{k\ge1}\frac{\operatorname{Var}(Y_k)}{k^2}
> \le\mathbb E\!\left[X_1^2\sum_{k\ge\max(1,\lceil|X_1|\rceil)}k^{-2}\right]
> \le C\mathbb E|X_1|<\infty.
> $$
> 最后的不等式在 $|X_1|\le1$ 时用 $X_1^2\le|X_1|$，在 $|X_1|>1$ 时用 $\sum_{k\ge m}k^{-2}\le2/m$，常数 $C$ 可取固定有限值。
>
> 独立性及 [Kolmogorov 级数收敛判据（Kolmogorov convergence criterion）](Kolmogorov-maximal-inequality.md)给出 $\sum_k(Y_k-\mathbb EY_k)/k$ 几乎必然收敛，Kronecker 引理因此给出
> $$
> \frac1n\sum_{k\le n}(Y_k-\mathbb EY_k)\to0\quad\text{几乎必然}.
> $$
> 控制收敛给出 $\mathbb EY_k\to\mathbb EX_1$，其 Cesàro 平均亦趋于同一极限；加回有限次截断误差即得结论。

## 两两独立版本

Etemadi 的版本把“相互独立”放宽为“两两独立”，仍要求同分布与绝对可积。上面使用独立级数的证明不能直接用于这个更弱的假设。Durrett Theorem 2.4.1 的证明改用非负变量、几何子列上的方差估计和单调夹逼；该版本的完整论证见所引教材。

## 可积性的必要性

对独立同分布序列，若 $\mathbb E|X_1|=\infty$，则 $\sum_nP(|X_n|>n)=\infty$，由[Borel–Cantelli 引理（Borel–Cantelli lemma）](Borel-Cantelli-lemma.md)的独立版本，$|X_n|>n$ 无限多次发生。但若 $S_n/n$ 收敛到有限值，就有
$$
X_n/n=S_n/n-\frac{n-1}{n}\,S_{n-1}/(n-1)\to0,
$$
产生矛盾。因此此时 $S_n/n$ 几乎必然不可能收敛到有限值。若正部期望无穷、负部期望有限，则另有 $S_n/n\to+\infty$ 的扩展结论。


大数定律不单独给出中心化和的精确波动尺度。独立同分布、零均值且有限正方差情形的几乎必然上下极限见[重对数律（Law of the iterated logarithm）](Law-of-the-iterated-logarithm.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Theorems 2.3.8、2.4.1、2.4.5、2.5.10。
