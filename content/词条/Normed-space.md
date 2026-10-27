---
title: "赋范空间（Normed space）"
aliases:
  - "赋范空间"
  - "Normed space"
  - "向量空间"
  - "线性子空间"
  - "范数"
  - "半范数"
  - "拟范数"
  - "Banach空间"
  - "等距同构"
  - "范数收敛"
  - "向量的弱收敛"
  - "Vector space"
  - "Norm"
  - "Seminorm"
  - "Quasi-norm"
  - "Banach space"
  - "Isometric isomorphism"
  - "收缩算子"
  - "Contraction operator"
type: concept
tags: [measure-theory]
draft: false
publish: true
status: needs-review
verified: false
---



赋范空间同时具有线性运算和大小的度量。[Lp 空间（Lp space）](Lp-space.md)是这里的主要例子；范数、半范数和拟范数的差别决定了是否需要先取几乎处处相等的等价类，以及三角不等式采用什么形式。[^1]

## 定义

令 $\mathbb K=\mathbb R$ 或 $\mathbb C$。向量空间（vector space）是配有加法和数乘的集合 $V$：加法交换、结合，存在零元和加法逆元；对 $u,v\in V$、$a,b\in\mathbb K$ 有
$$
a(u+v)=au+av,\qquad (a+b)v=av+bv,\qquad a(bv)=(ab)v,\qquad1v=v.
$$
数 $a\in\mathbb K$ 称为标量（scalar）。有限和 $\sum_{j=1}^m a_jv_j$ 称为线性组合（linear combination）。包含零元且对加法和数乘封闭的子集称线性子空间（linear subspace）。

范数（norm）是函数 $\|\cdot\|:V\to[0,\infty)$，满足
$$
\|v\|=0\iff v=0,\qquad \|av\|=|a|\|v\|,\qquad
\|u+v\|\le\|u\|+\|v\|.
$$
$(V,\|\cdot\|)$ 称为赋范空间（normed space）。范数诱导[度量（Metric）](Metric-space.md) $d(u,v)=\|u-v\|$。[^2]

## 半范数、拟范数与商空间

半范数（seminorm）满足范数的齐次性与三角不等式，但允许非零 $v$ 的值为 $0$。例如定义在实际函数上的 $p(f)=\int|f|\,d\mu$（限于可积函数）可能对非零函数取零，因为函数可仅在零测集上非零。

若 $p$ 是半范数，令 $N=\{v:p(v)=0\}$。在[商空间（Quotient space）](Equivalence-relation.md) $V/N$ 上，约定 $u\sim v$ 当且仅当 $u-v\in N$，则 $\|[v]\|=p(v)$ 是定义良好的范数。这里“定义良好”表示换用同一等价类的任意代表元，数值不变。

拟范数（quasi-norm）仍要求正定性和绝对齐次性，但将三角不等式改为：存在固定有限常数 $C\ge1$，对所有 $u,v$ 有
$$
q(u+v)\le C\bigl(q(u)+q(v)\bigr).
$$
当 $0<p<1$ 时，$\|f\|_p=(\int|f|^p\,d\mu)^{1/p}$ 是拟范数；它一般不是范数，且 $\|f-g\|_p$ 一般不是度量。[Lp 空间（Lp space）](Lp-space.md)中使用的真正度量是 $\|f-g\|_p^p$。拟范数有不同约定，本专题采用以上齐次版本。[^1]

## 完备性与 Banach 空间

范数收敛（norm convergence）$v_n\to v$ 指 $\|v_n-v\|\to0$。范数 Cauchy 序列满足：对每个 $\varepsilon>0$，存在 $N$，使所有 $m,n\ge N$ 都有 $\|v_m-v_n\|<\varepsilon$。

Banach 空间（Banach space）是诱导度量完备的赋范空间，即每个这样的 Cauchy 序列都在空间中有范数极限。$1\le p\le\infty$ 时 $L^p(\mu)$ 为 Banach 空间，证明见[Lp 完备性（Completeness of Lp）](Lp-completeness.md)。空间的可分性指它含有可数稠密子集，定义见[度量空间（Metric space）](Metric-space.md)，在本专题中的判定见[Lp 稠密性（Density in Lp）](Lp-density.md)。

## 等距同构与线性映射

映射 $T:V\to W$ 线性（linear），指 $T(au+bv)=aT(u)+bT(v)$。若它还双射，则称线性同构（linear isomorphism）。等距映射（isometry）指保持距离的映射；对线性映射，等价于 $\|Tv\|_W=\|v\|_V$。满射线性等距映射称为等距同构（isometric isomorphism）；它保持线性运算与范数。

有界线性映射（bounded linear map）满足某个常数 $C<\infty$ 下 $\|Tv\|_W\le C\|v\|_V$，其算子范数为 $\|T\|=\sup_{\|v\|_V\le1}\|Tv\|_W$。当 $W=\mathbb K$ 时称[有界线性泛函（Bounded linear functional）](Bounded-linear-functional.md)，其连续性与有界性的等价关系见该词条。

在本文的线性算子语境中，收缩算子（contraction operator）指 $\|T\|\le1$，即 $\|Tv\|_W\le\|v\|_V$。这允许取等号；若要求存在 $c<1$ 使 $\|Tu-Tv\|\le c\|u-v\|$，则会明确称严格收缩（strict contraction），以免与不动点定理中的用法混淆。

## 向量的弱收敛

令 $V^*$ 为 $V$ 的全部[有界线性泛函（Bounded linear functional）](Bounded-linear-functional.md)。$v_n$ 弱收敛（weak convergence）于 $v$，记 $v_n\rightharpoonup v$，指
$$
\ell(v_n)\longrightarrow\ell(v)\qquad\text{对每个 }\ell\in V^*.
$$
弱拓扑（weak topology）是使所有 $\ell\in V^*$ 连续的最小拓扑；其在 $v$ 处的邻域基为
$$
\{w\in V:|\ell_j(w-v)|<\varepsilon\ (1\le j\le m)\},
\quad m\ge1,\quad \ell_1,\ldots,\ell_m\in V^*,\quad\varepsilon>0.
$$
范数收敛推出弱收敛，因为 $|\ell(v_n-v)|\le\|\ell\|\|v_n-v\|$。本定义的测试对象是全部连续线性泛函；[测度的弱收敛（Weak convergence of measures）](Weak-convergence-of-measures.md)另行指定有界连续测试函数，不能仅凭同名便混同这两个定义。

## 参考文献

[^1]: Chen Wang，*Notes on Real Analysis*，个人笔记，Lemma 2.4；Exercises 2.5、2.10；Proposition 2.14；Lemma 2.31；第35、37、39页。
[^2]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，第4页。

[测度论导航](../测度论导航.md) · [内积空间（Inner product space）](Inner-product-space.md)
