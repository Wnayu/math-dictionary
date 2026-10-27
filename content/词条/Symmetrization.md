---
title: "对称化（Symmetrization）"
aliases: ["对称化", "Symmetrization"]
type: concept
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



概率论中的对称化通过引入独立副本，把非对称变量或中心化和化为对称变量的估计问题。这里的对称是关于零的分布对称，而不是密度或函数的形式对称。

## 定义

若 $X'$ 是 $X$ 的独立同分布副本，则 $X-X'$ 与 $-(X-X')$ 同分布，称为一种对称化。由独立性，其特征函数为
$$
\varphi_{X-X'}(t)=\varphi_X(t)\varphi_X(-t)=|\varphi_X(t)|^2.
$$
这在处理随机级数和稳定极限时可去掉部分中心化项。[^1]

## 中心化和的矩估计

设独立变量 $X_1,\ldots,X_n$ 可积，$X'_1,\ldots,X'_n$ 为整组独立副本。对 $p\ge1$，
$$
\mathbb E\left|\sum_j(X_j-\mathbb EX_j)\right|^p
\le\mathbb E\left|\sum_j(X_j-X'_j)\right|^p,
$$
右侧可以为无穷。

> [!proof]- 证明
> 固定原变量 $X_1,\ldots,X_n$ 后，对副本取期望，得到
> $$
> \sum_j(X_j-\mathbb EX_j)=\mathbb E'\sum_j(X_j-X'_j).
> $$
> 函数 $x\mapsto|x|^p$ 在 $p\ge1$ 时凸，由 Jensen 不等式先对副本积分，再对原变量积分即得结论。若右侧无穷，不等式仍成立。

再令 $\varepsilon_j$ 为独立的随机符号，且与两组变量独立，各以概率 $1/2$ 取 $\pm1$。差变量相互独立且对称，所以 $(X_j-X'_j)_j$ 与 $(\varepsilon_j(X_j-X'_j))_j$ 同分布。随机符号常用于进一步估计这些矩；其分布也称 Rademacher 分布（Rademacher distribution）。

**注**：副本必须与原变量独立。若直接令 $X'=X$，差恒为零，既失去原分布信息，也不能得到上述中心化估计。矩不等式是本条根据条件 Jensen 补充的推导；Tao 所引练习采用独立副本对称化研究有限方差条件。[^2]

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Bing-Yi Jing, *Advanced Probability Theory*, lecture notes, July 2012，第 177 页。

[^2]: Terence Tao, *275A, Notes 4: The central limit theorem*, 2015，Exercise 40(iii)。


