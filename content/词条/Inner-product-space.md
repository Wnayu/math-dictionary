---
title: "内积空间（Inner product space）"
aliases:
  - "内积空间"
  - "Inner product space"
  - "内积"
  - "Hilbert空间"
  - "正交"
  - "正交投影"
  - "正交补"
  - "半双线性"
  - "Inner product"
  - "Hilbert space"
  - "Orthogonality"
  - "Orthogonal projection"
  - "Orthogonal complement"
  - "Sesquilinear"
  - "平行四边形恒等式"
  - "Parallelogram identity"
type: concept
tags: [measure-theory]
draft: false
publish: true
status: needs-review
verified: false
---



内积给向量提供长度与正交关系。测度论中最常见的实例是 $L^2(\mu)$ 上的积分配对；[条件期望（Conditional expectation）](Conditional-expectation.md)在平方可积情形下可解释为正交投影。[^1]

## 定义

令 $\mathbb K=\mathbb R$ 或 $\mathbb C$，$V$ 是 $\mathbb K$ 上的[向量空间（Vector space）](Normed-space.md)。内积（inner product）是函数 $\langle\cdot,\cdot\rangle:V\times V\to\mathbb K$，对任意 $u,v,w\in V$ 和 $a,b\in\mathbb K$ 满足
$$
\langle au+bv,w\rangle=a\langle u,w\rangle+b\langle v,w\rangle,\qquad
\langle u,v\rangle=\overline{\langle v,u\rangle},\qquad
\langle v,v\rangle\ge0,
$$
且 $\langle v,v\rangle=0$ 当且仅当 $v=0$。复共轭 $\overline z$ 将 $z=a+ib$ 变为 $a-ib$；在实数域上它不起作用。上述约定为第一变量线性，第二变量共轭线性：
$$
\langle u,av+bw\rangle=\overline a\langle u,v\rangle+\overline b\langle u,w\rangle.
$$
这种“一变量线性、另一变量共轭线性”的配对称半双线性（sesquilinear）；实数域上则为双线性（bilinear）。单有配对不一定是内积，还须满足上述对称性和正定性。

内积诱导范数 $\|v\|=\sqrt{\langle v,v\rangle}$。在该范数下完备的内积空间称 Hilbert 空间（Hilbert space）；完备性的含义见[度量空间（Metric space）](Metric-space.md)。

内积展开直接给出平行四边形恒等式（parallelogram identity）
$$
\|u+v\|^2+\|u-v\|^2=2\|u\|^2+2\|v\|^2.
$$
下文用它证明正交投影的存在。

## L2 中的内积

在[Lp 空间（Lp space）](Lp-space.md)的 $p=2$ 情形，
$$
\langle f,g\rangle=\int_X f\overline g\,d\mu,\qquad
\|f\|_2=\sqrt{\langle f,f\rangle}.
$$
[Cauchy–Schwarz 不等式（Cauchy–Schwarz inequality）](Cauchy-Schwarz-inequality.md)保证该积分存在；取几乎处处相等的[等价类（Equivalence class）](Equivalence-relation.md)保证正定性。[Lp 完备性（Completeness of Lp）](Lp-completeness.md)进一步说明 $L^2(\mu)$ 为 Hilbert 空间。

## 正交与正交投影

$u,v$ 正交（orthogonal），记 $u\perp v$，指 $\langle u,v\rangle=0$。子集 $M\subseteq V$ 的正交补（orthogonal complement）为
$$
M^\perp=\{u\in V:\langle u,m\rangle=0\text{ 对每个 }m\in M\}.
$$
若 $H$ 是 Hilbert 空间，$M$ 是闭线性子空间，则每个 $x\in H$ 唯一分解为 $x=p+r$，其中 $p\in M$、$r\in M^\perp$。映射 $P_Mx=p$ 称为到 $M$ 的正交投影（orthogonal projection）。这里“闭”采用范数诱导的拓扑，“线性子空间”见[赋范空间（Normed space）](Normed-space.md)。

这一条件精确表达为
$$
P_Mx\in M,\qquad \langle x-P_Mx,m\rangle=0\quad(m\in M).
$$
它等价于 $P_Mx$ 是使 $\|x-m\|$ 最小的 $m\in M$。因此 $L^2$ 中的投影解释同时给出平方误差最小化，而不仅是几何比喻。

> [!proof]- 正交投影的存在与唯一性
> 令 $d=\inf_{m\in M}\|x-m\|$，选 $m_n\in M$ 使 $\|x-m_n\|\to d$。内积展开给出平行四边形恒等式，从而
> $$
> \begin{aligned}
> \|m_n-m_k\|^2
> &=2\|x-m_n\|^2+2\|x-m_k\|^2-4\left\|x-\frac{m_n+m_k}{2}\right\|^2\\
> &\le2\|x-m_n\|^2+2\|x-m_k\|^2-4d^2\longrightarrow0.
> \end{aligned}
> $$
> 由完备性和 $M$ 的闭性，$m_n\to p\in M$，且 $\|x-p\|=d$。对 $m\in M$ 与 $t\in\mathbb R$，比较 $\|x-p-tm\|^2\ge\|x-p\|^2$，令 $t$ 从正负两侧趋于零，得到 $\operatorname{Re}\langle x-p,m\rangle=0$；复数情形再对 $im$ 使用同一论证，得到虚部也为零。
> 若另有 $q\in M$ 满足正交条件，则 $p-q\in M\cap M^\perp$，故 $p=q$。反之，正交性给出 $\|x-m\|^2=\|x-p\|^2+\|p-m\|^2$，证明最小化性质。

## 参考文献

[^1]: Chen Wang, Notes on Real Analysis，个人笔记。第2章开头的内积结构与 L2 积分配对。本卡补齐内积、Hilbert 空间和正交投影的标准定义；投影的论证在本卡展开，以说明相关词条中的最小平方误差解释。

[测度论导航](../测度论导航.md) · [条件期望（Conditional expectation）](Conditional-expectation.md)
