---
title: "测度的逐集收敛（Setwise convergence）"
aliases: ["setwise convergence", "逐集收敛"]
tags: [measure-theory]
type: concept
draft: false
publish: true
status: needs-review
verified: false
---



逐集收敛（setwise convergence）要求同一可测空间中的每个固定可测集，其质量都收敛到极限测度的相应质量。它通常强于拓扑上的弱收敛。[^1]

## 定义

设 $\mu_n,\mu$ 为同一可测空间 $(X,\mathcal A)$ 上的概率测度。若对每个 $A\in\mathcal A$ 都有 $\mu_n(A)\to\mu(A)$，称 $\mu_n$ 逐集收敛于 $\mu$。这等价于
$$
\int f\,d\mu_n\to\int f\,d\mu
$$
对每个有界可测 $f$ 成立。

> [!proof]- 证明
> 积分判据取[指示函数（indicator function）](Measurable-function.md) $f=1_A$ 得逐集收敛。反之，结论先对简单函数线性成立。任给有界可测 $f$，选简单函数 $s$ 使 $\|f-s\|_\infty<\varepsilon$，这里采用[逐点一致范数（uniform norm）](Metric-space.md) $\|u\|_\infty=\sup_{x\in X}|u(x)|$，不针对某个测度取本质上确界；概率测度总质量为1，故两端积分逼近误差均至多为 $\varepsilon$，再令 $n\to\infty$、$\varepsilon\downarrow0$。

对非负可测 $f$，还能得到 $\int f\,d\mu\le\liminf_n\int f\,d\mu_n$：先截断 $f\wedge M=\min(f,M)$（[函数的最小值记号（pointwise minimum notation）](Measurable-function.md)），再令 $M\uparrow\infty$。这不等于对所有无界函数都有积分收敛。

## 与弱收敛的关系

在欧氏 Borel 空间上，有界连续函数是有界可测函数，故逐集收敛推出[弱收敛（Weak convergence of measures）](Weak-convergence-of-measures.md)。[Dirac 测度（Dirac measure）](Dirac-measure.md)的弱收敛 $\delta_{1/n}\Rightarrow\delta_0$ 的例子说明反向失败。即便弱收敛成立，[Portmanteau 定理（Portmanteau theorem）](Portmanteau-theorem.md)也只保证极限边界零测度的集合质量收敛。

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, Version 4.3, 2022，习题7.26；Chen Wang, Notes on Lévy Processes and Stochastic Calculus，测度弱收敛段落。

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)
