---
title: "极坐标积分与球面测度（Polar integration and surface measure）"
aliases:
  - "极坐标积分与球面测度"
  - "Polar integration and surface measure"
  - "球面测度"
  - "表面测度"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



极坐标积分把欧氏空间中的点分成半径与方向。Lebesgue 测度相应分成径向权重 $r^{n-1}dr$ 和单位球面上的表面测度。

## 球面测度的构造

设 $n\ge2$，$S^{n-1}=\{\omega\in\mathbb R^n:|\omega|=1\}$ 是单位球面，$|\omega|$ 是欧氏长度。下文 $m_n$ 表示 $n$ 维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$dx$ 表示对 $m_n$ 积分，$dr$ 表示对一维 Lebesgue 测度积分。对 Borel 集 $E\subseteq S^{n-1}$，令
$$
\sigma(E)=n\,m_n\{r\omega:0<r\le1,\ \omega\in E\}.
$$
所得 $\sigma$ 是球面上的有限 Borel 测度，称为表面测度（surface measure）；这里的 $\sigma$ 是一个测度的名称，不是 $\sigma$-代数或生成运算 $\sigma(\cdot)$。映射 $x\mapsto(|x|,x/|x|)$ 把非零点分为半径 $r=|x|>0$ 与单位方向 $\omega=x/|x|\in S^{n-1}$，并将 $\mathbb R^n\setminus\{0\}$ 上的 Borel Lebesgue 测度推前为
$$
r^{n-1}dr\otimes\sigma(d\omega).
$$
这里 $r^{n-1}dr$ 是 $(0,\infty)$ 上密度为 $r^{n-1}$ 的[加权测度（measure defined by a density）](Weighted-measure.md)，$\sigma(d\omega)$ 表示对球面测度积分；$\otimes$ 是[乘积测度（Product measure）](Product-measure.md)的记号，所述变换采用[推前测度（Pushforward measure）](Pushforward-measure.md)的定义。球面测度由这一性质唯一确定。[^1]

## 极坐标积分公式

若 $f$ 为非负或可积的 Borel 可测函数，则
$$
\int_{\mathbb R^n}f(x)\,dx
=\int_0^\infty\int_{S^{n-1}}
f(r\omega)r^{n-1}\,d\sigma(\omega)\,dr.
$$

**注**：Lebesgue 可测版本须相应使用完备化。

若 $f$ 是径向函数（radial function），即存在一元函数 $h$ 使 $f(x)=h(|x|)$、函数值只依赖到原点的欧氏距离，则简化为
$$
\int_{\mathbb R^n}h(|x|)\,dx
=\sigma(S^{n-1})\int_0^\infty h(r)r^{n-1}\,dr.
$$

**注**：球面均匀概率（uniform probability on the sphere）指 $\bar\sigma(E)=\sigma(E)/\sigma(S^{n-1})$，即把球面测度[归一化（normalization）](Probability-measure.md)到总质量 $1$；它对[正交变换（orthogonal transformation）](Change-of-variables.md) $x\mapsto Qx$ 不变；这里 $Q$ 是满足 $Q^{\mathsf T}Q=I$ 的实方阵，$Q^{\mathsf T}$ 为转置、$I$ 为单位矩阵，因而该变换保持欧氏内积及长度。若积分采用 $\bar\sigma$，上式必须另乘总面积 $\sigma(S^{n-1})$。[^1]

## 常数与可积性判别

球面总面积为
$$
\sigma(S^{n-1})=\frac{2\pi^{n/2}}{\Gamma(n/2)},
\qquad \Gamma(s)=\int_0^\infty t^{s-1}e^{-t}dt\quad(s>0).
$$
这里 $\Gamma$ 是 Gamma 函数，上式同时给出了它在正实数上的定义。因此 $\sigma(S^1)=2\pi$、$\sigma(S^2)=4\pi$。对径向幂函数，
$$
\int_{|x|<1}|x|^{-\alpha}dx<\infty\iff\alpha<n,
\qquad
\int_{|x|>1}|x|^{-\alpha}dx<\infty\iff\alpha>n.
$$
临界指数 $\alpha=n$ 对应 $\int dr/r$ 的对数发散。[^1]

> [!proof]- 测度分解的核心
> 对扇形 $E_a=\{r\omega:0<r\le a,\omega\in E\}$，[Lebesgue 测度的缩放公式（scaling formula for Lebesgue measure）](Lebesgue-measure.md)给出 $m_n(E_a)=a^nm_n(E_1)$。因此径向矩形 $(a,b]\times E$ 的推前测度为 $\sigma(E)(b^n-a^n)/n$，恰为 $\sigma(E)\int_a^br^{n-1}dr$。由σ-有限测度唯一性推广到所有 Borel 集，再由推前积分公式得到一般函数版本。

## 相关词条

[换元公式（Change of variables formula）](Change-of-variables.md) · [推前测度（Pushforward measure）](Pushforward-measure.md) · [Tonelli定理（Tonelli theorem）](Tonelli-theorem.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Gerald B. Folland，*Real Analysis: Modern Techniques and Their Applications*，2nd ed.，Wiley，1999，式 (2.50)；Theorem 2.49；Corollaries 2.51–2.52；Proposition 2.54。
