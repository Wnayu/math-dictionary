---
title: "凸函数（Convex function）"
aliases:
  - "凸函数"
  - "Convex function"
  - "凸集"
  - "凸组合"
  - "严格凸"
  - "仿射函数"
  - "支撑直线"
  - "次梯度"
  - "Convex set"
  - "Convex combination"
  - "Strict convexity"
  - "Affine function"
  - "Supporting line"
  - "Subgradient"
type: concept
tags: [measure-theory]
draft: false
publish: true
status: needs-review
verified: false
---



凸性把两点的线性插值与函数值联系起来。[Jensen 不等式（Jensen inequality）](Jensen-inequality.md)将有限凸组合推广到积分；[Minkowski 不等式（Minkowski inequality）](Minkowski-inequality.md)中也使用幂函数的凸性。[^1]

## 定义

实[向量空间（Vector space）](Normed-space.md)中的集合 $C$ 为凸集（convex set），若任意 $x,y\in C$ 和 $t\in[0,1]$ 满足 $(1-t)x+ty\in C$。复向量空间讨论凸性时，把它看成实向量空间，权重仍取实数。

有限和 $\sum_{j=1}^n\alpha_jx_j$ 在 $\alpha_j\ge0$ 且 $\sum_{j=1}^n\alpha_j=1$ 时称凸组合（convex combination）。凸集包含其成员的所有有限凸组合。

函数 $\varphi:C\to\mathbb R$ 凸（convex），指
$$
\varphi((1-t)x+ty)\le(1-t)\varphi(x)+t\varphi(y)
\qquad(x,y\in C,\ 0\le t\le1).
$$
若对任意 $x\ne y$ 和 $0<t<1$ 上式都严格成立，则称严格凸（strictly convex）。凹（concave）与严格凹（strictly concave）分别指 $-\varphi$ 凸或严格凸。本卡采用实值函数；若允许 $+\infty$，须另外规定定义域和扩展实数运算。

## 仿射函数与支撑直线

仿射函数（affine function）是线性函数加一个常数，即 $\ell(x)=L(x)+b$，其中 $L$ 实线性；在实直线上就是 $\ell(x)=ax+b$。它对所有凸组合满足等式。

设 $I\subseteq\mathbb R$ 为区间，$\varphi:I\to\mathbb R$，$x_0\in I$。若存在 $a\in\mathbb R$，使
$$
\varphi(x)\ge\varphi(x_0)+a(x-x_0)\qquad(x\in I),
$$
则直线 $y=\varphi(x_0)+a(x-x_0)$ 称为 $\varphi$ 在 $x_0$ 的支撑直线（supporting line），$a$ 称为此处的一个次梯度（subgradient）。它不仅经过 $(x_0,\varphi(x_0))$，还须在整个定义区间上位于函数图像下方。一般仿射下界只要求 $ax+b\le\varphi(x)$，不要求在某个点取等号。

有限凸函数在区间内点具有支撑直线；可选择介于左右导数之间的斜率。这里左右导数分别是单侧差商极限
$$
\varphi'_-(x_0)=\lim_{h\downarrow0}\frac{\varphi(x_0)-\varphi(x_0-h)}{h},\qquad
\varphi'_+(x_0)=\lim_{h\downarrow0}\frac{\varphi(x_0+h)-\varphi(x_0)}{h}.
$$
有限凸函数在区间内点的这两个极限存在且有限，并满足 $\varphi'_-(x_0)\le\varphi'_+(x_0)$。若在该点[可微（Differentiable）](Change-of-variables.md)，两者相等，支撑直线的斜率唯一为 $\varphi'(x_0)$。端点不能无条件照搬内点结论，例如凸函数 $-\sqrt{x}$ 在 $[0,1]$ 的 $0$ 处没有有限斜率的支撑直线。支撑直线如何用于积分不等式，见[Jensen 不等式（Jensen inequality）](Jensen-inequality.md)。

## 幂函数与严格凸性

$x\mapsto |x|^p$ 在 $\mathbb R$ 上对 $p\ge1$ 凸，对 $p>1$ 严格凸。$p=1$ 时绝对值并不严格凸，例如任意两个不同的正数在凸性不等式中都取等号。

严格凸性是关于任意两点和所有中间权重的条件，不应仅以“图像弯曲”或某一点的二阶导数来定义。若函数在区间上二阶可微，处处 $\varphi''\ge0$ 是凸性的判据，处处 $\varphi''>0$ 足以推出严格凸，但后者并非严格凸的必要条件，如 $x^4$ 在 $0$ 的二阶导数为零。

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记。第2章的向量空间凸性与 Minkowski 不等式讨论。本卡补写凸集、凸函数、仿射函数和支撑直线的标准定义，以服务本专题的积分不等式。

[测度论导航](../测度论导航.md) · [赋范空间（Normed space）](Normed-space.md)
