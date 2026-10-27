---
title: "Hahn 分解定理（Hahn decomposition theorem）"
aliases:
  - "Hahn 分解定理"
  - "Hahn decomposition theorem"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



Hahn 分解把[有符号测度（Signed measure）](Signed-measure.md)的正负性转化为空间的[可测划分（measurable partition）](Set-algebra.md)。它是 [Jordan 分解（Jordan decomposition）](Jordan-decomposition-theorem.md)和 [Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)的基本工具。[^1]

## 定理

若 $\nu$ 是 $(X,\mathcal A)$ 上的有符号测度，则存在互不相交的可测集 $P,N$，使
$$
X=P\sqcup N,
$$
其中 $\sqcup$ 表示不交并，$P$ 为 $\nu$ 的[正集（positive set）](Positive-and-negative-sets.md)，$N$ 为其负集。若 $(P',N')$ 也是这样的划分，则
$$
P\triangle P'=N\triangle N'
$$
中的 $\triangle$ 为[对称差（symmetric difference）](Set-algebra.md)，该对称差是 $\nu$-零集，即其每个可测子集的 $\nu$ 测度均为零。[^1][^2]

**注**：定理不要求 $\sigma$-有限性。集合划分一般不唯一，但只允许在全变差为零的区域上变化。

## 例

若实值可测函数 $f$ 的正、负部至少一个有有限积分，则它定义有符号测度 $\nu=f\mu$，即 $\nu(E)=\int_E f\,d\mu$；这一记号见[密度定义的测度（Measure defined by a density）](Weighted-measure.md)。可取 $P=\{f\geq0\}$、$N=\{f<0\}$。集合 $\{f=0\}$ 的可测部分可自由分配到两侧。在 $[-1,1]$ 上取 $f(x)=x$，便可取 $P=[0,1]$、$N=[-1,0)$。

> [!proof]- 证明思路：极值集合
> 必要时把 $\nu$ 换成 $-\nu$，使其不取 $-\infty$。先证明：任何测度为负的可测集包含一个测度仍为负的负集。方法是不断移除正测度子集；可数可加性保证剩余部分满足所需符号。
>
> 令 $a$ 为所有负集测度的下确界，选择逼近下确界的负集序列，其并 $N$ 仍为负集，并达到 $\nu(N)=a$。由于不允许 $-\infty$，$a$ 有限。若 $X\setminus N$ 不是正集，上述引理给出与 $N$ 不交的非零负集，把它并入 $N$ 便严格减小测度，矛盾。
>
> 对唯一性，$P\setminus P'\subseteq P\cap N'$ 同时为正集和负集，所以为零集；$P'\setminus P$ 同理。两者并即为对称差。

**注**：这里第一步的“提取负集”是存在性证明的实质引理，完整构造见 Bass Proposition 12.4；不能仅凭 $\nu(A)<0$ 就把 $A$ 当作负集。

## 相关词条

[正集与负集（Positive and negative sets）](Positive-and-negative-sets.md) · [Jordan分解（Jordan decomposition）](Jordan-decomposition-theorem.md) · [Radon–Nikodym定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Richard F. Bass, Real Analysis for Graduate Students, version 4.3, 2022. Proposition 12.4、Theorem 12.5，§§12.1–12.2。
[^2]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. Theorem 3.3，印刷 pp.86–87。
