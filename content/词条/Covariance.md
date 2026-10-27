---
title: "方差与协方差（Variance and covariance）"
aliases: ["方差", "Variance", "协方差", "Covariance", "协方差矩阵", "Covariance matrix", "相关系数", "Correlation coefficient", "不相关", "Uncorrelated"]
type: "concept"
tags: ["probability"]
draft: false
publish: true
status: "needs-review"
verified: false
---



方差描述相对于均值的二次偏离；协方差描述两个变量的二阶线性共同变化。它们依赖可积性，不能仅凭形式展开定义。

## 定义

实随机变量 $X$ 可积时，定义 $\operatorname{Var}(X)=\mathbb E[(X-\mathbb EX)^2]\in[0,\infty]$。若 $X,Y\in L^2(P)$，定义
$$
\operatorname{Cov}(X,Y)=\mathbb E[(X-\mathbb EX)(Y-\mathbb EY)].
$$
此时协方差有限，且 $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb EX\mathbb EY$，$\operatorname{Var}(X)=\mathbb EX^2-(\mathbb EX)^2$。这里的[期望（Expectation）](Expectation.md)和[Lp 可积性（Lp integrability）](Lp-space.md)按相应词条解释。[^1]

复值变量约定 $\operatorname{Cov}(X,Y)=\mathbb E[(X-\mathbb EX)\overline{(Y-\mathbb EY)}]$，因此 $\operatorname{Var}(X)=\mathbb E|X-\mathbb EX|^2$；共轭位置与本库[内积（Inner product）](Inner-product-space.md)第一变量线性约定相容。

## 协方差矩阵与相关系数

若实随机向量 $X\in\mathbb R^d$ 各分量平方可积，$m=\mathbb EX$，协方差矩阵（covariance matrix）为 $\Sigma=\mathbb E[(X-m)(X-m)^T]$。它对称且半正定，即 $a^T\Sigma a\ge0$ 对所有 $a\in\mathbb R^d$ 成立，因为该量等于 $\operatorname{Var}(a^TX)$。

当两方差均严格正且有限时，相关系数（correlation coefficient）为 $\rho(X,Y)=\operatorname{Cov}(X,Y)/(\sqrt{\operatorname{Var}(X)}\sqrt{\operatorname{Var}(Y)})$，且 $|\rho|\le1$。由[Cauchy–Schwarz 不等式（Cauchy–Schwarz inequality）](Cauchy-Schwarz-inequality.md)知，等号当且仅当两个中心化变量在 $L^2$ 中线性相关。

## 独立与不相关

零协方差称不相关（uncorrelated）。独立且平方可积的变量不相关，反之一般不成立。令 $X$ 在 $[-1,1]$ 均匀，$Y=X^2$，则 $\mathbb EX=\mathbb EX^3=0$，故 $\operatorname{Cov}(X,Y)=0$；但 $Y$ 由 $X$ 完全决定，二者不独立。联合高斯向量中零协方差可推出独立，见[高斯过程（Gaussian process）](Gaussian-process.md)中的高斯向量判据。

## 方差分解

对 $X\in L^2(P)$ 和子 σ-代数 $\mathcal G$，定义条件方差（conditional variance）为 $\operatorname{Var}(X\mid\mathcal G)=\mathbb E[(X-\mathbb E[X\mid\mathcal G])^2\mid\mathcal G]$。则
$$
\operatorname{Var}(X)=\mathbb E\operatorname{Var}(X\mid\mathcal G)+\operatorname{Var}(\mathbb E[X\mid\mathcal G]).
$$

> [!proof]- 证明
> 令 $Y=\mathbb E[X\mid\mathcal G]$。分解 $X-\mathbb EX=(X-Y)+(Y-\mathbb EX)$。交叉项为零，因为 $\mathbb E[(X-Y)(Y-\mathbb EX)]=0$，这是[条件期望的正交投影性质（Orthogonal projection property of conditional expectation）](Conditional-expectation.md)。展开平方并取期望即得结论。

对平方可积 $X_1,\ldots,X_n$，同样展开可得 $\operatorname{Var}(\sum_jX_j)=\sum_j\operatorname{Var}(X_j)+2\sum_{i<j}\operatorname{Cov}(X_i,X_j)$。只有交叉项为零时才可简化为方差之和。

[概率论导航](../概率论导航.md)

## 参考文献

[^1]: Rick Durrett, *Probability: Theory and Examples*, Version 5, January 11, 2019，第 56 页；Example 2.1.14；Theorems 2.2.1、3.10.7；Exercise 4.1.7。
