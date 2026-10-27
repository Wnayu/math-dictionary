---
title: "Lp 对偶定理（Duality of Lp）"
aliases: ["Lp duality", "Lp 对偶", "Dual of Lp"]
tags: [measure-theory]
type: theorem
draft: false
publish: true
status: needs-review
verified: false
---



Lp 对偶定理将抽象的[连续线性泛函（continuous linear functional）](Bounded-linear-functional.md)表示为对某个函数的积分配对，是 [Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)在函数空间中的对应形式。[^1]

## 定理

设 $(X,\mathcal A,\mu)$ 为 $\sigma$-有限测度空间，$1\le p<\infty$，$p'$ 为[共轭指数（Conjugate exponent）](Conjugate-exponent.md)，所有 $L^p$ 均指 [Lp 空间（Lp space）](Lp-space.md) $L^p(\mu;\mathbb C)$。每个连续线性泛函 $\Lambda:L^p\to\mathbb C$ 唯一地表示为
$$
\Lambda(f)=\int f\overline g\,d\mu,\qquad g\in L^{p'},
\quad\|\Lambda\|=\|g\|_{p'}.
$$
这里 $\overline g$ 是 $g$ 的[复共轭（complex conjugate）](Measurable-function.md)，$\|\Lambda\|$ 是[连续线性泛函（Continuous linear functional）](Bounded-linear-functional.md)的算子范数，$\|g\|_{p'}$ 是 $L^{p'}(\mu)$ 范数。唯一性在几乎处处意义下理解。

**注**：这个复数约定下 $g\mapsto\Lambda_g$ 是[共轭线性（conjugate-linear）](Bounded-linear-functional.md)的；若希望表示映射线性，可改用 $\int fh$，令 $h=\overline g$。

> [!proof]- 证明思路
> 先令 $\mu(X)<\infty$，定义 $\nu(E)=\Lambda(1_E)$，其中 $1_E$ 为[指示函数（indicator function）](Measurable-function.md)。不交并的指示函数部分和在 $L^p$ 中收敛，故 $\nu$ 可数可加。对有限分割选模长为 $1$ 的系数消去各 $\nu(E_j)$ 的[辐角（argument）](Complex-measure.md)：若 $\nu(E_j)=r_je^{i\theta_j}\ne0$，取系数 $e^{-i\theta_j}$，乘积就是 $r_j\ge0$；零值处取系数 $1$。泛函有界性给出有限总变差，且 $\nu\ll\mu$。Radon–Nikodym 给出密度 $h$。令 $g=\overline h$，用截断的幂函数作为测试函数（$p=1$ 则用密度超水平集）证明 $g\in L^{p'}$ 及范数等式。简单函数稠密性将表示延伸到全部 $L^p$。对 $\sigma$-有限空间，在有限测度递增块上构造密度，再由几乎处处唯一性拼接。

记 $V^*$ 为赋范空间 $V$ 的连续对偶空间，见[连续线性泛函（Continuous linear functional）](Bounded-linear-functional.md)；下面的空间等式按上述[等距表示（isometric representation）](Normed-space.md)理解，即对应映射保持范数且一一对应；在这里带复共轭的约定下，该对应是共轭线性的。

**注**：这里包括 $(L^1)^*=L^\infty$，不包括 $(L^\infty)^*=L^1$。后者在一般无限维空间会失败。$1<p<\infty$ 时还能放宽 $\sigma$-有限条件；本卡采用个人笔记中统一的 $\sigma$-有限版本。

## 例

例如在 $[0,1]$ 的[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $dx$ 下，$\Lambda(f)=\int_0^1xf(x)\,dx$ 在 $L^2$ 上有范数 $1/\sqrt3$。表示函数 $g=x$，范数由 [Cauchy–Schwarz（Cauchy–Schwarz inequality）](Cauchy-Schwarz-inequality.md)及取 $f=x$ 达到。

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，式 (2.11)–(2.13)；Theorem 2.30；Remark 2.32；第46页。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
