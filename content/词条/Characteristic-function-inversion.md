---
title: "特征函数反演（Characteristic function inversion）"
aliases: ["特征函数反演", "Characteristic function inversion"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



反演公式说明[特征函数（Characteristic function）](Characteristic-function.md)包含全部分布信息，也说明何时可以由它恢复概率密度。[^1]

## 区间反演公式

设 $\mu$ 为实轴上的概率测度，$\varphi(t)=\int e^{itx}\mu(dx)$。对任意有限实数 $a<b$，
$$
\lim_{T\to\infty}\frac1{2\pi}\int_{-T}^{T}
\frac{e^{-ita}-e^{-itb}}{it}\varphi(t)\,dt
=\mu((a,b))+\frac{\mu\{a\}+\mu\{b\}}2.
$$
$t=0$ 处的商以连续延拓 $b-a$ 解释。端点原子的半权重不能省略；仅当两个端点均无原子时，右侧等于 $\mu((a,b))$。

> [!proof]- 证明
> 固定 $T$，交换有限区间上的积分后，左侧为 $\int K_T(x)\mu(dx)$，其中
> $$
> K_T(x)=\frac1\pi\int_0^T\frac{\sin(t(x-a))-\sin(t(x-b))}{t}\,dt.
> $$
> Dirichlet 积分 $\int_0^\infty\sin u/u\,du=\pi/2$ 给出 $K_T(x)$ 的逐点极限：在 $(a,b)$ 上为 $1$，端点为 $1/2$，区间外为 $0$。而 $\int_0^v\sin u/u\,du$ 对所有实数 $v$ 一致有界，故 $K_T$ 一致有界，控制收敛给出结论。这里使用的 Dirichlet 积分是傅里叶分析中的标准积分；本论证以该积分恒等式为前提。

## 可积特征函数与密度

若 $\int_{\mathbb R}|\varphi(t)|\,dt<\infty$，则 $\mu$ 具有有界连续的 Lebesgue 密度
$$
f(x)=\frac1{2\pi}\int_{\mathbb R}e^{-itx}\varphi(t)\,dt.
$$
该积分绝对收敛；连续性由[控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md)得到。区间反演及 Fubini 先给出 $\mu((a,b))+[\mu\{a\}+\mu\{b\}]/2=\int_a^bf(x)\,dx$。取 $a=x-\varepsilon$、$b=x+\varepsilon$ 并令 $\varepsilon\downarrow0$，右侧绝对值不超过 $2\varepsilon\|f\|_\infty$，故 $\mu\{x\}=0$。于是所有端点原子消失，得到 $\mu((a,b))=\int_a^bf(x)\,dx$；这也推出 $f\ge0$ 以及 $\int f=1$。区间反演同时说明：两个概率测度具有相同特征函数，就在所有共同的无原子端点区间上一致，进而由[测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)完全相同。

**注**：有密度不保证特征函数绝对可积。例如 $[0,1]$ 均匀分布的特征函数 $(e^{it}-1)/(it)$ 的绝对值不可积。上面的绝对可积条件是方便的充分条件。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §3.3.1，Theorems 3.3.11、3.3.14。
