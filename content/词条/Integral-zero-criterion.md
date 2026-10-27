---
title: "积分为零的判别（Zero integral criterion）"
aliases:
  - "积分为零的判别"
  - "Zero integral criterion"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



积分忽略零集，因此通常只能由积分信息确定一个函数的[几乎处处等价类（almost-everywhere equivalence class）](Almost-everywhere.md)。判别的关键是非负性，或对足够多的集合逐一积分。

## 非负函数的判别

若 $f\ge0$ 可测，则
$$
\int f\,d\mu=0\quad\Longleftrightarrow\quad f=0\quad\mu\text{-a.e.}
$$
这里 $\mu\text{-a.e.}$ 表示关于 $\mu$ [几乎处处（Almost everywhere）](Almost-everywhere.md)，未标测度的积分均关于 $\mu$。更一般地，任意实值或复值可测函数满足 $\int|f|=0$ 当且仅当 $f=0$ 几乎处处。[^1][^2]

> [!proof]- 水平集证明
> 对 $E_n=\{f>1/n\}$，有 $\mu(E_n)/n\le\int f=0$，故各 $E_n$ 为零集。由 $\{f>0\}=\bigcup_nE_n$，得到结论。反过来，零集上的非负积分为零。

## 对所有集合积分

若 $f\in L^1(\mu)$（即[可积（integrable）](Integrable-function.md)）且
$$
\int_E f\,d\mu=0\qquad(E\in\mathcal A),
$$
则 $f=0$ 几乎处处。实值情形分别取 $E=\{f>0\}$、$E=\{f<0\}$；复值情形对实部、虚部分别处理。于是若两个可积函数在每个可测集上的积分相等，它们几乎处处相等。这是[Radon–Nikodym 导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md)唯一性的基础。[^1]

## 单个积分与逐集积分的区别

以下例子采用实线上的[Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md) $m$，$dt=dm(t)$，$1_E$ 表示[指示函数（indicator function）](Measurable-function.md)。仅有 $\int f=0$ 并不足够：$f=1_{(0,1)}-1_{(1,2)}$ 的积分为零，但 $f$ 不几乎处处为零。这里正负贡献抵消了。

在实直线上，若 $f\in L^1(m)$，固定 $a\in\mathbb R$，且 $\int_a^x f(t)\,dt=0$ 对所有 $x$ 成立，则 $f=0$ 几乎处处。可先推出所有区间上的积分为零，再用测度唯一性或可测集逼近扩展到所有可测集。[^1]

## 相关词条

[几乎处处（Almost everywhere）](Almost-everywhere.md) · [可积函数（Integrable function）](Integrable-function.md) · [测度唯一性（Uniqueness of measures）](Uniqueness-of-measures.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Propositions 8.1–8.2；Corollary 8.3。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Theorem 1.30(4)。
