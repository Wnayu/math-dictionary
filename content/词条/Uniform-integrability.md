---
title: "一致可积（Uniform integrability）"
aliases:
  - "一致可积"
  - "Uniform integrability"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



一致可积排除了函数的积分质量集中在越来越高、越来越窄的尖峰上。它比存在一个共同可积控制函数更灵活，是[Vitali 收敛定理（Vitali convergence theorem）](Vitali-convergence-theorem.md)的核心条件。

## 定义

本文主要在有限测度空间 $\mu(X)<\infty$ 上讨论 $\mathcal F\subset L^1(\mu)$，其中 $L^1(\mu)$ 及范数 $\|f\|_1=\int|f|\,d\mu$ 见 [Lp 空间（Lp space）](Lp-space.md)。本条省略 $d\mu$ 的积分仍对 $\mu$ 计算。称该族一致可积，如果
$$
\lim_{M\to\infty}\sup_{f\in\mathcal F}
\int_{\{|f|>M\}}|f|\,d\mu=0.
$$
这是尾部积分定义。[^1]

## 等价判据

在有限测度空间上，上述定义等价于下面两个条件同时成立：

1. $\sup_{f\in\mathcal F}\|f\|_1<\infty$；
2. 对每个 $\varepsilon>0$，存在 $\delta>0$，使 $\mu(E)<\delta$ 时 $\sup_{f\in\mathcal F}\int_E|f|<\varepsilon$。

第二条称积分族的一致绝对连续性（uniform absolute continuity）。

**注**：有些文献用它定义“一致可积”，因此引用时须注明约定，不能漏掉有限测度与 $L^1$ 有界性。[^1]

> [!proof]- 两种条件的转换
> 尾部判据给出 $\int_E|f|\le M\mu(E)+\int_{\{|f|>M\}}|f|$，从而先选 $M$ 再选 $\delta$ 得到小集控制；取 $E=X$ 并使用 $\mu(X)<\infty$ 得到 $L^1$ 一致有界。反向设范数上界为 $C$，则 Markov 不等式给出 $\mu\{|f|>M\}\le C/M$。把此集合代入小集条件即可。

## 与控制函数和 Lp 有界性的关系

若 $|f|\le g\in L^1$ 对整个族成立，则该族一致可积。[^2] 若某个 $p>1$ 满足 $\sup_f\int|f|^p<\infty$，则
$$
\int_{\{|f|>M\}}|f|\le M^{1-p}\int|f|^p,
$$
故一致可积。[^1]

在 $[0,1]$ 的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)下，以 $1_E$ 表示[指示函数（indicator function）](Measurable-function.md)，则 $n1_{(0,1/n)}$ 的 $L^1$ 范数恒为 $1$，但尾部积分不能一致趋于零，故不一致可积。

**注**：无穷测度空间中的尾部条件不能单独控制质量在空间中的逃逸；应用 [Vitali 收敛定理（Vitali convergence theorem）](Vitali-convergence-theorem.md)时需检查其有限测度假设。平移与摊薄两类反例集中在该定理词条。

## 函数值尾部与空间尾部

定义中的 $\{|f|>M\}$ 是由函数值大小决定的尾部，并不等于空间中远离原点的区域。在 $\mathbb R^d$ 上，对 $\mathcal F\subset L^1(m_d)$，积分质量的空间尾部一致控制指
$$
\lim_{R\to\infty}\sup_{f\in\mathcal F}
\int_{\{|x|>R\}}|f(x)|\,dm_d(x)=0.
$$
它明确要求：任给 $\varepsilon>0$，可选择同一个有限半径 $R$，使整个函数族在球外的绝对积分都小于 $\varepsilon$。本词条“质量在空间中的逃逸”是对这一控制失败的描述。例如 $f_n=1_{(n,n+1)}$ 满足函数值尾部条件，但对每个固定 $R$，充分大的 $n$ 在 $\{|x|>R\}$ 上仍有积分 $1$，所以空间尾部未得到控制。这一区别也说明为什么无穷测度空间需要另外处理；本条未把空间尾部条件并入前面的有限测度定义。

## 相关词条

[可积函数（Integrable function）](Integrable-function.md) · [控制收敛定理（Dominated convergence theorem）](Dominated-convergence-theorem.md) · [Markov不等式（Markov inequality）](Markov-inequality.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Exercises 7.21、7.24。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Exercise 1.33。
