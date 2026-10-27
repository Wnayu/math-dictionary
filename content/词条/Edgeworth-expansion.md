---
title: "Edgeworth 展开（Edgeworth expansion）"
aliases: ["Edgeworth 展开", "Edgeworth expansion", "Hermite多项式", "Hermite polynomials"]
type: theorem
tags: [probability]
draft: false
publish: true
status: needs-review
verified: false
---



Edgeworth 展开在高斯近似上增加由累积量决定的修正项，以描述中心极限定理误差的具体形状。它比形式 Taylor 展开更强，因为结论包含统一的余项控制。[^1]

## 一阶分布函数展开

设 $X_1,X_2,\ldots$ 独立同分布，$\mathbb EX_1=0$、$\mathbb EX_1^2=\sigma^2>0$、$\mathbb E|X_1|^3<\infty$，且分布非格点，即不存在 $a\in\mathbb R,h>0$ 使 $P(X_1\in a+h\mathbb Z)=1$。记 $\kappa_3=\mathbb EX_1^3$，令 $S_n=\sum_{j=1}^nX_j$，并令 $F_n$ 为 $S_n/(\sigma\sqrt n)$ 的分布函数。则
$$
\sup_{x\in\mathbb R}\left|
F_n(x)-\Phi(x)-\frac{\kappa_3}{6\sigma^3\sqrt n}(1-x^2)\phi(x)
\right|=o(n^{-1/2}),
$$
其中 $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$、$\Phi(x)=\int_{-\infty}^x\phi(u)\,du$，$o(n^{-1/2})$ 指该上确界乘 $\sqrt n$ 后趋零。

## 累积量与 Hermite 多项式

概率论约定下的 Hermite 多项式（Hermite polynomials）为
$$
H_k(x)=(-1)^ke^{x^2/2}\frac{d^k}{dx^k}e^{-x^2/2}.
$$
例如 $H_2(x)=x^2-1$、$H_3(x)=x^3-3x$。所以一阶分布函数修正项也可写为 $-\kappa_3H_2(x)\phi(x)/(6\sigma^3\sqrt n)$。$\kappa_3$ 是第三[累积量（Cumulant）](Cumulant.md)，定义在其基础词条。

> [!proof]- 证明思路
> 零附近的对数特征函数展开为
> $$
> n\log\varphi_X(t/(\sigma\sqrt n))
> =-t^2/2+\frac{\kappa_3(it)^3}{6\sigma^3\sqrt n}+o(n^{-1/2})
> $$
> （此式对固定 $t$ 成立）。保留一阶项后得到 $e^{-t^2/2}[1+\kappa_3(it)^3/(6\sigma^3\sqrt n)]$；其傅里叶反演产生 $H_3\phi$ 的密度修正，而 $\frac d{dx}[-H_2(x)\phi(x)]=H_3(x)\phi(x)$ 给出上述分布函数修正。
>
> 固定频率展开还不够得到一致余项。完整证明用 Esseen 平滑不等式，将频率积分分成零附近与远离零的部分；非格点性使特征函数在每个不含零的紧频率区间上模严格小于 $1$。有限三阶绝对矩控制零附近的余项，最终得到统一的 $o(n^{-1/2})$。详细估计见 Jing Theorem 11.4.1 的证明，尤其式 (4.13)–(4.15)。

## 格点修正与高阶展开

对格点分布，分布函数有与 $n^{-1/2}$ 同阶的跳跃；不能不加修正就使用以上连续近似式，需要额外的格点振荡项。高阶 Edgeworth 展开还需要相应更高阶矩及定理所要求的平滑条件，不能把任意多个形式累积量项直接当作带误差界的渐近展开。

若第三累积量为零，本版本的一阶修正消失；这并不自动给出 $O(n^{-1})$ 的误差。与仅控制误差大小的 [Berry–Esseen 定理（Berry–Esseen theorem）](Berry-Esseen-theorem.md)相比，本条进一步确定了第一个修正项。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Bing-Yi Jing, *Advanced Probability Theory*, lecture notes, July 2012，§11.4，式 (4.11)–(4.15)；Theorem 11.4.1。
