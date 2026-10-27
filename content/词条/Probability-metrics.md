---
title: "概率度量（Probability metrics）"
aliases: ["概率度量", "Probability metrics", "Ky Fan度量", "Ky Fan metric", "Lévy度量", "Lévy metric"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



“概率度量”可以比较同一空间上随机变量的差，也可以只比较它们的分布。这两类度量编码的收敛方式不同。[^1]

## Ky Fan 度量

对共同概率空间上的实值变量，定义
$$
d_{\mathrm{KF}}(X,Y)=\inf\{\varepsilon>0:P(|X-Y|>\varepsilon)\le\varepsilon\}.
$$
把几乎必然相等的随机变量识别后，它是度量，且 $d_{\mathrm{KF}}(X_n,X)\to0$ 等价于[依概率收敛（Convergence in probability）](Convergence-of-random-variables.md)。在未识别零距离对象的变量集合上，它是伪度量（pseudometric）：不同对象可以有距离零。

> [!proof]- 证明
> 若 $X_n\xrightarrow PX$，固定 $\varepsilon>0$，充分大时 $P(|X_n-X|>\varepsilon)\le\varepsilon$，故距离至多 $\varepsilon$。反过来若距离趋零，对固定 $\eta>0$ 取趋零且小于 $\eta$ 的可行阈值 $\varepsilon_n$，就有 $P(|X_n-X|>\eta)\le\varepsilon_n\to0$。
>
> 三角不等式来自 $\{|X-Z|>a+b\}\subseteq\{|X-Y|>a\}\cup\{|Y-Z|>b\}$，然后对可行的 $a,b$ 取下确界。

另一常用有界度量为 $d(X,Y)=\mathbb E[1\wedge|X-Y|]$，其中 $a\wedge b=\min(a,b)$；它同样刻画依概率收敛。

## Lévy 度量

对分布函数 $F,G$，定义
$$
d_{\mathrm L}(F,G)=\inf\{\varepsilon>0:
F(x-\varepsilon)-\varepsilon\le G(x)\le F(x+\varepsilon)+\varepsilon\ \text{对所有 }x\}.
$$
它是分布函数集合上的度量，且 $d_{\mathrm L}(F_n,F)\to0$ 等价于 $F_n\Rightarrow F$。这些不等式允许水平和竖直方向同时发生小偏移，所以能容纳原子的微小平移；例如 $\delta_{1/n}\Rightarrow\delta_0$。

若仅以 $\sup_x|F_n(x)-F(x)|$ 衡量，则原子平移的距离始终为 $1$，因此这种一致距离一般比弱收敛更强。只有当极限分布函数连续时，弱收敛才推出分布函数的一致收敛。

**注**：Ky Fan 度量依赖实际耦合；Lévy 度量只依赖边缘分布。不能把两者的收敛结论互换。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，Exercises 2.3.6、3.2.6–3.2.8。
