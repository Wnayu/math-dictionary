---
title: "Lévy 过程的生成元（Generator of a Lévy process）"
aliases: ["Lévy生成元", "Generator of a Lévy process", "非局部生成元", "Nonlocal generator"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Lévy 生成元给出分布随短时间变化的速率。跳跃使它包含跨越不同空间位置的积分，而不只是局部微分算子。

## 生成元公式

设 $L$ 的三元组为 $(b,A,\nu)$，采用截断 $z1_{\{|z|<1\}}$，定义 $P_tf(x)=E f(x+L_t)$。作为 $C_0(\mathbb R^d)$ 上[Feller 半群（Feller semigroup）](Feller-semigroup.md)的[无穷小生成元（Infinitesimal generator）](Infinitesimal-generator.md)，它在 $f\in C_c^\infty(\mathbb R^d)$ 上满足
$$
\mathcal Af(x)=b^T\nabla f(x)+\frac12\sum_{i,j}A_{ij}\partial_i\partial_jf(x)
+\int_{z\ne0}\bigl[f(x+z)-f(x)-1_{\{|z|<1\}}z^T\nabla f(x)\bigr]\nu(dz).
$$
$C_c^\infty$ 表示无限次连续可微且支集紧的函数；$\nabla f$ 是梯度，$\partial_i\partial_jf$ 是二阶偏导。[^1]

## 积分为何有意义

在小跳区，Taylor 公式使括号内绝对值不超过 $\tfrac12\sup_y\|D^2f(y)\|\,|z|^2$；大跳区由 $2\|f\|_\infty$ 控制。两项分别由 Lévy 测度的小跳二阶条件和大跳质量有限保证可积。缺少线性补偿时，$\int_{|z|<1}|z|\nu(dz)$ 可能无穷，原来的积分会失去意义。

> [!proof]- 从 Itô 公式识别
> 对 $x+L_t$ 应用[带跳 Itô 公式（Itô formula with jumps）](Jump-Ito-formula.md)。由于 $f$ 及其导数有界，Brownian 和补偿跳跃积分满足所需矩条件，期望为零；大跳积分按 Campbell 公式取期望，得到 $P_tf(x)-f(x)=\int_0^tP_s(\mathcal Af)(x)ds$。上述支配界与连续性、无穷远消失性质保证 $\mathcal Af\in C_0$。Feller 半群的强连续性使 $t^{-1}(P_tf-f)\to\mathcal Af$ 在一致范数中成立，识别出生成元。

## 例

标准 Brownian 运动的生成元为 $\tfrac12\Delta$，其中 $\Delta=\sum_i\partial_i^2$。速率 $\lambda$、跳幅分布 $\rho$ 的复合 Poisson 过程则为 $\mathcal Af(x)=\lambda\int[f(x+z)-f(x)]\rho(dz)$；这里已把标准截断漂移与补偿合并。

## 特征指数与生成元

直接计算 $P_t(e^{iu^T\cdot})(x)=e^{iu^Tx}e^{t\psi(u)}$，形式上对应乘子 $\psi(u)$。但 $e^{iu^Tx}$ 一般不属于 $C_0$，所以不能把这句话误读成它必属于 $C_0$ 生成元的定义域；其严格作用应通过 Fourier 表示或扩展生成元说明。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum, Lévy Processes and Stochastic Calculus, 2nd ed., Cambridge Studies in Advanced Mathematics 116, Cambridge University Press, 2009. §3.3，定理3.3.3；本条用§4.4的Itô方法说明同一生成元公式。
