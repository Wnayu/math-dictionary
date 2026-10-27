---
title: "随机向量（Random vector）"
aliases: ["随机向量", "Random vector", "联合分布", "Joint distribution", "边缘分布", "Marginal distribution"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



随机向量在同一个结果上同时记录多个随机量。各坐标的分布不能单独确定它们如何共同变化。

## 定义

$X=(X_1,\ldots,X_d):\Omega\to\mathbb R^d$ 称随机向量，若它关于 $\mathcal F$ 与 $\mathcal B(\mathbb R^d)$ 可测；等价地，每个坐标 $X_j$ 都是[随机变量（Random variable）](Random-variable.md)。其联合分布（joint distribution）是 $P_X(B)=P(X\in B)$，联合分布函数为
$$
F_X(x_1,\ldots,x_d)=P(X_1\le x_1,\ldots,X_d\le x_d).
$$
第 $j$ 个边缘分布（marginal distribution）是 $P_{X_j}$，即把 $P_X$ 沿坐标投影推前所得的测度。[^1]

> [!proof]- 坐标可测性判据
> 向量可测时与连续坐标投影复合可知各坐标可测。反之，对矩形 $B_1\times\cdots\times B_d$，其逆像为 $\bigcap_j\{X_j\in B_j\}$，属于 $\mathcal F$。Borel 矩形生成 $\mathcal B(\mathbb R^d)$，应用[生成类的可测性判据（Measurability on a generating class）](Measurable-function.md)即得结论。

设 $(X,Y)$ 分别取值于 $\mathbb R^d,\mathbb R^k$，则 $P_{(X,Y)}(A\times B)=P(X\in A,Y\in B)$，边缘满足 $P_X(A)=P_{(X,Y)}(A\times\mathbb R^k)$、$P_Y(B)=P_{(X,Y)}(\mathbb R^d\times B)$。这是从联合分布沿坐标投影得到推前测度的具体公式。

## 联合密度与边缘密度

若联合分布有 Lebesgue 密度 $f\ge0$，且 $\int f=1$，则第一个边缘密度为
$$
f_1(x_1)=\int_{\mathbb R^{d-1}}f(x_1,x_2,\ldots,x_d)\,dx_2\cdots dx_d
$$
（可在 Lebesgue 零测集上重新定义）。这是[Tonelli 定理（Tonelli theorem）](Tonelli-theorem.md)的直接应用。联合分布有密度能推出边缘分布有密度，逆向不成立。

## 边缘分布与依赖关系

设 $U$ 在 $[0,1]$ 均匀分布。向量 $(U,U)$ 的两个边缘都均匀，但联合分布集中在对角线 $\{(u,u):0\le u\le1\}$；这条线二维 Lebesgue 测度为零，故联合分布没有二维密度。独立的 $(U,V)$ 则在单位正方形上有密度 $1$。同样的边缘可对应不同的联合分布。

各坐标[相互独立（Mutual independence）](Independence.md)当且仅当联合分布是边缘分布的乘积；有密度时等价于 $f(x)=\prod_j f_j(x_j)$ 几乎处处。二阶线性依赖由[协方差矩阵（Covariance matrix）](Covariance.md)描述；只有在联合高斯等附加结构下，零协方差才能推出独立。

## 线性投影确定分布

两个 $\mathbb R^d$ 值随机向量同分布，当且仅当对每个 $u\in\mathbb R^d$，实随机变量 $u^TX$ 与 $u^TY$ 同分布。这里 $u^Tx=\sum_j u_jx_j$ 是欧氏内积。其理由是这些投影给出相同的[特征函数（Characteristic function）](Characteristic-function.md) $E e^{iu^TX}$，而特征函数唯一确定分布。关于投影收敛的相应判据见[中心极限定理（Central limit theorem）](Central-limit-theorem.md)。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, Probability: Theory and Examples, Version 5, January 11, 2019. §§1.3、2.1及3.10；边缘密度与对角线例为本条据定义展开。
