---
title: "积分换元公式（Change of variables formula）"
aliases:
  - "积分换元公式"
  - "Change of variables formula"
  - "可微"
  - "Differentiability"
  - "偏导数"
  - "Partial derivative"
  - "微分同胚"
  - "Diffeomorphism"
  - "Jacobian行列式"
  - "Jacobian determinant"
  - "正交变换"
  - "Orthogonal transformation"
type: theorem
tags:
  - measure-theory
draft: false
publish: true
status: needs-review
verified: false
---



积分换元公式用映射的局部体积伸缩率修正坐标变化。一般测度空间的版本是推前积分公式；欧氏空间中的 Jacobian 公式则把新测度具体写为密度。

## 微分同胚版本

以下 $m_n$ 是 $n$ 维 [Lebesgue 测度（Lebesgue measure）](Lebesgue-measure.md)，$dx,dy$ 表示对它积分，$L^1$ 表示相应的可积函数空间，见 [Lp 空间（Lp space）](Lp-space.md)。设 $\Omega\subseteq\mathbb R^n$ 开，$G:\Omega\to G(\Omega)$ 为 $C^1$ 微分同胚（$C^1$ diffeomorphism），即 $G(\Omega)$ 也是开集，$G$ 为双射，且 $G,G^{-1}$ 均一阶连续可微。等价地，在开集 $\Omega$ 上要求 $G$ 单射、连续可微且处处 $\det DG(x)\ne0$；微分及行列式的含义见下面说明。若 $f$ 在 $G(\Omega)$ 上 Lebesgue 可测，且 $f\ge0$ 或 $f\in L^1(G(\Omega))$，则
$$
\int_{G(\Omega)}f(y)\,dy
=\int_\Omega f(G(x))\,|\det DG(x)|\,dx.
$$
可测集 $E\subseteq\Omega$ 的像也 Lebesgue 可测，且
$$
m_n(G(E))=\int_E|\det DG(x)|\,dx.
$$

这里可微（differentiable）指存在一个线性映射 $DG(x):\mathbb R^n\to\mathbb R^n$，使
$$
\lim_{\substack{h\to0\\h\ne0}}
\frac{|G(x+h)-G(x)-DG(x)h|}{|h|}=0.
$$
$|\cdot|$ 是欧氏范数，$h$ 足够小时要求 $x+h\in\Omega$。线性映射的含义见[赋范空间（Normed space）](Normed-space.md)。其矩阵是 $DG(x)=(\partial G_i/\partial x_j)_{i,j=1}^n$；偏导数只改变第 $j$ 个坐标，定义为
$$
\frac{\partial G_i}{\partial x_j}(x)=\lim_{t\to0}\frac{G_i(x+te_j)-G_i(x)}{t},
$$
其中 $e_j$ 是第 $j$ 个坐标为 $1$、其余坐标为 $0$ 的向量。$C^1$ 表示这些一阶偏导存在且连续；在开集上，这保证上面的可微性。$n=1$ 时，此定义退化为通常差商极限给出的导数。

对矩阵 $A=(a_{ij})$，行列式定义为
$$
\det A=\sum_{\sigma\in S_n}(-1)^{I(\sigma)}
\prod_{i=1}^n a_{i,\sigma(i)}.
$$
这里 $S_n$ 是 $\{1,\ldots,n\}$ 到自身的全部双射（排列），$I(\sigma)$ 是满足 $i<j$ 而 $\sigma(i)>\sigma(j)$ 的指标对数。导数矩阵的行列式 $\det DG(x)$ 称为 Jacobian 行列式（Jacobian determinant）。在 $\det DG(x)\ne0$ 时，其绝对值才给出此处使用的局部体积伸缩率。双射与逆映射见[可测函数（Measurable function）](Measurable-function.md)。

**注**：这里 Jacobian 必须取绝对值。[^1]

## 线性映射与平移

若 $G(x)=Ax+b$，其中 $A$ 可逆（存在矩阵 $A^{-1}$ 使 $AA^{-1}=A^{-1}A=I$，$I$ 为单位矩阵），则 $m_n(G(E))=|\det A|m_n(E)$。平移和正交变换（orthogonal transformation）保持 Lebesgue 测度；后者指 $x\mapsto Ax$ 且 $A^{\mathsf T}A=I$，其中 $A^{\mathsf T}$ 为转置矩阵。这样的变换保持欧氏内积，见[内积空间（Inner product space）](Inner-product-space.md)。各方向等比例放大 $r$ 倍使体积乘 $|r|^n$。[^1]

例。一维令 $y=x^2$、$x>0$，则
$$
\int_0^\infty f(y)\,dy=\int_0^\infty f(x^2)\,2x\,dx.
$$

**注**：若同时用整个实直线作为 $x$ 的范围，映射不再单射，每个正数被计算两次，原公式不能直接照用。

## 与推前测度的联系

在 $\Omega$ 上令 $d\lambda(x)=|\det DG(x)|dx$，即用非负密度定义[加权测度（Weighted measure）](Weighted-measure.md)。记 $G_*\lambda$ 为其[推前测度（Pushforward measure）](Pushforward-measure.md)，则它等于 $G(\Omega)$ 上的 Lebesgue 测度。也可将限制测度 $m_n|_\Omega$ 的推前密度写为
$$
\frac{d\bigl(G_*(m_n|_\Omega)\bigr)}{d(m_n|_{G(\Omega)})}(y)
=|\det DG^{-1}(y)|,\qquad y\in G(\Omega).
$$
这里 $m_n|_\Omega$ 是[限制测度（Restricted measure）](Restricted-measure.md)，分式 $d\alpha/d\beta$ 表示 [Radon–Nikodym 导数（Radon–Nikodym derivative）](Radon-Nikodym-derivative.md)；$DG^{-1}(y)$ 是逆映射 $G^{-1}$ 在 $y$ 的导数矩阵。证明的核心是先在线性映射和小矩形上比较体积，用导数作局部线性近似，再扩展到可测集及可测函数。完整证明见所引定理；本条不把这一局部近似当作已给出的完整证明。

## 相关词条

[推前测度（Pushforward measure）](Pushforward-measure.md) · [Lebesgue测度（Lebesgue measure）](Lebesgue-measure.md) · [极坐标积分（polar integration）](Polar-coordinates.md)

[返回测度论导航](../测度论导航.md)

## 参考文献

[^1]: Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Wiley, 1999. §2.6，定理2.44、推论2.46、定理2.47；后者印刷第74–76页（PDF第87–89页）。
