---
title: "Lévy–Khintchine 公式（Lévy–Khintchine formula）"
aliases: ["Lévy–Khintchine公式", "Levy-Khintchine formula", "Lévy三元组", "Lévy triplet", "特征指数", "Characteristic exponent"]
type: "theorem"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



Lévy–Khintchine 公式用漂移、高斯协方差和跳跃强度刻画无限可分分布。漂移参数依赖截断约定，所以三元组必须与所用公式一起给出。

## 命题

$\mu$ 是 $\mathbb R^d$ 上[无限可分分布（Infinitely divisible distribution）](Infinitely-divisible-distribution.md)，当且仅当
$$
\widehat\mu(u)=e^{\psi(u)},\qquad
\psi(u)=ib^Tu-\frac12u^TAu+\int_{z\ne0}(e^{iu^Tz}-1-iu^Tz1_{\{|z|<1\}})\nu(dz),
$$
其中 $b\in\mathbb R^d$，$A$ 是实对称半正定矩阵，$\nu$ 为[Lévy 测度（Lévy measure）](Levy-measure.md)。固定这个截断约定后三元组 $(b,A,\nu)$ 唯一。$\psi$ 称特征指数，使用连续且 $\psi(0)=0$ 的对数，不是逐点取复对数主值。[^1]

本条采用 $\widehat\mu(u)=\int e^{iu^Tx}\mu(dx)$，故 Lévy 过程的特征函数为 $e^{t\psi(u)}$；有些文献改写为 $e^{-t\Psi(u)}$，此时 $\Psi=-\psi$。

## 公式为何收敛

小跳处 $|e^{iv}-1-iv|\le v^2/2$，故被积函数由 $|u|^2|z|^2/2$ 控制；大跳处 $|e^{iv}-1|\le2$，而 $\nu(|z|\ge1)<\infty$。因此积分绝对收敛，且 $\psi$ 在零点连续。高斯矩阵可以退化，例如纯 Poisson 过程的 $A=0$，无需正定。

> [!proof]- 充分性的截断证明
> 对 $\varepsilon\in(0,1)$，令 $b_\varepsilon=b-\int_{\varepsilon\le|z|<1}z\nu(dz)$。测度 $\nu$ 在 $|z|\ge\varepsilon$ 上有限，所以
> $$
> \psi_\varepsilon(u)=ib_\varepsilon^Tu-\tfrac12u^TAu+\int_{|z|\ge\varepsilon}(e^{iu^Tz}-1)\nu(dz)
> $$
> 是独立的常量、高斯变量与复合 Poisson 变量之和的特征指数。前述支配界给出 $\psi_\varepsilon\to\psi$ 以及极限在零点连续；[Lévy 连续性定理（Lévy continuity theorem）](Levy-continuity-theorem.md)保证 $e^\psi$ 为概率特征函数。对每个 $n$，同样处理 $(b/n,A/n,\nu/n)$ 可知 $e^{\psi/n}$ 也是概率特征函数，其 $n$ 次乘积为 $e^\psi$，故无限可分。必要性由 Lévy 过程实现及[Lévy–Itô 分解（Lévy–Itô decomposition）](Levy-Ito-decomposition.md)得到；三元组唯一性的完整论证见所引来源，本证明块只证明充分性。

## 截断改变与漂移

若用另一有界可测截断 $h(z)$，并在零点邻域等于 $z$，把补偿项写为 $iu^Th(z)$，则相同指数所需的漂移为
$$
b_h=b+\int\bigl(h(z)-z1_{\{|z|<1\}}\bigr)\nu(dz).
$$
差函数远离零点才可能非零且有界，故积分有限。这个等式通过比较两种指数直接得到；漂移数值的差异不意味着过程不同。

若 $\int_{|z|\ge1}|z|\nu(dz)<\infty$，则过程均值为 $EL_t=t(b+\int_{|z|\ge1}z\nu(dz))$。没有这个矩条件时不能对特征函数在零点形式求导来宣称均值存在。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: David Applebaum，*Lévy Processes and Stochastic Calculus*，第2版，Cambridge Studies in Advanced Mathematics 116，Cambridge University Press，2009，式 (1.12)、(2.26)；Theorem 1.2.14、Corollaries 2.4.20、2.4.21。
