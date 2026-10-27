---
title: "次协调子（Subordinator）"
aliases: ["次协调子", "Subordinator", "递增Lévy过程", "Laplace指数", "Laplace exponent"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



次协调子是样本路径非降的一维 Lévy 过程，可用作随机时钟。这里采用不带杀死、从零出发的版本。

## 定义及等价定义

次协调子 $S$ 是几乎所有路径非降的实值[Lévy 过程（Lévy process）](Levy-process.md)。等价地，其 Laplace 变换具有
$$
Ee^{-qS_t}=e^{-t\Phi(q)},\qquad
\Phi(q)=dq+\int_{(0,\infty)}(1-e^{-qz})\nu(dz),\quad q\ge0,
$$
其中 $d\ge0$，$\nu$ 集中在正半轴，且 $\int_0^\infty(1\wedge z)\nu(dz)<\infty$。$\Phi$ 称 Laplace 指数；这里用负号，与[特征指数（Characteristic exponent）](Levy-Khintchine-formula.md)的约定不同。[^1]

## 漂移与单调性

它没有高斯部分，且 $S_t=dt+\int_{(0,t]\times(0,\infty)}zN(ds,dz)$，该跳跃和在紧区间绝对收敛。$d$ 是去掉小跳补偿后的漂移；在本库标准截断三元组中，$b=d+\int_0^1z\nu(dz)$。

> [!proof]- 从参数构造递增过程
> 因为 $d$ 与所有跳幅非负，有限截断过程逐路径非降。小跳总和的期望为 $T\int_0^1z\nu(dz)<\infty$，大跳次数有限，故截断和收敛为非降有限值过程。独立平稳增量由 Poisson 随机测度给出；Laplace 泛函直接得到上述 $\Phi$。从单调 Lévy 过程反推参数条件的必要性使用[Lévy–Itô 分解（Lévy–Itô decomposition）](Levy-Ito-decomposition.md)，完整论证见来源。

## 例

速率 $\lambda$ 的 Poisson 过程有 $\Phi(q)=\lambda(1-e^{-q})$。对 $0<\alpha<1$，标准 $\alpha$-稳定次协调子由 $\Phi(q)=q^\alpha$ 指定，其 Lévy 测度为
$$
\nu(dz)=\frac{\alpha}{\Gamma(1-\alpha)}1_{\{z>0\}}z^{-1-\alpha}dz.
$$
其中 $\Gamma(a)=\int_0^\infty x^{a-1}e^{-x}dx$，$a>0$。该常数来自换元和分部积分：$\int_0^\infty(1-e^{-qz})z^{-1-\alpha}dz=q^\alpha\Gamma(1-\alpha)/\alpha$。

Gamma 次协调子可取 $\nu(dz)=c1_{\{z>0\}}e^{-\beta z}dz/z$，$c,\beta>0$，此时 $\Phi(q)=c\log(1+q/\beta)$。先对 $q$ 求导得到 $c/(\beta+q)$，再用 $\Phi(0)=0$ 积分即可核对。

## 随机时间变换

若 $L$ 与 $S$ 独立，过程 $Y_t=L_{S_t}$ 仍为 Lévy 过程。条件于时钟增量，可将 $L$ 的特征指数复合为
$$
\psi_Y(u)=d\psi_L(u)+\int_0^\infty(e^{s\psi_L(u)}-1)\nu_S(ds).
$$
独立性确保给定时间区间后还能使用 $L$ 的独立增量；任意依赖于 $L$ 的随机时钟不自动满足这一结论。此构造称 subordination（次协调），不是一般停时抽样的同义词。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，式 (1.24)、(1.27)；Theorem 1.3.15、Examples 1.3.18、1.3.22、Proposition 1.3.27。
