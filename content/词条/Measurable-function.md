---
title: "可测函数（Measurable function）"
aliases:
  - "可测函数"
  - "Measurable function"
  - "逆像"
  - "Preimage"
  - "纤维"
  - "Fiber"
  - "截断"
  - "Truncation"
  - "下半连续"
  - "Lower semicontinuity"
  - "上半连续"
  - "Upper semicontinuity"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



可测函数把目标空间中可辨认的事件拉回为原空间中的可测集。它是将[测度（Measure）](Measure.md)与函数联系起来的基本条件，也是定义积分和随机变量的起点。

## 定义

设 $(X,\mathcal A)$、$(Y,\mathcal B)$ 为[可测空间（Measurable space）](Measurable-space.md)。映射 $f:X\to Y$ 称为 $(\mathcal A,\mathcal B)$-可测的，如果
$$
f^{-1}(B)\in\mathcal A\qquad(B\in\mathcal B).
$$
这里 $f^{-1}(B)=\{x\in X:f(x)\in B\}$ 是集合 $B$ 的逆像（preimage），不要求 $f$ 可逆；$f^{-1}(\mathcal B)=\{f^{-1}(B):B\in\mathcal B\}$ 则是所有这些逆像组成的集合族。对 $S\subseteq X$，$f|_S:S\to Y$ 表示限制函数，仍按 $f|_S(x)=f(x)$ 取值。

单射、满射与双射的集合论定义见[集合代数（Algebra of sets）](Set-algebra.md)。仅在双射时，逆映射 $f^{-1}:Y\to X$ 才由“$f^{-1}(y)$ 是满足 $f(x)=y$ 的唯一 $x$”定义。集合逆像 $f^{-1}(B)$ 始终有意义，不需要这一条件。给定 $y\in Y$，集合 $f^{-1}(\{y\})=\{x:f(x)=y\}$ 称为 $y$ 上的纤维（fiber），允许为空或含多个点。

目标为 $\mathbb R$、$\overline{\mathbb R}=[-\infty,+\infty]$ 或 $\mathbb C$ 时，未另说明便使用相应的[Borel σ-代数（Borel sigma-algebra）](Borel-sigma-algebra.md)。[^1][^2]

对实值函数，$\{f>a\}$ 是超水平集 $\{x\in X:f(x)>a\}$ 的简写；其他不等式的水平集记号同理。只须检验 $\{f>a\}\in\mathcal A$ 对所有 $a\in\mathbb Q$ 成立；换成 $\{f\ge a\}$、$\{f<a\}$ 或 $\{f\le a\}$ 也可。对复值函数写 $f=u+iv$，其中实值函数 $u=\operatorname{Re}f$、$v=\operatorname{Im}f$（也写 $\Re f$、$\Im f$）分别为实部、虚部，$\overline f=u-iv$ 为复共轭，$|f|=(u^2+v^2)^{1/2}$ 为模。复值函数可测当且仅当实部、虚部都可测。

## 基本可测函数

集合 $E\subseteq X$ 的指示函数（indicator function）记为 $1_E$ 或 $\mathbf1_E$，定义为
$$
1_E(x)=\begin{cases}1,&x\in E,\\0,&x\notin E.\end{cases}
$$
它可测当且仅当 $E\in\mathcal A$。事件或条件的记号 $1_{\{\text{条件}\}}$ 同样在条件成立时取 $1$，否则取 $0$。常值函数可测；[连续映射（continuous map）](Topological-space.md)在两端的 Borel σ-代数下可测，但可测函数可以处处不连续，例如 $1_{\mathbb Q}$。

## 函数运算与可测性

对实值或扩展实值函数，正部、负部分别为 $f^+=\max(f,0)$、$f^-=\max(-f,0)$，因此 $f=f^+-f^-$、$|f|=f^++f^-$；实数 $a_+$（也写 $a^+$）就是 $\max(a,0)$。这与[有符号测度的正、负变差（positive and negative variations of a signed measure）](Jordan-decomposition-theorem.md)是不同类型的对象。对实值函数还记 $f\wedge g=\min(f,g)$、$f\vee g=\max(f,g)$，按每一点取最小值、最大值；实数上的 $a\wedge b$、$a\vee b$ 同理。

函数的截断（truncation）指按指定阈值限制其数值或保留的区域，使用时须说明是哪一种。例如对非负 $f$，高度截断为 $f\wedge M=\min(f,M)$；对实值 $f$，双侧高度截断为 $(-M)\vee(f\wedge M)$。另一常用截断是 $f1_{\{|f|\le M\}}$，即把超过阈值的值改为零；对集合 $E$，$f1_E$ 把 $E$ 外的值改为零。这些构造在 $f$ 可测、$E$ 可测时都保持可测性。

复合映射 $g\circ f$ 按 $(g\circ f)(x)=g(f(x))$ 定义；两端可测结构相匹配时，可测映射的复合可测。实值可测函数的和、积、最大值与最小值可测；可数族的上确界、下确界、上极限与下极限是扩展实值可测函数。因此可测函数的逐点极限仍可测。[^1] 对实值或扩展实值函数列，这些极限逐点定义为
$$
(\liminf_n f_n)(x)=\sup_{N\ge1}\inf_{n\ge N}f_n(x),\qquad
(\limsup_n f_n)(x)=\inf_{N\ge1}\sup_{n\ge N}f_n(x).
$$
记 $f_n\uparrow f$ 表示对每个 $x$，$f_n(x)$ 单调不减且趋于 $f(x)$；$f_n\downarrow f$ 类似。若附加“几乎处处”，则只要求这些条件在一个可测零集之外成立。

当 $X$ 为[拓扑空间（topological space）](Topological-space.md)时，$C(X)$ 表示 $X$ 上连续的复值函数全体（讨论实值函数时明确取实值子类）；$C_b(X)=\{f\in C(X):\sup_{x\in X}|f(x)|<\infty\}$ 为有界连续函数类。函数的支集 $\operatorname{supp}f=\overline{\{x:f(x)\ne0\}}$ 是非零集合的[闭包（closure）](Topological-space.md)；$C_c(X)$ 表示支集为[紧集（compact set）](Topological-space.md)的连续函数。这里闭包上横线表示集合闭包，与函数值的复共轭相区分。

扩展实值函数 $f:X\to[-\infty,+\infty]$ 称为下半连续（lower semicontinuous），如果对每个 $a\in\mathbb R$，严格超水平集 $\{f>a\}$ 都是开集；称为上半连续（upper semicontinuous），如果每个 $\{f<a\}$ 都是开集。两种半连续函数都 Borel 可测。这里用开集作定义，因而不要求 $X$ 已给定度量。

> [!proof]- 生成族判据、复合与上确界的证明
> 给定 $f$，令 $\mathcal C=\{B\subseteq Y:f^{-1}(B)\in\mathcal A\}$。原像保持补集、可数并，所以 $\mathcal C$ 是 σ-代数；只要它包含 $\mathcal B$ 的一个生成族，就包含整个 $\mathcal B$。另一方面，
> $$
> \{\sup_n f_n>a\}=\bigcup_n\{f_n>a\},
> $$
> 从而可数上确界可测；其余结论由取负号和可数次上、下确界得到。
>
> 若 $f:(X,\mathcal A)\to(Y,\mathcal B)$ 与 $g:(Y,\mathcal B)\to(Z,\mathcal D)$ 都可测，则对任意 $C\in\mathcal D$，先有 $g^{-1}(C)\in\mathcal B$，再有
> $$
> (g\circ f)^{-1}(C)=f^{-1}(g^{-1}(C))\in\mathcal A.
> $$
> 因此复合映射可测；这里必须匹配中间空间的可测结构。

**注**：对扩展实值函数作加减时，仍须排除 $\infty-\infty$。任意不可数族的上确界也不保证可测。只在零集上任意修改函数，通常需要空间[完备（complete）](Complete-measure.md)，或另行验证修改后的函数可测。

## 相关词条

[简单函数（Simple function）](Simple-function.md) · [Borel可测函数（Borel measurable function）](Borel-measurable-function.md) · [Lebesgue积分（Lebesgue integral）](Lebesgue-integral.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Richard F. Bass，*Real Analysis for Graduate Students*，version 4.3，2022，Definition 5.1；Propositions 5.5–5.8、5.10–5.11。

[^2]: Chen Wang，*Notes on Real Analysis*，个人笔记，Definition 1.1；Exercise 1.6；Definition 1.8。
