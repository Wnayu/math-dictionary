---
title: "复测度（Complex measure）"
aliases:
  - "复测度"
  - "Complex measure"
  - "相位"
  - "Phase"
  - "辐角"
  - "Argument"
  - "相位角"
  - "Phase angle"
  - "相位因子"
  - "Phase factor"
  - "相位函数"
  - "Phase function"
type: concept
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



复测度把可数可加集合函数的值域扩展到复数，适合同时处理复数的幅度（amplitude，即模 $|z|$）与相位。按照通常约定，复测度只能取有限复数值，其全变差必然有限。[^1]

这里的相位（phase）描述复数在复平面中的方向。对非零复数 $z=|z|e^{i\theta}$，$|z|$ 是大小，$\theta$ 是辐角（argument），也称相位角（phase angle），而 $e^{i\theta}=\cos\theta+i\sin\theta=z/|z|$ 是模为 $1$ 的相位因子（phase factor）。角度只在相差 $2\pi$ 的整数倍的意义下确定；相位因子则唯一。零复数没有确定的方向。

## 定义

在可测空间 $(X,\mathcal A)$ 上，复测度是映射 $\nu:\mathcal A\to\mathbb C$，满足 $\nu(\varnothing)=0$，并对两两不交的 $E_j$ 满足
$$
\nu\left(\bigcup_jE_j\right)=\sum_j\nu(E_j),
$$
右侧绝对收敛（absolutely convergent），即 $\sum_j|\nu(E_j)|<\infty$。逐集取实部、虚部，即 $\nu_r(E)=\operatorname{Re}(\nu(E))$、$\nu_i(E)=\operatorname{Im}(\nu(E))$（数值记号见[可测函数（Measurable function）](Measurable-function.md)），所得 $\nu_r,\nu_i$ 是有限有符号测度，且 $\nu=\nu_r+i\nu_i$。[^1]

**注**：非负测度只有在总质量有限时才是复测度；实数轴上的整个 Lebesgue 测度不属于这一类。

## 由密度构造复测度

这里 $L^1(\mu;\mathbb C)$ 是复值可积函数空间，见 [Lp 空间（Lp space）](Lp-space.md)；$|\nu|$ 表示[全变差测度（Total variation measure）](Total-variation-measure.md)，不等于集合函数 $E\mapsto|\nu(E)|$。若 $f\in L^1(\mu;\mathbb C)$，则 $\nu(E)=\int_E f\,d\mu$ 为复测度，也记作 $\nu=f\mu$，其含义见[加权测度（Weighted measure）](Weighted-measure.md)，且
$$
|\nu|(E)=\int_E|f|\,d\mu.
$$
例如以 $[0,2\pi]$ 上的 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)为 $\mu$，取 $f(x)=e^{ix}$，则 $\nu([0,2\pi])=0$，而 $|\nu|([0,2\pi])=2\pi$。

## 积分与全变差

对 $g\in L^1(|\nu|)$，定义
$$
\int g\,d\nu=\int g\,d\nu_r+i\int g\,d\nu_i,
\qquad
\left|\int g\,d\nu\right|\leq\int|g|\,d|\nu|.
$$
这与先对简单函数积分再取极限的定义一致。

## 密度和结构

这里 $\nu\ll\mu$ 表示[测度的绝对连续性（Absolute continuity of measures）](Absolute-continuity-of-measures.md)，$d\nu=f\,d\mu$ 表示逐集成立 $\nu(E)=\int_E f\,d\mu$，见[加权测度（Weighted measure）](Weighted-measure.md)。若 $\mu$ 为 $\sigma$-有限非负测度且 $\nu\ll\mu$，则存在 $f\in L^1(\mu;\mathbb C)$ 使 $d\nu=f\,d\mu$；存在性与唯一性的详细说明见[Radon–Nikodym 定理（Radon–Nikodym theorem）](Radon-Nikodym-theorem.md)。一般情形则有 [Lebesgue 分解（Lebesgue decomposition）](Lebesgue-decomposition-theorem.md)。相对于自身全变差，始终存在[极分解（Polar decomposition of measures）](Polar-decomposition-of-measures.md)
$$
d\nu=h\,d|\nu|,\qquad |h|=1\quad |\nu|\text{-a.e.}
$$
这里 $|\nu|$-a.e. 表示相对于全变差测度[几乎处处（Almost everywhere）](Almost-everywhere.md)成立。$h$ 称为相位函数（phase function）：它在 $|\nu|$-几乎每一点给出一个模为 $1$ 的复数因子，描述该处贡献的方向；$h$ 本身不是角度。具体地，对每个可测集 $E$，有 $\nu(E)=\int_Eh\,d|\nu|$，即按非负测度 $|\nu|$ 给出的权重累加这些带方向的贡献。不同方向可以抵消，因此一般 $|\nu(E)|\le |\nu|(E)$，而不必相等。相位函数的表示、实值情形及计算例子见[测度的极分解（Polar decomposition of measures）](Polar-decomposition-of-measures.md)。

## 相关词条

[有符号测度（Signed measure）](Signed-measure.md) · [全变差测度（Total variation measure）](Total-variation-measure.md) · [极分解（Polar decomposition of measures）](Polar-decomposition-of-measures.md)

[测度论导航](../测度论导航.md) · [测度（Measure）](Measure.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. §3.3，Theorem 3.12、Proposition 3.13，印刷 pp.93–94。
