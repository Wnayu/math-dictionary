---
title: "Feller 半群（Feller semigroup）"
aliases: ["Feller 半群", "Feller semigroup", "C0空间", "Functions vanishing at infinity", "强连续半群", "Strongly continuous semigroup"]
type: concept
tags: [probability, stochastic-processes]
draft: false
publish: true
status: needs-review
verified: false
---



Feller 半群把 Markov 转移与连续函数空间的分析结构连接起来，为路径正则性、强 Markov 性和生成元理论提供条件。[^1][^2][^3]

## 定义

设 $E$ 是局部紧[Polish 空间（Polish space）](Polish-space.md)，即其拓扑可由某个完备可分度量给出且每点有紧邻域。记 $C_0(E)$ 为在无穷远处消失的连续实函数：对每个 $\varepsilon>0$，集合 $\{x:|f(x)|\ge\varepsilon\}$ 紧。它以 $\|f\|_\infty=\sup_x|f(x)|$ 为范数，是 Banach 空间。

[转移半群（Transition semigroup）](Chapman-Kolmogorov-equations.md) $(P_t)$ 称 Feller 半群，如果
$$
P_tC_0(E)\subseteq C_0(E),\qquad
\|P_tf-f\|_\infty\to0\quad(t\downarrow0, f\in C_0(E)).
$$
第二条称强连续性（strong continuity），指每个固定函数在范数中连续，不是算子范数 $\|P_t-I\|$ 必须趋零。概率核还给出正性和收缩性 $\|P_tf\|_\infty\le\|f\|_\infty$。

## 任意时刻的强连续性

对 $s,t\ge0$，由半群与收缩性，
$$
\|P_tf-P_sf\|_\infty
\le\|P_{|t-s|}f-f\|_\infty.
$$
故零时刻的强连续性推出整个时间轴上的范数连续性。

## Brownian 转移

在 $\mathbb R^d$ 上，Brownian 转移为
$$
P_tf(x)=\int_{\mathbb R^d}f(x+y)(2\pi t)^{-d/2}e^{-|y|^2/(2t)}\,dy.
$$
它保持 $C_0$：连续性用控制收敛，消失性先限制 $|y|\le R$ 再控制高斯尾。由于 $C_0(\mathbb R^d)$ 中的函数一致连续，把积分分成 $|y|\le\delta$ 与补集可得 $\|P_tf-f\|_\infty\to0$。

**注**：部分文献只把“保持有界连续函数”称为 Feller 性；本词条采用 $C_0$ 加强连续性的完整半群定义。不要在不同约定之间省略条件。

Feller 过程的正则版本及强 Markov 性见[强 Markov 性（Strong Markov property）](Strong-Markov-property.md)；无穷小演化与 Laplace 平滑分别由[无穷小生成元（Infinitesimal generator）](Infinitesimal-generator.md)和[预解算子（Resolvent）](Resolvent.md)描述。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Jean-François Le Gall，*Brownian Motion, Martingales, and Stochastic Calculus*，Graduate Texts in Mathematics 274，Springer，2016，Definition 6.7；第161页。

[^2]: Russell Lyons，*Stochastic Calculus: Lecture notes based on the book by J.-F. Le Gall*，课程讲义，2025年8月10日，Definition 6.7。

[^3]: Chen Wang，*Notes on GTM 274*，个人笔记，Definition 1.21、Example 1.24。
