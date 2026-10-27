---
title: "Hoeffding 不等式（Hoeffding inequality）"
aliases: ["Hoeffding 不等式", "Hoeffding inequality"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Hoeffding 不等式利用各变量的确定性取值区间，给出独立和偏离均值的指数尾界。它不需要先计算每个变量的方差。[^1]

## 定理

设 $X_1,\ldots,X_n$ 相互独立，且 $a_j\le X_j\le b_j$ 几乎必然。记 $V=\sum_j(b_j-a_j)^2>0$，则对 $u>0$，
$$
P\left(\sum_j(X_j-\mathbb EX_j)\ge u\right)\le e^{-2u^2/V},
\qquad
P\left(\left|\sum_j(X_j-\mathbb EX_j)\right|\ge u\right)\le2e^{-2u^2/V}.
$$
当 $V=0$ 时，每个变量几乎必然为常数，中心化和恒为零。

> [!proof]- 证明
> 先设 $X\in[a,b]$，令 $K(t)=\log\mathbb Ee^{t(X-\mathbb EX)}$。有界性允许任意阶微分；指数倾斜下的概率测度仍支撑于 $[a,b]$，因此
> $$
> K''(t)=\operatorname{Var}_t(X)\le\mathbb E_t\left(X-\frac{a+b}2\right)^2\le\frac{(b-a)^2}4.
> $$
> 由于 $K(0)=K'(0)=0$，两次积分得到 $K(t)\le t^2(b-a)^2/8$。独立性因而给出 $\mathbb E\exp(t\sum_j(X_j-\mathbb EX_j))\le e^{t^2V/8}$。
>
> 对 $t>0$ 使用指数 Markov 不等式，得尾概率至多 $\exp(-tu+t^2V/8)$。最小化取 $t=4u/V$，得到 $e^{-2u^2/V}$。再对 $-X_j$ 使用相同结论，取并集得到双侧界。此处给出常数 $2$ 的补充证明；Tao 的 Proposition 3 先证明未指定常数版本，并注明可取 $2$。

## Bernoulli 样本平均

若 $X_j$ 独立且取值于 $[0,1]$，则
$$
P\left(\left|n^{-1}\sum_jX_j-n^{-1}\sum_j\mathbb EX_j\right|\ge\varepsilon\right)
\le2e^{-2n\varepsilon^2}.
$$
它给出所有样本量的非渐近界。对无界重尾变量，区间假设不成立，不能直接沿用这个界；指数矩与其他尾部条件见[矩母函数（Moment-generating function）](Moment-generating-function.md)。


独立随机和的另一种处理方法是引入独立副本及随机符号，见[对称化（Symmetrization）](Symmetrization.md)；它改变估计对象的结构，具体常数和适用函数类须按该条的命题使用。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Terence Tao, *275A, Notes 5: Variants of the central limit theorem*, 2015，Proposition 3，式 (6)；第 5 页。
